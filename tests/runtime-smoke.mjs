import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { webcrypto } from 'node:crypto';

const root = new URL('../', import.meta.url).pathname;
const appSource = fs.readFileSync(root + 'app.js', 'utf8');

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
    innerHTML: '',
    textContent: '',
    value: '',
    disabled: false,
    readOnly: false,
    style: {},
    dataset: {},
    files: [],
    addEventListener() {},
    querySelector() { return null; },
    querySelectorAll() { return []; },
    matches() { return false; },
    scrollIntoView() {},
    focus() {},
    appendChild() {},
    click() {}
  };
}

for (const [id, expectedTitle, prereqs] of assignments) {
  const elements = new Map([
    ['app', makeElement('app')],
    ['loading', makeElement('loading')],
    ['gate', makeElement('gate')],
    ['workspace', makeElement('workspace')]
  ]);
  const storage = new Map();
  const email = 'student@example.com';
  storage.set('lexden_bootstrap_identity', JSON.stringify({ studentEmail: email, studentName: 'Test Student' }));
  if (prereqs.length) {
    const submissions = { [email]: {} };
    for (const p of prereqs) submissions[email][p] = { lockedAt: new Date().toISOString() };
    storage.set('lexden_academy_assessment_v1', JSON.stringify({ profiles: {}, submissions }));
  }

  const document = {
    visibilityState: 'visible',
    body: { appendChild() {} },
    getElementById(key) {
      if (!elements.has(key)) elements.set(key, makeElement(key));
      return elements.get(key);
    },
    querySelector() { return null; },
    addEventListener() {},
    createElement() { return makeElement(); }
  };

  const localStorage = {
    getItem(key) { return storage.has(key) ? storage.get(key) : null; },
    setItem(key, value) { storage.set(key, String(value)); },
    removeItem(key) { storage.delete(key); }
  };
  const window = {
    document,
    localStorage,
    crypto: webcrypto,
    isSecureContext: true,
    addEventListener() {},
    scrollTo() {}
  };
  const context = vm.createContext({
    window,
    document,
    localStorage,
    crypto: webcrypto,
    isSecureContext: true,
    URLSearchParams,
    TextEncoder,
    TextDecoder,
    Blob,
    Response,
    CompressionStream,
    DecompressionStream,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Set,
    Map,
    Object,
    Array,
    String,
    Number,
    Boolean,
    Math,
    Date,
    JSON,
    RegExp,
    Error,
    Promise,
    console,
    setTimeout,
    clearTimeout,
    btoa,
    atob,
    location: { search: `?course=gbl&assignment=${id}` }
  });
  window.location = context.location;
  vm.runInContext(appSource, context, { filename: 'app.js' });

  const workspace = elements.get('workspace');
  const loading = elements.get('loading');
  assert.equal(loading.classList.contains('hidden'), true, `${id}: loading must be hidden`);
  assert.equal(workspace.classList.contains('hidden'), false, `${id}: workspace must be visible`);
  assert.match(workspace.innerHTML, new RegExp(expectedTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  assert.equal(typeof context.window.__LEXDEN_MARK_BOOT_OK__, 'function');
}

console.log('RUNTIME SMOKE PASS:', assignments.length, 'assignments');
