import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';

const root = new URL('../', import.meta.url).pathname;
const html = fs.readFileSync(root + 'index.html', 'utf8');
const app = fs.readFileSync(root + 'app.js', 'utf8');
const css = fs.readFileSync(root + 'styles.css', 'utf8');
const headers = fs.readFileSync(root + '_headers', 'utf8');
const worker = fs.readFileSync(root + 'src/index.js', 'utf8');
const wrangler = JSON.parse(fs.readFileSync(root + 'wrangler.jsonc', 'utf8'));

assert.match(html, /<script src="\/app\.js" defer><\/script>/);
assert.match(html, /<link rel="stylesheet" href="\/styles\.css">/);
assert.match(html, /<link rel="icon" href="\/favicon\.ico"/);
assert.doesNotMatch(html, /<script(?![^>]*\bsrc=)[^>]*>/i);
assert.doesNotMatch(html, /<style(?:\s|>)/i);
assert.doesNotMatch(html, /\sstyle\s*=/i);

for (const rel of ['404.html','gbl/module-1/index.html','gbl/module-2/index.html','gbl/module-3/index.html','gbl/module-4/index.html','gbl/module-5/index.html','gbl/module-6/index.html','gbl/capstone/index.html']) {
  const text = fs.readFileSync(root + rel, 'utf8');
  assert.doesNotMatch(text, /<script(?![^>]*\bsrc=)[^>]*>/i, `${rel} has inline script`);
  assert.doesNotMatch(text, /<style(?:\s|>)/i, `${rel} has inline style block`);
  assert.doesNotMatch(text, /\sstyle\s*=/i, `${rel} has style attribute`);
}

assert.match(headers, /script-src 'self'/);
assert.doesNotMatch(headers, /script-src[^\n]*unsafe-inline/);
assert.match(headers, /style-src 'self'/);
assert.doesNotMatch(headers, /style-src[^\n]*unsafe-inline/);
assert.match(headers, /frame-ancestors 'none'/);
assert.match(headers, /script-src-attr 'none'/);
assert.match(headers, /style-src-attr 'none'/);

assert.equal(wrangler.assets.not_found_handling, '404-page');
assert.equal(wrangler.assets.directory, '.');
assert.equal(fs.statSync(root + 'favicon.ico').isFile(), true);

for (const id of ['m1-foundation-audit','m2-gbp-optimization','m3-local-visibility','m4-lead-generation','m5-client-engagement','m6-growth-operator','capstone-local-growth-operator']) {
  assert.match(app, new RegExp(`['"]${id}['"]`));
}

const decl = app.indexOf('const packagedAttachments = rawFiles.map');
const use = app.indexOf('attachments: packagedAttachments.map');
assert.ok(decl >= 0 && use >= 0 && decl < use, 'packagedAttachments must be declared before manifest use');
assert.match(app, /let activeEmail = emailKey\(email\)/);
assert.match(app, /collectForm\(assignment, activeEmail\)/);
assert.match(app, /if \(!saveState\(\)\)/);
assert.match(app, /CSV contains an unclosed quoted field/);

const digest = crypto.createHash('sha256').update(fs.readFileSync(root + 'app.js')).digest('hex');
console.log('STATIC AUDIT PASS', digest.slice(0, 16));
