# Unit 3: Navigation & Layout Shell - Code Generation Summary

## Outcome

Unit 3 now provides one unified, responsive medical portfolio shell. The public rendering path no longer depends on engineering/business templates, a portfolio-style selector, a multi-page layout toggle, or their persisted preferences. All 12 approved code-generation steps are complete.

## Created Application Files

- `src/data/medical/navigation.ts` - ordered eight-section medical navigation contract and narrowed medical section type.
- `src/hooks/useMedicalLayout.ts` - plain-anchor creation and single-page navigation orchestration.
- `src/hooks/useMedicalLayout.test.ts` - concrete hash, scrolling, and state-shape tests.
- `src/hooks/useMedicalLayout.property.test.ts` - registry, hash-model, and nav/target invariant properties.
- `src/test/arbitraries/medicalNavigation.ts` - reusable domain-specific `fast-check` generators.
- `src/components/medical/MedicalNav.tsx` - sticky indexed desktop navigation, mobile Chakra Drawer, active state, and color-mode control.
- `src/components/medical/MedicalShell.tsx` - skip-link-first semantic shell and main landmark.
- `src/components/medical/medical-shell.css` - responsive clinical-humanities visual system using named medical tokens.
- `src/components/medical/MedicalShell.test.tsx` - semantic, interaction, focus-restoration, active-state, and property coverage.

## Modified Application Files

- `src/App.tsx` - simplified to the medical shell and eight ordered structural section targets.
- `src/App.test.tsx` - replaced legacy template/layout expectations with unified medical integration coverage.
- `src/types/portfolio.ts` - extended the shared section union while keeping the legacy content-data type constrained until Unit 4 retirement.
- `src/components/ui/color-mode-utils.ts` - synchronizes the `data-color-mode` token selector with the retained light/dark control.
- `src/components/JournalPostPage.tsx` - removed its dependency on retired template types; the legacy component remains isolated for Unit 4 cleanup.
- `src/themeAccessibility.test.ts` - retargeted source-level accessibility and style regressions to the medical shell.

## Retired Files

- Entire `src/templates/` tree, including Engineering and Business shells, registries, options, types, styles, and tests.
- `src/components/Navbar.tsx` and `src/components/shared/PortfolioStyleSelector.tsx`.
- `src/data/template.ts`.
- `src/hooks/usePortfolioLayout.ts` and its test.
- `src/utils/templateSelection.ts` and its test.

Legacy content-area components remain temporarily isolated and unreferenced, as approved; Unit 4 replaces and removes them while installing the final medical section bodies. Unit 5 supplies the Evidence Gallery body.

## Design Reference Decisions

- Retained the initial repository's predictable active-section behavior, Chakra Drawer interaction, persistent theme control, stable test hooks, and direct hash navigation.
- Adapted the sibling `TranGiaMinhTam.github.io` portfolio's indexed navigation cadence, generous editorial spacing, skip-link-first structure, fine rule lines, and composed surface hierarchy.
- Replaced all technical, business, specimen, and research language with the approved medical information architecture.
- Expressed the medical identity through warm editorial typography, deep teal/surgical green accents, restrained burgundy focus/current-state cues, and a subtle clinical cross-and-line mark.
- Preserved a compact 320-pixel layout, 44-by-44-pixel controls, visible focus, passive scroll handling, and reduced-motion behavior.

## Verification Evidence

- `npx tsc -b`: passed.
- `npm run lint`: passed.
- `npm test`: 16 test files passed, 57 tests passed.
- `npm run build`: passed; Vite transformed 1,386 modules and produced the static site bundle.
- `git diff --check`: passed.
- No `_new` or `_modified` duplicate files exist.
- No production source import references the retired template registry, selector, or layout hook.
- The production asset list contains only the approved portrait, approved evidence images, CSS, and JavaScript. No prohibited identity, immigration, academic-record, admission, or `dontuse` filename is present.
- Vite reports a non-blocking JavaScript chunk-size advisory (636.59 kB minified, 185.16 kB gzip); no performance budget was violated in this unit, and later content/gallery work remains responsible for final bundle optimization.

## Story Completion

- [x] Story 2 - one cohesive medical shell, with retired selector/layout paths absent and stale preferences inert.
- [x] Story 3 - sticky desktop and accessible mobile navigation, plain GitHub Pages-safe anchors, active `aria-current`, color mode, and skip link.

## Extension Compliance

| Rule | Result | Evidence |
|---|---|---|
| Security Baseline | Skipped | Disabled in the active Extension Configuration. |
| PBT-01 | Compliant | Testable properties are documented in Functional Design. |
| PBT-02 | N/A | No production parser or inverse operation remains. |
| PBT-03 | Compliant | Registry, hash, active-state, and nav/target invariants are tested. |
| PBT-04 | N/A | No operation claims idempotency. |
| PBT-05 | Compliant | Hash generation is checked against the approved plain-string reference model. |
| PBT-06 | N/A | No custom mutable domain state machine exists; Chakra owns Drawer state. |
| PBT-07 | Compliant | Reusable generators are constrained to valid medical IDs and navigation structures. |
| PBT-08 | Compliant | `fast-check` shrinking and seed replay remain enabled; the full suite executes the properties. |
| PBT-09 | Compliant | `fast-check` is installed and integrated with Vitest. |
| PBT-10 | Compliant | Property tests complement concrete hash, rendering, interaction, focus, and integration examples. |

No blocking extension finding remains.
