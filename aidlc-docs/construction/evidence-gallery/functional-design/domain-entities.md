# Unit 5: Evidence Gallery - Domain Entities

## `GalleryCategory`

A closed category union used for metadata and editorial ordering:

- `portrait`
- `science`
- `conference`
- `leadership`
- `school-project`
- `community`

Categories are descriptive metadata, not interactive filters.

## `GalleryItemData`

- `id: string` - stable, unique content identifier used for keys, test IDs, selection, and focus restoration.
- `asset: AllowedAsset` - the Vite-resolved value already admitted by the explicit public allowlist.
- `sourceFileName: string` - traceability name that must match the item's allowlist entry.
- `title: string` - concise visible caption heading.
- `description: string` - short verified context that does not invent rankings, roles, or clinical activity.
- `category: GalleryCategory` - compact visible metadata and editorial grouping cue.
- `period: string` - verified year or period, without inferring a missing date.
- `altText: string` - meaningful image purpose/achievement description, not decorative certificate transcription.
- `thumbnailPosition?: string` - reviewed focal-position hint for the reserved `cover` thumbnail only.

### Invariants

- `id` values are unique and non-empty.
- `asset` is allowlisted and resolves to an image entry, never the approved CV PDF.
- `sourceFileName` agrees with the matching allowlist entry.
- Title, description, period, and alt text are non-empty verified copy.
- `thumbnailPosition`, when present, is a finite reviewed value rather than visitor-controlled CSS.

## `GalleryCollection`

- `items: readonly GalleryItemData[]`.
- Contains exactly the 13 approved images in one curated order: portrait/introduction; science recognition; conference/leadership; school/community projects.
- The collection is explicit. It is never created through directory enumeration, glob imports, or automatic conversion of every allowlist entry.

## `GallerySelectionState`

- `selectedItemId: string | null`.
- `null` means the modal is closed.
- A string means the modal is open and must resolve to exactly one item in the current `GalleryCollection`.
- Trigger-element references are UI integration details associated by stable item ID; they are not persisted content.

## `GalleryCommand`

A discriminated interaction command used to model state transitions:

- `{ type: "open"; itemId: string }`
- `{ type: "close" }`

Escape, close-button activation, backdrop/library dismissal, and open-state changes all normalize to the `close` command. Previous/next commands do not exist in the approved scope.

## Relationships

- One `GalleryCollection` owns 13 `GalleryItemData` records.
- Each gallery item references exactly one `AssetAllowlistEntry` by both resolved asset value and source filename.
- One `GallerySelectionState` references zero or one gallery item.
- `EvidenceGallery` consumes one collection and owns one selection state.

## Testable Properties (PBT-01)

| Component or operation | Category | Property |
|---|---|---|
| Gallery collection | Invariant | Every generated valid item has a unique stable ID, an allowlisted image asset, aligned source filename, non-empty accessible copy, and no PDF asset. |
| Gallery rendering | Invariant | Every supplied valid item renders exactly once as a keyboard-operable trigger with the same ID and metadata. |
| Open transition | Easy verification / invariant | Opening a generated valid item selects exactly that ID; opening an unknown/disallowed ID leaves selection closed. |
| Close transition | Idempotence | Closing once or repeatedly always produces the same closed state. |
| Selection state | Stateful property | Across generated open/close command sequences, state is always either closed or references one member of the current collection. |
| Media source | Invariant | Thumbnail and expanded preview for a selected item use the same allowlisted asset and alt text. |

PBT-02 is N/A because Unit 5 defines no encode/decode, parse/format, or serialization inverse. PBT-05 is N/A because there is no optimized/reference algorithm pair. PBT-03, PBT-04, and PBT-06 apply as identified above.
