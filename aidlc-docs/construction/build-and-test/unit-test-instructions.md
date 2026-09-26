# Unit Test Execution Instructions

## Purpose

Run the complete example-based and property-based suite protecting medical content, theming, navigation, Contact semantics, gallery behavior, privacy boundaries, production policy, documentation, and GitHub Pages compatibility.

## Run All Tests

```bash
npm test
```

Verified result after the section-heading refinement:

- 32 test files passed.
- 130 tests passed.
- 0 failures.

Vitest reports results in the terminal. Coverage instrumentation is not configured, so no coverage percentage or report path is claimed.

## Run the Focused Section-Heading Suite

```bash
npx vitest run src/components/medical/content/medicalContentStyles.test.ts src/components/medical/content/MedicalContent.test.tsx
```

Verified result: 2 files and 10 tests passed.

This group covers the exact shared responsive heading caps, the accessible `Looking ahead` title, exact Contact values, CV-placeholder separation, and semantic non-interactivity.

## Reproduce Property Tests Deterministically

Normal execution uses fast-check with shrinking and verbose failure details. Replay the verified seed with:

```bash
FC_SEED=20260921 npm test
```

Verified result: 32 files and 130 tests passed. When a future property fails, retain the reported signed 32-bit seed and shrunk counterexample, fix the defect, add the minimal case as an example regression when appropriate, and replay before returning to randomized execution.

## Quality Gate

```bash
npm run quality
```

This is the authoritative combined source gate: TypeScript, ESLint, and the complete Vitest suite. The GitHub Pages workflow runs the same command before building.

## Failure Recovery

1. Read the first failing test and its assertion output.
2. Rerun only that test file.
3. Fix production code unless the approved behavior itself changed.
4. For a property failure, replay its seed and preserve shrinking.
5. Run the focused section-heading suite when relevant.
6. Run `npm run quality` before considering the issue resolved.
