# Unit 5: Evidence Gallery - Logical Components

Unit 5 uses first-party typed data, pure domain helpers, React components, Chakra Dialog primitives, CSS, and tests. It introduces no runtime infrastructure service.

## Gallery data and validation module

- **Responsibility**: own the explicit 13-item editorial list and pure collection validation.
- **Inputs**: image values and source filenames already defined by the fixed Unit 2 allowlist.
- **Outputs**: validated ordered gallery items plus configuration errors for verification.
- **Controls**: exact approved inventory, unique IDs, complete accessible copy, image-only membership, source-name agreement, and PDF exclusion.
- **Forbidden dependencies**: raw component asset imports, directory enumeration, glob discovery, visitor-provided paths, or remote data.

## Pure gallery selection module

- **Responsibility**: implement item lookup and `open`/`close` state transitions.
- **State shape**: `{ selectedItemId: string | null }`.
- **Rules**: valid IDs open, invalid/failed IDs close, repeated close is idempotent, and state never contains a copied item or DOM reference.
- **Consumers**: `EvidenceGallery` and property/example tests.

## `EvidenceGallery` orchestration component

- **Responsibility**: render Unit 4's `MedicalSection` at `gallery`, map validated items to triggers, own selected ID and failed-item IDs, maintain ID-keyed trigger refs, derive selected item, and coordinate close/restoration behavior.
- **Failure behavior**: exclude configuration-invalid records; keep failed-runtime captions visible; close a selected failed item; render an empty status when no valid items remain.
- **State exclusions**: no filter, sort, pagination, carousel index, URL state, persistence, cache, or global store.

## `GalleryItem` component

- **Responsibility**: render one semantic card trigger, lazy thumbnail, metadata, title, and description.
- **Props**: one validated item, activation callback, image-failure callback, failed status, and forwarded trigger ref.
- **Media**: stable geometry, native lazy loading/asynchronous decoding, reviewed `cover` position.
- **Failure presentation**: static caption card with an unavailable media status and no active preview trigger.

## `GalleryModal` component

- **Responsibility**: compose Chakra Dialog for one derived selected item.
- **Props**: selected item or `null`, controlled open value, close callback, and focus-restoration integration.
- **Presentation**: visible close, programmatic title/description, same allowlisted image with `contain`, category/period metadata, and caption.
- **Excluded behavior**: previous/next, arrow navigation, download, zoom/pan, share, deep link, or separate asset source.

## Gallery stylesheet

- **Responsibility**: one/two/three-column grid, editorial cards, visible focus, 44-pixel controls, reserved media, unavailable status, viewport-bounded modal, `cover`/`contain`, light/dark token parity, and reduced motion.
- **Constraint**: Unit 1 named tokens only; no literal palette or legacy gallery theme.

## Test-support layer

- **Domain generators**: valid gallery items from finite allowlisted fixtures, invalid/mismatched/PDF records, unique/duplicate collections, and open/close command sequences.
- **Property tests**: validation invariants, exact-once IDs, valid selection, invalid-open closure, close idempotence, stateful command model, and thumbnail/modal source agreement.
- **Example tests**: exact 13-item sequence, captions, card semantics, click/Enter/Space, selected preview, visible close, Escape, contained focus, restoration/fallback, failed-image degradation, empty status, lazy/asynchronous media, and PDF exclusion.
- **Source/bundle tests**: no component CV imports or dynamic glob; token-only CSS; responsive/reduced-motion/media-fit rules; approved outputs only.

## Logical Interaction Sequence

1. The data module validates the explicit gallery records against the allowlist.
2. `EvidenceGallery` receives valid records in authored order and renders one `GalleryItem` per record.
3. Card activation sends a stable ID through the pure selection transition.
4. Validated lookup derives the selected item; its presence controls Chakra Dialog.
5. `GalleryModal` renders the same asset and caption with complete-image presentation.
6. Close or Escape clears selection; Chakra and the ID-keyed ref restore focus.
7. Runtime image failure preserves caption context, disables that item, and clears it if selected.
8. Example, property, source, and bundle tests independently enforce the contracts.

## Scalability and Infrastructure Boundary

- The approved 13-item list is rendered directly with native browser loading and a CSS grid.
- No queue, database, API, CDN integration, worker, cache, service mesh, monitoring agent, or autoscaling component applies.
- Future growth beyond a usable editorial page requires a new requirement decision; Unit 5 does not pre-build unused infrastructure.

## Extension Compliance

- **Security Baseline**: skipped because it is explicitly disabled.
- **Property-Based Testing**: pure validation and selection ownership make all identified invariant, idempotent, and stateful properties directly testable with reusable generators. No blocking finding remains.
