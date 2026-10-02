import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { webcrypto } from 'node:crypto';

const root = new URL('../', import.meta.url).pathname;
const appSource = fs.readFileSync(root + 'site/app.js', 'utf8');

function makeElement(id = '') {
  const classes = new Set();
  if (id === 'loading' || id === 'gate' || id === 'workspace') classes.add('hidden');
  const listeners = new Map();
  return {
    id,
    classList: {
      toggle(name, yes) { yes ? classes.add(name) : classes.delete(name); },
      contains(name) { return classes.has(name); }
    },
    get className() { return [...classes].join(' '); },
    set className(v) { classes.clear(); String(v || '').split(/\s+/).filter(Boolean).forEach(x => classes.add(x)); },
    innerHTML: '', textContent: '', value: '', disabled: false, readOnly: false, style: {}, dataset: {}, files: [],
    addEventListener(type, fn) { listeners.set(type, fn); }, querySelector() { return null; }, querySelectorAll() { return []; }, matches() { return false; },
    scrollIntoView() {}, focus() {}, appendChild() {}, click() {}, reportValidity() { return true; },
    setAttribute() {}, getAttribute() { return null; }, dispatchEvent() {}
  };
}

function buildContext({ assignmentId, profiles = {}, submissions = {} }) {
  const elements = new Map([
    ['app', makeElement('app')], ['loading', makeElement('loading')], ['gate', makeElement('gate')], ['workspace', makeElement('workspace')]
  ]);
  const storage = new Map();
  const email = 'student@example.com';
  storage.set('lexden_bootstrap_identity_v2', JSON.stringify({ studentEmail: email, studentName: 'Test Student' }));
  storage.set('lexden_academy_assessment_v1', JSON.stringify({ schemaVersion: 2, profiles, submissions }));
  const document = {
    visibilityState: 'visible',
    body: { appendChild() {} },
    getElementById(key) { if (!elements.has(key)) elements.set(key, makeElement(key)); return elements.get(key); },
    querySelector() { return null; }, addEventListener() {}, createElement() { return makeElement(); }
  };
  const localStorage = {
    getItem(key) { return storage.has(key) ? storage.get(key) : null; },
    setItem(key, value) { storage.set(key, String(value)); },
    removeItem(key) { storage.delete(key); }
  };
  const sessionStorage = { getItem() { return null; }, setItem() {}, removeItem() {} };
  const window = {
    document, localStorage, sessionStorage, crypto: webcrypto, isSecureContext: true,
    addEventListener() {}, scrollTo() {}, URL, URLSearchParams
  };
  const debugSource = appSource.replace('const state = loadState();', 'const state = loadState(); window.__DEBUG_STATE = state;');
  const context = vm.createContext({ window, document, localStorage, sessionStorage, crypto: webcrypto, isSecureContext: true,
    URL, URLSearchParams, TextEncoder, TextDecoder, Blob, Response, CompressionStream,
    Uint8Array, Uint16Array, Uint32Array, Set, Map, Object, Array, String, Number, Boolean, Math, Date, JSON, RegExp, Error, Promise, console,
    setTimeout, clearTimeout, btoa, atob, location: { search: `?course=gbl&assignment=${assignmentId}` }
  });
  vm.runInContext(debugSource, context, { filename: 'site/app.js' });
  return { context, elements, storage };
}

const courseContext = buildContext({ assignmentId: 'm1-foundation-audit' }).context;
const A = courseContext.window.LEXDEN_COURSE.assignments;
const ids = Object.keys(A);
assert.equal(ids.length, 7, 'Expected exactly seven configured assignments.');

for (const [id, assignment] of Object.entries(A)) {
  assert.equal(assignment.id, id, `${id}: assignment id mismatch`);
  for (const p of assignment.prerequisites || []) assert.ok(A[p], `${id}: missing prerequisite ${p}`);
  if (assignment.next) assert.ok(A[assignment.next], `${id}: next points to missing assignment ${assignment.next}`);
  if (assignment.next) assert.ok((A[assignment.next].prerequisites || []).includes(id), `${id}: next/prerequisite relationship is inconsistent`);
}

function assertAcyclic(start) {
  const seen = new Set();
  let current = start;
  while (current) {
    assert.ok(A[current], `Broken next chain at ${current}`);
    assert.ok(!seen.has(current), `Cycle detected in next chain at ${current}`);
    seen.add(current);
    current = A[current].next;
  }
}
assertAcyclic(ids[0]);

function upstreamIds(start, seen = new Set()) {
  if (seen.has(start)) return seen;
  seen.add(start);
  for (const p of A[start].prerequisites || []) upstreamIds(p, seen);
  return seen;
}

for (const [id, assignment] of Object.entries(A)) {
  const upstream = upstreamIds(id);
  for (const rawKey of assignment.carryFrom || []) {
    const aliases = {
      targetCity: ['targetCity', 'businessCity'],
      targetNiche: ['targetNiche', 'businessNiche'],
      capstoneBusiness: ['capstoneBusiness', 'clientBusiness'],
      capstoneCity: ['capstoneCity', 'targetCity', 'businessCity'],
      capstoneNiche: ['capstoneNiche', 'targetNiche', 'businessNiche']
    };
    const candidateKeys = aliases[rawKey] || [rawKey];
    let presentSomewhere = false;
    for (const upstreamId of upstream) {
      const fields = (A[upstreamId].fields || []).flatMap(s => s.fields || []);
      if (fields.some(f => candidateKeys.includes(f.k))) { presentSomewhere = true; break; }
    }
    assert.ok(presentSomewhere, `${id}: carryFrom key ${rawKey} has no upstream source field`);
  }
}

function seeded(email, drafts, lockedIds = []) {
  const key = 'email:' + encodeURIComponent(email);
  return {
    [key]: Object.fromEntries(Object.entries(drafts).map(([id, draft]) => [id, draft]))
  };
}
function seededSubs(email, lockedIds) {
  const key = 'email:' + encodeURIComponent(email);
  return {
    [key]: Object.fromEntries(lockedIds.map(id => [id, { lockedAt: new Date().toISOString(), submissionId: id + '-test' }]))
  };
}

const email = 'student@example.com';
const m6 = buildContext({
  assignmentId: 'm6-growth-operator',
  profiles: seeded(email, {
    'm4-lead-generation': { businessCity: 'Lagos', businessNiche: 'Dentist', studentName: 'Test Student', studentEmail: email },
    'm5-client-engagement': { clientBusiness: 'Bright Smile Dental', studentName: 'Test Student', studentEmail: email }
  }),
  submissions: seededSubs(email, ['m5-client-engagement'])
});
assert.match(m6.elements.get('workspace').innerHTML, /value="Lagos"/i, 'm6 should recursively carry city from m4');
assert.match(m6.elements.get('workspace').innerHTML, /value="Dentist"/i, 'm6 should recursively carry niche from m4');
assert.match(m6.elements.get('workspace').innerHTML, /value="Bright Smile Dental"/i, 'm6 should carry client business from m5');

const cap = buildContext({
  assignmentId: 'capstone-local-growth-operator',
  profiles: seeded(email, {
    'm2-gbp-optimization': { businessWebsite: 'https://example.com', businessGBPUrl: 'https://www.google.com/maps', studentName: 'Test Student', studentEmail: email },
    'm4-lead-generation': { businessCity: 'Ibadan', businessNiche: 'Law Firm', studentName: 'Test Student', studentEmail: email },
    'm5-client-engagement': { clientBusiness: 'Example Legal', studentName: 'Test Student', studentEmail: email }
  }),
  submissions: seededSubs(email, ['m6-growth-operator'])
});
const capKey = 'email:' + encodeURIComponent(email);
const capDraft = cap.context.window.__DEBUG_STATE.profiles[capKey]['capstone-local-growth-operator'];
assert.equal(capDraft.businessWebsite, 'https://example.com', 'capstone should find upstream website in its saved draft');
assert.equal(capDraft.businessGBPUrl, 'https://www.google.com/maps', 'capstone should find upstream GBP URL in its saved draft');
assert.equal(capDraft.clientBusiness, 'Example Legal', 'capstone should find upstream client business in its saved draft');

console.log('DEEP AUDIT PASS: assignment graph, carry-forward recursion, aliases, and capstone upstream propagation');
