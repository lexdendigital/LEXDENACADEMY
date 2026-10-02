# LEXDEN ACADEMY Assessment Workspace v1.2.0

Cloudflare Workers static-site assessment workspace for the Google Business & Local Leads Masterclass.

## Release focus

This release is a reliability/security hardening pass based on an independent source review of the full v1.1.2 codebase and a follow-up defect review of the v1.1.3 patch.

The public deployable files live in `./site`. Worker source, tests and documentation stay outside the public asset directory.

Key runtime properties:

- No inline JavaScript or inline CSS dependency.
- Strict same-origin CSP compatible with `script-src 'self'` and `style-src 'self'`.
- Independent client boot watchdog so a broken/missing application asset cannot leave an infinite spinner indefinitely.
- Sequential assignment prerequisites with recursive carry-forward through the full prerequisite chain.
- Draft persistence with localStorage first, sessionStorage fallback, size guard and visible storage warnings.
- Email identity changes are only adopted after the new email is syntactically valid, preventing partial-email profile fragmentation while typing.
- Final submission is prepared first; the student must download the encrypted `.lexden` file before the assignment can be marked complete and locked.
- Public bundle contains only the ZIP creator and submission-encryption primitives needed by students; administrative decryption/parsing helpers are not exposed in the student application.
- CSV validation rejects malformed quoting, empty/non-integer scores, invalid HTTPS URLs and asynchronous stale-file races.

## Important privacy/security model

Student drafts are stored in browser Web Storage. They are not server-side student records, but Web Storage is not an encrypted or authenticated vault. A same-origin script that executes in the page could read or change it. The strict CSP is therefore a major defensive layer, not a substitute for server-side authentication.

The `.lexden` submission is encrypted to the course public key in the browser. Its public metadata includes non-secret routing/integrity fields; student name and email remain inside the encrypted manifest.
