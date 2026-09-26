# Visual Showcase and Evidence Enhancement Code Generation Plan

This document is the single source of truth for Code Generation of the approved Visual Showcase and Evidence Enhancement change. It modifies the existing brownfield React/Vite application in place; application code remains at the workspace root and only Markdown summaries belong under `aidlc-docs/`.

## Unit Context

- **Change unit**: Visual Showcase and Evidence Enhancement across the existing Content Section Components, Evidence Gallery, Navigation/Layout Shell, and Testing/Documentation boundaries.
- **Workspace**: `/Users/nhamhhung/student_ports/StratusNebulosus.github.io`
- **Project type**: Brownfield React 19, TypeScript, Chakra UI, CSS, Vitest, and Vite static portfolio.
- **Stories**: User Stories were explicitly skipped. Traceability is directly to FR-02, FR-06, FR-08, FR-10, FR-17; NFR-01 through NFR-08; and Acceptance Criteria 12 and 19-24.
- **Dependencies**: Existing Chakra Dialog primitives, medical theme tokens, allowlisted gallery metadata, `medicalGallery` state utilities, React Testing Library, Vitest, and the existing Vite/GitHub Pages configuration. No new package is permitted or required.
- **Interfaces and contracts**: `GalleryItemData`, `AwardEntryData`, `GallerySelectionState`, `validateGalleryCollection`, `resolveGalleryItem`, `transitionGalleryState`, `GalleryModal`, `MedicalSection`, and the existing medical navigation/content props remain authoritative.
- **Database entities**: None. The site remains static and data-file driven.
- **Service boundary**: One shared client-side evidence-preview controller owns selection, failed-image state, trigger registration, dialog rendering, and focus restoration for award and gallery entry points. Presentation components consume that controller and do not create independent dialogs.

## Generation Approach

- Implement behavior with example-based regressions first where practical, then update production components and CSS.
- Match award evidence to the existing validated gallery record by the allowlisted asset value, avoiding duplicate metadata or a new content model.
- Keep awards without approved imagery visible with an explicit unavailable status.
- Apply visual refinement through existing medical tokens and shared classes; do not copy the reference site's identity, assets, code, or typography.
- Preserve all existing privacy, navigation, theme, content-order, reduced-motion, production-graph, and base-path contracts.

## Detailed Execution Plan

### Part 1 - Planning

- [x] **Step 1: Confirm the brownfield unit context and readiness.** Read the active AI-DLC state, approved requirements, refreshed reverse-engineering artifacts, and focused execution-plan addendum; confirm that all prerequisite approval and skip decisions are recorded.
- [x] **Step 2: Map implementation ownership and dependencies.** Confirm the shared evidence-controller boundary, existing gallery state utilities, award-to-gallery asset mapping, CSS ownership, current tests, and absence of database, API, package, or infrastructure changes.
- [x] **Step 3: Define requirement and acceptance-criterion traceability.** Map the generation sequence to FR-02, FR-06, FR-08, FR-10, FR-17; NFR-01 through NFR-08; and Acceptance Criteria 12 and 19-24.
- [x] **Step 4: Define exact production and test paths.** Record all expected in-place edits and the one permitted new shared controller module under `src/components/medical/gallery/`; prohibit modified-copy or duplicate component files.
- [x] **Step 5: Create and validate this executable plan.** Verify sequential numbering, checkbox coverage, Markdown parsing, path placement, and no unsupported Mermaid or special-character content.
- [x] **Step 6: Obtain explicit approval for the complete Code Generation plan.** Do not change application code until the user approves this full sequence.

### Part 2 - Generation

- [x] **Step 7: Add shared evidence-view interaction regressions.** Update `src/components/medical/gallery/EvidenceGallery.test.tsx`, `src/components/medical/content/MedicalContent.test.tsx`, and where integration coverage is clearest `src/App.test.tsx` to require: one shared dialog; award activation; same-source metadata; close and Escape behavior; originating-trigger focus restoration; failed-image handling; stable `data-testid` values; and the honest no-evidence status. These tests must describe the approved behavior before the production refactor.
- [x] **Step 8: Implement the single shared evidence-preview controller.** Create `src/components/medical/gallery/EvidencePreviewProvider.tsx` and update `src/components/medical/gallery/index.ts`, `src/components/medical/gallery/EvidenceGallery.tsx`, and `src/App.tsx`. The provider must validate the approved gallery collection, own selection and failure state, register both award and gallery button refs, render exactly one `GalleryModal`, use existing state utilities, and restore focus to the exact originating control with a safe section fallback.
- [x] **Step 9: Convert awards to evidence-first interactive cards.** Update `src/components/medical/content/ContentPrimitives.tsx` and `src/components/medical/content/ScienceAndAwards.tsx` so approved award evidence resolves to its validated gallery item, renders as a large lazy-loaded 3:2 preview, and exposes an explicit keyboard-accessible `View evidence` button with a stable `data-testid`. Render `Evidence image not available` for awards without valid approved evidence and never synthesize or substitute an image.
- [x] **Step 10: Fix the GPA metric as one non-breaking unit.** Update `src/components/medical/content/EducationJourney.tsx`, its focused rendering tests, and `src/components/medical/content/medical-content.css` so Grade 10 is exposed and displayed exactly as `9.38 /10`, with value and scale protected from line breaks at every supported width.
- [x] **Step 11: Implement compact shared section hierarchy.** Update `src/components/medical/content/medical-content.css` and `src/components/medical/content/medicalContentStyles.test.ts` to enforce the approved approximately 22/78 desktop header/body split and heading caps of about 2.4rem desktop, 2.1rem at the single-column breakpoint, and 1.8rem on narrow mobile. Preserve semantic heading order, sticky behavior where appropriate, and 320 CSS-pixel overflow safety.
- [x] **Step 12: Redesign the award showcase layout.** In `src/components/medical/content/medical-content.css`, implement two evidence-first columns at suitable desktop widths and one column on mobile, with large stable 3:2 media, concise framed copy, clear unavailable states, 44-pixel-class controls, visible hover/focus states, and no cramped evidence or horizontal overflow. Extend focused CSS-source tests for the invariant values and breakpoints.
- [x] **Step 13: Top-align and constrain the shared evidence dialog.** Update `src/components/medical/gallery/GalleryModal.tsx`, `src/components/medical/gallery/medical-gallery.css`, and `src/components/medical/gallery/medicalGalleryStyles.test.ts` so the dialog uses approximately 3rem top inset on larger screens and at least 1rem plus safe-area inset on narrow mobile, subtracts insets from available height, scrolls internally, and keeps the close control reachable. Preserve focus containment, Escape dismissal, error handling, and reduced-motion behavior.
- [x] **Step 14: Apply cohesive site-wide visual refinement.** Refine `src/components/medical/medical-shell.css`, `src/components/medical/content/medical-content.css`, and `src/components/medical/gallery/medical-gallery.css`, plus any directly affected medical component markup, using existing tokens for compact indexed rails, modular bordered surfaces, deliberate spacing, stronger evidence framing, and restrained hover/focus treatments. Preserve the warm-ivory/deep-teal/surgical-green/burgundy identity in both themes, verified copy, eight-section order, navigation behavior, CV action, placeholder Contact semantics, and reference-site non-copying boundary.
- [x] **Step 15: Complete focused component and integration regressions.** Update existing shell, content, gallery, app, and regression tests only where behavior or stable presentation contracts changed. Verify award/gallery parity, exact GPA text, compact hierarchy constants, popup inset, image fallback, keyboard operation, focus restoration, section inventory, theme/navigation behavior, CV download, and non-interactive Contact placeholders.
- [x] **Step 16: Preserve cross-cutting privacy and production contracts.** Run and, only if an approved interface changed, minimally update `src/data/medical/*`, `src/test/medicalPortfolioPolicy.ts`, `src/test/medicalPortfolioRegression.test.tsx`, production graph/policy tests, documentation contract tests, and existing property suites. Do not weaken the asset allowlist, prohibited-file scans, deterministic property replay, former-owner exclusions, or static GitHub Pages boundary.
- [x] **Step 17: Validate generated code without duplicating brownfield files.** Run focused Vitest suites, TypeScript, ESLint, the full example/property suite with seed replay, root and repository-base Vite builds, production privacy/bundle checks, `git diff --check`, duplicate-suffix scans, and targeted source searches for every acceptance invariant. Correct failures within the approved plan scope and re-run affected checks.
- [x] **Step 18: Update repository guidance and Code Generation documentation.** Update `README.md` only if the visible evidence interaction or customization guidance requires it. Create `aidlc-docs/construction/visual-showcase-evidence-enhancement/code/code-generation-summary.md`, distinguish modified and created files, record verification evidence, mark every completed checkbox immediately, update `aidlc-docs/aidlc-state.md`, and append all interactions to `aidlc-docs/audit.md`.

## Expected File Set

### New application file

- `src/components/medical/gallery/EvidencePreviewProvider.tsx`

### Existing application files expected to be modified

- `src/App.tsx`
- `src/components/medical/content/ContentPrimitives.tsx`
- `src/components/medical/content/EducationJourney.tsx`
- `src/components/medical/content/ScienceAndAwards.tsx`
- `src/components/medical/content/medical-content.css`
- `src/components/medical/gallery/EvidenceGallery.tsx`
- `src/components/medical/gallery/GalleryModal.tsx`
- `src/components/medical/gallery/index.ts`
- `src/components/medical/gallery/medical-gallery.css`
- `src/components/medical/medical-shell.css`
- Focused tests under `src/components/medical/`, `src/App.test.tsx`, and `src/test/` as required by the approved behavior
- `README.md` only if guidance changes

### Documentation files expected to be modified or created

- `aidlc-docs/construction/visual-showcase-evidence-enhancement/code/code-generation-summary.md`
- `aidlc-docs/aidlc-state.md`
- `aidlc-docs/audit.md`
- This plan, with checkboxes updated immediately as steps complete

## Completion Criteria

- All Part 2 steps are completed sequentially and marked `[x]` in the same interaction as their work.
- Acceptance Criteria 12 and 19-24 have direct automated or source-validation evidence.
- Exactly one shared evidence dialog serves award and gallery triggers.
- No duplicate `*_new`, `*_modified`, or equivalent brownfield files exist.
- No dependency, backend, infrastructure, deployment-setting, or public-asset inventory change is introduced.
- Focused and full verification gates pass before Code Generation is presented for review.

## Extension Compliance

- **Security Baseline**: Disabled by explicit user choice; its full rules are not loaded. Independent privacy and accessibility requirements remain enforced.
- **Property-Based Testing extension**: Disabled for this change by explicit user choice; its full rules are not loaded. Existing property suites and deterministic replay remain mandatory repository checks.
- **Blocking findings**: None at planning time.

## Requested Revision Addendum - Leadership, Gallery, and Presentation Polish

This addendum is the single source of truth for the viewer-facing revision requested during Code Generation review. The request itself authorizes the described presentation changes, but implementation remains behind this revised-plan approval gate because it expands the public asset inventory and introduces generated artwork.

### Revision Decisions and Safety Boundary

- Add visible breathing room above the evidence image inside the popup in addition to the already implemented viewport top inset.
- Remove viewer-facing process language that attributes project statements to extraction from a CV. Retain the legitimate `Download CV` action; only behind-the-scenes derivation wording is removed from public prose.
- Give Leadership and Service category-aware color variety using existing accessible theme tokens.
- Add original generated visuals for Origami and Piano as interest-card illustrations.
- Add every newly audited publication-safe, relevant image from `src/assets/CV/`: `VUCAg9.jpg`, `greatprogressg11.jpg`, and `internationalg9.jpg`.
- Continue excluding `IOGTVN.jpg` because it displays a date of birth; `graduationcert.jpg` because it displays a date of birth and record numbers; `acceptance.jpg` and admission PDFs because they expose applicant/payment details; raw test reports; `dontuse` files; and the full donation letter because public display adds unnecessary personal and institutional detail.
- A generated Gold Award image must never be described as documentary evidence, an official certificate, or an organizer-issued asset. It will appear as a clearly labeled `Commemorative illustration · not documentary evidence`, while the verified award text remains unchanged.
- Generated files were produced with the built-in image-generation tool and remain outside the repository until this addendum is approved:
  - Origami: `/Users/nhamhhung/.codex/generated_images/01a0b8c3-4044-7300-8507-685f81c53a0d/exec-41e740d1-a34f-4f9f-89b0-6a4d46327904.png`
  - Piano: `/Users/nhamhhung/.codex/generated_images/01a0b8c3-4044-7300-8507-685f81c53a0d/exec-8d4ce0eb-d90c-464e-ac33-ba536c52cdf1.png`
  - Gold Award commemorative illustration: `/Users/nhamhhung/.codex/generated_images/01a0b8c3-4044-7300-8507-685f81c53a0d/exec-e19747a7-67d6-4375-a9e0-638a220cca9d.png`

### Revised Generation Steps

- [x] **Step 19: Approve the revision plan and disclosure boundary.** Confirm that the generated Gold Award artwork is a disclosed commemorative illustration rather than fabricated evidence, and approve the exact safe-asset additions and exclusions.
- [x] **Step 20: Persist and classify generated artwork.** Copy the three generated PNG files into `src/assets/illustrations/` with descriptive stable names, validate dimensions and checksums, and add explicit typed allowlist entries without overwriting existing assets.
- [x] **Step 21: Expand the reviewed Gallery inventory safely.** Add `VUCAg9.jpg`, `greatprogressg11.jpg`, and `internationalg9.jpg` to the explicit asset allowlist and Gallery data with faithful titles, periods, descriptions, alt text, and orientation-aware thumbnail positions. Update exact-inventory, privacy, and production policy tests while preserving exclusions for sensitive and irrelevant files.
- [x] **Step 22: Add interest visuals and Leadership color variety.** Extend the interest presentation contract only as needed, render Origami and Piano as accessible illustrated cards, and add category-aware Leadership/Service surface accents using existing medical-theme tokens in light and dark modes.
- [x] **Step 23: Add the disclosed Gold Award illustration.** Extend the award presentation with an optional non-documentary illustration state. Render the generated Gold visual on the verified Gold Award card with the exact disclosure `Commemorative illustration · not documentary evidence`; do not expose `View evidence`, do not add it to the Evidence Gallery, and do not route it through the evidence dialog.
- [x] **Step 24: Refine popup image spacing and public copy.** Add explicit top margin/padding above popup media while keeping the close control reachable, internal scrolling intact, and responsive safe-area geometry valid. Replace viewer-facing derivation phrases such as `The CV reports` with final-presentation language while retaining verified meaning and the download action.
- [x] **Step 25: Add and update regressions.** Cover the 16-image Gallery inventory, generated-interest accessibility, category color hooks, disclosed illustration state, absence of an evidence control for Gold, popup media spacing, public-copy wording, expanded allowlist, privacy exclusions, and production media counts.
- [x] **Step 26: Re-run and document complete verification.** Run focused suites, TypeScript, ESLint, the full 126-plus test suite, deterministic seed replay, root and repository-path builds, production verification, privacy/bundle scans, `git diff --check`, and duplicate scans. Update the Code Generation summary, state, audit, and checkboxes in the same interaction.

### Revision Extension Compliance

- **Security Baseline**: Disabled by explicit user choice; independent privacy review remains mandatory and is represented by the exact inclusion/exclusion list above.
- **Property-Based Testing extension**: Disabled for this change; existing property suites and deterministic replay remain mandatory.
- **Blocking finding**: A fabricated Gold Award certificate would be misleading. The disclosed commemorative-illustration approach resolves that risk if approved.

## Evidence Gallery Two-Column Refinement

- [x] **Step 27: Cap the Evidence Gallery at two cards per row.** Remove the wide-screen three-column override while retaining the one-column mobile base and two-column layout from 45rem upward.
- [x] **Step 28: Verify the fixed column cap.** Update the gallery CSS-source regression to require the two-column rule and prohibit a three-column grid, then run focused tests and source validation.
