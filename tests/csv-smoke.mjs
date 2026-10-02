import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';

const root = new URL('../', import.meta.url).pathname;
const source = fs.readFileSync(root + 'site/app.js', 'utf8');
const start = source.indexOf('  function parseCsv(text) {');
const end = source.indexOf('  function makeCsvTemplate() {', start);
assert.ok(start >= 0 && end > start, 'CSV functions must be present');
const funcs = source.slice(start, end);
const { parseCsv, validateProspectCsv } = vm.runInNewContext(`(() => { ${funcs}; return {parseCsv, validateProspectCsv}; })()`, { URL, String, Number, Set, Object, Array, Error, RegExp, Boolean });

const headers = ['prospect_id','business_name','city','niche','profile_url','website_url','primary_category','observed_issue','evidence_url','score','rank','score_reason','outreach_status','notes'];
const rows = [headers.join(',')];
for (let i=1;i<=100;i++) {
  rows.push([`P${String(i).padStart(3,'0')}`,`Biz ${i}`,'Lagos','Dentist','https://example.com/profile/'+i,'https://example.com/'+i,'Dentist','','https://example.com/evidence/'+i,'80',String(i),'Reason','Not contacted',''].join(','));
}
const valid = validateProspectCsv(rows.join('\n'));
assert.equal(valid.records.length,100);
assert.equal(valid.records[99].rank,'100');

assert.throws(() => validateProspectCsv(valid.records.map(() => []).join('\n')), /header row/i);
const unclosed = 'a,b\n"broken,field\n';
assert.throws(() => parseCsv(unclosed), /unclosed quoted field/i);
const quoteInjection = 'a,b\nhello"world,x\n';
assert.throws(() => parseCsv(quoteInjection), /quote inside an unquoted field/i);
assert.throws(() => parseCsv('a,b\n"ok"oops,x\n'), /characters after a closing quote/i);

const emptyScoreRows = [...rows];
emptyScoreRows[1] = emptyScoreRows[1].replace(',80,1,', ',,1,');
assert.throws(() => validateProspectCsv(emptyScoreRows.join('\n')), /score must be an integer/i);

const badWebsiteRows = [...rows];
badWebsiteRows[1] = badWebsiteRows[1].replace('https://example.com/profile/1,https://example.com/1,', 'https://example.com/profile/1,http://example.com/1,');
assert.throws(() => validateProspectCsv(badWebsiteRows.join('\n')), /website_url must be a valid HTTPS URL when provided/i);

const duplicateHeaders = [...rows];
duplicateHeaders[0] = headers.join(',') + ',rank';
assert.throws(() => validateProspectCsv(duplicateHeaders.join('\n')), /duplicate column names/i);

console.log('CSV PASS: 100-row validation, strict quoting, integer scores, HTTPS website validation, duplicate-header detection');
