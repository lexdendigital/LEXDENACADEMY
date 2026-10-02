# LEXDEN ACADEMY v1.2.0 QA Report

## Scope

Full independent review of the original v1.1.2 package, review of the v1.1.3 changes, then a second-pass hardening review of the resulting application. The audit covered HTML, CSS, client runtime, storage model, assignment state machine, CSV parser, ZIP builder, browser cryptography, Worker routing/headers and deployment configuration.

## Defects found beyond the originally reported errors

1. Deep carry-forward failure: later assignments only inspected the immediate prerequisite, so Module 6 and the capstone could miss data originating in Modules 2–4.
2. Partial email profile fragmentation: as a user typed an email, each partial address could become a new storage profile; bootstrap identity could also be updated with an invalid partial address.
3. LocalStorage fallback inconsistency: a sessionStorage fallback could be bypassed on the next load when an empty localStorage key caused startup to stop searching before checking sessionStorage.
4. Silent draft-loss risk on browser storage failure/quota exhaustion.
5. Final package loss after refresh was possible if the student finalized first and only downloaded afterward; locking now requires a package download action first.
6. CSV score parsing accepted an empty score because `Number('')` becomes zero; empty/non-numeric scores are now rejected.
7. CSV parser accepted stale async results when the user changed files quickly; file identity is now rechecked before committing parsed state.
8. CSV files with a BOM could fail header matching; BOM is now removed from the first header cell.
9. Student bundle contained unused administrative decryption and ZIP extraction capabilities; they are no longer published to the student runtime.
10. ZIP creator lacked some classic-format bound checks; excessive file counts, duplicate names and oversized names are now rejected.
11. The public asset directory was the project root, which exposed future root files unless maintainers kept the ignore list perfectly aligned; deployable content is now isolated in `./site`.
12. Finalization used an irreversible lock before a student had explicitly downloaded the authoritative encrypted package; locking is now gated after download.
13. Grouped radio/checkbox fields used an outer label with a target that did not correspond to a concrete control; grouped labels are now rendered accessibly.
14. The page had no independent failure indicator if the application script did not execute, creating a persistent-looking spinner; `boot.js` now provides a watchdog.
15. The carry-forward alias implementation itself had been incomplete: destination fields such as `targetCity` were mapping to source keys in the wrong direction; recursive source aliases are now explicitly searched and regression-tested.
16. A finalization attempt could read a newly corrected valid email without relocating the current draft first (for example with browser autofill/input-event edge cases); the final build path now synchronizes the draft to the visible valid email before packaging.
17. CSV parsing allowed characters after a closing quoted field; the parser now rejects those malformed records.
18. A malformed identity storage value such as JSON `null` could propagate into bootstrap member access; identity parsing now accepts only object records.
19. Attachment counts were unbounded before file bytes were read; the runtime now caps attachments at 250 files and separately caps CSV files at 5 MiB to reduce memory/DoS-style browser failure modes.
20. Cloudflare's current navigation-serving behavior can bypass the Worker for navigation requests; `/health` is now explicitly routed with `assets.run_worker_first` so the health endpoint remains a Worker endpoint.

21. Finalized forms were visually marked as locked but relied only on `pointer-events:none`, leaving keyboard-focusable radio/checkbox/file controls mutable after finalization. Finalized fields are now actually disabled in the DOM.

22. Corrupted drafts containing a negative/out-of-range defense prompt index could crash prompt rendering. Defense variants are now range-normalized and prompt selection has a safe fallback.

23. Upgrade compatibility was not explicitly regression-tested for the prior release’s plain-email localStorage buckets. The new loader now has a dedicated compatibility test confirming old drafts and prerequisite locks migrate into the normalized v2 storage shape.

24. Attachment memory exhaustion risk: the previous guard checked file count/size only after `file.arrayBuffer()` had already loaded every selected attachment. The runtime now preflights count and total byte size from `File.size` before reading any attachment into memory.

25. Email migration could overwrite an already-existing draft under the destination email. Migration now merges the current draft over the destination draft so non-empty existing data is preserved unless the current draft explicitly replaces it.

26. Untrusted assignment query parameters could resolve inherited object properties such as `toString` when looking up assignments. Assignment lookup now requires an own property on the static assignment map and invalid links fall through to the normal gate.

Intermediate audit-build regression caught and corrected before release: a cross-file boot-watchdog callback-name mismatch was introduced during an early patch iteration. The final build uses one callback name end-to-end, and the dedicated watchdog test prevents recurrence.

## Automated checks

- `node --check site/app.js`
- `node --check site/boot.js`
- Boot watchdog smoke test
- Static security audit
- Seven-assignment runtime smoke test
- Recursive carry-forward smoke test
- CSV validation smoke test
- ZIP integrity/bounds smoke test
- Encryption format smoke test
- Worker health/security-header smoke test
- Email migration smoke test
- Legacy storage compatibility smoke test
- Security/storage corruption smoke test
- Clean ZIP content inspection

## Browser caveat

The environment used for this audit blocks reliable navigation to a locally hosted browser test server. Therefore no claim is made that a live Chrome session against production was executed here. The release is designed to be verified with the deployment checklist after the Worker is deployed.
