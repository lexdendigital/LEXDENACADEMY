import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { webcrypto } from 'node:crypto';

const root = new URL('../', import.meta.url).pathname;
const appSource = fs.readFileSync(root + 'site/app.js', 'utf8');

function makeElement(id = '') {
  const classes = new Set(id === 'loading' || id === 'gate' || id === 'workspace' ? ['hidden'] : []);
  return { id, classList:{toggle(name,yes){yes?classes.add(name):classes.delete(name);},contains(name){return classes.has(name);}}, innerHTML:'', textContent:'', value:'', disabled:false, readOnly:false, style:{}, dataset:{}, files:[], addEventListener(){}, querySelector(){return null}, querySelectorAll(){return []}, matches(){return false}, scrollIntoView(){}, focus(){}, appendChild(){}, click(){}, reportValidity(){return true}, setAttribute(){}, getAttribute(){return null} };
}

const elements = new Map(['app','loading','gate','workspace'].map(id => [id, makeElement(id)]));
const email = 'student@example.com';
const oldDraft = { studentName:'Legacy Student', studentEmail:email, businessName:'Legacy Business', businessCity:'Lagos', businessNiche:'Consulting' };
const storage = new Map([
  ['lexden_bootstrap_identity_v2', JSON.stringify({studentEmail:email,studentName:'Legacy Student'})],
  ['lexden_academy_assessment_v1', JSON.stringify({
    profiles:{[email]:{'m1-foundation-audit':oldDraft}},
    submissions:{[email]:{'m1-foundation-audit':{lockedAt:new Date().toISOString(),submissionId:'legacy-lock'}}}
  })]
]);
const document = { visibilityState:'visible', hidden:false, body:{appendChild(){}}, getElementById(id){if(!elements.has(id))elements.set(id,makeElement(id));return elements.get(id)}, querySelector(){return null}, addEventListener(){}, createElement(){return makeElement()} };
const localStorage={getItem(k){return storage.get(k)??null},setItem(k,v){storage.set(k,String(v))},removeItem(k){storage.delete(k)}};
const sessionStorage={getItem(){return null},setItem(){},removeItem(){}};
const window={document,localStorage,sessionStorage,crypto:webcrypto,isSecureContext:true,addEventListener(){},scrollTo(){}};
const context=vm.createContext({window,document,localStorage,sessionStorage,crypto:webcrypto,isSecureContext:true,URLSearchParams,TextEncoder,TextDecoder,Blob,Response,CompressionStream,Uint8Array,Uint16Array,Uint32Array,Set,Map,Object,Array,String,Number,Boolean,Math,Date,JSON,RegExp,Error,Promise,console,setTimeout,clearTimeout,btoa,atob,location:{search:'?course=gbl&assignment=m2-gbp-optimization'}});
vm.runInContext(appSource,context,{filename:'site/app.js'});
assert.equal(elements.get('loading').classList.contains('hidden'),true);
assert.equal(elements.get('workspace').classList.contains('hidden'),false);
assert.match(elements.get('workspace').innerHTML,/Legacy Business/);

console.log('LEGACY STORAGE PASS');
