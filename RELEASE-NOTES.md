# LEXDEN ACADEMY v1.2.0

## Independent audit + hardening release

This release follows a second, independent review of the original v1.1.2 implementation and the v1.1.3 patch.

### Correctness and reliability

- Added a standalone same-origin client boot watchdog (`site/boot.js`) so failed application startup surfaces a diagnostic instead of an endless loading spinner.
- Moved all deployable assets into `./site` and aligned Wrangler configuration with the intended public asset boundary.
- Preserved strict CSP compatibility without `unsafe-inline`.
- Added missing favicon handling.
- Fixed recursive prerequisite carry-forward so data can travel through the entire assignment chain instead of only from the immediately previous assignment.
- Fixed valid-email migration so typing partial addresses does not create a series of orphaned local profiles or overwrite the bootstrap identity with an invalid partial email; final packaging also synchronizes a newly valid visible email even when no input event previously fired.
- Added localStorage → sessionStorage fallback with canonical cleanup and a visible warning.
- Added a draft-size limit and save-failure visibility to prevent silent loss when Web Storage quota is exceeded.
- Added pagehide/visibility save flushing and a short debounce on normal typing to reduce synchronous storage work.
- Changed finalization into two stages: prepare package, download package, then explicitly lock.
- Added native browser validity checks to finalization and ARIA progress/status semantics.
- Added CSV BOM handling, strict malformed-quote detection, post-quote syntax checks, required numeric value checks, optional website URL validation, and protection against stale asynchronous file-selection results.
- Hardened ZIP creation against duplicate names, oversized names, excessive entries and classic ZIP limit overflows; public attachments are also capped at 250 files.
- Removed unused student-side ZIP extraction and administrative decryption/key-wrapping routines from the public bundle.
- Added Worker-generated-response error handling and explicit security headers.
- Hardened identity parsing against malformed JSON primitives and tightened browser-storage error paths.
- Added human-readable fallback links to module redirect pages.

- Added an integration-safe boot watchdog callback contract and regression test so a healthy page cannot later be mistaken for a startup failure.

- Disabled all finalized form controls at the DOM level instead of relying only on pointer-events, preventing keyboard changes after a submission is locked.
- Hardened corrupted defense-prompt state so invalid variant indexes cannot crash assignment rendering.
- Hardened generated-file downloads so object URLs are revoked on both success and failure paths, with a longer cleanup window for large downloads.

- Added regression coverage for boot watchdog cancellation, corrupted defense state, and finalized DOM controls.

- Added a legacy-storage migration regression test so existing drafts and finalized prerequisite state survive the v1.1.2 → v1.2.0 storage normalization.

- Added pre-read attachment count/size guards to prevent oversized selections from being loaded into memory before rejection.
- Changed email-profile migration to merge with an existing destination draft instead of overwriting it.

- Hardened assignment-link lookup so prototype-property query values are treated as invalid assignment IDs instead of being executed/rendered as inherited objects.

## Current browser/documentation review

The audit was cross-checked against current Cloudflare Workers Static Assets documentation and current MDN/OWASP guidance. Cloudflare documents that `_headers` governs static asset responses but not Worker-generated responses, and that `404-page` serves a custom 404 with a 404 status. MDN documents `script-src-attr` / `style-src-attr` behavior and Web Storage caveats; OWASP cautions that localStorage is accessible to same-origin JavaScript and should not be treated as a secure secret store.

## Validation

Automated release checks cover:

- JavaScript syntax.
- Static CSP/HTML audit.
- All 7 assignment startup paths.
- Recursive carry-forward scenarios.
- CSV validation edge cases.
- ZIP creation integrity and classic-format bounds.
- Encryption/container format checks.
- Worker security-header and health responses.
- Public asset boundary and clean ZIP contents.

A real production Chrome session still needs to be run against the deployed Worker because this build environment cannot reliably navigate a locally hosted browser test server.
