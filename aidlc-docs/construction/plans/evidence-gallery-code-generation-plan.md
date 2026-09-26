# Unit 5: Evidence Gallery - Code Generation Plan

This document is the single source of truth for Unit 5 code generation. Application code belongs under the workspace root; only this plan and the completion summary belong under `aidlc-docs/`.

## Unit Context

- **Primary story**: Story 9, browse an accessible evidence gallery without encountering private records.
- **Requirements**: FR-10, FR-13, FR-15; NFR-01 through NFR-08 where applicable; Acceptance Criteria 9, 10, and 12 through 17.
- **Dependencies available**: Unit 1 medical tokens; Unit 2 fixed 14-entry allowlist containing 13 approved images and one approved CV PDF; Unit 3 shell/navigation and `gallery` section target; Unit 4 `MedicalSection`, content styling, completed non-gallery sections, and Gallery staging body.
- **Owned interfaces**: gallery domain types; explicit 13-item gallery records; allowlist/source validation; pure selection transitions; `EvidenceGallery`, `GalleryItem`, `GalleryModal`; focused gallery CSS; gallery generators and example/property/source tests.
- **Database/API ownership**: none. This is a bounded static client-side unit with no backend, persistence, remote image service, asset discovery, analytics, or runtime secret.
- **Downstream consumer**: Unit 6 performs repository-wide regression, documentation, and final bundle/deployment verification after Unit 5 is approved.

## Approved Gallery Contract

- Include the publication-ready portrait plus all 12 allowlisted achievement/event/certificate images in one explicit 13-item typed list.
- Exclude `bui-tuan-phat-cv.pdf` from gallery media while preserving its separate hero download.
- Order the list as portrait/introduction, science recognition, conference/leadership, then school/community projects.
- Show stable title, description, category, period, and meaningful alt text for every item.
- Render lazy `cover` thumbnails and one complete `contain` preview using the same allowlisted asset.
- Use one-item-at-a-time Chakra Dialog behavior with visible close, Escape, contained focus, and focus restoration; no previous/next controls.
- Preserve caption context and disable preview when an image fails; do not retry automatically.

## Execution Steps

- [x] **Step 1 - Extend gallery domain and allowlist lookup contracts.** Modify `src/types/medicalPortfolio.ts` with `GalleryCategory`, `GalleryItemData`, `GallerySelectionState`, `GalleryCommand`, and validation-result contracts. Modify `src/data/medical/assetAllowlist.ts` with a pure source-filename lookup that returns only existing explicit entries; extend its tests without adding any asset import. Map: Story 9; FR-10/FR-13/FR-15; BR-1 through BR-4.
- [x] **Step 2 - Author the explicit 13-item gallery data.** Create `src/data/medical/gallery.ts` with the approved portrait and all 12 evidence records in curated order, using only allowlist lookups. Add purpose-written title, description, category, period, alt text, and reviewed thumbnail focal positions; never derive records from a directory or every allowlist entry. Map: Story 9; FR-10/FR-13/FR-15; BR-1/BR-2/BR-5/BR-6.
- [x] **Step 3 - Implement pure gallery validation and selection logic.** Create `src/utils/medicalGallery.ts` with image-only allowlist/source agreement, collection validation, validated-item selection, item resolution, failed-item exclusion, and pure `open`/`close` transitions. Enforce exact inventory, unique IDs, non-empty accessible copy, PDF exclusion, valid-open behavior, unknown-open closure, and idempotent close. Map: Story 9; BR-3/BR-4/BR-11; NFR resilience/privacy.
- [x] **Step 4 - Add gallery domain generators and pure-logic tests.** Create `src/test/arbitraries/medicalGallery.ts`, `src/data/medical/gallery.test.ts`, `src/utils/medicalGallery.test.ts`, and `src/utils/medicalGallery.property.test.ts`. Generate valid finite allowlisted records, unknown/mismatched/PDF/duplicate records, failed-ID sets, and open/close command sequences. Test collection invariants, exact inventory/order, source agreement, exact-once IDs, valid/invalid opens, close idempotence, and model equivalence after every stateful command. Keep shrinking and replay seeds enabled. Map: Story 9; NFR-06/NFR-07; PBT-03/PBT-04/PBT-06/PBT-07/PBT-08/PBT-10.
- [x] **Step 5 - Build the semantic `GalleryItem`.** Create `src/components/medical/gallery/GalleryItem.tsx` as a native button card with forwarded ID-keyed ref, stable test ID/accessibility name, reserved media frame, lazy/asynchronous image, category/period metadata, title, and description. Add local failed-media presentation that preserves the caption, reports failure upward, and removes preview activation without a retry. Map: Story 9; BR-6/BR-7/BR-10/BR-11; accessibility/performance NFRs.
- [x] **Step 6 - Build the controlled `GalleryModal`.** Create `src/components/medical/gallery/GalleryModal.tsx` with Chakra Dialog primitives, controlled open state derived from a validated selected item, programmatically associated title/description, same-source `contain` image, metadata, visible 44-pixel close control, backdrop, Escape dismissal, contained focus, and restoration integration. Add no previous/next, download, zoom, or custom focus-trap logic. Map: Story 9; BR-8/BR-9/BR-10; accessibility/reliability NFRs.
- [x] **Step 7 - Build `EvidenceGallery` orchestration.** Create `src/components/medical/gallery/EvidenceGallery.tsx` and `index.ts`. Compose Unit 4's `MedicalSection` at `gallery`, validate items, render the authored grid, own selected/failed IDs, keep stable trigger refs by item ID, derive modal content, close a failed selection, restore focus with a Gallery-heading fallback, and show a non-interactive empty status when no valid items remain. Map: Story 9; FR-10; BR-4/BR-7 through BR-12.
- [x] **Step 8 - Implement the gallery visual system.** Create `src/components/medical/gallery/medical-gallery.css` using Unit 1 tokens only. Implement editorial card rhythm, visible focus, 44-pixel targets, unavailable status, reserved `cover` thumbnails, `contain` modal media, viewport-bounded scrolling, and DOM-order-preserving one/two/three-column breakpoints from 320 pixels upward, including 200% zoom and reduced-motion safeguards. Map: Story 9; NFR-01 through NFR-04.
- [x] **Step 9 - Replace the Gallery staging body in `App`.** Modify `src/App.tsx` to render `EvidenceGallery` with the explicit production collection and remove `GalleryStage`; update `src/App.test.tsx` to assert the final gallery section, 13 stable triggers, all eight top-level section IDs, and continued non-gallery/navigation behavior. Map: Story 9; FR-03/FR-10; BR-12.
- [x] **Step 10 - Add complementary component, interaction, and source-style tests.** Create focused tests under `src/components/medical/gallery/` for exact card metadata, PDF absence, native button behavior, click/Enter/Space selection, one selected image/caption, same thumbnail/modal source, visible close, Escape, focus containment/restoration/fallback, repeated close, runtime failure degradation, empty state, lazy/asynchronous media, and modal `contain`. Add source-style checks for tokens, breakpoints, sizing, `cover`/`contain`, focus, reduced motion, no custom focus trap, no dynamic glob, and no component CV imports. Map: Story 9; NFR-01/NFR-03/NFR-06/NFR-07; PBT-03/PBT-10.
- [x] **Step 11 - Retire the legacy gallery path and strengthen privacy checks.** Delete the unreferenced `src/components/Gallery.tsx`, remove any legacy gallery import, and extend `src/data/medical/privacyGuard.test.ts` plus content/allowlist cross-checks so only the medical data/allowlist layer owns source assets and the CV can never enter gallery records. Confirm no duplicate `_new`/`_modified` files. Map: Story 9; FR-14/FR-15; NFR privacy/maintainability.
- [x] **Step 12 - Verify behavior and the production bundle.** Run `npx tsc -b`, `npm run lint`, the complete Vitest suite, and `npm run build`. Inspect `dist/` for the expected 13 approved image outputs and separate CV PDF, absence of all prohibited/private/`dontuse` assets and placeholder contacts in web code, no new dependency/runtime fetch/dynamic glob, and preservation of GitHub Pages-safe URLs. Resolve every failure before completing this step. Map: Story 9; NFR-01 through NFR-08.
- [x] **Step 13 - Document implementation results.** Create `aidlc-docs/construction/evidence-gallery/code/code-generation-summary.md` listing created, modified, and removed files; exact gallery inventory and ordering; interaction/failure behavior; visual-system decisions; tests/build/bundle evidence; and extension compliance. Mark Story 9 implemented only after Steps 1-12 pass.

## Property-Based Testing Compliance

| Rule | Planning status | Rationale |
|---|---|---|
| PBT-01 | Compliant | Functional Design identifies collection/render/media invariants, valid-open verification, close idempotence, and stateful command sequences; Steps 3-4 and 10 implement them. |
| PBT-02 | N/A | The gallery contains no inverse parse/format, encode/decode, or serialization pair. |
| PBT-03 | Compliant | Steps 3-4 verify unique IDs, allowlist/source agreement, exact inventory/rendering, valid selection, failed-item exclusion, and same-source media. |
| PBT-04 | Compliant | Step 4 explicitly verifies that repeated close equals a single close across generated states. |
| PBT-05 | N/A | No optimized/reference algorithm pair exists. |
| PBT-06 | Compliant | Step 4 generates open/close command sequences and checks selection validity after every command against a simplified model. |
| PBT-07 | Compliant | Step 4 creates reusable constrained gallery-record, invalid-record, failed-ID, and command generators from finite domain fixtures. |
| PBT-08 | Compliant | Existing `fast-check` shrinking and failure-seed replay remain enabled; Step 12 runs the normal complete suite. |
| PBT-09 | Compliant | `fast-check` 4.10.1 is already installed, documented, and integrated with Vitest. |
| PBT-10 | Compliant | Steps 4 and 10 pair each property with exact production-inventory, interaction, and accessibility examples in separately named files. |

No blocking PBT finding remains in this plan. Security Baseline is disabled in the active Extension Configuration and is therefore skipped.

## Completion Boundary

After explicit approval, execute Steps 1-13 sequentially and mark each checkbox `[x]` immediately in the same interaction in which the step completes. Do not expand into Unit 6's repository-wide documentation or final Build-and-Test instruction scope.
