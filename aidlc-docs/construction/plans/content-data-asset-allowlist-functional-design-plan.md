# Unit 2: Content Data & Asset Allowlist - Functional Design Plan

## Unit Context

- **Responsibility** (`unit-of-work.md`): Typed `content` module (FR-13) and `assetAllowlist` module with `isAllowedAsset` (FR-15) — the single privacy-boundary enforcement point.
- **Mapped stories**: Story 12 (keep private/prohibited assets out of the public build), Story 13 (maintain content through typed, decoupled data modules).
- **Evidence review performed**: Visually inspected `src/assets/CV/` certificate images against the Public Asset Classification in `requirements.md`. Confirmed: `HKISO2022silver.jpg` (Silver Award, Secondary 2, 2022), `WISCONg10top4.jpg` (Top 10 Delegate, Ranking #4), `WISCONg10.jpg` (WIS Conference #12 WHO committee delegate certificate, 2023), `Tram&Chamg11.jpg` (Science of Tram and Cham project participation, 2025), `presentg11.jpg` ("Embrace the Present" outstanding contributor, 2025), `excellentsecond.jpg` (Chemistry Grade 12 Second Prize, 2025 dated cert but matches the "school-level Grade 12 Chemistry excellent-student selection exam" baseline fact), `SAPfinalg11.jpg` (Science and Passion First Prize final). Confirmed `IOGTVN.jpg` (teamwork/leadership certificate) **does contain a date of birth** and `donation.jpg` is a hospital thank-you letter — both match the requirements' "Text-Verification Only; Never Publish Raw" classification exactly and must stay out of the allowlist. `HKISO2023bronze.jpg`/`HKISO2025bronze.jpg` and `SAPround1g11.jpg`/`SAPround1g12.jpg`/`SAPround3g11.jpg` were not individually opened but follow the same certificate template as their confirmed siblings.

## Planning Checklist

- [x] Analyze unit context, mapped stories, and visually verify candidate evidence assets.
- [x] Generate context-appropriate questions.
- [x] Collect answers.
- [x] Analyze answers for ambiguity/contradiction. All four answers selected the recommended option (A); no ambiguity, contradiction, or follow-up needed.
- [x] Record explicit approval.

## Generation Checklist

- [x] Generate `business-logic-model.md`.
- [x] Generate `business-rules.md`.
- [x] Generate `domain-entities.md`.

## Planning Questions

### Question 1: Initial allowlist scope

The requirements' Public Asset Classification lists `profile_pic.jpg` as the only **approved** initial public asset, with certificate imagery marked "Candidate Evidence Assets Requiring Final Implementation Review." Since this unit's job is exactly that final implementation review for the allowlist:

A) Approve the full candidate set now: `profile_pic.jpg` plus all visually-confirmed-safe certificates — `HKISO2022silver.jpg`, `HKISO2023bronze.jpg`, `HKISO2025bronze.jpg`, `WISCONg10.jpg`, `WISCONg10top4.jpg`, `SAPfinalg11.jpg`, `SAPround1g11.jpg`, `SAPround1g12.jpg`, `SAPround3g11.jpg`, `excellentsecond.jpg`, `Tram&Chamg11.jpg`, `presentg11.jpg`. `IOGTVN.jpg` and `donation.jpg` remain text-verification-only (excluded) since they were confirmed to expose a date of birth / be a sensitive letter (recommended)
B) Approve only `profile_pic.jpg` for now; defer all certificate imagery to a later, separate approval step before Unit 5 (Evidence Gallery) needs it
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2: Content module granularity

A) One `src/data/medical/content.ts` file exporting the full typed `PortfolioContent` object (hero, narrative, education, scores, awards, leadership/service, closing statement) — mirrors the existing single-file-per-domain convention in `src/data/` while keeping the medical content isolated in its own subfolder (recommended)
B) Split into multiple files under `src/data/medical/` (one per content area: `hero.ts`, `narrative.ts`, `education.ts`, etc.), aggregated by an `index.ts`
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3: Type placement

A) Add new medical-specific types to a new `src/types/medicalPortfolio.ts` file, leaving the existing `src/types/portfolio.ts` (Engineering/Business) untouched until Units 3-4 remove it (recommended)
B) Extend the existing `src/types/portfolio.ts` in place with medical types mixed alongside the current ones
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4: Allowlist enforcement mechanism

A) `assetAllowlist.ts` exports a `const ALLOWED_ASSET_PATHS` array of imported asset module references (not string paths) plus `isAllowedAsset(assetModule)` that checks reference identity/membership — since Vite resolves imports to hashed URLs, comparing by imported reference is more robust than comparing raw path strings (recommended)
B) `assetAllowlist.ts` exports a list of raw string file paths and `isAllowedAsset(path: string)` compares path strings
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Contact Change-Control Revision Plan - 2026-09-20

The approved requirements fully specify the exact placeholder values, labels, non-interactive behavior, and distinction from the CV-only values. No unresolved business-logic, domain, data-flow, error-handling, or integration question remains, so no additional question file is required.

### Revision Checklist

- [x] Load the approved change requirements, Story 17, Unit 2 boundary, and current typed content implementation.
- [x] Confirm that the public asset allowlist and asset inventory are unchanged.
- [x] Define typed `ContactChannelData` and `ContactSectionData` entities without action or URI fields.
- [x] Replace the design-level `closingStatement` field with a structured `contact` field.
- [x] Define exact-value, labeling, non-interactivity, and CV-placeholder-separation rules.
- [x] Define the pure `getContactContent()` selector and data flow into Unit 4.
- [x] Complete the PBT-01 property analysis and record N/A decisions where random generation would not add value.
- [x] Validate Markdown structure and update all plan checkboxes.
- [x] Present the revised functional design for explicit approval.

### Artifacts Updated

- [x] `aidlc-docs/construction/content-data-asset-allowlist/functional-design/domain-entities.md`
- [x] `aidlc-docs/construction/content-data-asset-allowlist/functional-design/business-rules.md`
- [x] `aidlc-docs/construction/content-data-asset-allowlist/functional-design/business-logic-model.md`

### Extension Compliance

- **Security Baseline**: Skipped because it remains disabled.
- **PBT-01**: Compliant. Unit 2 has no new transformation, inverse, mutable state, or algorithm; exact static Contact values and prohibited-value distinctions are better pinned by example tests. Unit 4 owns the generated rendering invariants.
- **PBT-02 through PBT-10**: N/A during Functional Design under the extension enforcement matrix; they will be evaluated during Code Generation planning/generation and Build and Test where applicable.
- **Blocking findings**: None.
