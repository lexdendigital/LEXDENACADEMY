# LEXDEN ACADEMY v1.1.2

## Fixed
- Restored the missing outer IIFE closure that caused `Unexpected end of input` and an endless loading screen.
- Added CSP meta fallback and secure submission-environment checks.
- Added exact package paths for attachment integrity verification.
- Updated the teacher decoder to independently verify v3 answer hashes, attachment hashes and the submission commit after decryption.
- Strengthened Module 4 CSV validation: exactly 100 rows, unique ranks 1-100, valid HTTPS evidence/profile URLs, required business/evidence/score-reason fields.
- Retained final submission lock, personalized defense checkpoints, evidence packaging, cryptographic binding and context-only telemetry.
