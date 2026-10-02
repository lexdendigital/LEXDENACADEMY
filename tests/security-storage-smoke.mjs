import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { webcrypto } from 'node:crypto';

const root = new URL('../', import.meta.url).pathname;
const appSource = fs.readFileSync(root + 'site/app.js', 'utf8');

function makeElement(id = '') {
  const classes = new Set(id === 'loading' || id === 'gate' || id === 'workspace' ? ['hidden'] : []);
  return { id, classList:{toggle(name,yes){yes?classes.add(name):classes.delete(name)},contains(name){return classes.has(name)}}, className:'', innerHTML:'', textContent:'', value:'', disabled:false, readOnly:false, style:{}, dataset:{}, files:[], addEventListener(){}, querySelector(){return null}, querySelectorAll(){return []}, matches(){return false}, scrollIntoView(){}, focus(){}, appendChild(){}, click(){}, reportValidity(){return true}, setAttribute(){}, getAttribute(){return null} };
}

function run({storedState, sessionState, identityState, localMode='normal', sessionMode='normal', assignmentId='m1-foundation-audit', debug=false}) {
  const els = new Map(['app','loading','gate','workspace'].map(id => [id, makeElement(id)]));
  const local = new Map(); const session = new Map();
  if (storedState !== undefined) local.set('lexden_academy_assessment_v1', storedState);
  if (sessionState !== undefined) session.set('lexden_academy_assessment_v1', sessionState);
  local.set('lexden_bootstrap_identity_v2', identityState ?? JSON.stringify({studentEmail:'student@example.com',studentName:'Security Test'}));
  const ops=(map,mode)=>({
    getItem(k){ if(mode==='throw') throw new Error('storage unavailable'); return map.has(k)?map.get(k):null; },
    setItem(k,v){ if(mode==='throw') throw new Error('storage unavailable'); if(mode==='quota') throw new DOMException('quota','QuotaExceededError'); map.set(k,String(v)); },
    removeItem(k){ if(mode==='throw') throw new Error('storage unavailable'); map.delete(k); }
  });
  const localStorage=ops(local,localMode), sessionStorage=ops(session,sessionMode);
  const document={visibilityState:'visible',body:{appendChild(){}},getElementById(k){if(!els.has(k))els.set(k,makeElement(k));return els.get(k)},querySelector(){return null},addEventListener(){},createElement(){return makeElement()}};
  const window={document,localStorage,sessionStorage,crypto:webcrypto,isSecureContext:true,addEventListener(){},scrollTo(){}};
  const source=debug?appSource.replace('const state = loadState();','const state = loadState(); window.__DEBUG_STATE=state;'):appSource;
  const ctx=vm.createContext({window,document,localStorage,sessionStorage,crypto:webcrypto,isSecureContext:true,URL,URLSearchParams,TextEncoder,TextDecoder,Blob,Response,CompressionStream,Uint8Array,Uint16Array,Uint32Array,Set,Map,Object,Array,String,Number,Boolean,Math,Date,JSON,RegExp,Error,Promise,console,setTimeout,clearTimeout,btoa,atob,location:{search:`?course=gbl&assignment=${assignmentId}`},DOMException});
  vm.runInContext(source,ctx,{filename:'site/app.js'});
  return {ctx,els,local,session};
}

// XSS regression: user-controlled stored values must be encoded before insertion into innerHTML.
const xssState=JSON.stringify({profiles:{'email:student%40example.com':{'m1-foundation-audit':{studentName:'<img src=x onerror=alert(1)>',studentEmail:'student@example.com',businessName:'"><script>alert(1)</script>'}}},submissions:{}});
const xss=run({storedState:xssState});
assert.doesNotMatch(xss.els.get('workspace').innerHTML,/<img\b/i,'User data must never create an img element');
assert.doesNotMatch(xss.els.get('workspace').innerHTML,/<script\b/i,'User data must never create a script element');
assert.match(xss.els.get('workspace').innerHTML,/&lt;img/i,'Dangerous user data should be HTML escaped');

// Corrupt local state must not crash startup.
const corrupt=run({storedState:'{not-json'});
assert.equal(corrupt.els.get('loading').classList.contains('hidden'),true);
assert.equal(corrupt.els.get('workspace').classList.contains('hidden'),false);

// Identity storage containing JSON primitives/null must also be harmless.
for (const badIdentity of ['null', '42', '"not-an-object"', '[]']) {
  const malformed=run({storedState:JSON.stringify({profiles:{},submissions:{}}),identityState:badIdentity});
  assert.equal(malformed.els.get('loading').classList.contains('hidden'),true);
  assert.equal(malformed.els.get('workspace').classList.contains('hidden'),false);
}

// When local storage is unavailable, a pre-existing session copy must still boot.
const sessionState=JSON.stringify({schemaVersion:2,profiles:{},submissions:{}});
const sess=run({storedState:undefined,sessionState,localMode:'throw',sessionMode:'normal',debug:true});
assert.equal(sess.els.get('loading').classList.contains('hidden'),true);
assert.equal(sess.els.get('workspace').classList.contains('hidden'),false);
assert.equal(sess.ctx.window.__DEBUG_STATE.schemaVersion,2);

// Regression for the original empty-local-storage fallback bug: an empty local key must not block a non-empty session copy.
const sessWhenLocalEmpty=run({storedState:'',sessionState,localMode:'normal',sessionMode:'normal',debug:true});
assert.equal(sessWhenLocalEmpty.ctx.window.__DEBUG_STATE.schemaVersion,2);

// A storage quota error must never be converted into a fatal startup exception.
const quota=run({storedState:JSON.stringify({schemaVersion:2,profiles:{},submissions:{}}),localMode:'quota',sessionMode:'normal',debug:true});
assert.equal(quota.els.get('loading').classList.contains('hidden'),true);
assert.equal(quota.els.get('workspace').classList.contains('hidden'),false);

console.log('SECURITY/STORAGE PASS: XSS escaping, corrupt-state startup recovery, and storage fallback paths');
