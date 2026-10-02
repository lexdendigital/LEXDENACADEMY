import assert from 'node:assert/strict';
import worker from '../src/index.js';

const health = await worker.fetch(new Request('https://example.test/health'), {
  ASSETS: { fetch: async () => new Response('unused', { status: 500 }) }
});
assert.equal(health.status, 200);
assert.equal(health.headers.get('content-security-policy')?.includes("script-src 'self'"), true);
assert.equal(health.headers.get('x-content-type-options'), 'nosniff');
assert.equal(health.headers.get('x-frame-options'), 'DENY');
assert.equal((await health.json()).version, '1.1.3');

const asset = new Response('<!doctype html>', {
  status: 200,
  headers: { 'content-type': 'text/html' }
});
const served = await worker.fetch(new Request('https://example.test/'), {
  ASSETS: { fetch: async () => asset }
});
assert.equal(served.status, 200);
assert.equal(served.headers.get('content-security-policy')?.includes("style-src 'self'"), true);
assert.equal(served.headers.get('referrer-policy'), 'no-referrer');
console.log('WORKER SMOKE PASS');
