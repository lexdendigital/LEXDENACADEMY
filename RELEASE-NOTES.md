# LEXDEN ACADEMY v1.1.3

## Fixed
- Removed the entire inline JavaScript dependency from the public assessment page and moved the runtime to the same-origin `/app.js`, so a strict `script-src 'self'` policy can execute it.
- Moved all page CSS to the same-origin `/styles.css` and removed inline style attributes from HTML/runtime templates so the site can operate under strict style CSP rules as well.
- Added a real `/favicon.ico` and explicit favicon links to eliminate the browser 404 request.
- Repaired the final-submission runtime error caused by `packagedAttachments` being referenced before its `const` declaration.
- Repaired draft data loss when a student enters or changes their Classroom email after initially loading the assignment with no email key.
- Hardened localStorage state loading against null/array-shaped corrupted state.
- Made CSV parsing reject unclosed quoted fields.
- Relaxed the student-side environment check so it requires only the compression API actually used for submission packaging.
- Added strict CSP/security headers to the Worker response as well as static assets, including `/health`.
- Removed inline JavaScript from module redirect pages and inline CSS from the 404 page.
- Changed unknown-path handling from SPA fallback to the project's real custom 404 page; the assessment itself is query-driven at `/`.

## Security
- Public assets now run without `unsafe-inline` in the repository policy. Same-origin JavaScript and CSS are the only application resources required.
- The Worker explicitly applies the same security policy to Worker-generated responses because Cloudflare `_headers` rules do not apply to responses created by Worker code.
