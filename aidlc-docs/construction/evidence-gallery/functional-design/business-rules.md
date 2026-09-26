# Unit 5: Evidence Gallery - Business Rules

## BR-1: Explicit 13-image inventory

The Gallery contains the publication-ready portrait and all 12 approved achievement, event, and certificate images already present in the fixed allowlist. The CV PDF is excluded because it is a document download, not gallery media.

## BR-2: No automatic asset discovery

Gallery records are explicitly authored typed data. The implementation cannot enumerate `src/assets/CV/`, use a dynamic glob, derive records from a directory, or display every allowlist entry automatically.

## BR-3: Allowlist and source-name agreement

Every item must match one allowlist entry by resolved asset value and `sourceFileName`. An unknown, unlisted, mismatched, non-image, or PDF record is omitted from production rendering and causes verification to fail.

## BR-4: Stable identity and exact-once ownership

Every item has one unique stable ID and appears exactly once in the gallery. IDs, not array indexes, display text, or generated positions, own React keys, test IDs, modal selection, and focus restoration.

## BR-5: Curated editorial order

Items render in this fixed narrative sequence:

1. Portrait/introduction.
2. Science recognition: HKISO, Science and Passion, and Chemistry.
3. Conference/leadership: WIS WHO committee participation and Top 10/rank-four recognition.
4. School/community projects: Tram & Cham and Embrace the Present.

Categories and periods appear as compact card metadata. They do not introduce tabs, filters, sorting controls, pagination, or a carousel.

## BR-6: Accessible captions are purpose-written

Each item has a concise title, verified description, category, period, and meaningful alt text. Alt text describes the achievement or event conveyed by the image; it does not reproduce decorative certificate wording or use the visible caption verbatim without review.

## BR-7: Native card activation

Every gallery card uses a semantic button or equivalent natively keyboard-operable trigger. Enter, Space, pointer, and touch activation select the same item. Each trigger has a stable `data-testid` and an accessible name that communicates opening an expanded preview.

## BR-8: One-item modal scope

The modal displays one selected item at a time with its full title, metadata, description, and complete image. There are no previous/next buttons, arrow-key gallery navigation, thumbnail strip, or deep link. Visitors close the modal and choose another card.

## BR-9: Modal accessibility contract

When open, the modal has a programmatic name, visible close control, Escape dismissal, contained focus, background interaction suppression, and focus restoration to the exact triggering card. Closing through any supported path clears selection.

## BR-10: Thumbnail and preview media behavior

- Every below-the-fold thumbnail is lazy-loaded with fixed dimensions or an aspect ratio.
- Thumbnail frames use a reviewed `cover` crop and optional focal-position hint.
- The modal uses the same allowlisted asset with `contain` so certificate edges and full evidence remain visible.
- The preview does not fetch, transform, or substitute a separate image.

## BR-11: Failure behavior

- Invalid item: omit it and fail data/configuration tests.
- Empty valid collection: omit the grid and show a short non-interactive evidence-unavailable message; never render empty buttons or open a modal.
- Selected ID removed or unknown: normalize state to closed.
- Image load failure: preserve the card caption and accessible context; do not expose a dead expanded-preview action after verification detects the bad asset configuration.

## BR-12: Preserve Unit boundaries

Unit 5 replaces only the `gallery` staging body. It preserves Unit 3 navigation/section IDs, Unit 4 content sections, Unit 1 theme tokens, and Unit 2's allowlist boundary. It adds no contact data, document download, backend, storage, analytics, or remote API.
