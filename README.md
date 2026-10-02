# LEXDEN ACADEMY Assessment Workspace v1.1.2

Static, mobile-first assessment application for the Google Business & Local Leads Masterclass.

The student site is intentionally local-first:
- no student answers are sent to a server;
- drafts are stored in the student's browser;
- final submissions are encrypted in the browser;
- the private teacher decryption key is not part of this repository.

Deploy this repository to Cloudflare Workers using `wrangler.jsonc`.

Production Worker name: `lexdenacademy-assessments`.
Health check: `/health`.
