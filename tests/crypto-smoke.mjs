import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { webcrypto } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';

const root = new URL('../', import.meta.url).pathname;
const appPath = path.join(root, 'site/app.js');
let source = fs.readFileSync(appPath, 'utf8');

const { publicKey, privateKey } = await webcrypto.subtle.generateKey(
  { name: 'RSA-OAEP', modulusLength: 2048, publicExponent: new Uint8Array([1,0,1]), hash: 'SHA-256' },
  true,
  ['encrypt', 'decrypt', 'wrapKey', 'unwrapKey']
);
const publicJwk = await webcrypto.subtle.exportKey('jwk', publicKey);
const privateJwk = await webcrypto.subtle.exportKey('jwk', privateKey);
source = source.replace(/window\.LEXDEN_PUBLIC_KEY = \{[\s\S]*?\};/, `window.LEXDEN_PUBLIC_KEY = ${JSON.stringify(publicJwk)};`);

const elements = new Map();
const makeEl = (id='') => ({
  id, classList:{toggle(){},contains(){return false;}}, className:'', innerHTML:'', textContent:'', value:'', disabled:false, readOnly:false, style:{},dataset:{},files:[],
  addEventListener(){},querySelector(){return null},querySelectorAll(){return[]},matches(){return false},scrollIntoView(){},focus(){},appendChild(){},click(){},reportValidity(){return true},setAttribute(){},getAttribute(){return null}
});
for (const id of ['app','loading','gate','workspace']) elements.set(id,makeEl(id));
const storage = new Map([['lexden_bootstrap_identity_v2', JSON.stringify({studentEmail:'student@example.com',studentName:'Crypto Test'})]]);
const document = { visibilityState:'visible', body:{appendChild(){}}, getElementById(k){ if(!elements.has(k)) elements.set(k,makeEl(k)); return elements.get(k); }, querySelector(){return null}, addEventListener(){}, createElement(){return makeEl();} };
const localStorage={getItem(k){return storage.get(k)||null},setItem(k,v){storage.set(k,String(v))},removeItem(k){storage.delete(k)}};
const sessionStorage={getItem(){return null},setItem(){},removeItem(){}};
const window={document,localStorage,sessionStorage,crypto:webcrypto,isSecureContext:true,addEventListener(){},scrollTo(){},URL,URLSearchParams};
const context=vm.createContext({window,document,localStorage,sessionStorage,crypto:webcrypto,isSecureContext:true,URL,URLSearchParams,TextEncoder,TextDecoder,Blob,Response,CompressionStream,Uint8Array,Uint16Array,Uint32Array,Set,Map,Object,Array,String,Number,Boolean,Math,Date,JSON,RegExp,Error,Promise,console,setTimeout,clearTimeout,btoa,atob,location:{search:'?course=gbl&assignment=m1-foundation-audit'}});
vm.runInContext(source, context, {filename:appPath});

const zip = await context.window.LEXDEN_ZIP.createZip([
  { name:'submission.json', data:new TextEncoder().encode('{"hello":"lexden"}') },
  { name:'evidence/readme.txt', data:new TextEncoder().encode('evidence') }
]);
assert.ok(zip.length > 100, 'ZIP should contain local, central and EOCD records');
assert.equal(String.fromCharCode(...zip.subarray(0,4)), 'PK\x03\x04', 'ZIP must start with local file header');

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'lexden-zip-'));
const zipPath = path.join(tmp, 'submission.zip');
fs.writeFileSync(zipPath, zip);
execFileSync('unzip', ['-t', zipPath], {stdio:'pipe'});

const metadata={courseId:'gbl',assignmentId:'m1-foundation-audit',assignmentTitle:'Foundation Audit Challenge',module:'Module 1',submissionId:'submission-test-123',createdAt:'2026-10-02T00:00:00.000Z',studentEmail:'student@example.com',studentName:'Crypto Test'};
const container=await context.window.LEXDENCrypto.encryptSubmission({zipBytes:zip,metadata});
assert.equal(new TextDecoder().decode(container.subarray(0,8)), 'LEXDEN02');
const headerLength=new DataView(container.buffer, container.byteOffset+8, 4).getUint32(0, true);
const headerStart=12, headerEnd=headerStart+headerLength;
const header=JSON.parse(new TextDecoder().decode(container.subarray(headerStart,headerEnd)));
assert.equal(header.format,'LEXDEN02');
assert.equal(header.version,2);
assert.equal(header.zipSize,zip.length);
assert.equal(header.chunks.length,1);

const privateCryptoKey=await webcrypto.subtle.importKey('jwk',privateJwk,{name:'RSA-OAEP',hash:'SHA-256'},false,['unwrapKey']);
const wrapped=Uint8Array.from(Buffer.from(header.wrappedAesKey.replace(/-/g,'+').replace(/_/g,'/') + '='.repeat((4-header.wrappedAesKey.length%4)%4),'base64'));
const aesKey=await webcrypto.subtle.unwrapKey('raw',wrapped,privateCryptoKey,{name:'RSA-OAEP'}, {name:'AES-GCM',length:256},false,['decrypt']);
const te=new TextEncoder();
let offset=headerEnd; const plain=[];
for(let i=0;i<header.chunks.length;i++){
  const c=header.chunks[i];
  const cipher=container.subarray(offset, offset+c.cipherSize);
  offset += c.cipherSize;
  const iv=Uint8Array.from(Buffer.from(c.iv.replace(/-/g,'+').replace(/_/g,'/') + '='.repeat((4-c.iv.length%4)%4),'base64'));
  const aad=te.encode([header.courseId,header.assignmentId,header.submissionId,header.studentFingerprint,header.zipSha256,i].join('|'));
  const p=new Uint8Array(await webcrypto.subtle.decrypt({name:'AES-GCM',iv,additionalData:aad},aesKey,cipher));
  assert.equal(p.length,c.plainSize);
  plain.push(p);
}
const recovered=new Uint8Array(plain.reduce((n,x)=>n+x.length,0)); let po=0; for(const p of plain){recovered.set(p,po);po+=p.length;}
assert.deepEqual([...recovered],[...zip], 'Encrypted container must decrypt back to exact ZIP bytes');

const tampered=container.slice();
tampered[headerEnd] ^= 1;
let tamperRejected=false;
try {
  const c=header.chunks[0];
  const iv=Uint8Array.from(Buffer.from(c.iv.replace(/-/g,'+').replace(/_/g,'/') + '='.repeat((4-c.iv.length%4)%4),'base64'));
  const aad=te.encode([header.courseId,header.assignmentId,header.submissionId,header.studentFingerprint,header.zipSha256,0].join('|'));
  await webcrypto.subtle.decrypt({name:'AES-GCM',iv,additionalData:aad},aesKey,tampered.subarray(headerEnd,headerEnd+c.cipherSize));
} catch { tamperRejected=true; }
assert.equal(tamperRejected,true,'AES-GCM must reject tampered ciphertext');

fs.rmSync(tmp,{recursive:true,force:true});
console.log('CRYPTO/ZIP PASS: ZIP integrity, RSA-OAEP wrapping, AES-GCM decryption, AAD binding, and tamper rejection');
