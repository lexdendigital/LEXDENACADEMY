import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { webcrypto } from 'node:crypto';

const root = new URL('../', import.meta.url).pathname;
const appSource = fs.readFileSync(root + 'site/app.js', 'utf8');

const assignments = [
  ['m1-foundation-audit', 'Foundation Audit Challenge', []],
  ['m2-gbp-optimization', 'GBP Optimization Challenge', ['m1-foundation-audit']],
  ['m3-local-visibility', 'Local Visibility Challenge', ['m2-gbp-optimization']],
  ['m4-lead-generation', 'Lead Generation Challenge', ['m3-local-visibility']],
  ['m5-client-engagement', 'Client Engagement Challenge', ['m4-lead-generation']],
  ['m6-growth-operator', 'Local Growth Operator Challenge', ['m5-client-engagement']],
  ['capstone-local-growth-operator', 'Local Growth Operator Capstone', ['m6-growth-operator']],
];

function makeElement(id = '') {
  const classes = new Set();
  if (id === 'loading' || id === 'gate' || id === 'workspace') classes.add('hidden');
  return {
    id,
    classList: {
      toggle(name, yes) { yes ? classes.add(name) : classes.delete(name); },
      contains(name) { return classes.has(name); }
    },
    get className() { return [...classes].join(' '); },
    set className(v) { classes.clear(); String(v || '').split(/\s+/).filter(Boolean).forEach(x => classes.add(x)); },
    innerHTML: '', textContent: '', value: '', disabled: false, readOnly: false, style: {}, dataset: {}, files: [],
    addEventListener() {}, querySelector() { return null; }, querySelectorAll() { return []; }, matches() { return false; },
    scrollIntoView() {}, focus() {}, appendChild() {}, click() {}, reportValidity() { return true; },
    setAttribute() {}, getAttribute() { return null; }
  };
}

for (const [id, expectedTitle, prereqs] of assignments) {
  const elements = new Map([
    ['app', makeElement('app')], ['loading', makeElement('loading')], ['gate', makeElement('gate')], ['workspace', makeElement('workspace')]
  ]);
  const storage = new Map();
  const email = 'student@example.com';
  storage.set('lexden_bootstrap_identity_v2', JSON.stringify({ studentEmail: email, studentName: 'Test Student' }));
  if (prereqs.length) {
    const key = 'email:' + encodeURIComponent(email);
    const submissions = { [key]: {} };
    for (const p of prereqs) submissions[key][p] = { lockedAt: new Date().toISOString() };
    storage.set('lexden_academy_assessment_v1', JSON.stringify({ profiles: {}, submissions }));
  }

  const document = {
    visibilityState: 'visible',
    body: { appendChild() {} },
    getElementById(key) { if (!elements.has(key)) elements.set(key, makeElement(key)); return elements.get(key); },
    querySelector() { return null; }, addEventListener() {}, createElement() { return makeElement(); }
  };
  const localStorage = { getItem(key) { return storage.has(key) ? storage.get(key) : null; }, setItem(key, value) { storage.set(key, String(value)); }, removeItem(key) { storage.delete(key); } };
  const sessionStorage = { getItem() { return null; }, setItem() {}, removeItem() {} };
  const window = { document, localStorage, sessionStorage, crypto: webcrypto, isSecureContext: true, addEventListener() {}, scrollTo() {} };
  const context = vm.createContext({ window, document, localStorage, sessionStorage, crypto: webcrypto, isSecureContext: true, URLSearchParams, TextEncoder, TextDecoder, Blob, Response,
    CompressionStream, Uint8Array, Uint16Array, Uint32Array, Set, Map, Object, Array, String, Number, Boolean, Math, Date, JSON, RegExp, Error, Promise, console, setTimeout, clearTimeout, btoa, atob,
    location: { search: `?course=gbl&assignment=${id}` }
  });
  vm.runInContext(appSource, context, { filename: 'site/app.js' });
  const workspace = elements.get('workspace');
  const loading = elements.get('loading');
  assert.equal(loading.classList.contains('hidden'), true, `${id}: loading must be hidden`);
  assert.equal(workspace.classList.contains('hidden'), false, `${id}: workspace must be visible`);
  assert.match(workspace.innerHTML, new RegExp(expectedTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  assert.equal(typeof context.window.__LEXDEN_MARK_BOOT_OK__, 'undefined');
  assert.equal(typeof context.window.__LEXDEN_BOOT_MARK_OK__, 'undefined');
}

// Corrupted local draft indexes must not be able to crash assignment rendering.
{
  const elements = new Map([
    ['app', makeElement('app')], ['loading', makeElement('loading')], ['gate', makeElement('gate')], ['workspace', makeElement('workspace')]
  ]);
  const storage = new Map();
  const email = 'student@example.com';
  const profileKey = 'email:' + encodeURIComponent(email);
  storage.set('lexden_bootstrap_identity_v2', JSON.stringify({ studentEmail: email, studentName: 'Test Student' }));
  storage.set('lexden_academy_assessment_v1', JSON.stringify({
    profiles: { [profileKey]: { 'm1-foundation-audit': { defenseVariant: -1 } } }, submissions: {}
  }));
  const document = {
    visibilityState: 'visible',
    body: { appendChild() {} },
    getElementById(key) { if (!elements.has(key)) elements.set(key, makeElement(key)); return elements.get(key); },
    querySelector() { return null; }, addEventListener() {}, createElement() { return makeElement(); }
  };
  const localStorage = { getItem(key) { return storage.has(key) ? storage.get(key) : null; }, setItem(key, value) { storage.set(key, String(value)); }, removeItem(key) { storage.delete(key); } };
  const sessionStorage = { getItem() { return null; }, setItem() {}, removeItem() {} };
  const window = { document, localStorage, sessionStorage, crypto: webcrypto, isSecureContext: true, addEventListener() {}, scrollTo() {} };
  const context = vm.createContext({ window, document, localStorage, sessionStorage, crypto: webcrypto, isSecureContext: true, URLSearchParams, TextEncoder, TextDecoder, Blob, Response,
    CompressionStream, Uint8Array, Uint16Array, Uint32Array, Set, Map, Object, Array, String, Number, Boolean, Math, Date, JSON, RegExp, Error, Promise, console, setTimeout, clearTimeout, btoa, atob,
    location: { search: '?course=gbl&assignment=m1-foundation-audit' }
  });
  vm.runInContext(appSource, context, { filename: 'site/app.js' });
  assert.match(elements.get('workspace').innerHTML, /INDIVIDUAL DEFENSE CHECKPOINT/);
}

// A finalized form must be disabled at the DOM level, not only by pointer-events.
{
  const elements = new Map([
    ['app', makeElement('app')], ['loading', makeElement('loading')], ['gate', makeElement('gate')], ['workspace', makeElement('workspace')]
  ]);
  const storage = new Map();
  const email = 'student@example.com';
  const key = 'email:' + encodeURIComponent(email);
  storage.set('lexden_bootstrap_identity_v2', JSON.stringify({ studentEmail: email, studentName: 'Test Student' }));
  storage.set('lexden_academy_assessment_v1', JSON.stringify({ profiles: {}, submissions: { [key]: { 'm1-foundation-audit': { lockedAt: new Date().toISOString(), submissionId: 'test-lock' } } } }));
  const document = {
    visibilityState: 'visible',
    body: { appendChild() {} },
    getElementById(id) { if (!elements.has(id)) elements.set(id, makeElement(id)); return elements.get(id); },
    querySelector() { return null; }, addEventListener() {}, createElement() { return makeElement(); }
  };
  const localStorage = { getItem(k) { return storage.get(k) ?? null; }, setItem(k,v){storage.set(k,String(v));}, removeItem(k){storage.delete(k);} };
  const sessionStorage = { getItem(){return null;}, setItem(){}, removeItem(){} };
  const window = { document, localStorage, sessionStorage, crypto: webcrypto, isSecureContext: true, addEventListener(){}, scrollTo(){} };
  const context = vm.createContext({ window, document, localStorage, sessionStorage, crypto:webcrypto, isSecureContext:true, URLSearchParams, TextEncoder, TextDecoder, Blob, Response,
    CompressionStream, Uint8Array, Uint16Array, Uint32Array, Set, Map, Object, Array, String, Number, Boolean, Math, Date, JSON, RegExp, Error, Promise, console, setTimeout, clearTimeout, btoa, atob,
    location:{search:'?course=gbl&assignment=m1-foundation-audit'}
  });
  vm.runInContext(appSource, context, {filename:'site/app.js'});
  const html=elements.get('workspace').innerHTML;
  for (const tag of [...html.matchAll(/<(input|select|textarea)[^>]*>/gi)]) {
    const markup=tag[0];
    assert.match(markup,/disabled|readonly/i,'finalized controls must be non-editable');
  }
}


console.log('RUNTIME SMOKE PASS:', assignments.length, 'assignments');


// Prototype-property assignment values must resolve as invalid links, not as inherited object properties.
{
  const elements = new Map([
    ['app', makeElement('app')], ['loading', makeElement('loading')], ['gate', makeElement('gate')], ['workspace', makeElement('workspace')]
  ]);
  const storage = new Map();
  const document = { visibilityState:'visible', body:{appendChild(){}}, getElementById(id){if(!elements.has(id))elements.set(id,makeElement(id));return elements.get(id)}, querySelector(){return null}, addEventListener(){}, createElement(){return makeElement()} };
  const localStorage={getItem(){return null},setItem(){},removeItem(){}};
  const sessionStorage={getItem(){return null},setItem(){},removeItem(){}};
  const window={document,localStorage,sessionStorage,crypto:webcrypto,isSecureContext:true,addEventListener(){},scrollTo(){}};
  const context=vm.createContext({window,document,localStorage,sessionStorage,crypto:webcrypto,isSecureContext:true,URLSearchParams,TextEncoder,TextDecoder,Blob,Response,CompressionStream,Uint8Array,Uint16Array,Uint32Array,Set,Map,Object,Array,String,Number,Boolean,Math,Date,JSON,RegExp,Error,Promise,console,setTimeout,clearTimeout,btoa,atob,location:{search:'?course=gbl&assignment=toString'}});
  vm.runInContext(appSource,context,{filename:'site/app.js'});
  assert.match(elements.get('gate').innerHTML,/No assignment was specified/);
  assert.equal(elements.get('workspace').classList.contains('hidden'),true);
}
