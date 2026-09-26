# Unit 2: Content Data & Asset Allowlist - Business Logic Model

## Core Operations

### `getPortfolioContent(): PortfolioContent`

- Returns the single exported `content` object from `src/data/medical/content.ts`. Pure accessor, no side effects — mirrors `getTheme` from Unit 1.

### `isAllowedAsset(candidate: AllowedAsset): boolean`

- Implements BR-1/BR-2: returns `true` only if `candidate` is reference-equal to one of the imported assets in the fixed `ALLOWED_ASSETS` array exported by `assetAllowlist.ts`.
- Pure function; no filesystem or network access at runtime (all checking happens against values already resolved at build/import time).

### `getAllowlistedAssets(): AssetAllowlistEntry[]`

- Returns the full `AssetAllowlistEntry[]` array (asset + source filename + description) for consumption by any component that needs to enumerate approved evidence (`EvidenceGallery` in Unit 5).

## Data Flow

1. `src/data/medical/content.ts` imports `profile_pic.jpg` and every allowlisted certificate image directly (named imports, one per file).
2. `content.ts` builds `PortfolioContent`, embedding the imported asset references directly in `HeroContent.portrait` and `AwardEntryData.evidence`.
3. `assetAllowlist.ts` imports the same set of files (independently, so it is not the same object identity as `content.ts`'s — see note below) and exports `ALLOWED_ASSETS` plus `isAllowedAsset`/`getAllowlistedAssets`.
4. Any consuming component calls `isAllowedAsset(entry.evidence)` before rendering an `<img>` for that entry; if `false`, the component must not render the image (renders a text-only fallback instead).

## Design Note on Reference Identity (Question 4)

Vite resolves a given asset file to the **same resolved URL string** for every `import` of that file, so two separate `import` statements for `HKISO2022silver.jpg` (one in `content.ts`, one in `assetAllowlist.ts`) yield equal string values suitable for `===` comparison, even though they are notionally "the same file." `isAllowedAsset` therefore compares by value equality of the resolved URL, which — unlike a hand-typed raw source path — cannot silently drift from what Vite actually serves.

## Explicitly Out of Scope for This Unit

- Any rendering component (Units 3-5 consume `content`/`assetAllowlist`, do not define them).
- Final certificate alt-text copywriting per component (drafted here as representative examples in `content.ts`, refined if needed when Units 4-5 render them).

## Contact Change-Control Addendum

### `getContactContent(): ContactSectionData`

- Returns the `contact` slice of the single exported `PortfolioContent` object.
- Pure accessor with no formatting, URI construction, validation side effects, storage, filesystem access, or network access.

### Contact Data Flow

1. `content.ts` owns the exact fictional values, channel labels, `Placeholder` status labels, reflective statement, and verification notice.
2. `PortfolioContent.contact` carries this structured data through the existing composition boundary.
3. `PortfolioApp` passes the entire `contact` slice to Unit 4's `ClosingContact`.
4. Unit 4 renders the records as non-interactive semantic cards and never derives links or form behavior.

### Failure Handling

- Missing label, value, status, statement, or verification notice is a content-contract defect and must fail source-level/example tests rather than silently invent fallback content.
- A CV-only or former-owner contact value is a privacy-policy defect and must fail the privacy and production-graph tests.
- The asset allowlist is not consulted because Contact contains no asset.
