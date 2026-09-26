# Unit 5: Evidence Gallery - NFR Requirements

## Accessibility and Usability

- Target WCAG 2.2 AA-oriented behavior for card semantics, accessible names, visible focus, dialog naming, keyboard operation, reading order, contrast, 200% text zoom, and reduced motion.
- Every gallery item must be a semantic button or equally native keyboard trigger; no clickable `div` role emulation.
- Triggers must support Enter, Space, pointer, and touch without duplicate activation and provide a stable accessible name such as “Open [title] evidence preview.”
- Trigger and modal close controls must provide a practical minimum 44-by-44 CSS pixel target.
- The modal must expose a dialog role, programmatic title, visible close button, Escape dismissal, contained Tab/Shift+Tab focus, background interaction suppression, and focus restoration to the exact triggering card.
- Initial focus must land on a useful modal control or container without forcing screen-reader users through the full image first.
- Meaningful alt text describes the achievement/event communicated by the image; title, category, period, and description remain real text and do not rely on image transcription.
- The modal cannot be the only way to access the visible caption context; cards remain understandable before activation.
- Light and dark modes must preserve the same DOM structure, reading order, and focus behavior.

## Responsive Design

- Support 320 CSS pixels through wide desktop layouts without horizontal page scrolling.
- The gallery grid progresses from one column on narrow screens to two and then three columns when sufficient width exists; DOM and keyboard order remain the authored editorial order.
- Long titles, periods, category labels, and descriptions wrap without clipping or fixed-height text truncation.
- At 200% text zoom, card actions, captions, close controls, and modal content remain available without two-dimensional page scrolling.
- Modal positioning and content must fit within the current viewport; its content region may scroll vertically while the complete evidence image remains bounded by viewport-relative maximum width/height.
- Thumbnail presentation uses a consistent reserved frame; source-image proportions cannot determine card height or cause layout shifts.

## Performance

- Add no runtime or development dependency for Unit 5.
- Use existing Vite static imports; add no remote image host, runtime image processor, custom preloader, service worker, or thumbnail-generation service.
- All 13 gallery thumbnails are below the fold and must use native `loading="lazy"` and `decoding="async"` with stable width/height or an explicit aspect ratio.
- The modal reuses the selected item's same allowlisted Vite asset URL. It does not import, fetch, preload, clone, or transform a second preview asset.
- Opening a modal must not enumerate assets or initiate requests for unrelated gallery items.
- Gallery state and validation remain small synchronous operations over 13 records; no memoization cache, virtualized list, worker, or pagination is warranted.
- Unit 5 must not materially worsen the existing main-chunk advisory through a new lightbox, animation, image-processing, or focus-management package.

## Reliability and Compatibility

- Use the already-installed Chakra Dialog primitives for focus containment, Escape handling, background suppression, and restoration integration; do not implement a custom focus-trap algorithm.
- `EvidenceGallery` owns only the selected item ID. Dialog presentation derives the selected item through a validated lookup.
- Unknown, removed, duplicate, disallowed, PDF, or source-name-mismatched records cannot open a modal.
- If the selected ID no longer resolves, selection normalizes to closed and the surrounding Gallery section remains usable.
- Repeated close calls are safe and leave the modal closed.
- Missing/failed optional image rendering preserves visible caption text and does not break the surrounding section.
- Preserve TypeScript strictness, ESLint, React 19, Chakra UI 3, Vitest, Vite, current evergreen browsers, and GitHub Pages base-path resolution.
- Replacing the staging body must preserve section ID `gallery`, navigation target agreement, sticky offset, color mode, and all Unit 4 sections.

## Privacy and Content Integrity

- The gallery contains exactly the publication-ready portrait and 12 explicitly approved allowlisted evidence images.
- The approved CV PDF is excluded from gallery data and modal rendering even though it is public and allowlisted for download.
- No component may import from `src/assets/CV/`, enumerate directories, use dynamic asset globs, or accept visitor-controlled asset paths.
- Gallery records must cross-check resolved asset, source filename, record ID, alt text, and metadata against the approved static configuration.
- Production-bundle verification must continue to reject identity, immigration, admission, score-report, transcript, report-card, address-bearing, candidate-number-bearing, and `dontuse` assets.
- Captions cannot add unverified rankings, clinical experience, patient-care claims, or certificate text not supported by the approved content baseline.
- Security Baseline remains disabled; these controls are independently approved functional/privacy requirements.

## Maintainability

- Keep all 13 gallery records in one explicit typed data list, separate from presentation components.
- Use stable record IDs for keys, test IDs, selection state, and trigger-reference mapping; never use array indexes or visible titles as identity.
- Keep the selection state machine in pure functions so example/property tests can exercise it without rendering Chakra internals.
- `EvidenceGallery`, `GalleryItem`, and `GalleryModal` have distinct responsibilities and focused props.
- Extend the existing medical content stylesheet or add one focused gallery stylesheet using only Unit 1 tokens; no literal palette or duplicated legacy gallery theme.
- Remove the legacy `src/components/Gallery.tsx` only when the new component has replaced its rendering path and tests pass.

## Testing and Verification

- Testing Library example tests cover the exact 13-item inventory/order, PDF exclusion, stable trigger names/test IDs, Enter/Space/click activation, selected caption/image, visible close, Escape, focus containment, focus restoration, repeated close, invalid-selection behavior, and empty-state behavior.
- Image examples verify `loading="lazy"`, `decoding="async"`, reserved thumbnail geometry, meaningful alt text, `cover` thumbnails, `contain` modal previews, and reuse of the same asset URL.
- Property tests use reusable gallery-domain generators and a simplified state model for unique IDs, allowlist/source agreement, exact-once rendering, valid/invalid opens, close idempotence, and generated open/close command sequences.
- Source-level tests reject directory globbing, component imports from `src/assets/CV/`, literal palette colors, custom focus-trap loops, and missing responsive/reduced-motion rules.
- The full TypeScript, ESLint, Vitest, and Vite production build must pass.
- The final bundle sweep confirms only approved image outputs and the separately approved CV download are present, with every prohibited source absent.
- Build-and-Test manual checks cover 320-pixel layout, 200% zoom, light/dark presentation, keyboard-only card/modal use, visible focus, complete-image preview, touch targets, and common desktop/mobile browsers.

## Availability and Scalability

- Unit-specific server availability, failover, disaster recovery, throughput, and autoscaling requirements are N/A because the gallery is static and has no remote runtime service.
- Availability is inherited from the existing GitHub Pages deployment.
- The one-to-three-column static grid is sufficient for the approved 13-item collection. A materially larger future collection requires a new design decision rather than speculative filters, virtualization, or pagination now.

## Extension Compliance

| Rule | Result | Rationale |
|---|---|---|
| Security Baseline | Skipped | Explicitly disabled in active Extension Configuration. |
| PBT-09 | Compliant | Existing `fast-check` 4.10.1 supports constrained generators, shrinking, reproducible seeds, model/state properties, and Vitest integration. |
| Other PBT rules | N/A at this stage | PBT-01 is satisfied in Functional Design; PBT-02 through PBT-08 and PBT-10 are enforced during Code Generation where applicable. |

No blocking extension finding remains.
