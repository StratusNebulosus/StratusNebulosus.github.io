# Section Heading Refinement - Code Generation Plan

This document is the single source of truth for the approved section-heading refinement in the existing Content Section Components unit. Application code remains at the workspace root; AI-DLC documentation remains under `aidlc-docs/`.

## Unit Context

- **Affected unit**: Unit 4 - Content Section Components, with focused regression validation from Unit 6.
- **Requirements**: FR-02, FR-11, NFR-02, and Acceptance Criteria 8 and 12.
- **User decisions**: Apply the reduction to every shared non-hero section heading; use approximately 3rem desktop, 2.5rem single-column, and 2.1rem narrow-mobile caps; rename the Closing title to `Looking ahead`.
- **Existing story mapping**: Story 11 covers adaptive layout and Story 17 covers the Closing Contact presentation. No new user story is required.
- **Dependencies available**: Existing `MedicalSection`, `ClosingContact`, shared medical content stylesheet, Vitest, Testing Library, fast-check seed replay, Vite builds, and production policy verifier.
- **Interfaces and contracts**: No TypeScript interface, prop, data model, API, database, dependency, asset, or infrastructure change.
- **Workspace root**: `/Users/nhamhhung/student_ports/StratusNebulosus.github.io`.

## Expected Contracts

- `.medical-section-heading h2` uses a shared compact responsive scale capped at approximately `3rem` on desktop, `2.5rem` at the existing `62rem` single-column breakpoint, and `2.1rem` at the existing `30rem` narrow-mobile breakpoint.
- The separate `.medical-hero h1` rules remain unchanged.
- `ClosingContact` supplies the exact visible title `Looking ahead` while retaining section ID, index, eyebrow, tone, contact statement, placeholder cards, and verification notice.
- No navigation, Contact value, semantic structure, theme token, media asset, dependency, or deployment behavior changes.

## Planning Checklist

- [x] Load the approved requirements and focused Workflow Planning addendum.
- [x] Read the existing unit/story mapping and brownfield code structure.
- [x] Inspect the exact component, stylesheet rules, and relevant regression tests.
- [x] Confirm Application Design, Units Generation, Functional Design, NFR Requirements, NFR Design, and Infrastructure Design remain skipped under the approved workflow.
- [x] Confirm all targets already exist and must be modified in place without duplicate variants.
- [x] Assess Property-Based Testing applicability and retain deterministic replay of the existing property suite.
- [x] Validate this Markdown plan, paths, and sequential checklist before creation.
- [x] Log and present the Code Generation plan approval prompt.
- [x] Obtain explicit approval of the complete implementation sequence.

## Execution Steps

- [x] **Step 1 - Pin the compact shared heading scale.** Modify `src/components/medical/content/medicalContentStyles.test.ts` first so its shared-heading safeguard expects a desktop maximum of `3rem`, a single-column maximum of `2.5rem`, and a narrow-mobile maximum of `2.1rem`. Retain the existing 28/72 desktop grid assertion, Contact styling assertions, theme-token checks, and hero separation. Map: Story 11; FR-02; NFR-02; Acceptance Criterion 12.

- [x] **Step 2 - Apply the shared responsive heading scale.** Modify `src/components/medical/content/medical-content.css` in place. Replace only the three `.medical-section-heading h2` font-size declarations with responsive clamps capped at the approved values. Preserve existing breakpoints, layout grid, sticky behavior, typography family/weight/line height, Contact rules, hero `h1`, themes, and reduced-motion behavior. Map: Story 11; FR-02; NFR-02; Acceptance Criterion 12.

- [x] **Step 3 - Pin the concise Closing title.** Modify `src/components/medical/content/MedicalContent.test.tsx` so the Closing Contact test requires an accessible level-two heading named `Looking ahead` and rejects the former long title. Preserve all assertions for exact fictional placeholders, visible status, non-interactivity, prohibited CV-only values, and semantic controls. Map: Story 17; FR-11; Acceptance Criterion 8.

- [x] **Step 4 - Apply the concise Closing title.** Modify `src/components/medical/content/ClosingContact.tsx` in place so its `MedicalSection` title is exactly `Looking ahead`. Do not alter the Closing eyebrow, content data, Contact cards, component props, markup, test IDs, or navigation anchor. Map: Story 17; FR-11; Acceptance Criterion 8.

- [x] **Step 5 - Run focused implementation verification.** Run the focused medical content style and component tests, then inspect the diff to confirm only the planned application/test lines changed, the former title and old heading caps are absent from active source expectations, and no duplicate `_new` or `_modified` file was introduced. Correct any implementation defect before marking this step complete. Map: Stories 11 and 17; NFR-02/NFR-06.

- [x] **Step 6 - Record Code Generation results.** Append the focused implementation evidence to the existing Unit 4 code-generation summary, including modified files, exact responsive caps, Closing title behavior, focused test result, unchanged interfaces/assets/dependencies, PBT applicability, and privacy preservation. Update `aidlc-state.md` and the append-only audit log, then present the standardized generated-code review gate. Map: FR-02/FR-11; Acceptance Criteria 8 and 12.

## Step and Requirement Traceability

| Steps | Primary coverage |
|---|---|
| 1-2 | Story 11; FR-02; NFR-02; Acceptance Criterion 12 |
| 3-4 | Story 17; FR-11; Acceptance Criterion 8 |
| 5 | NFR-06 and focused regression confidence |
| 6 | AI-DLC traceability and review readiness |

## Property-Based Testing Compliance

| Rule | Planning status | Rationale |
|---|---|---|
| PBT-01 | N/A for new coverage | Fixed CSS constants and a fixed title string do not define a meaningful property over generated domain inputs. |
| PBT-02 | N/A | No inverse operation is introduced. |
| PBT-03 | N/A for new coverage | Exact responsive constants and copy are more precisely protected by concrete assertions. |
| PBT-04 | N/A | No idempotent operation is introduced. |
| PBT-05 | N/A | No reference-model or optimized algorithm exists. |
| PBT-06 | N/A | No mutable state or state transition changes. |
| PBT-07 | N/A for new coverage | No new generator domain is introduced. |
| PBT-08 | Compliant | Existing property suites retain shrinking and deterministic `FC_SEED` replay, which Build and Test will execute. |
| PBT-09 | Compliant | Existing fast-check integration remains unchanged. |
| PBT-10 | Compliant | Concrete regression assertions are appropriate for fixed CSS/copy while the broader application retains its property suite. |

No blocking Property-Based Testing finding exists. Security Baseline remains explicitly disabled and is skipped.

## Completion Boundary

After explicit approval, execute Steps 1-6 sequentially and mark each checkbox `[x]` immediately in the same interaction in which that step completes. Modify existing brownfield files in place, create no application-code duplicates, change no dependencies or assets, and do not deploy. The separate Build and Test stage begins only after generated-code review approval.
