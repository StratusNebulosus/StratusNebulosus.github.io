# Stratus Visual Refresh — Generated Code Review

## Result and scope

Notebook offers an open medical editorial presentation; Casebook frames the same content beside a desktop contents rail. Both support full-page and selected-section views, saved independent display choices, dark first-visit default, readable light mode and mobile navigation. The portfolio remains Bui Tuan Phat's medical-student record, with the same eight sections, verified facts, email-draft recipient, 18 gallery records, two interest illustrations and approved CV.

Shared rendering and a stable evidence provider preserve controller state. Real hash links retain modified-click behavior; direct routes override saved layout, history adopts URL state, and layout changes retain the currently read section. Focus is coordinated after drawer/dialog closure. Reduced motion suppresses smooth scrolling. Contact validation and the 5000-character limit remain unchanged.

## Modified application/test files

- `src/App.test.tsx`
- `src/App.tsx`
- `src/components/medical/MedicalNav.tsx`
- `src/components/medical/MedicalShell.test.tsx`
- `src/components/medical/MedicalShell.tsx`
- `src/components/medical/content/MedicalHero.tsx`
- `src/components/medical/content/MedicalSection.tsx`
- `src/components/medical/content/medical-content.css`
- `src/components/medical/content/medicalContentStyles.test.ts`
- `src/components/medical/gallery/EvidencePreviewProvider.tsx`
- `src/components/medical/gallery/medical-gallery.css`
- `src/components/medical/medical-shell.css`
- `src/components/ui/color-mode-utils.ts`
- `src/components/ui/color-mode.tsx`
- `src/hooks/useMedicalLayout.test.ts`
- `src/hooks/useMedicalLayout.ts`
- `src/index.css`
- `src/test/documentationContract.test.ts`
- `src/test/medicalPortfolioRegression.test.tsx`
- `src/theme/applyReducedMotion.test.ts`
- `src/theme/colorModeBootstrap.ts`
- `src/theme/contrastValidation.property.test.ts`
- `src/theme/resolveColorModePreference.test.ts`
- `src/theme/resolveColorModePreference.ts`
- `src/theme/tokens.ts`
- `src/utils/scroll.ts`

## Created application/test files

- `src/components/medical/MedicalDisplayControls.test.tsx`
- `src/components/medical/MedicalDisplayControls.tsx`
- `src/components/medical/MedicalNavigationContext.tsx`
- `src/components/medical/MedicalSectionLink.test.tsx`
- `src/components/medical/MedicalSectionLink.tsx`
- `src/components/medical/MedicalSectionRenderer.test.tsx`
- `src/components/medical/MedicalSectionRenderer.tsx`
- `src/components/medical/gallery/EvidencePreviewProvider.test.tsx`
- `src/components/ui/ColorModeSynchronizer.test.tsx`
- `src/components/ui/ColorModeSynchronizer.tsx`
- `src/data/medical/presentation.ts`
- `src/hooks/useMedicalDisplayPreferences.test.tsx`
- `src/hooks/useMedicalDisplayPreferences.ts`
- `src/theme/colorModeBootstrap.test.ts`
- `src/utils/medicalDisplayPreferences.test.ts`
- `src/utils/medicalDisplayPreferences.ts`
- `src/utils/medicalFocus.test.ts`
- `src/utils/medicalFocus.ts`
- `src/utils/medicalNavigation.test.ts`
- `src/utils/medicalNavigation.ts`

## Documentation and retirement

README.md and DEPLOYMENT.md now describe the styles, route families, preference keys/defaults and current public asset/contact contracts. This summary, generated-code review questions, plan/state progress and appended audit entries provide review evidence. Existing execution/design/requirements artifacts remain authoritative.

No application files, sections or assets were deleted. Removed presentation rules were the inherited blue-tech body surfaces, unused external Google Font import, conflicting old hero rules, pulse decoration and unnecessary repeated shadows. Searches and production graph tests confirmed the medical app's reachable asset boundary. Private source documents, content data, allowlist, asset bytes, package/lock files, build verifier and deployment workflow remain unchanged.

## Concrete verification

- Baseline: 33 test suites / 135 tests, typecheck, lint, root build and verifier passed before implementation.
- Integrated quality run: 43 suites / 157 tests passed with typecheck and lint. A browser finding in sticky-header active-section detection was then fixed with a regression test; the final complete test run passed 43 suites / 158 tests. Final typecheck and lint passed, followed by both production builds and verifiers.
- Documentation assertions were updated afterward; the focused documentation suite passed all six tests. Runtime source was unchanged by documentation work.
- Root and `/StratusNebulosus.github.io/` builds verified exactly 20 approved images and one approved CV. Local production-browser checks confirmed default dark, eight sections, selected-section routing, successful actual JS/CSS/image URLs and PDF responses beginning `%PDF`, including download metadata.
- All 32 combinations of two styles, two layouts, two colors and 320/390/768/1440px widths had no measured horizontal overflow or clipped essential controls.
- Browser checks exercised direct hashes, back/forward, active-scroll section retention, invalid routes, saved light, fresh dark with light OS, corrupt/denied storage, live controls despite failed writes, drawer selection/close, skip link, modal Escape/origin restoration and dialog keyboard trapping.
- Contact checks retained first-invalid focus and 5000-character limit; meaningful draft-encoding tests retained the configured recipient. Reduced-motion browser/test checks confirmed available content and suppressed smooth navigation.
- Computed rendered reading/action pairs had minimum 6.87:1 in light and 8.20:1 in dark across both styles; primary/secondary light reading pairs exceeded 7:1. Essential control borders reached 3.49:1 light and 3.88:1 dark. Preview text/overlay labels and focus treatment were checked.
- Retained property, content, public/private graph, allowlist and production-policy suites passed. Diff/whitespace review passed.

Browser evidence is in `/private/tmp/stratus-visual-refresh/`: responsive.json, interactions.json, contrast.json, resilience.json and production-browser.json. These are local verification artifacts, not public assets.

## Visual review

- [Notebook, dark desktop](/private/tmp/stratus-visual-refresh/notebook-dark-1440.png)
- [Notebook, light mobile](/private/tmp/stratus-visual-refresh/notebook-light-390.png)
- [Casebook, dark desktop](/private/tmp/stratus-visual-refresh/casebook-dark-1440.png)
- [Casebook, light mobile](/private/tmp/stratus-visual-refresh/casebook-light-390.png)
- [Notebook, selected Contact section](/private/tmp/stratus-visual-refresh/notebook-contact-mobile.png)
- [Casebook, selected Contact section](/private/tmp/stratus-visual-refresh/casebook-contact-mobile.png)

## Comparable production sizes

Root-base builds, bytes measured from output; gzip measured using Node zlib:

| Asset | Baseline bytes | Final bytes | Baseline gzip bytes | Final gzip bytes |
| --- | ---: | ---: | ---: | ---: |
| JavaScript | 675330 | 681273 | 194937 | 196728 |
| CSS | 43866 | 44388 | 8917 | 8253 |

The additional route/preference/focus and shared renderer code increases JavaScript by 5943 bytes (1791 gzip). CSS increases by 522 bytes while gzip decreases by 664 bytes. All approved image/PDF filenames, hashes and bytes match baseline. No runtime dependency or new font download was introduced. The existing Vite chunk-over-500-kB advisory remains; no load-time or performance-score improvement is claimed. Browser verification used local desktop Chrome and simulated viewports, not every physical device or assistive technology.

## Story and quality traceability

| Story | Implemented behavior | Evidence |
| --- | --- | --- |
| SV-US-01 | Medical identity and polished introduction | Shared hero/content, desktop/mobile review |
| SV-US-02 | Two styles retaining context | Preference, renderer and app tests; browser matrix |
| SV-US-03 | Layout routes/history/navigation | Route/focus tests; browser direct/history/scroll switch |
| SV-US-04 | Saved choices and safe dark defaults | Preference/bootstrap tests; saved/blocked/corrupt browser cases |
| SV-US-05 | Approved accessible evidence | Provider/modal tests; Escape/origin/trap checks |
| SV-US-06 | Approved CV access | Allowlist/production verification; real PDF URLs |
| SV-US-07 | Validated email draft | Existing contact/property checks; invalid focus/limit review |
| SV-US-08 | Responsive/contrast/keyboard/motion | 32 configurations; rendered ratios; focus/motion checks |
| SV-US-09 | Shared facts/privacy/static maintainability | Graph/content/documentation suites; both builds |

SV-Q-01/12: responsive matrix and screenshots. Q-02: rendered contrast and token/property checks. Q-03/04: named controls, headings, skip/drawer/preview focus. Q-05/06: storage/bootstrap/routes/history/active-section tests. Q-07: reduced-motion behavior. Q-08/11: source/public graph, stable shared rendering and retained suites. Q-09: validated contact draft. Q-10: comparable bundle inventories, unchanged stack and real production assets. All applicable quality checks passed.

## Review status and next stage

All twelve numbered implementation steps and nine story checkboxes are complete. Explicit generated-code approval remains pending. The mandatory Build and Test stage next documents build/test instructions and summaries, reusing this verification unless changes require another run. Nothing has been committed, pushed or deployed for this refresh.

## Extension compliance

Security Baseline: N/A — disabled B in active Extension Configuration. Property-Based Testing: N/A — disabled C. Full optional rules were not loaded. Existing property suites and production privacy policy were enforced independently. No enabled extension has a blocking finding.
