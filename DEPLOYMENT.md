# LEXDEN ACADEMY v1.1.3 - Cloudflare Worker Deployment

## Critical fixes in v1.1.3
The public assessment page no longer relies on inline JavaScript or inline CSS. The application runtime is `/app.js`, the stylesheet is `/styles.css`, and the favicon is a real `/favicon.ico` asset. This makes the page compatible with a strict `script-src 'self'` / `style-src 'self'` CSP and removes the CSP-related infinite loading failure.

The final-submission path also fixes an attachment-packaging temporal-dead-zone error and keeps the active Classroom email synchronized with the visible form value so drafts are not written under a stale blank profile.

## Worker configuration
- Worker name: `lexdenacademy-assessments`
- Static asset directory: repository root (`.`)
- Worker entry: `src/index.js`
- Diagnostic endpoint: `/health`

## Cloudflare Workers Builds
Connect GitHub repository `lexdendigital/LEXDENACADEMY`, production branch `main`. Leave the Build command blank. Set the Deploy command to `npx wrangler deploy`. Set the Preview command to `npx wrangler preview`.

Wrangler uses the checked-in `wrangler.jsonc` as the configuration source of truth.

## Verification order
1. Open `/health`; verify it returns JSON with `ok:true` and version `1.1.3`.
2. Open `/?course=gbl&assignment=m1-foundation-audit`; the spinner must disappear and Module 1 must render.
3. In Chrome DevTools, confirm the document response has one effective CSP that permits the external same-origin `/app.js` and `/styles.css` assets without `unsafe-inline`.
4. Confirm `/favicon.ico` returns HTTP 200.
5. Do not deploy teacher-only tools or private key material.

## Google Classroom module links
Replace `<WORKER_HOST>` with your actual workers.dev hostname:

- `<WORKER_HOST>/?course=gbl&assignment=m1-foundation-audit`
- `<WORKER_HOST>/?course=gbl&assignment=m2-gbp-optimization`
- `<WORKER_HOST>/?course=gbl&assignment=m3-local-visibility`
- `<WORKER_HOST>/?course=gbl&assignment=m4-lead-generation`
- `<WORKER_HOST>/?course=gbl&assignment=m5-client-engagement`
- `<WORKER_HOST>/?course=gbl&assignment=m6-growth-operator`
- `<WORKER_HOST>/?course=gbl&assignment=capstone-local-growth-operator`
