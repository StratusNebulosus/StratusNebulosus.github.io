# Integration Test Instructions

## Purpose

Verify that the typed medical data, content components, shared layout, application shell, cross-cutting policy tests, documentation, and production verifier work together as one static portfolio.

No backend, database, container, test server, or external endpoint is required.

## Scenario 1: Typed Contact Data to Rendered Contact Section

- **Description**: Unit 2's `PortfolioContent.contact` is passed through `App` to Unit 4's `ClosingContact`.
- **Run**:

```bash
npx vitest run src/data/medical/content.test.ts src/components/medical/content/MedicalContent.test.tsx src/App.test.tsx
```

- **Expected**: The exact email and phone examples, labels, `Placeholder` statuses, and verification notice render; CV-only values remain absent; no link, button, form, input, `mailto:`, or `tel:` behavior exists.
- **Cleanup**: None.

## Scenario 2: Shared Section Contract Across Content Areas

- **Description**: `MedicalSection`, medical content CSS, shell composition, and navigation preserve all eight section IDs and the compact heading/body hierarchy.
- **Run**:

```bash
npx vitest run src/components/medical/content/MedicalContent.property.test.tsx src/components/medical/content/medicalContentStyles.test.ts src/App.test.tsx
```

- **Expected**: Generated section content preserves one associated `h2` and one body; desktop CSS contains the 28/72 grid and a 3rem shared-heading cap; single-column and narrow-mobile overrides cap headings at 2.5rem and 2.1rem; all eight application sections remain ordered.
- **Cleanup**: None.

## Scenario 3: Application Graph, Privacy Policy, and Documentation

- **Description**: Unit 6 verifies that the production graph requires approved website placeholders while continuing to prohibit CV-only/former-owner markers and that repository guidance explains the same boundary.
- **Run**:

```bash
npx vitest run src/test/medicalPortfolioRegression.test.tsx src/test/productionGraph.test.ts src/test/documentationContract.test.ts
```

- **Expected**: Full-app Contact content is present and non-actionable; retired identities/features remain absent; production imports stay within the medical graph; README/deployment guidance matches implementation.
- **Cleanup**: None.

## Scenario 4: Static Production Output

- **Description**: The complete Vite bundle satisfies the asset, privacy, runtime-request, and base-path contract.
- **Run**:

```bash
npm run build
npm run verify:dist
VITE_BASE_PATH=/student-profile/ npm run build
EXPECTED_BASE_PATH=/student-profile/ npm run verify:dist
```

- **Expected**: Both path forms pass with 16 approved JPG files, three approved WebP illustrations, one approved CV PDF, allowed Contact copy, no prohibited markers, and all local URLs inside the expected base path.
- **Cleanup**: No cleanup is required; a later build replaces `dist/`.

## Full Integration Gate

```bash
npm run quality
npm run build
npm run verify:dist
```

Use the full gate after any focused scenario passes to catch interactions outside the immediate files.
