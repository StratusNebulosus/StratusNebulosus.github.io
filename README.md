# Bui Tuan Phat Medical Portfolio

This repository contains Bui Tuan Phat's single-page medical student portfolio. It presents his path through science, academics, leadership, and service in one accessible editorial experience, with light and dark modes and static GitHub Pages deployment.

## Portfolio structure

The public page has eight sections in this order:

1. **Overview** - identity, medical-study direction, portrait, and CV download
2. **Calling** - motivation for medicine and responsible experience framing
3. **Education** - Wellspring and Thai Nguyen University of Medicine and Pharmacy
4. **Academics** - GPA, SAT, IELTS, AP results, and scholarship context
5. **Science & Awards** - student research and verified recognition
6. **Leadership & Service** - school, conference, leadership, and community activities
7. **Evidence** - 18 reviewed portrait, certificate, award, and event images
8. **Contact** - an email-only draft form that opens the visitor's local email application

The production composition starts in `src/App.tsx`. The main files future contributors should use are:

| Purpose                                 | Authoritative location                      |
| --------------------------------------- | ------------------------------------------- |
| Verified portfolio copy and CV metadata | `src/data/medical/content.ts`               |
| Public asset boundary                   | `src/data/medical/assetAllowlist.ts`        |
| Gallery order and captions              | `src/data/medical/gallery.ts`               |
| Section order and navigation labels     | `src/data/medical/navigation.ts`            |
| Medical content components              | `src/components/medical/content/`           |
| Gallery components                      | `src/components/medical/gallery/`           |
| Navigation and page shell               | `src/components/medical/`                   |
| Light/dark design tokens                | `src/theme/`                                |
| Approved downloadable CV                | `src/assets/documents/bui-tuan-phat-cv.pdf` |

Do not restore the retired Engineering/Business template selector or multi-layout behavior. Historical source files that are not reachable from `src/main.tsx` are not part of the public application and should not be used for new medical content.

## Public and private asset boundary

The deployed site is public. An asset may be imported by the medical portfolio only when it appears explicitly in `src/data/medical/assetAllowlist.ts`.

Approved public material currently consists of:

- `src/assets/profile_pic.jpg`
- 15 reviewed achievement, certificate, conference, and project images listed in the allowlist
- Two original, clearly classified portfolio illustrations for Origami and Piano, delivered as optimized WebP files
- `src/assets/documents/bui-tuan-phat-cv.pdf`, provided as a separate CV download

The CV is not gallery media. The gallery is an explicit 18-image collection: the portrait plus 17 reviewed evidence images. Generated interest artwork is not gallery evidence, and the Gold Award uses its real certificate.

Award cards reuse those reviewed gallery records by matching their allowlisted asset. Awards with evidence provide a large preview and a `View evidence` control; Gallery cards and award controls open the same accessible dialog. Awards without an approved matching image remain visible with an explicit unavailable status. Keep this shared interaction in `src/components/medical/gallery/EvidencePreviewProvider.tsx` rather than adding a second modal.

Never publish or import raw passport, national identity card, visa, birth certificate, address-bearing record, candidate-number-bearing record, transcript, report card, score report, admission record, or any file marked `dontuse`. Files remaining under `src/assets/CV/` are source evidence, not an automatically public directory. Do not enumerate that directory or use `import.meta.glob`.

The approved CV visibly contains its own placeholder contact line. Those bytes are allowed only inside the explicitly approved download; never copy that line into page text, metadata, alternative text, tests, or accessible labels.

The website Contact section uses the separately verified recipient `buituanphat123456@gmail.com`. Visitors enter a name, reply-to email, and message; the client-only form then opens a percent-encoded draft in their local email application. The site does not submit, store, or report delivery of that content, and it has no phone contact, backend, database, or contact API. Keep the recipient and presentation copy in the typed `contact` object in `src/data/medical/content.ts`, and keep deterministic draft composition in `src/utils/contact.ts`.

## Safe content updates

When updating the portfolio:

1. Verify each fact against an approved source.
2. Edit typed content in `src/data/medical/`; avoid embedding copy in layout components.
3. Add a public asset to `assetAllowlist.ts` only after its privacy review.
4. Add gallery records explicitly in `gallery.ts`; never derive them from a folder.
5. Provide meaningful alternative text and stable IDs.
6. If an award should expose evidence, reference the same allowlisted asset used by its reviewed `gallery.ts` record; do not create a parallel evidence record or dialog.
7. Keep student projects framed as student work—not clinical practice, published research, or proof of medical effectiveness.
8. Run the complete quality and production-output checks before committing.
9. Change the verified Contact recipient only with explicit owner approval; never copy contact values from the downloadable CV or introduce a phone field without revising the public requirements.

## Local setup

Install Git, Node.js LTS, and Visual Studio Code. Use Node 20.19.0 or newer, or Node 22.12.0 or newer.

```bash
git --version
node --version
npm --version
git clone https://github.com/<username>/<username>.github.io.git
cd <username>.github.io
npm install
npm run dev
```

Open the local address printed by Vite, usually `http://localhost:5173/`. Press `Ctrl+C` to stop it.

## Testing and reproducible property failures

Run the complete source quality gate:

```bash
npm run quality
```

This runs strict TypeScript, ESLint, all example-based tests, and all fast-check property-based tests. Fast-check reports its random seed and shrunk counterexample when a property fails. Replay that exact run with:

```bash
FC_SEED=<reported-seed> npm test
```

Automatic shrinking remains enabled during replay. `FC_SEED` must be a signed 32-bit integer.

Build and verify the root GitHub Pages form:

```bash
npm run build
npm run verify:dist
```

To reproduce a project Pages build locally:

```bash
VITE_BASE_PATH=/repository-name/ npm run build
EXPECTED_BASE_PATH=/repository-name/ npm run verify:dist
```

The verifier requires exactly 18 approved JPG files, two approved WebP illustrations, and one approved CV PDF. It rejects prohibited/private filename and text markers and checks that generated HTML assets remain inside the expected Pages base path. The generated `dist/` directory is not committed.

## GitHub Pages deployment

The existing `.github/workflows/deploy.yml` workflow deploys the static `dist/` artifact. It:

1. installs locked dependencies with `npm ci`;
2. derives `/` for an `<owner>.github.io` repository or `/<repository>/` for project Pages;
3. runs `npm run quality`;
4. builds with the derived base path;
5. runs `npm run verify:dist`;
6. uploads and deploys only the verified static artifact.

Enable it under **Settings > Pages** by choosing **GitHub Actions** as the source. Pushes to `main` trigger deployment; **Actions > Deploy to GitHub Pages > Run workflow** starts it manually.

After a successful run, open **Settings > Pages > Visit site** and verify navigation, color mode, portrait, evidence previews, and the CV download. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed URL behavior and troubleshooting.

## Committing changes

Configure Git once if needed:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --get user.name
git config --get user.email
```

Then review and publish a change:

```bash
git status
git add .
git diff --staged
git commit -m "Update medical portfolio"
git branch -M main
git push -u origin main
```

An accepted collaborator has write access, so invite only trusted contributors through **Settings > Collaborators > Add people**. Never commit passwords, access tokens, secret values, `.env` files, `node_modules/`, or `dist/`.

## Technology

The site uses React 19, TypeScript, Vite, Chakra UI, Vitest, Testing Library, fast-check, ESLint, GitHub Actions, and GitHub Pages. It has no backend, database, authentication, analytics, runtime secret, or runtime content API.

## License

MIT

### Featured academic recognition

Valedictorian honors in Wellspring's American Dual Diploma Program (2025–2026) appear in the overview and as a featured certificate in Academic Excellence. Certificate previews show the full upright image. Leadership & Service cards use consistent theme colors.
