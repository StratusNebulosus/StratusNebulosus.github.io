# Unit 5: Evidence Gallery - Code Generation Summary

## Outcome

Unit 5 replaces the temporary Gallery panel with a polished medical evidence gallery containing exactly 13 reviewed images. It keeps the established editorial layout, warm clinical token system, section rhythm, and plain-anchor navigation while adding responsive evidence cards and an accessible one-item preview dialog.

## Gallery Inventory and Order

1. `profile_pic.jpg` - portfolio portrait
2. `HKISO2022silver.jpg` - HKISO Silver Award
3. `HKISO2023bronze.jpg` - HKISO Bronze Award, 2022-2023
4. `HKISO2025bronze.jpg` - HKISO Bronze Award, 2024-2025
5. `SAPfinalg11.jpg` - Science and Passion First Prize
6. `SAPround1g11.jpg` - Grade 11 first-round recognition
7. `SAPround3g11.jpg` - Grade 11 third-round recognition
8. `SAPround1g12.jpg` - Grade 12 first-round recognition
9. `excellentsecond.jpg` - Chemistry Second Prize
10. `WISCONg10.jpg` - WHO Committee Delegate
11. `WISCONg10top4.jpg` - Top 10 Delegate
12. `Tram&Chamg11.jpg` - Science of Tram & Cham
13. `presentg11.jpg` - Embrace the Present

The CV PDF remains a separate hero download and cannot enter the gallery collection.

## Created Application Files

- `src/data/medical/gallery.ts`
- `src/utils/medicalGallery.ts`
- `src/utils/medicalGallery.test.ts`
- `src/utils/medicalGallery.property.test.ts`
- `src/test/arbitraries/medicalGallery.ts`
- `src/data/medical/gallery.test.ts`
- `src/components/medical/gallery/EvidenceGallery.tsx`
- `src/components/medical/gallery/GalleryItem.tsx`
- `src/components/medical/gallery/GalleryModal.tsx`
- `src/components/medical/gallery/index.ts`
- `src/components/medical/gallery/medical-gallery.css`
- `src/components/medical/gallery/GalleryItem.test.tsx`
- `src/components/medical/gallery/GalleryItem.property.test.tsx`
- `src/components/medical/gallery/EvidenceGallery.test.tsx`
- `src/components/medical/gallery/medicalGalleryStyles.test.ts`

## Modified Application Files

- `src/types/medicalPortfolio.ts`: added gallery record, category, selection, command, and validation contracts.
- `src/data/medical/assetAllowlist.ts`: added a pure source-filename lookup over explicit allowlist entries.
- Medical allowlist/privacy tests: added gallery agreement, PDF exclusion, and dynamic-discovery safeguards.
- `src/App.tsx` and `src/App.test.tsx`: replaced the staging panel with the production gallery and exact inventory checks.
- `src/components/medical/MedicalNav.tsx`: made mobile-drawer focus restoration explicit after the regression suite exposed a gap.

## Removed Legacy File

- `src/components/Gallery.tsx`

The removed component used the obsolete portfolio data, div-based keyboard emulation, and prior visual identity.

## Interaction and Failure Behavior

- Each available card is a native button with a stable content ID, meaningful accessible name, descriptive alternative text, reserved image dimensions, native lazy loading, and asynchronous decoding.
- Activating a card opens one Chakra Dialog preview with the same allowlisted image, associated title and description, visible close control, Escape dismissal, contained focus, and return focus to the originating card.
- Closing an already closed pure selection state is idempotent; invalid and failed selections resolve closed.
- A thumbnail or preview failure closes that selection, disables further preview for the failed item, and preserves its title, metadata, description, and an unavailable status without retrying.
- An invalid or empty collection renders a non-interactive status instead of partial or unverified media.

## Visual-System Decisions

- All palette, typography, and motion values use the established medical tokens; no literal palette colors were added.
- The card grid preserves DOM order and progresses from one to two to three columns at 45rem and 70rem.
- Thumbnails reserve a 4:3 frame with `cover`; previews use viewport-bounded `contain` media.
- Controls meet the 44-pixel target, retain visible focus, and disable decorative movement under reduced-motion preferences.

## Verification Evidence

- `npx tsc -b`: passed.
- `npm run lint`: passed.
- `npm test`: 26 files passed, 101 tests passed.
- `npm run build`: passed; Vite transformed 1,410 modules.
- Production output: exactly 13 approved JPG files and one separate approved CV PDF.
- Production output contains no prohibited identity, immigration, full-record, admission, `dontuse`, or placeholder-contact asset/name.
- Source contains no runtime fetch, dynamic asset glob, legacy Gallery import, or duplicate `_new`/`_modified` file.
- Vite's generated module-preload compatibility code contains its standard same-origin `fetch` call; the application source adds no network request.
- `git diff --check`: passed.
- Build advisory: the existing main JavaScript chunk remains above Vite's 500 kB advisory threshold; Unit 5 added no dependency.

## Property-Based Testing Compliance

| Rule | Result | Evidence |
|---|---|---|
| PBT-01 | Compliant | Functional Design properties map to collection, selection, failure, rendering, and stateful-command tests. |
| PBT-02 | N/A | No inverse parse, format, encode, decode, or serialization operation exists. |
| PBT-03 | Compliant | Generated and production records verify allowlist agreement, exact inventory, stable identity, valid selection, and exact-once media rendering. |
| PBT-04 | Compliant | Repeated close is equivalent to one close across generated states. |
| PBT-05 | N/A | No optimized/reference algorithm pair exists. |
| PBT-06 | Compliant | Generated open/close command sequences are checked against a simplified state model after every transition. |
| PBT-07 | Compliant | Reusable constrained gallery-record, invalid-record, failed-ID, and command generators live under `src/test/arbitraries/`. |
| PBT-08 | Compliant | Fast-check shrinking and replay remain enabled through the complete Vitest suite. |
| PBT-09 | Compliant | Fast-check 4.10.1 remains installed and integrated with Vitest. |
| PBT-10 | Compliant | Separate example, property, interaction, source-style, integration, and privacy tests cover critical behavior. |

Security Baseline was skipped because it is explicitly disabled. All applicable Property-Based Testing rules are compliant; no blocking enabled-extension finding remains.

## Deferred Boundary

Unit 6 owns repository-wide regression documentation and the final Build-and-Test instruction set. No deployment or infrastructure change was introduced in Unit 5.
