# Unit 2: Content Data & Asset Allowlist - Code Generation Summary

## Files Created

- `src/types/medicalPortfolio.ts` — all domain-entity types (`PortfolioContent`, `HeroContent`, `NarrativeSection`, `TimelineEntryData`, `ScoreEntryData`, `AwardGroup`, `AwardEntryData`, `ServiceEntryData`, `AllowedAsset`, `AssetAllowlistEntry`).
- `src/data/medical/assetAllowlist.ts` — imports the 13 approved assets (`profile_pic.jpg` + 12 visually-confirmed-safe certificates) and exports `ALLOWED_ASSETS`, `isAllowedAsset()`, `getAllowlistedAssets()` as a flat, ordered literal.
- `src/data/medical/content.ts` — imports `profile_pic.jpg` plus the certificates directly referenced by award entries, exports `content: PortfolioContent` and `getPortfolioContent()`, built entirely from the Verified Public Content Baseline in `requirements.md`.
- `src/data/medical/assetAllowlist.test.ts` — asserts the allowlist contains exactly the 13 approved source files and none of the prohibited/text-verification-only files (BR-1, BR-2).
- `src/data/medical/content.test.ts` — asserts award titles trace to the baseline, narrative separates aspiration/experience, and no copy uses clinical-treatment language (BR-3, BR-6, BR-7).
- `src/data/medical/contentAllowlistCrossCheck.test.ts` — asserts every asset referenced in `content.ts` is present in the allowlist.
- `src/data/medical/privacyGuard.test.ts` — text-scan test asserting no other `.ts`/`.tsx` file under `src/` imports from `assets/CV/`.
- `src/data/medical/privateFields.property.test.ts` — `fast-check` property test scanning every content string for date-of-birth-like or long-digit-identifier-like patterns (BR-4).

## Files Modified

None — this unit only adds new files under `src/data/medical/` and `src/types/`; no existing Engineering/Business file was touched.

## Story Coverage

- **Story 12** (keep private/prohibited assets out of the public build): `assetAllowlist.ts`, `assetAllowlist.test.ts`, `contentAllowlistCrossCheck.test.ts`, `privacyGuard.test.ts`.
- **Story 13** (maintain content through typed, decoupled data modules): `medicalPortfolio.ts`, `content.ts`, `content.test.ts`, `privateFields.property.test.ts`.

## Evidence Traceability

Every award/timeline/service entry in `content.ts` maps to a fact in the Verified Public Content Baseline of `requirements.md`. Certificate assets not directly referenced by an award entry (`HKISO2023bronze.jpg`, `HKISO2025bronze.jpg`, `SAPround1g11.jpg`, `SAPround1g12.jpg`, `SAPround3g11.jpg`, `Tram&Chamg11.jpg`, `presentg11.jpg`) remain in the allowlist for Unit 5 (Evidence Gallery) to surface directly via `getAllowlistedAssets()`, without needing a 1:1 link from a specific award entry.

## Verification Performed

- `npx tsc -b` — passes with no errors.
- `npx eslint src/data/medical src/types/medicalPortfolio.ts` — no lint errors.
- `npx vitest run` — full suite: **18 test files, 112 tests passed** (13 new for this unit; 99 pre-existing tests from Unit 1 and prior unaffected).

## Not Yet Wired to Rendered UI

Per this unit's scope boundary, no component yet calls `getPortfolioContent()` or `isAllowedAsset()` — that begins in Units 3-5.

## Contact Change-Control Addendum - 2026-09-20

- Modified `src/types/medicalPortfolio.ts` with `ContactChannelKind`, `ContactChannelData`, and `ContactSectionData`; `PortfolioContent.contact` replaces the former flat closing string.
- Modified `src/data/medical/content.ts` with the exact approved fictional email/phone records, visible `Placeholder` status, reflective statement, verification notice, and `getContactContent()`.
- Modified `src/data/medical/content.test.ts` to require the approved website examples, complete display-only fields, and continued exclusion of the CV-only values.
- The Contact contract intentionally contains no URL, action, form, enabled-state, or asset field.
- The fixed public allowlist remains unchanged at 13 JPG images plus one PDF; no dependency or runtime request was added.
- Integrated verification: TypeScript and ESLint passed; 32 test files and 130 tests passed normally and with `FC_SEED=20260920`; root and `/student-profile/` production builds/verifiers passed.
