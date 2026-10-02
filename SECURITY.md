# LEXDEN ACADEMY Assessment Security

## Public-site controls

1. Sequential assignment gating is based on the same Classroom email key on the same device.
2. Finalized assignments are locked in browser storage.
3. A student-specific defense checkpoint is generated for each assignment session.
4. Supporting evidence is packaged with the assignment rather than being uploaded to the public site.
5. Final submissions use AES-GCM authenticated encryption with a per-submission AES key wrapped by the teacher's RSA public key.
6. SHA-256 hashes are included for the answer record and each attachment.
7. A submission commit hash binds the assignment metadata, answer hash, attachment hashes and interaction summary.
8. A 95 MiB raw-file reliability guard sits below the 100 MiB final encrypted-package limit.
9. Context-only interaction telemetry records visibility changes, focus losses and paste-event counts without capturing clipboard contents.
10. The application does not use third-party scripts or analytics.
11. The public release uses a strict same-origin CSP: `script-src 'self'` and `style-src 'self'`, with inline script/event-handler/style attributes disabled.

## What this does not prove

No static webpage can prove identity or prove that a student did not use another person, another device, outside notes, or unapproved assistance. Browser storage can also be cleared.

The anti-malpractice system is therefore evidence-oriented rather than a claim of perfect exam surveillance.

## Deliberately not implemented

The site does not block:
- copy/paste
- tab switching
- browser developer tools
- screenshots
- ordinary navigation

Those mechanisms are easy to bypass and can create false positives for students using phones, accessibility tools or legitimate research.

Instead, the teacher receives a stronger package of evidence:
- the student's submitted answers;
- required evidence files;
- personalized defense response;
- timestamps;
- interaction context;
- cryptographic hashes;
- prerequisite/submission state.

## Key custody

The private RSA key package must remain off GitHub and off the public website. Keep it on the teacher-controlled device only.

A new public key may be rotated later, but old private key packages must be retained if previously issued submissions still need to be decrypted.

## Deployment boundary

Cloudflare Workers Static Assets is configured with the repository root (`.`) as its asset directory. `.assetsignore` excludes `src/`, `tests/`, Wrangler configuration, documentation, ZIP archives and teacher/private key artifacts from the public asset collection.
