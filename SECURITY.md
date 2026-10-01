# LEXDEN ACADEMY Assessment Security Model

## What the public site can protect
- Student answers are not stored on the server.
- The public site has only the RSA public key.
- A finalized package encrypts the ZIP payload with AES-256-GCM.
- The per-submission AES key is wrapped with RSA-OAEP using the Academy public key.
- AES-GCM authentication detects ciphertext tampering.
- A SHA-256 hash verifies the reconstructed ZIP payload.
- The finished `.lexden` file is capped at 100 MiB.

## What it cannot guarantee
- It cannot prove that the person typing is the Google Classroom account holder.
- It cannot prevent collaboration, copying, or use of unapproved assistance.
- The local progression gate can be bypassed by clearing browser storage or using another device.
- Authenticity and academic-integrity decisions remain a teacher responsibility.

## Key custody
The private RSA key is not present in the public site. The teacher package is encrypted at rest with PBKDF2-SHA256 (600,000 iterations) and AES-256-GCM. Keep the key package and passphrase in separate safe storage.

## Key rotation
If a new RSA key is generated later, keep the previous private key packages so old submissions remain decryptable. Update only the public key on the hosted site for new submissions.
