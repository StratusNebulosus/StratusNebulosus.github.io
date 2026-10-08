# Integration Test Instructions — Stratus Visual Refresh

## Setup and execution

One React frontend unit composes shared medical data, shell/navigation, section renderer, display preferences, evidence provider and contact form. No backend, database or external endpoint is required.

```bash
npm test -- src/App.test.tsx src/hooks/useMedicalLayout.test.ts src/components/medical/MedicalShell.test.tsx src/components/medical/gallery/EvidencePreviewProvider.test.tsx src/test/medicalPortfolioRegression.test.tsx
npm test -- src/test/productionGraph.test.ts src/test/productionBuildPolicy.test.ts src/test/documentationContract.test.ts
```

These suites passed within the final complete test run; documentation assertions also passed after their update.

## Scenarios and expected behavior

1. App/preferences/theme: both styles reuse facts; fresh users receive Notebook/full-page/dark, saved light wins, corrupt or denied storage does not prevent live controls.
2. App/routes/focus: #science selects full-page and #/science selected-section layout over saved layout. Back/forward follows route state. Switching views after scrolling to Science preserves Science. Unknown sections recover Overview. Skip focuses main without hash mutation.
3. Shell/drawer/preview: selection closes the mobile drawer before focusing the mounted heading. Cancel restores its trigger. Ordinary preview close/Escape restores a connected origin; view/context changes close stale preview state and use a safe mounted target.
4. Contact/data: the configured recipient is buituanphat123456@gmail.com. Required-field/email checks focus the first invalid field; messages have a 5000-character limit and open an encoded local email draft. No server send/delivery claim is introduced.
5. Data/output/docs: exact public graph includes 18 gallery JPGs, two interest WebPs and a separate approved CV. Private/dontuse source files and former-owner markers remain excluded. README and deployment guidance describe the current controls and release gates.

## Static output integration

```bash
npm run build
npm run verify:dist
VITE_BASE_PATH=/StratusNebulosus.github.io/ npm run build
EXPECTED_BASE_PATH=/StratusNebulosus.github.io/ npm run verify:dist
```

Both recorded outputs passed with 20 approved images, one approved PDF and correct base paths. Real local production-browser JS/CSS/image/PDF URLs resolved successfully in both forms. Tests clean up their mounted components; a subsequent build replaces dist. For browser workflow reproduction see e2e-test-instructions.md.

## Extension compliance

Security Baseline: N/A — disabled B. Property-Based Testing: N/A — disabled C. Existing property suites and production privacy policy remain enforced. No enabled-extension blocking finding.
