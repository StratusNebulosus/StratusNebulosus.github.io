# Unit 5: Evidence Gallery - Business Logic Model

## Static Data Flow

1. The medical content module owns the explicit, ordered `GalleryItemData` records.
2. Each record uses a Vite image import already present in the fixed asset allowlist and repeats the matching source filename for traceability.
3. `getGalleryItems` validates item invariants against the allowlist and returns only valid image records in authored order.
4. `EvidenceGallery` renders one `GalleryItem` trigger per valid record.
5. Activating a trigger dispatches `open(item.id)` and renders `GalleryModal` for the resolved selected record.
6. Closing through the visible control, Escape, or dialog open-state change dispatches `close()` and restores focus to the activating trigger.

## Pure Operations

### `isGalleryImage(item, allowlist): boolean`

Returns true only when:

- the item's asset and source filename identify the same allowlist entry;
- the source filename represents an approved image rather than a PDF;
- the ID and accessible copy fields are non-empty.

### `validateGalleryCollection(items, allowlist): GalleryValidationResult`

Checks:

- exactly 13 records under the approved inventory;
- unique IDs;
- one-to-one asset/source-name membership;
- portrait plus the 12 approved evidence images are all present once;
- no CV PDF or unlisted item;
- non-empty title, description, category, period, and alt text.

The result exposes valid items and configuration errors for tests. Components receive only valid items and never bypass the allowlist.

### `getGalleryItems(): readonly GalleryItemData[]`

Returns the explicit curated collection in authored order after the validation boundary. It does not sort human-readable periods or infer category/order from filenames.

### `resolveGalleryItem(items, itemId): GalleryItemData | null`

Returns the one matching valid item or `null`. Unknown, duplicate, and disallowed identifiers never open a modal.

### `transitionGalleryState(state, command, items): GallerySelectionState`

- `open(validId)` returns `{ selectedItemId: validId }`.
- `open(unknownId)` returns `{ selectedItemId: null }`.
- `close` returns `{ selectedItemId: null }` from every state.
- Applying `close` repeatedly is idempotent.

## User Interaction Flow

1. Visitor reaches `#gallery`; all valid card triggers are present in editorial order.
2. Visitor tabs to or points at a card. Visible focus and the accessible name identify the action.
3. Enter, Space, click, or touch opens that item's modal.
4. Initial focus moves inside the modal, with the visible close control reachable.
5. The complete image uses `contain`; caption and metadata remain text outside the image.
6. Focus remains within the modal while it is open.
7. Escape, the close button, or supported dialog dismissal closes the modal.
8. Focus returns to the exact card trigger that opened it.

## Error and Edge Scenarios

- Empty collection: render an explanatory non-interactive status and no modal.
- Item becomes invalid before activation: validation excludes it; no trigger exists.
- Selected item cannot resolve: close the modal and clear selection.
- Repeated close: remain closed without throwing or moving focus to an unrelated element.
- Repeated open on the same item: keep that item selected without creating duplicate modal content.
- Light/dark or responsive changes while open: selection remains the same because appearance does not own domain state.

## Integration Boundaries

- **Input**: typed content and the explicit Unit 2 allowlist.
- **Shell**: the existing `gallery` section ID and Unit 4 `MedicalSection` primitive.
- **Output**: semantic card grid plus one accessible modal.
- **External systems**: none.
- **Persistence**: none; refreshing or leaving the page closes the preview.

## Property-Based Test Handoff

- Generate structurally valid gallery records from a finite set of allowlisted image fixtures.
- Generate invalid records through unknown assets, mismatched source filenames, empty copy, PDF assets, and duplicate IDs.
- Generate command sequences containing valid opens, unknown opens, and closes; compare every transition with the documented selection-state model.
- Keep example tests for the production 13-item sequence, exact captions, keyboard activation, Escape, focus containment, close control, focus restoration, lazy loading, and complete-image preview.
