# Unit and Property Test Instructions — Stratus Visual Refresh

## Complete suite

```bash
npm test
```

Recorded final result: 43 suites and 158 tests passed, zero failures. Vitest prints its results to the terminal; coverage instrumentation is not configured, so no coverage percentage is claimed.

Meaningful checks cover preference normalization/blocked storage, theme bootstrap, route families, focus scheduling, section composition, controls, gallery data/evidence, contact draft encoding and privacy/build policy. Existing fast-check properties remain required.

## Focused changes

```bash
npm test -- src/utils/medicalNavigation.test.ts src/utils/medicalDisplayPreferences.test.ts src/utils/medicalFocus.test.ts src/theme/colorModeBootstrap.test.ts
npm test -- src/test/documentationContract.test.ts
```

The updated documentation contract separately passed six tests after the final runtime run.

## Property failure replay

```bash
FC_SEED=<reported-seed> npm test
```

Replace the placeholder with the reported signed 32-bit seed. Preserve the shrunk counterexample, repair the defect, replay the failed property and run the relevant integration checks. This replay example is guidance; no new seeded run is claimed for this stage.

## Combined source gate

```bash
npm run quality
```

Final runtime typecheck, lint and full test suite passed during Code Generation. This stage reuses those results because no runtime source changed. Instructions/history updates do not require another complete run.

## Extension compliance

Security Baseline: N/A — disabled B. Property-Based Testing: N/A — disabled C. Existing property suites and production privacy policy remain enforced. No enabled-extension blocking finding.
