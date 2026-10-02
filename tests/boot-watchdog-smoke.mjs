import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';

const root = new URL('../', import.meta.url).pathname;
const source = fs.readFileSync(root + 'site/boot.js', 'utf8');

let timerId = 0;
const timers = new Map();
const context = vm.createContext({
  window: {},
  document: {
    getElementById(id) {
      if (id === 'loading') return { classList: { add() {} } };
      if (id === 'gate') return { classList: { remove() {}, add() {} }, innerHTML: '' };
      return null;
    }
  },
  setTimeout(fn) { const id = ++timerId; timers.set(id, fn); return id; },
  clearTimeout(id) { timers.delete(id); }
});

vm.runInContext(source, context, { filename: 'site/boot.js' });
assert.equal(typeof context.window.__LEXDEN_BOOT_MARK_OK__, 'function');
assert.equal(timers.size, 1, 'watchdog timer should be armed');
context.window.__LEXDEN_BOOT_MARK_OK__();
assert.equal(context.window.__LEXDEN_BOOT_OK__, true);
assert.equal(timers.size, 0, 'successful boot must cancel watchdog');

console.log('BOOT WATCHDOG PASS');
