import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';

const root = new URL('../', import.meta.url).pathname;
const site = root + 'site/';
const html = fs.readFileSync(site + 'index.html', 'utf8');
const app = fs.readFileSync(site + 'app.js', 'utf8');
const boot = fs.readFileSync(site + 'boot.js', 'utf8');
const css = fs.readFileSync(site + 'styles.css', 'utf8');
const headers = fs.readFileSync(site + '_headers', 'utf8');
const worker = fs.readFileSync(root + 'src/index.js', 'utf8');
const wrangler = JSON.parse(fs.readFileSync(root + 'wrangler.jsonc', 'utf8'));

assert.match(html, /<script src="\/boot\.js\?v=1\.2\.1" defer><\/script>/);
assert.match(html, /<script src="\/app\.js\?v=1\.2\.1" defer><\/script>/);
assert.match(html, /<link rel="stylesheet" href="\/styles\.css\?v=1\.2\.1">/);
assert.match(html, /<link rel="icon" href="data:image\/svg\+xml,/);
assert.doesNotMatch(html, /<script(?![^>]*\bsrc=)[^>]*>/i);
assert.doesNotMatch(html, /<style(?:\s|>)/i);
assert.doesNotMatch(html, /\sstyle\s*=/i);

for (const rel of ['404.html','gbl/module-1/index.html','gbl/module-2/index.html','gbl/module-3/index.html','gbl/module-4/index.html','gbl/module-5/index.html','gbl/module-6/index.html','gbl/capstone/index.html']) {
  const text = fs.readFileSync(site + rel, 'utf8');
  assert.doesNotMatch(text, /<script(?![^>]*\bsrc=)[^>]*>/i, `${rel} has inline script`);
  assert.doesNotMatch(text, /<style(?:\s|>)/i, `${rel} has inline style block`);
  assert.doesNotMatch(text, /\sstyle\s*=/i, `${rel} has style attribute`);
}
assert.doesNotMatch(app, /\b(onclick|onchange|oninput|onsubmit)\s*=/i);
assert.doesNotMatch(boot, /\b(onclick|onload|onerror)\s*=/i);
assert.match(boot, /__LEXDEN_BOOT_MARK_OK__/);
assert.match(app, /__LEXDEN_BOOT_MARK_OK__/);
assert.doesNotMatch(app, /__LEXDEN_MARK_BOOT_OK__/);

for (const needle of ["script-src 'self'", "script-src-elem 'self'", "script-src-attr 'none'", "style-src 'self'", "style-src-elem 'self'", "style-src-attr 'none'", "frame-ancestors 'none'", "object-src 'none'"]) assert.match(headers, new RegExp(needle.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')));
assert.doesNotMatch(headers, /unsafe-inline/);
assert.equal(wrangler.assets.not_found_handling, '404-page');
assert.equal(wrangler.assets.directory, './site');
assert.deepEqual(wrangler.assets.run_worker_first, ['/health']);
assert.equal(fs.statSync(site + 'favicon.ico').isFile(), true);
assert.equal(fs.statSync(site + 'boot.js').isFile(), true);

const ids=['m1-foundation-audit','m2-gbp-optimization','m3-local-visibility','m4-lead-generation','m5-client-engagement','m6-growth-operator','capstone-local-growth-operator'];
for(const id of ids) assert.match(app,new RegExp(`['"]${id}['"]`));

const decl=app.indexOf('const packagedAttachments = rawFiles.map');
const use=app.indexOf('attachments: packagedAttachments.map');
assert.ok(decl>=0 && use>=0 && decl<use,'packagedAttachments must be declared before manifest use');
assert.match(app,/function currentAssignment\(\)/);
assert.match(app,/hasOwnProperty\.call\(A, ASSIGNMENT_ID\)/);
assert.match(app,/function findCarryValue\(email, assignmentId, key/);
assert.match(app,/function moveCurrentDraftToEmail/);
assert.match(app,/const MAX_ATTACHMENT_COUNT = 250/);
assert.match(app,/const MAX_CSV_BYTES = 5 \* 1024 \* 1024/);
assert.match(app,/const selections = Object.entries\(window.__LEXDEN_SELECTED_FILES \|\| {}\);/);
assert.match(app,/const count = selections.reduce/);
assert.match(app,/existingDestination/);
assert.match(app,/characters after a closing quote/);
assert.match(app,/parsed && typeof parsed==='object'/);
assert.match(app,/isValidStudentEmail/);
assert.match(app,/The saved draft has grown too large/);
assert.doesNotMatch(app,/readContainer|decryptContainer|encryptAdminPrivateKey|DecompressionStream/);
assert.match(app,/CSV contains an unclosed quoted field/);
assert.match(app,/website_url must be a valid HTTPS URL/);
assert.match(app,/scoreRaw/);
assert.match(app,/data-download-final/);
assert.match(app,/data-lock-final/);
const workerCsp = worker.match(/content-security-policy": "([^"]+)/)?.[1] || '';
const headerCsp = headers.match(/Content-Security-Policy: (.+)/)?.[1]?.trim() || '';
assert.equal(workerCsp, headerCsp, 'Worker and static-asset CSPs must stay identical');
assert.match(worker,/version: "1\.2\.1"/);
assert.match(worker,/assetsDirectory: "\.\/site"/);

const digest=crypto.createHash('sha256').update(fs.readFileSync(site + 'app.js')).digest('hex');
console.log('STATIC AUDIT PASS',digest.slice(0,16));
