# Build and Test Summary — Stratus Visual Refresh

## Outcome

Generated code was approved with "`a`pprove". Notebook/Casebook and both views meet the approved nine stories and twelve quality checks. Build and Test consolidates the completed verification and current reproduction instructions; no runtime source changed in this stage.

## Recorded results

| Check | Result |
| --- | --- |
| TypeScript / ESLint | Passed |
| Complete Vitest example/property/integration suite | 43 suites, 158 tests, zero failures |
| Updated documentation contract | Six tests passed after documentation update |
| Root and project production builds | Passed; Vite bundling 2.30s / 2.40s |
| Both production output verifiers | Passed; 20 approved images and one CV |
| Actual production asset/CV URLs | Successful in both base-path forms |
| Responsive matrix | 32 configurations; no horizontal overflow |
| Rendered reading/action contrast | Minimum 6.87:1 light / 8.20:1 dark |
| Essential control border contrast | Minimum 3.49:1 light / 3.88:1 dark |
| Preferences/routes/history/focus/evidence/contact/motion | Passed applicable tests/browser checks |
| Server load/API contracts/authentication penetration tests | N/A for this static frontend scope |

The full suite includes unit/property and application integration tests; these are not separately additive test totals. No coverage percentage is claimed. Prior passing results were reused instead of rerunning unchanged runtime code. Local evidence resides under /private/tmp/stratus-visual-refresh/; see [implementation summary](../stratus-visual-refresh/code/code-generation-summary.md) for file inventory, story/quality mapping, screenshots and comparable bundle measurements.

## Artifacts and instructions

Output: dist/index.html, JavaScript/CSS, 18 allowlisted JPGs, two WebP interest illustrations and one approved CV PDF. Both / and /StratusNebulosus.github.io/ forms passed. New/current instructions: build-instructions.md, unit-test-instructions.md, integration-test-instructions.md, performance-test-instructions.md and e2e-test-instructions.md. Earlier instructions were preserved under history/pre-stratus-visual-refresh/.

## Limits and readiness

Existing Vite chunk advisory remains. Final root JS is 681273 bytes (196728 gzip); CSS is 44388 bytes (8253 gzip), with unchanged approved media and no new dependency. No timing/Lighthouse score or universal physical-device coverage is claimed. Content/private-source boundaries remain unchanged. Operations is the AI-DLC placeholder; this stage performed no commit, push or deployment. The current local repository was already at commit 8c590bf when resuming; no publication status is inferred from that local commit.

Build and Test is complete and ready for its explicit results/instruction review before Operations.

## Extension compliance

Security Baseline: N/A — disabled B. Property-Based Testing: N/A — disabled C. Existing property suites and production privacy policy remain enforced. No enabled-extension blocking finding.

## Owner Revision — Bright Medical Light Theme (2026-10-10)

Replaced the light cream/olive palette with bright white and pale blue surfaces, navy text, teal primary actions, blue labels, and rose accents. Light headings now use the existing Inter sans-serif font. Updated the shared header, hero, section backgrounds, narrative/academic/research/contact cards, portrait frame, scholarship, and gallery to coordinated light surfaces and soft elevation. Rules are scoped to light mode and shared by Notebook/Casebook; dark tokens and typography remain unchanged.

Modified application files: `src/theme/tokens.ts`, `src/components/medical/medical-shell.css`, `src/components/medical/content/medical-content.css`, `src/components/medical/gallery/medical-gallery.css`.

Verification: 26 tests across theme contrast, token properties, accessibility/style safeguards, and content regressions pass. TypeScript production build, ESLint, diff validation, and `verify:dist` pass (20 approved images, one CV). CSS gzip 8.47 KB; JavaScript gzip 196.75 KB. The existing Vite chunk-size advisory remains. Browser checks at 1440 and 390 pixels in both styles confirm correct light tokens, white contact panels, sans-serif headings, no horizontal overflow, and successful dark-theme toggling. Screenshots: `/tmp/stratus-bright-notebook-1440.png`, `/tmp/stratus-bright-notebook-390.png`, `/tmp/stratus-bright-casebook-1440.png`, `/tmp/stratus-bright-casebook-390.png`; matching contact screenshots share the `/tmp/stratus-contact-` prefix. Other previously passing tests were not rerun for this palette-only revision.

Optional Security/PBT extensions remain disabled (N/A). Existing results review remains pending; the local preview runs at http://127.0.0.1:5174/. No commit, push, or deployment performed.

## Reference Green Palette Revision (2026-10-10)

Matched the supplied deployed reference main green (#176b62), deeper green (#10544d), primary text (#15312e), secondary text (#52635f), and rose (#ad4652). White surfaces and pale mint page (#f4faf8) retain the bright presentation across Notebook and Casebook. Existing dark tokens are unchanged.

Verification: 26 focused theme/contrast/content tests across five files pass; production build passes with the existing large-chunk advisory (CSS 46.33 kB, JS 681.33 kB). Both styles at 1440px and 390px render the correct Bui Tuan Phat identity, mint page, white panels, and no horizontal overflow; dark toggle works. Screenshot inspected. git diff --check passes. Local preview: http://127.0.0.1:5174/. No publication performed; prior results review remains pending. Extensions: Security Baseline and PBT N/A because disabled.

## Contact Alignment Revision (2026-10-11)

Contact introduction now uses a single column, with the statement in left-aligned body typography (16–18px, line-height 1.7) above the privacy note and form. Verified Notebook/Casebook at 390px and 1440px: statement and form left edges align, privacy follows below, paragraph wraps naturally, and no horizontal overflow. Production build passes with the existing chunk-size advisory. Browser screenshots: /tmp/stratus-contact-aligned-{notebook,casebook}-{390,1440}.png. Disabled extensions remain N/A; stage review remains pending; no deployment.

## INNOVERSE Video Revision (2026-10-15)

Added user-supplied YouTube video iLVkk7hrsHU (public oEmbed title: INNOVERSE 2026) to the existing INNOVERSE research project in Science & Awards. Optional project video data keeps content shared across Notebook/Casebook. Player uses a titled, lazy-loaded youtube-nocookie iframe with responsive 16:9 dimensions, fullscreen support, and a direct YouTube viewing link. No runtime dependency added.

Verification: 15 content tests in two files pass; production build and lint pass, with the existing chunk-size advisory. Four browser configurations (Notebook/Casebook at 390/1440px) confirm correct project placement, video title/source, direct link, 16:9 sizing, and no horizontal overflow. Screenshot layout reviewed; third-party video playback was not manually verified. git diff --check passes. Optional extensions remain disabled (N/A); existing results review remains pending; no deployment performed.
