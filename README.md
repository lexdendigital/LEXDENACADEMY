# LEXDEN ACADEMY Assessment Workspace

A static, mobile-first assessment application for LEXDEN ACADEMY courses.

## Current course

Google Business & Local Leads Masterclass (course id: `gbl`)

Routes:

- `/gbl/module-1/`
- `/gbl/module-2/`
- `/gbl/module-3/`
- `/gbl/module-4/`
- `/gbl/module-5/`
- `/gbl/module-6/`
- `/gbl/capstone/`

Each route can also be opened directly with `?course=gbl&assignment=<assignment-id>`.

## Deployment

Recommended host: Cloudflare Pages connected to this GitHub repository.

No build framework is required. Build command: blank. Output directory: `/` (the repository root).

## Security

Do not add teacher private keys, private key packages, passphrases, real student submissions, or private teacher tools to this repository.

The public JavaScript contains only the RSA public key and the browser-side encryption logic. The teacher private key package belongs on the teacher's private device only.
