# Unit 6: Testing & Documentation - Code Generation Summary

## Outcome

Unit 6 adds a repository-wide release gate around the completed medical portfolio. The project now verifies the rendered identity and information architecture, the production dependency graph, exact public asset inventory, former-portfolio absence, privacy markers, property-test reproducibility, and both root and project GitHub Pages URL forms. Contributor and deployment documentation now describe the actual medical application rather than the retired multi-template starter.

## Created Files

- `src/test/medicalPortfolioPolicy.ts`
- `src/test/medicalPortfolioRegression.test.tsx`
- `src/test/productionGraph.test.ts`
- `src/test/productionBuildPolicy.test.ts`
- `src/test/productionBuildPolicy.property.test.ts`
- `src/test/propertySeed.ts`
- `src/test/propertySeed.test.ts`
- `src/test/documentationContract.test.ts`
- `scripts/production-build-policy.mjs`
- `scripts/production-build-policy.d.mts`
- `scripts/verify-production-build.mjs`

## Modified Files

- `README.md`: replaced obsolete Engineering/Business template guidance with the eight-section medical architecture, authoritative files, public/private asset boundary, safe update process, quality commands, seed replay, and static deployment flow.
- `DEPLOYMENT.md`: added the quality gate, deterministic bundle verifier, root/project Pages reproduction, medical asset checks, and current troubleshooting.
- `.github/workflows/deploy.yml`: runs quality checks and verifies production output before upload.
- `package.json`: added `typecheck`, `quality`, and `verify:dist` scripts; no dependency was added.
- `src/test/setup.ts`: configures fast-check for detailed failure output and optional validated `FC_SEED` replay while retaining shrinking.
- `src/test/data/portfolio.test.ts`: removed documentation assertions tied to the retired starter template; its remaining legacy-data tests are isolated from the production application graph.
- `index.html`: gives the portfolio an accurate title and uses `%BASE_URL%vite.svg` so the favicon respects project Pages paths.

## Regression Coverage

- The full rendered application identifies Bui Tuan Phat as a medical student and preserves all eight sections in approved order.
- The CV action remains a separate stable PDF download and the Evidence section contains exactly 13 gallery triggers.
- Former-owner identity, retired template/layout controls, and placeholder contact values remain absent from the public interface.
- The `src/main.tsx` dependency graph reaches the medical application, medical data, and exactly the explicit 14-entry public asset allowlist; it does not reach the legacy profile, portfolio, template, or style-selector modules.
- Production source adds no runtime content request, `XMLHttpRequest`, or dynamic asset glob.
- Documentation and CI ordering are enforced by executable contract tests.

## Production Verification

`scripts/verify-production-build.mjs` rejects:

- missing `dist/index.html`;
- anything other than 13 approved JPG outputs and one approved PDF output;
- missing or duplicated approved asset prefixes;
- prohibited/private/`dontuse` filenames;
- former-owner, retired-template, placeholder-contact, or dynamic-glob bundle markers;
- application runtime requests beyond Vite's standard module-preload compatibility fetch;
- local HTML URLs outside the expected GitHub Pages base path.

The verifier is integrated before GitHub Pages artifact upload.

## Verification Evidence

- `npm run quality`: passed.
- TypeScript project build: passed.
- ESLint: passed.
- Vitest: 32 files passed, 124 tests passed.
- `FC_SEED=123456789 npm test`: 32 files passed, 124 tests passed, confirming deterministic seed configuration.
- Root Pages build and `EXPECTED_BASE_PATH=/ npm run verify:dist`: passed.
- Project Pages build with `/StratusNebulosus.github.io/` and matching verifier expectation: passed.
- Both builds emitted exactly 13 approved JPGs and one approved CV PDF.
- Project build HTML places favicon, JavaScript, and CSS under `/StratusNebulosus.github.io/`.
- Prohibited filename, former identity, retired UI, placeholder contact, runtime request, dynamic glob, duplicate-file, secret-marker, and dependency scans: passed.
- `git diff --check`: passed.
- Build advisory: the existing main JavaScript chunk remains above Vite's 500 kB advisory threshold; Unit 6 adds no runtime dependency.

## Property-Based Testing Compliance

| Rule | Result | Evidence |
|---|---|---|
| PBT-01 | N/A | Unit 6 adds validation/testing infrastructure rather than production business logic; its verifier invariants were identified in the approved plan. |
| PBT-02 | N/A | No inverse transformation exists. |
| PBT-03 | Compliant | Generated exact inventories, prohibited additions, normalized base paths, and contained asset URLs exercise the verifier invariants. |
| PBT-04 | N/A | No Unit 6 operation claims idempotency. |
| PBT-05 | N/A | No optimized/reference algorithm pair exists. |
| PBT-06 | N/A | Unit 6 adds no mutable state machine; stateful properties from earlier units remain in the complete suite. |
| PBT-07 | Compliant | Constrained hash, prohibited-stem, approved-inventory, and project-base-path generators create realistic policy inputs. |
| PBT-08 | Compliant | Shrinking remains enabled, verbose counterexample output is configured, `FC_SEED` accepts validated signed 32-bit seeds, and replay was exercised successfully. |
| PBT-09 | Compliant | Existing fast-check 4.10.1 remains installed and integrated with Vitest; no framework or dependency was added. |
| PBT-10 | Compliant | Example tests cover concrete release failures and rendered regressions; separately named property tests cover general verifier invariants. |

Security Baseline was skipped because it remains explicitly disabled. No blocking enabled-extension finding remains.

## Completion Boundary

No site was deployed and no hosting setting was changed. The separate AI-DLC Build and Test stage remains after explicit Unit 6 Code Generation approval; it will create the required build, unit-test, integration-test, performance-test, and summary instruction artifacts.

## Contact and Shared Header Change-Control Addendum - 2026-09-20

- Added required website Contact markers to the centralized test policy while retaining the CV-only values and former-owner details as prohibited markers.
- Updated full-app and production-graph regressions to require the fictional website examples and verify that they remain non-actionable.
- Updated `README.md`, `DEPLOYMENT.md`, and their contract test to distinguish the approved labeled website examples from the CV-only placeholder line and document the safe future replacement workflow.
- The production verifier continues to prohibit only CV/former-owner markers; the approved website examples are present in the built JavaScript and do not weaken filename, asset, runtime-request, or base-path checks.
- Verification passed: TypeScript, ESLint, 32 test files/130 tests, deterministic `FC_SEED=20260920` replay, root build/verifier, `/student-profile/` build/verifier, exact 13-JPG/one-PDF inventory, prohibited bundle-marker checks, duplicate-file scan, and `git diff --check`.
- No workflow, hosting, dependency, asset, or deployment action changed; no site was deployed.
