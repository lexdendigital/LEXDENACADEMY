
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { chromium } from 'playwright';

const root = new URL('../', import.meta.url).pathname;
const html = fs.readFileSync(root + 'index.html', 'utf8');

assert.match(html, /LEXDEN ACADEMY Assessment Workspace/i);
assert.match(html, /INDIVIDUAL DEFENSE CHECKPOINT/i);
assert.match(html, /LEXDEN-CLIENT-BOOT-TIMEOUT/i);
assert.match(fs.readFileSync(root + 'wrangler.jsonc','utf8'), /"assets"/);

const server = createServer((req,res)=>{
  const url = new URL(req.url,'http://127.0.0.1');
  let p = url.pathname;
  if (p === '/') p='/index.html';
  const fp=root+p;
  if (!fs.existsSync(fp)) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, {'content-type': fp.endsWith('.html')?'text/html':'text/plain'});
  fs.createReadStream(fp).pipe(res);
});

await new Promise(resolve=>server.listen(8799,'127.0.0.1',resolve));

const browser = await chromium.launch({headless:true});
const context = await browser.newContext();
await context.addInitScript(() => { window.LEXDEN_TEST_ASSIGNMENT='m1-foundation-audit'; });
const page = await context.newPage();
const errors = [];
page.on('pageerror', e => errors.push(String(e)));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });

await page.goto('http://127.0.0.1:8799/?course=gbl&assignment=m1-foundation-audit', {waitUntil:'domcontentloaded'});
await page.waitForTimeout(300);
assert.equal(await page.locator('#loading').evaluate(el => el.classList.contains('hidden')), true, 'loading screen did not finish');
assert.equal(await page.locator('#workspace').evaluate(el => el.classList.contains('hidden')), false, 'workspace remained hidden');
assert.match(await page.locator('#workspace h1').innerText(), /Foundation Audit Challenge/);
assert.equal(await page.locator('#verificationResponse').count(), 1);
assert.equal(errors.length, 0, 'browser errors: ' + errors.join(' | '));

await page.goto('http://127.0.0.1:8799/?course=gbl&assignment=m2-gbp-optimization', {waitUntil:'domcontentloaded'});
await page.waitForTimeout(200);
assert.match(await page.locator('#gate').innerText(), /Start with your Google Classroom email|Complete the previous assignment first/);

await browser.close();
server.close();
console.log('SMOKE PASS');
