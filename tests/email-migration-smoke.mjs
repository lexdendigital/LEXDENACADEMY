import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { webcrypto } from 'node:crypto';

const root = new URL('../', import.meta.url).pathname;
const base = fs.readFileSync(root + 'site/app.js', 'utf8');
const appSource = base.replace(/\n  function buildReportLines\(/, "\n  window.__LEXDEN_TEST_EXPORT = { buildSubmission, moveCurrentDraftToEmail, fileBytesMap, flushSaveState, state };\n\n  function buildReportLines(");

const oldEmail='old@example.com'; const newEmail='new@example.com';
const oldKey='email:'+encodeURIComponent(oldEmail);
const newKey='email:'+encodeURIComponent(newEmail);
const stored=JSON.stringify({schemaVersion:2,profiles:{[oldKey]:{'m1-foundation-audit':{studentName:'Student',studentEmail:oldEmail,businessName:'Carry Me'}}},submissions:{} });

const elements=new Map();
const el=(id,value='')=>({id,value,innerHTML:'',textContent:'',disabled:false,readOnly:false,style:{},classList:{toggle(){}},dataset:{},files:[],addEventListener(){},querySelectorAll(){return[]},querySelector(){return null},matches(){return false},appendChild(){},click(){},focus(){},scrollIntoView(){},setAttribute(){},getAttribute(){return null},reportValidity(){return true}});
for(const id of ['app','loading','gate','workspace']) elements.set(id,el(id));
elements.set('assessmentForm',el('assessmentForm'));
elements.set('studentEmail',el('studentEmail',newEmail));
const map=new Map([['lexden_bootstrap_identity_v2',JSON.stringify({studentEmail:oldEmail,studentName:'Student'})],['lexden_academy_assessment_v1',stored]]);
const localStorage={getItem(k){return map.has(k)?map.get(k):null},setItem(k,v){map.set(k,String(v))},removeItem(k){map.delete(k)}};
const sessionStorage={getItem(){return null},setItem(){},removeItem(){}};
const document={visibilityState:'visible',body:{appendChild(){}},getElementById(k){if(!elements.has(k))elements.set(k,el(k));return elements.get(k)},querySelector(){return null},addEventListener(){},createElement(){return el('created')}};
const window={document,localStorage,sessionStorage,crypto:webcrypto,isSecureContext:true,addEventListener(){},scrollTo(){}};
const ctx=vm.createContext({window,document,localStorage,sessionStorage,crypto:webcrypto,isSecureContext:true,URL,URLSearchParams,TextEncoder,TextDecoder,Blob,Response,CompressionStream,Uint8Array,Uint16Array,Uint32Array,Set,Map,Object,Array,String,Number,Boolean,Math,Date,JSON,RegExp,Error,Promise,console,setTimeout,clearTimeout,btoa,atob,location:{search:'?course=gbl&assignment=m1-foundation-audit'}});
vm.runInContext(appSource,ctx,{filename:'site/app.js'});

const result=await ctx.window.__LEXDEN_TEST_EXPORT.buildSubmission(ctx.window.LEXDEN_COURSE.assignments['m1-foundation-audit'],oldEmail);
assert.equal(result.draft.studentEmail,newEmail);
assert.equal(ctx.window.__LEXDEN_TEST_EXPORT.state.profiles[oldKey],undefined,'old in-memory profile bucket should be removed after final email correction');
assert.equal(ctx.window.__LEXDEN_TEST_EXPORT.state.profiles[newKey]['m1-foundation-audit'].studentEmail,newEmail,'in-memory draft must move to newly valid visible email');
ctx.window.__LEXDEN_TEST_EXPORT.flushSaveState();
const after=JSON.parse(map.get('lexden_academy_assessment_v1'));
assert.equal(after.profiles[oldKey],undefined,'old profile bucket should be removed after final email correction');
assert.equal(after.profiles[newKey]['m1-foundation-audit'].studentEmail,newEmail,'draft must move to newly valid visible email');
assert.equal(JSON.parse(map.get('lexden_bootstrap_identity_v2')).studentEmail,newEmail,'bootstrap identity must follow valid final email');

console.log('EMAIL MIGRATION PASS: final-build path synchronizes a newly valid visible email and preserves the current draft');


// Destination drafts are merged instead of discarded.
{
  const state = ctx.window.__LEXDEN_TEST_EXPORT.state;
  state.profiles[newKey]['m2-gbp-optimization'] = { preservedField:'keep-me' };
  state.profiles[oldKey] = { 'm2-gbp-optimization': { studentEmail: oldEmail, changedField:'current-value' } };
  const moved = ctx.window.__LEXDEN_TEST_EXPORT.moveCurrentDraftToEmail(
    ctx.window.LEXDEN_COURSE.assignments['m2-gbp-optimization'],
    oldEmail,
    newEmail,
    state.profiles[oldKey]['m2-gbp-optimization']
  );
  assert.equal(moved.preservedField,'keep-me');
  assert.equal(moved.changedField,'current-value');
}

// Oversized attachments are rejected before file.arrayBuffer() is touched.
{
  let readCalled=false;
  ctx.window.__LEXDEN_SELECTED_FILES={supportingFiles:[{name:'huge.bin',size:96*1024*1024,type:'application/octet-stream',arrayBuffer(){readCalled=true;return Promise.resolve(new Uint8Array(1).buffer);}}]};
  await assert.rejects(() => ctx.window.__LEXDEN_TEST_EXPORT.fileBytesMap(), /95 MiB/);
  assert.equal(readCalled,false,'oversized attachments must be rejected before reading their bytes');
}
