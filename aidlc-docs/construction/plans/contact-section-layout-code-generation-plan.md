# Contact Section and Shared Header - Code Generation Plan

This document is the single source of truth for the approved Contact and shared-section hierarchy change across existing Units 2, 4, and 6. Application code remains at the workspace root; AI-DLC implementation summaries remain under `aidlc-docs/`.

## Unit Context

- **Primary stories**: Story 11 (adaptive layout) and Story 17 (clearly fictional Contact placeholders), with Story 1 retaining CV-versus-website placeholder separation.
- **Requirements**: FR-02, FR-04, FR-11, FR-13, FR-15, NFR-01, NFR-02, NFR-04, NFR-06, NFR-07, and Acceptance Criteria 8 and 12-15.
- **Affected existing units**: Unit 2 (typed content), Unit 4 (content components and shared CSS), and Unit 6 (cross-cutting regression tests and documentation).
- **Dependencies available**: Existing typed medical content, `MedicalSection`, `ClosingContact`, eight-section composition, theme tokens, Vitest/Testing Library, fast-check seed replay, privacy guards, production verifier, and GitHub Pages workflow.
- **Owned interfaces**: `PortfolioContent.contact`, `ContactSectionData`, `ContactChannelData`, `getContactContent()`, `ClosingContact`, shared `.medical-content-section` and `.medical-section-heading h2` rules, policy fixtures, and contributor documentation.
- **Database/API/infrastructure ownership**: None. This remains a static React/Vite application with no backend, persistence, runtime content fetch, dependency addition, asset change, or deployment change.
- **Workspace root**: `/Users/nhamhhung/student_ports/StratusNebulosus.github.io`.

## Expected Contracts

- `PortfolioContent` replaces `closingStatement` with a structured `contact: ContactSectionData` field.
- `ContactSectionData` owns the reflective statement, exact two fictional channels, and verification notice.
- `ContactChannelData` owns an ID, `email`/`phone` kind, visible label, plain-text value, and literal `Placeholder` status; it has no URL or action field.
- `ClosingContact` receives the complete Contact object and renders a semantic list of non-focusable, non-interactive cards.
- Shared content sections retain header-then-body DOM order while desktop CSS allocates approximately 28/72 of usable grid width and caps shared `h2` headings near `4rem`.
- The CV-only values and former-owner contact details remain prohibited; the separate approved website placeholders remain required.

## Planning Checklist

- [x] Load the approved Workflow Plan, Stories 1/11/17, focused Functional Design, and affected source/tests/docs.
- [x] Confirm NFR Requirements, NFR Design, and Infrastructure Design remain skipped under the approved workflow.
- [x] Confirm existing Unit 2, Unit 4, and Unit 6 boundaries and dependency order remain valid.
- [x] Identify every existing file to modify and confirm no duplicate/new application variant is needed.
- [x] Carry PBT-01 properties into explicit example/property test steps.
- [x] Validate this Markdown plan and its paths before creation.
- [x] Log and present the Code Generation plan approval prompt.
- [x] Obtain explicit approval of the complete implementation sequence.

## Execution Steps

- [x] **Step 1 - Extend the typed Contact content contract (Unit 2).** Modify `src/types/medicalPortfolio.ts` to add `ContactChannelKind`, `ContactChannelData`, and `ContactSectionData`, and replace `PortfolioContent.closingStatement` with `PortfolioContent.contact`. Modify `src/data/medical/content.ts` to add the exact approved Email and Phone placeholder records, visible `Placeholder` statuses, reflective statement, verification notice, and pure `getContactContent()` selector. Do not add an `href`, URI, action, form, asset, dependency, or runtime request. Map: Stories 1/13/17; FR-04/FR-11/FR-13/FR-15; Unit 2 BR-10 through BR-14.

- [x] **Step 2 - Update Unit 2 content and privacy verification.** Modify `src/data/medical/content.test.ts` to pin the exact approved website placeholders, labels/status, verification notice, field completeness, and absence of action metadata while continuing to reject the CV-only values. Keep `src/data/medical/privacyGuard.test.ts` focused on prohibiting the CV-only phone/email values and confirm the new website values do not weaken its source boundary. Update any content allowlist/private-field tests only where the new typed strings legitimately enter `content`; no asset expectation changes. Map: Stories 1/13/17; NFR-04/NFR-06; Acceptance Criteria 8/15.

- [x] **Step 3 - Render the semantic non-interactive Contact presentation (Unit 4).** Modify `src/components/medical/content/ClosingContact.tsx` to accept `ContactSectionData`, render the statement, a semantic list of plain-text channel cards, visible label/value/`Placeholder` status, and verification notice. Modify `src/App.tsx` to pass `content.contact`. Do not add anchors, buttons, form controls, handlers, focus targets, `mailto:`, `tel:`, or duplicated fallback values. Map: Story 17; FR-11; Unit 4 BR-12 through BR-14.

- [x] **Step 4 - Rebalance shared section layout and heading scale (Unit 4).** Modify `src/components/medical/content/medical-content.css` so desktop shared sections use an approximately 28/72 header/body grid with a restrained gap, shared desktop `h2` headings cap near `4rem`, the existing single-column breakpoint reduces heading scale/gap and disables stickiness, and the narrow-mobile breakpoint reduces heading scale again. Add professional Contact-card styling using existing medical tokens only, preserve light/dark parity, source reading order, 320-pixel overflow protection, reduced-motion behavior, and the hero's separate `h1` hierarchy. Map: Story 11; FR-02; NFR-01/NFR-02.

- [x] **Step 5 - Add concrete Contact component and CSS examples (Unit 4).** Modify `src/components/medical/content/MedicalContent.test.tsx`, `src/App.test.tsx`, and `src/components/medical/content/medicalContentStyles.test.ts`. Pin exact values and visible placeholder status; assert the Contact section contains no link/button/form/input/textarea/select and no `mailto:`/`tel:`; retain CV-only/former-owner prohibitions; assert the 28/72 desktop rule, near-4rem cap, and smaller breakpoint overrides exist. Use semantic queries for non-interactive content rather than manufacturing interaction test IDs. Map: Stories 1/11/17; NFR-01/NFR-02/NFR-06; Acceptance Criteria 8/12/14.

- [x] **Step 6 - Add complementary Contact and section-structure properties (Unit 4).** Modify `src/test/arbitraries/medicalContent.ts` with reusable domain-constrained Contact and safe section-copy generators. Modify `src/components/medical/content/MedicalContent.property.test.tsx` so generated valid Contact data preserves channel/card count, renders every label/value/status exactly once, and never creates actionable elements or URI attributes; extend the `MedicalSection` property to preserve exactly one associated `h2` and one body for generated safe copy. Keep fast-check shrinking and seed replay enabled. Map: Stories 11/17; NFR-07; PBT-01/PBT-03/PBT-07/PBT-08/PBT-10.

- [x] **Step 7 - Update cross-cutting policy regressions (Unit 6).** Modify `src/test/medicalPortfolioRegression.test.tsx`, `src/test/productionGraph.test.ts`, and `src/test/medicalPortfolioPolicy.ts` only as needed to distinguish required website placeholders from prohibited CV-only/former-owner markers. The full application must require the approved Contact values and continue rejecting `testemail@gmail.com`, `123456789`, former-owner details, retired UI, dynamic asset discovery, and runtime requests. Keep `scripts/production-build-policy.mjs` rejecting only the prohibited markers; do not add the approved website placeholders to its denylist. Map: Stories 1/14/17; FR-11/FR-15; NFR-06; Acceptance Criteria 8/14/17.

- [x] **Step 8 - Align contributor documentation and documentation contracts (Unit 6).** Modify `README.md` so the eighth section describes the labeled, non-interactive fictional Contact examples and the public/private guidance distinguishes them from CV-only placeholder values. Modify `src/test/documentationContract.test.ts` to pin that distinction and the safe replacement workflow. Update `DEPLOYMENT.md` only if it currently makes a contradictory placeholder claim. Map: Stories 15/17; FR-11/FR-16; Acceptance Criteria 8/18.

- [x] **Step 9 - Verify the integrated change and production output.** Run focused tests during implementation, then `npm run typecheck`, `npm run lint`, the complete Vitest suite, deterministic `FC_SEED` replay, root-path production build plus verifier, project-path production build plus verifier, privacy/source scans, dependency/runtime-request checks, duplicate-file checks, and `git diff --check`. Confirm the production bundle contains the approved website placeholders, excludes CV-only/former-owner values, retains exactly 13 approved JPGs and one approved CV PDF, and introduces no new dependency or asset. Resolve every finding before completion. Map: Stories 11/14/16/17; all applicable NFRs; PBT-08.

- [x] **Step 10 - Record implementation results and traceability.** Append focused change-control results to the existing Unit 2, Unit 4, and Unit 6 code-generation summaries. Record modified files, test/build counts, seed replay, bundle/privacy results, unchanged asset inventory, responsive/contact behavior, and extension compliance. Mark Story 17 implemented and update Story 11's implementation evidence only after Steps 1-9 pass. Update `aidlc-state.md` and the append-only audit. Map: Stories 11/17; all affected requirements.

## Story and Requirement Traceability

| Steps | Primary coverage |
|---|---|
| 1-3 | Story 17; FR-11/FR-13; Acceptance Criterion 8 |
| 2, 5, 7 | Story 1; FR-04/FR-15; CV-versus-website placeholder separation |
| 4-6 | Story 11; FR-02; NFR-01/NFR-02; Acceptance Criterion 12 |
| 6-7, 9 | Story 14; NFR-06/NFR-07; Acceptance Criteria 14-15 |
| 8 | Story 15; FR-16; Acceptance Criterion 18 |
| 9 | Story 16; NFR-05/NFR-08; Acceptance Criteria 16-17 |

## Property-Based Testing Compliance

| Rule | Planning status | Rationale |
|---|---|---|
| PBT-01 | Compliant | Focused Functional Design identifies Contact exact-count/non-interactivity and `MedicalSection` one-heading/one-body invariants; Step 6 implements them. |
| PBT-02 | N/A | No inverse serialization, encoding, or parsing operation is introduced. |
| PBT-03 | Compliant | Step 6 verifies all identified rendering invariants over generated valid domain data. |
| PBT-04 | N/A | No operation claims or requires idempotence. |
| PBT-05 | N/A | No optimized/reference algorithm pair exists. |
| PBT-06 | N/A | Contact and shared sections remain stateless and prop-driven. |
| PBT-07 | Compliant | Step 6 requires reusable, constrained Contact and section-copy generators rather than raw primitive-only inputs. |
| PBT-08 | Compliant | Existing fast-check shrinking and `FC_SEED` replay remain enabled and are exercised in Step 9. |
| PBT-09 | Compliant | Existing fast-check with Vitest remains installed and selected; no framework change is needed. |
| PBT-10 | Compliant | Steps 2/5/7 provide concrete critical examples while Step 6 supplies complementary properties in the property-test file. |

No blocking PBT finding exists. Security Baseline remains disabled and is skipped.

## Completion Boundary

After explicit approval, execute Steps 1-10 sequentially and mark each checkbox `[x]` immediately in the same interaction in which that step completes. Modify existing brownfield files in place, create no `_new`/`_modified` duplicates, do not change the public asset inventory, and do not deploy the site. After generated-code review approval, proceed to the separate AI-DLC Build and Test stage.
