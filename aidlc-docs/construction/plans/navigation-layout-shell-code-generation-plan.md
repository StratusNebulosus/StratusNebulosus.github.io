# Unit 3: Navigation & Layout Shell - Code Generation Plan

This document is the single source of truth for Unit 3 code generation. Application code belongs under the workspace root; only this plan and the completion summary belong under `aidlc-docs/`.

## Unit Context

- **Primary stories**: Story 2, unified medical design with no engineering/business identity; Story 3, confident navigation across devices and input methods.
- **Requirements**: FR-01, FR-03, FR-12, FR-14; NFR-01, NFR-02, NFR-04, NFR-05, NFR-06, and NFR-07.
- **Dependencies available**: Unit 1 medical theme tokens and color-mode bootstrap; Unit 2 typed medical content and explicit public-asset allowlist.
- **Owned interfaces**: medical section registry, `getMedicalNavigationHref`, `navigateToMedicalSection`, `useMedicalLayout`, `MedicalNav`, and `MedicalShell`.
- **Database/API ownership**: none; this is a static React/Vite unit with no backend, persistence model, or network API.
- **Downstream consumers**: Unit 4 supplies the final bodies for the non-gallery section slots; Unit 5 supplies the Evidence Gallery body; Unit 6 performs cross-cutting regression and documentation verification.

## Design Reference Synthesis

The implementation will preserve proven interaction qualities without copying either source literally:

| Source | Qualities retained | Medical adaptation |
|---|---|---|
| Initial repository design | Sticky branded navigation, active-section tracking, Chakra mobile Drawer, persistent color-mode control, stable hash links, responsive containers, stable test IDs | Remove template/layout selectors and technical labels; use the approved medical section names and token system. |
| `../TranGiaMinhTam.github.io/` | Calm editorial spacing, indexed navigation rhythm, visible current-location treatment, skip-link-first structure, thin rule lines, restrained surface layering, strong section anchors | Replace specimen/research language and biology motifs with warm clinical-humanities cues, subtle pulse/line details, and Bui Tuan Phat's medical identity. |
| Approved medical requirements | Warm ivory, deep teal, surgical green, restrained burgundy, editorial serif headings, readable sans-serif controls, light/dark parity | Apply only named Unit 1 tokens, visible focus, 44-pixel targets, reduced motion, and no emergency-red or stock-hospital styling. |

The result should feel composed, credible, warm, and professional at 320-pixel mobile widths through wide desktop layouts. Unit 3 creates the complete shell and temporary accessible section structure; Units 4 and 5 replace the staged bodies without changing the navigation contract.

## Execution Steps

- [x] **Step 1 - Define the medical navigation contract.** Extend `SectionId` in `src/types/portfolio.ts` with the five approved medical-specific IDs while retaining legacy IDs needed by not-yet-retired source modules. Create `src/data/medical/navigation.ts` with the ordered eight-item medical registry, its narrowed medical ID type, and enabled-item exports. Map: Story 3, FR-03, PBT-01/PBT-03.
- [x] **Step 2 - Implement single-mode medical navigation helpers.** Create `src/hooks/useMedicalLayout.ts` with `getMedicalNavigationHref`, `navigateToMedicalSection`, and `useMedicalLayout`; reuse `scrollToSection`/`useActiveSection`, emit only plain `#sectionId` hashes, and never read template or layout-mode storage. Map: Stories 2-3, BR-1 through BR-4, NFR-05.
- [x] **Step 3 - Add navigation helper tests and domain generators.** Create a reusable medical navigation arbitrary under `src/test/arbitraries/medicalNavigation.ts`, an example test for direct hash/scroll behavior, and a `fast-check` property test for registry uniqueness, ordered membership, the `#sectionId` reference model, and nav/target agreement. Keep automatic shrinking and seed replay enabled. Map: Story 3, NFR-06/NFR-07, PBT-03/PBT-05/PBT-07/PBT-08/PBT-10.
- [x] **Step 4 - Build `MedicalNav`.** Create `src/components/medical/MedicalNav.tsx` with a professional branded lockup, indexed desktop links, active `aria-current`, Unit 1 color-mode control, passive scroll-state styling, and an accessible Chakra Drawer for compact widths. Preserve stable `data-testid` values and 44-by-44-pixel control targets. Map: Stories 2-3, FR-03/FR-12, BR-4/BR-5/BR-7.
- [x] **Step 5 - Build `MedicalShell` and its visual system.** Create `src/components/medical/MedicalShell.tsx` and `src/components/medical/medical-shell.css`; render the skip link first, then the sticky navigation and `main#main-content`. Use only named medical tokens, editorial hierarchy, restrained clinical line/pulse motifs, responsive spacing, visible focus states, and reduced-motion fallbacks. Draw on the initial layout and sibling portfolio's calm rule-based composition while avoiding their engineering, business, specimen, and research identities. Map: Story 2, FR-01/FR-02/FR-03/FR-14, NFR-01/NFR-02/NFR-04.
- [x] **Step 6 - Verify shell and navigation behavior.** Create colocated Testing Library tests for skip-link ordering, landmarks, all eight links, active-state exclusivity, link activation, mobile open/close behavior, Drawer focus containment/restoration, theme-control presence, and absence of retired selector/toggle controls. Add the rendering invariant property test using the domain generator from Step 3. Map: Stories 2-3, NFR-06/NFR-07, PBT-03/PBT-07/PBT-08/PBT-10.
- [x] **Step 7 - Simplify `App` around the medical shell.** Modify `src/App.tsx` to remove template selection, multi-page layout, and journal-route orchestration; compose `MedicalShell` with the ordered medical navigation registry and temporary accessible section anchors whose IDs exactly match the registry. Keep staged bodies explicit and easy for Units 4-5 to replace. Map: Stories 2-3, FR-01/FR-03/FR-14.
- [x] **Step 8 - Replace obsolete app integration expectations.** Update `src/App.test.tsx` to cover the unified medical shell, medical identity/navigation contract, all eight ordered anchors, plain-hash navigation, stale preference inertness, light/dark control continuity, and the absence of engineering/business/template/layout controls. Remove assertions tied only to retired projects, journals, résumé downloads, and multi-page routes. Map: Stories 2-3, NFR-06.
- [x] **Step 9 - Retire the old shell/navigation path.** Delete the now-unreferenced `src/templates/` tree, `src/components/Navbar.tsx`, `src/components/shared/PortfolioStyleSelector.tsx`, `src/data/template.ts`, `src/hooks/usePortfolioLayout.ts`, its test, `src/utils/templateSelection.ts`, and its test. Remove remaining direct imports of these retired modules while leaving Unit 4's legacy content components for that unit's controlled replacement. Map: Story 2, FR-01/FR-14, NFR-04.
- [x] **Step 10 - Retarget accessibility/style regression checks.** Update `src/themeAccessibility.test.ts` and any affected source-scan assertions to inspect `medical-shell.css` and the new medical components, checking named tokens, focus visibility, touch targets, reduced motion, and absence of legacy literal palettes or identities. Map: Story 2, NFR-01/NFR-04/NFR-06.
- [x] **Step 11 - Verify the unit.** Run TypeScript build checking, ESLint, the complete Vitest suite (including property tests with replay information), and the Vite production build. Confirm no duplicate `_new`/`_modified` files, no runtime import from retired template/layout modules, no horizontal-overflow rule at 320 pixels, and no newly bundled prohibited CV asset. Resolve every failure before marking this step complete. Map: Stories 2-3, NFR-01 through NFR-07.
- [x] **Step 12 - Document implementation results.** Create `aidlc-docs/construction/navigation-layout-shell/code/code-generation-summary.md` listing created, modified, and removed files; test/build evidence; reference-design decisions; deferred Unit 4/5 section-body work; privacy-boundary result; and extension compliance. Map: Stories 2-3.

## Property-Based Testing Compliance

| Rule | Planning status | Rationale |
|---|---|---|
| PBT-01 | Compliant | Functional Design now identifies registry, hash-model, rendering, and nav/target agreement properties and explicit N/A cases. |
| PBT-02 | N/A | No production parser or inverse pair remains; slash-route parsing is deliberately removed. |
| PBT-03 | Compliant | Steps 3 and 6 test registry, active-state, and nav/target invariants across domain-generated inputs. |
| PBT-04 | N/A | No operation in this unit claims idempotency. |
| PBT-05 | Compliant | Step 3 compares hash generation with the simple approved `#sectionId` reference model. |
| PBT-06 | N/A | The only mutable interaction state is Chakra Drawer's library-managed state; no custom state machine is introduced. |
| PBT-07 | Compliant | Step 3 creates one reusable generator constrained to valid medical section IDs/navigation structures. |
| PBT-08 | Compliant | The existing `fast-check`/Vitest setup retains shrinking and replay seed output; Step 11 runs it in the full suite. |
| PBT-09 | Compliant | `fast-check` is already documented and installed as a development dependency. |
| PBT-10 | Compliant | Steps 3, 6, and 8 pair general properties with concrete interaction and regression examples. |

No blocking PBT finding remains in this plan. Security Baseline is disabled in the active Extension Configuration and is therefore skipped.

## Completion Boundary

After explicit approval, execute Steps 1-12 sequentially and mark each checkbox `[x]` immediately in the same interaction in which the step completes. Do not implement Unit 4 content bodies or Unit 5 gallery behavior during this unit.
