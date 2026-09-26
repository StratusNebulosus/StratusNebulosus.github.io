# Unit 2: Content Data & Asset Allowlist - Code Generation Plan

## Unit Context

- **Stories implemented**: Story 12 (keep private/prohibited assets out of the public build), Story 13 (maintain content through typed, decoupled data modules).
- **Dependencies**: Unit 1 (Design Tokens & Theming) — sequenced after, no direct code dependency.
- **Consumed later by**: Units 3-5 (content/nav/gallery components read `getPortfolioContent()`/`isAllowedAsset()`).
- **Workspace root**: `/Users/nhamhhung/student_ports/StratusNebulosus.github.io`.
- **Brownfield notes**: `src/data/*.ts` (Engineering/Business content) and `src/types/portfolio.ts` remain untouched; new medical content/types live in new files/folders alongside them until Units 3-4 remove the old identity.

## Steps

- [x] **Step 1**: Create `src/types/medicalPortfolio.ts` — all domain-entity types from Functional Design (`PortfolioContent`, `HeroContent`, `NarrativeSection`, `TimelineEntryData`, `ScoreEntryData`, `AwardGroup`, `AwardEntryData`, `ServiceEntryData`, `AllowedAsset`, `AssetAllowlistEntry`).
- [x] **Step 2**: Create `src/data/medical/assetAllowlist.ts` — imports the 13 approved assets (`profile_pic.jpg` plus the 12 confirmed-safe certificates) and exports `ALLOWED_ASSETS`, `isAllowedAsset()`, `getAllowlistedAssets()` as a flat literal (NFR Design Pattern 2).
- [x] **Step 3**: Create `src/data/medical/content.ts` — imports the same assets, builds and exports `content: PortfolioContent` and `getPortfolioContent()`, using only facts from the Verified Public Content Baseline, with narrative/service/education copy following BR-4 through BR-7.
- [x] **Step 4 (Unit Testing)**: Create `src/data/medical/assetAllowlist.test.ts` — example-based test asserting `ALLOWED_ASSETS` contains exactly the 13 approved entries by `sourceFileName` and does not contain `IOGTVN.jpg`, `donation.jpg`, `dontuse.jpg`, `dontuse(1).jpg`, or any identity/transcript file name.
- [x] **Step 5 (Unit Testing)**: Create `src/data/medical/content.test.ts` — example-based tests asserting: every score/award/timeline/service entry matches a fact in the Verified Public Content Baseline (BR-3); no field matches a date-of-birth/identifier-like pattern (BR-4); narrative aspiration/experience arrays are non-empty and structurally separate (BR-6); no service entry uses clinical-treatment language (BR-7).
- [x] **Step 6 (Unit Testing)**: Create `src/data/medical/contentAllowlistCrossCheck.test.ts` — asserts every asset reachable from `getPortfolioContent()` is present in `getAllowlistedAssets()` (NFR Design Pattern 3).
- [x] **Step 7 (Unit Testing)**: Create `src/data/medical/privacyGuard.test.ts` — text-scan test asserting no `.ts`/`.tsx` file under `src/` other than `content.ts`/`assetAllowlist.ts` contains the substring `assets/CV/` (NFR Design Pattern 1).
- [x] **Step 8 (Unit Testing)**: Create `src/data/medical/privateFields.property.test.ts` — `fast-check` property test scanning every string field in `content` for date-of-birth-like (`DD/MM/YYYY`) or long-digit-sequence identifier-like patterns, asserting none match (BR-4, NFR-07).
- [x] **Step 9 (Documentation)**: Create `aidlc-docs/construction/content-data-asset-allowlist/code/code-generation-summary.md`.

## Story Traceability

| Step(s) | Story |
|---|---|
| 2, 4, 6, 7 | Story 12 (allowlist/privacy) |
| 1, 3, 5, 8 | Story 13 (typed content) |
