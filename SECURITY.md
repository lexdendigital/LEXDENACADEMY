# Security Notes - v1.2.0

## Browser security

The student application is designed to operate with a strict same-origin Content Security Policy:

- `script-src 'self'`
- `script-src-elem 'self'`
- `script-src-attr 'none'`
- `style-src 'self'`
- `style-src-elem 'self'`
- `style-src-attr 'none'`
- `object-src 'none'`
- `frame-src 'none'`
- `frame-ancestors 'none'`
- `connect-src 'none'`
- `base-uri 'none'`

The application does not use inline event handlers, inline style attributes or inline script blocks.

## Student data model

Drafts are local-first. The site does not use `fetch()` or other application network calls for student answers. Browser storage can still be inspected by a same-origin script, so local storage must not be treated as a secure credential store.

The final submission is encrypted in the browser with the course RSA-OAEP public key and AES-GCM chunk encryption. The public key can encrypt but cannot decrypt submissions. Administrative decryption helpers are intentionally absent from the public student bundle.

## Submission integrity

The encrypted container uses AES-GCM per chunk and includes a SHA-256 digest of the ZIP payload. These controls provide confidentiality and tamper detection after decryption. They do not, by themselves, prove authorship or identity; the manually entered Classroom email is an asserted identity field and should be interpreted alongside the course's normal Classroom account controls.

## Local persistence limits

Browser storage quotas vary. The app caps its serialized draft state at approximately 4.5 MB and visibly warns if local persistence is unavailable, falls back to session storage, or the state cannot be saved.

## Attachments

Students are advised to keep raw selected attachments at or below 95 MiB. Browser packaging creates multiple in-memory representations during compression and encryption, so a 100 MiB file limit is not a guarantee that every low-memory phone can process a near-limit package reliably.

## Trust-boundary note

Prerequisite and final-lock state is stored locally in the student's browser. It is a workflow convenience, not a server-side trust boundary. A student who deliberately edits browser storage can alter local progression flags; teachers should treat the encrypted `.lexden` package submitted through Google Classroom as the authoritative student artifact and apply normal teacher-side verification.
