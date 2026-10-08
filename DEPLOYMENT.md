# GitHub Pages Deployment Guide

This portfolio deploys as a static site on GitHub Pages. The repository already includes a GitHub Actions workflow that builds the project and publishes the `dist` folder for you.

You do not need to manually edit `vite.config.ts` for normal GitHub Pages deployment. The workflow derives the correct `VITE_BASE_PATH` automatically.

## Deployment Overview

The deployment flow is:

1. You push code to the `main` branch.
2. GitHub Actions starts the deploy workflow.
3. The workflow installs dependencies with `npm ci`.
4. The workflow derives `VITE_BASE_PATH` from the repository name.
5. The workflow runs `npm run quality` (TypeScript, ESLint, examples, and properties).
6. The workflow runs `npm run build`.
7. The workflow runs `npm run verify:dist` against the derived base path.
8. GitHub Pages publishes the verified `dist` artifact.

## Enable GitHub Pages

1. Open your repository on GitHub.
2. Go to Settings.
3. Open Pages in the left sidebar.
4. Under Build and deployment, set Source to GitHub Actions.
5. Save the setting if GitHub asks you to.

Use GitHub Actions as the source. Do not use Deploy from a branch for this project.

## Repository URL Types

GitHub Pages has two common URL patterns.

### Project Pages

Most student repositories use project Pages.

Repository example:

- `<owner>/<repository>`

Published URL:

- `https://<owner>.github.io/<repository>/`

Workflow base path:

- `VITE_BASE_PATH=/<repository>/`

### Root Pages

A repository named `<owner>.github.io` publishes at the account root.

Repository example:

- `<owner>/<owner>.github.io`

Published URL:

- `https://<owner>.github.io/`

Workflow base path:

- `VITE_BASE_PATH=/`

## Automatic Base Path Behavior

The deployment workflow checks the repository name during the build:

- If the repository is named `<owner>.github.io`, it sets `VITE_BASE_PATH=/`.
- Otherwise, it sets `VITE_BASE_PATH=/<repository>/`.

`vite.config.ts` reads that value:

```ts
base: process.env.VITE_BASE_PATH ?? '/',
```

This keeps CSS, JavaScript, images, the favicon, and the approved CV loading correctly for both root Pages and project Pages.

## Verify Locally Before Deployment

Run the same source checks and root Pages verification used by the workflow:

```bash
npm run quality
npm run build
npm run verify:dist
```

To verify project Pages behavior, substitute the repository name:

```bash
VITE_BASE_PATH=/repository-name/ npm run build
EXPECTED_BASE_PATH=/repository-name/ npm run verify:dist
```

The production verifier requires exactly 18 reviewed gallery images, two approved interest illustrations (20 images total), and the separate approved Bui Tuan Phat CV. It rejects prohibited/private source filenames, former-portfolio markers, the CV-only placeholder contact line, unexpected application network requests, and local URLs outside the expected Pages base path. Contact uses the verified recipient `buituanphat123456@gmail.com` and opens a local email draft after validation; it does not send or persist messages.

If a property test fails, its output includes the fast-check seed and shrunk counterexample. Replay it with:

```bash
FC_SEED=<reported-seed> npm test
```

## Deploy From Main

Push your changes to the `main` branch:

```bash
git status
git add .
git commit -m "update portfolio"
git branch -M main
git push -u origin main
```

After the push, open the Actions tab in your GitHub repository. The workflow is named Deploy to GitHub Pages.

You can also run it manually:

1. Open the Actions tab.
2. Select Deploy to GitHub Pages.
3. Click Run workflow.
4. Choose the `main` branch.
5. Click Run workflow again.

## Verify Deployment

After the workflow succeeds:

1. Open Settings > Pages.
2. Confirm Source is GitHub Actions.
3. Copy the published Pages URL.
4. Open the URL in your browser.
5. Check that the page loads without a 404.
6. Check Notebook and Casebook in full-page and section views at mobile and desktop widths.
7. Confirm fresh visits use dark mode and saved light remains readable. Display keys are `medical-style`, `medical-layout`, and `chakra-ui-color-mode`; blocked storage must not prevent use.
8. Open `#science` (full page) and `#/science` (section). Confirm URL layout overrides saved layout, switching views retains the active section, and back/forward works.
9. Check the 18 evidence images, two interest illustrations, modal Escape/focus restoration, responsive drawer, skip link, and `bui-tuan-phat-cv.pdf` download.
10. Check required contact fields, first-invalid focus, the 5000-character message limit, and the configured-recipient email draft. Check reduced-motion behavior and visible keyboard focus.

Both styles share the typed content in `src/data/medical/content.ts` and metadata in `src/data/medical/presentation.ts`. A visual change must not alter the public asset allowlist. Local checks confirm build behavior; deployment is complete only after a successful workflow and review of the published URL.

GitHub Pages can take a few minutes to update after a successful workflow.

## Troubleshooting

| Symptom | Likely Cause | Fix | Verify |
|---|---|---|---|
| Workflow fails during install | Dependency install problem or wrong Node setup | Open the failed Actions log and check the `npm ci` step. Confirm the workflow uses Node.js 20. | Re-run the workflow after fixing dependency issues. |
| Workflow fails during quality checks | TypeScript, ESLint, example test, or property test failure | Run `npm run quality`. If fast-check reports a seed, replay it with `FC_SEED=<seed> npm test`. | All checks pass locally without suppressing the failure. |
| Workflow fails during build | TypeScript, Vite, or missing asset issue | Run `npm run build` locally and fix the reported error. Check renamed images or the approved CV. | Push the fix and confirm the build step succeeds. |
| Workflow fails during production verification | Unexpected/missing public asset, prohibited marker, or incorrect base path | Run `npm run verify:dist` after building with the same `VITE_BASE_PATH`. Review the listed policy error. | The verifier reports 20 approved images, one approved CV, and the expected base path. |
| Pages says the site is not published | Pages source is not set to GitHub Actions | Go to Settings > Pages and set Source to GitHub Actions. | The Pages settings page shows a published URL. |
| Site shows 404 | Wrong URL, Pages still updating, or Pages source not configured | Use the URL from Settings > Pages. Wait a few minutes after the workflow succeeds. Confirm Source is GitHub Actions. | Refresh the published URL after the deployment finishes. |
| CSS or JavaScript does not load | Base path or deployment URL mismatch | Confirm you are using the correct project Pages or root Pages URL. The workflow should set `VITE_BASE_PATH` automatically. | Reload the page and check that styling and interactions work. |
| Evidence images or CV do not load | Missing approved asset, stale allowlist import, or base-path mismatch | Confirm the asset is explicitly listed in `src/data/medical/assetAllowlist.ts`, then rebuild and verify. | Check the gallery and CV download on the published site. |
| Old content is still visible | Browser cache or Pages update delay | Wait a few minutes, refresh, or open the site in a private browser window. | The deployed page shows the latest commit content. |

## Optional Custom Domain

Custom domains are not required for the baseline student portfolio.

If you later use a custom domain:

1. Add a `CNAME` file in `public/` containing your domain.
2. Configure DNS with your domain provider.
3. Add the custom domain in Settings > Pages.
4. Re-run the GitHub Actions workflow.

Keep the default GitHub Pages URL working first, then add a custom domain only after the normal deployment succeeds.

## What This Deployment Does Not Need

This static portfolio does not need:

- A Node.js server after deployment.
- A database.
- API keys or private environment variables.
- Runtime content APIs.
- Analytics.
- External uptime monitoring.
- Paid hosting.
