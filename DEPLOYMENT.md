# LEXDEN ACADEMY - Deployment and Google Classroom Setup

## Target architecture
GitHub repository: `lexdendigital/LEXDENACADEMY`

Production host: Cloudflare Pages via Git integration.

No paid domain is required for the first release. Cloudflare will provide a `*.pages.dev` address after deployment.

## Cloudflare Pages
1. Sign in to Cloudflare.
2. Open **Workers & Pages**.
3. Choose **Create application** -> **Pages** -> **Connect to Git**.
4. Authorize GitHub if requested.
5. Select `lexdendigital/LEXDENACADEMY`.
6. Production branch: `main`.
7. Framework preset: **None**.
8. Build command: leave empty.
9. Build output directory: `/` (repository root).
10. Deploy.

The public site is static and has no runtime server requirement.

## Classroom links
Assuming the Cloudflare project name is `lexden-academy`, the links are:
- Module 1: `https://lexden-academy.pages.dev/gbl/module-1/`
- Module 2: `https://lexden-academy.pages.dev/gbl/module-2/`
- Module 3: `https://lexden-academy.pages.dev/gbl/module-3/`
- Module 4: `https://lexden-academy.pages.dev/gbl/module-4/`
- Module 5: `https://lexden-academy.pages.dev/gbl/module-5/`
- Module 6: `https://lexden-academy.pages.dev/gbl/module-6/`
- Capstone: `https://lexden-academy.pages.dev/gbl/capstone/`

Replace `lexden-academy` with the exact project name Cloudflare assigns if that name is unavailable.

## Classroom assignment procedure
For each Google Classroom assignment:
1. Create the assignment.
2. Add the matching LEXDEN ACADEMY module URL as a **Link** attachment.
3. Keep the actual student submission in Google Classroom.
4. Tell students to download the `.lexden` file and the PDF report from the assessment site.
5. Have students attach the `.lexden` file (and PDF where useful) to the Classroom assignment and click **Turn in**.

## Important identity limitation
A static webpage cannot silently read the student's Google Classroom account email. Students enter the same Classroom email into the assignment. The teacher can compare that encrypted submission email with the Google Classroom account that submitted the file.

The email is used as the local progress key so Module 2+ can carry work forward on the same browser/device. This is a workflow control, not a secure Google identity assertion.

## Private teacher tool
The teacher decoder, encrypted private key package, and passphrase are stored under `private-tools/` in the local project bundle. Never upload that folder to GitHub or Cloudflare.
