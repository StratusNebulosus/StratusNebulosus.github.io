# Unit 5: Evidence Gallery - Frontend Components

## `EvidenceGallery`

- **Props**: `items: readonly GalleryItemData[]` or the validated gallery selector result.
- **State**: `GallerySelectionState` with one `selectedItemId`; trigger references keyed by stable ID for focus restoration.
- **Structure**: Unit 4 `MedicalSection` with `id="gallery"`, index `07`, heading/introduction, responsive gallery grid, optional empty status, and one `GalleryModal` sibling.
- **Interactions**: receives an item ID from `GalleryItem`, validates/resolves it, opens the modal, clears selection on close, and restores focus through the dialog/trigger contract.
- **No state**: filters, sorting, pagination, carousel index, URL state, persistence, or preload queue.

## `GalleryItem`

- **Props**: one `GalleryItemData`, `onActivate(itemId)`, and a forwarded trigger reference.
- **State**: none.
- **Root element**: semantic button with stable `data-testid="medical-gallery-item-{id}"`.
- **Content**: reserved thumbnail frame, lazy image, compact category/period line, title, and concise description.
- **Image fit**: `cover` with optional reviewed `thumbnailPosition`.
- **Accessible name**: describes opening the titled evidence preview; visible metadata is real text.
- **Failure behavior**: never receives an invalid item from the validated selector; missing image does not erase visible caption context.

## `GalleryModal`

- **Props**: `item: GalleryItemData | null`, `isOpen: boolean`, `onClose(): void`, and the trigger reference/restoration integration supplied by `EvidenceGallery`.
- **State**: no independent selected-item state; it reflects its props.
- **Structure**: modal/dialog landmark with programmatic title, metadata, full image, description, backdrop, and visible close button.
- **Image fit**: `contain` in a bounded responsive viewport using the same asset and alt text as the card.
- **Interactions**: visible close activation, Escape dismissal, focus containment, background suppression, and focus restoration.
- **Excluded interactions**: previous/next, Left/Right Arrow item navigation, zoom/pan, download, sharing, and deep links.

## Content/Allowlist Layer Extension

- Add `GalleryItemData`, `GalleryCategory`, `GalleryCollection`, `GallerySelectionState`, and `GalleryCommand` types to the medical domain contracts.
- Add an explicit gallery list to the medical content module or a focused medical gallery-data module that imports no new asset beyond the existing allowlist inventory.
- Expose pure validation, lookup, and state-transition functions for direct example/property testing.

## Styling Contract

- Extend the medical content visual system with a bounded responsive grid and quiet editorial card rhythm.
- Use Unit 1 tokens only for backgrounds, text, borders, focus, backdrop, and motion.
- Preserve 320-pixel layouts, visible focus, practical 44-pixel triggers/close control, text zoom, dark/light parity, and reduced-motion behavior.
- Thumbnails reserve dimensions and lazy-load; the open preview prioritizes complete evidence visibility over decorative cropping.

## Test Components

- **Example tests**: production inventory/order, exact caption metadata, PDF exclusion, keyboard activation, visible close, Escape, focus containment/restoration, responsive semantics, thumbnail lazy loading, and modal `contain` presentation.
- **Property tests**: unique IDs, allowlist/source agreement, exact-once rendering, valid/invalid open transitions, idempotent close, and generated command-sequence state validity.
- **Source/style tests**: stable media sizing, `cover` thumbnail, `contain` preview, token-only colors, visible focus, reduced-motion handling, and no dynamic asset glob.

## Form and API Integration

- Forms: N/A.
- Backend/API: N/A.
- Persistence: N/A.
- Authentication or private-data access: N/A.

## Extension Compliance

| Rule | Result | Rationale |
|---|---|---|
| Security Baseline | Skipped | Explicitly disabled in the active Extension Configuration. |
| PBT-01 | Compliant | The domain design identifies collection/rendering/media invariants, open verification, close idempotence, and a stateful command model. |
| PBT-02 | N/A | No inverse operation exists. |
| PBT-03 | Design ready | Allowlist, ID, rendering, selection, and media-source invariants are explicit. |
| PBT-04 | Design ready | Close idempotence is explicitly specified. |
| PBT-05 | N/A | No reference algorithm applies. |
| PBT-06 | Design ready | Generated open/close command sequences have a simplified selection-state model. |
| PBT-07 through PBT-10 | Deferred to Code Generation | Generator, shrinking/replay, framework, and complementary-example requirements are assigned for implementation. |

No blocking enabled-extension finding remains at this stage.
