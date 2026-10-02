# LEXDEN ACADEMY v1.2.1 - Cloudflare Worker Deployment

## Deploy

From the project root:

```bash
npx wrangler deploy
```

Wrangler is configured to publish only `./site` as the static asset directory. Worker source, tests and project documentation are therefore not part of the public asset tree. The `/health` path is explicitly included in `assets.run_worker_first` so Cloudflare's navigation asset-serving optimization does not bypass the Worker health endpoint.

## Required production checks

1. Open `/health` and confirm HTTP 200 JSON with `ok: true`, version `1.2.1`, and `assetsDirectory: "./site"`.
2. Open the Module 1 Classroom link in Chrome desktop and confirm the spinner disappears and the assignment renders.
3. Open each module/capstone redirect path and follow its fallback link if automatic navigation is disabled.
4. Open a deliberate unknown path and confirm the custom 404 page is returned.
5. In DevTools → Network → the document response, verify a CSP containing `script-src 'self'` and no `unsafe-inline` requirement.
6. In DevTools → Network, confirm `/boot.js`, `/app.js`, `/styles.css`, and `/favicon.ico` return successful responses.
7. Complete a test draft, reload it, and verify the draft returns.
8. Test Module 4 with a valid 100-row CSV and an invalid CSV; invalid data must not remain packageable.
9. Complete one full finalization flow and verify the encrypted `.lexden` file is downloaded before the site allows the assignment to lock.
10. Attach the `.lexden` file to the corresponding Google Classroom assignment using the normal teacher workflow.

## Why the Worker also sets security headers

Cloudflare documents that `_headers` rules apply to static asset responses but do not apply to responses generated directly by Worker code. The Worker therefore applies the same security policy to `/health` and any Worker-generated fallback/error response.

## Caching

The release intentionally sends `Cache-Control: no-store` for predictable assessment updates and to reduce the chance of a student browser retaining an obsolete runtime during a course release. This is a reliability choice rather than a requirement for CSP.

## Important deployment note

Deploy the project root with `npx wrangler deploy`. Do not upload the `site` folder as a nested public folder in a separate Pages project. The Worker now tolerates `/site/...` aliases, but the canonical asset directory remains `./site`.
