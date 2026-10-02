# LEXDEN ACADEMY v1.1.3 QA Report

## Scope
This release was audited from the packaged source with static inspection, Node runtime smoke tests, and ZIP/crypto round-trip tests. The original Chrome symptoms were traced to the public delivery path rather than treated as an assignment-data problem.

## Defects fixed
- Removed all inline `<script>` blocks from the public HTML. The assessment runtime now loads from `/app.js`.
- Removed all inline `<style>` blocks and static `style="..."` attributes from the public HTML/runtime templates. CSS now loads from `/styles.css`.
- Kept the CSP strict (`script-src 'self'; style-src 'self'`) so the release does not depend on `unsafe-inline`.
- Removed inline JavaScript redirects from module/capstone landing pages.
- Added a real `/favicon.ico` and linked it from the main and 404 pages.
- Switched Workers Static Assets missing-path handling to `404-page`, so unknown paths can use the real `404.html` instead of receiving the SPA index.
- Added the same security headers in `src/index.js`, because `_headers` do not govern Worker-generated responses such as `/health`.
- Fixed `packagedAttachments` being referenced before its `const` declaration during final submission creation.
- Fixed stale Classroom-email state in `bindWorkspace`, which could move a draft to a new email key and then continue saving later edits under the old blank profile.
- Hardened `loadState()` against malformed/null profile/submission containers.
- Added an explicit error for CSV files with an unclosed quoted field.
- Reduced the student finalization browser requirement to the APIs actually used by that path (`CompressionStream`, secure context, Web Crypto).
- Added rollback around the final local-storage lock so a storage failure cannot leave the UI claiming a finalized submission.

## Automated results
- `node --check app.js` — PASS.
- `node --check src/index.js` — PASS.
- `node tests/static-audit.mjs` — PASS.
- `node tests/runtime-smoke.mjs` — PASS: all 7 assignments initialize without runtime exceptions in the test DOM.
- ZIP create/extract round-trip — PASS.
- AES-GCM/RSA-OAEP submission container round-trip — PASS.
- Final release archive `unzip -t` — PASS.

## Browser-test limitation
A real Chromium session was attempted in the execution environment, but the container's browser policy blocked navigation to the local HTTP test server (`ERR_BLOCKED_BY_ADMINISTRATOR`). Therefore this report does **not** claim a live-browser PASS. The source-level and Node-based checks above are reproducible; the final live verification must be done after deployment in Chrome.

## Deployment verification
1. `/health` must return HTTP 200 JSON with version `1.1.3`.
2. Module 1 must hide the loading card and render the workspace.
3. `/favicon.ico` must return HTTP 200.
4. The document response must expose the intended strict CSP. If Cloudflare has another CSP source (for example a transform/security rule) adding a second policy, inspect and remove the conflicting policy rather than reintroducing `unsafe-inline`.
5. Module links and the capstone should render/redirect normally; unknown paths should use `404.html`.
