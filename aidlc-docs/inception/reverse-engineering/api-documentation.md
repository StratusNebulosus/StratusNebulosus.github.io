# API Documentation

## External APIs

The portfolio has no REST, GraphQL, WebSocket, database, or runtime content API. All public content and evidence metadata are bundled locally at build time.

## Primary Internal Interfaces

### `PortfolioContent`

- Aggregates hero, narrative, education, GPA, scores, scholarship, research, award groups, activities, interests, and Contact content.
- Defined in `src/types/medicalPortfolio.ts` and instantiated in `src/data/medical/content.ts`.

### `AwardEntryData`

- Fields: `id`, `title`, `year`, optional `organization`, `description`, optional `evidence`, and optional `evidenceAltText`.
- Validation: evidence renders only when both metadata fields exist and `isAllowedAsset` returns true.

### `AcademicYearPerformance`

- Fields: `id`, `grade`, `academicYear`, `gpa`, and `scale`.
- Current values include Grade 10 GPA `9.38` with scale `/10`.

### `GalleryItemData`

- Fields: `id`, `asset`, `sourceFileName`, `title`, `description`, `category`, `period`, `altText`, and optional `thumbnailPosition`.
- Validation: gallery collection validation checks stable IDs, allowlisted assets, approved source filenames, and complete display metadata.

### `GallerySelectionState` and `GalleryCommand`

- State: one `selectedItemId` or `null`.
- Commands: `{ type: "open", itemId }` and `{ type: "close" }`.

## Primary Internal Functions

### Content and Asset Functions

- `isAllowedAsset(candidate): boolean` - checks exact membership in the public allowlist.
- `getAllowlistedAssets(): AssetAllowlistEntry[]` - returns approved public entries.
- `getAllowlistedAssetBySourceFileName(name)` - resolves one approved asset by source filename.
- `getPortfolioContent(): PortfolioContent` - returns the complete typed content object.
- `getScienceRecognitions(): AwardGroup[]` - returns grouped award content.

### Gallery Functions

- `validateGalleryCollection(items, allowedAssets, approvedNames)` - returns valid items and policy errors.
- `transitionGalleryState(state, command, items, failedIds?)` - applies open/close selection rules.
- `resolveGalleryItem(items, selectedId, failedIds)` - returns the selected usable item or `null`.

### Navigation Functions

- `getMedicalNavigationHref(sectionId)` - creates a GitHub Pages-safe hash.
- `navigateToMedicalSection(sectionId)` - pushes the hash and scrolls to the section.
- `useMedicalLayout(enabledIds, scrollActiveSection)` - returns active section, href generation, and navigation behavior.

## Component Contracts

- `MedicalSection` renders one semantic section heading and content body for a stable section ID.
- `AwardItem` receives one `AwardEntryData` record and conditionally renders allowlisted evidence.
- `EvidenceGallery` receives a readonly gallery collection, validates it, and manages selection/error state.
- `GalleryModal` receives one selected item or `null`, a close callback, image-error callback, and focus-restoration resolver.

## Validation and Error Handling

- Invalid award evidence is omitted instead of rendered.
- Invalid gallery items are excluded from the interactive collection.
- Failed gallery images become unavailable and close an active dialog if necessary.
- Production verification rejects prohibited assets, markers, runtime requests, and incorrect base paths.
