# Medical Student Portfolio Revamp - Unit of Work

Single monolithic static frontend (`my-portfolio`). Units are logical modules completed strictly in sequence within the Construction per-unit loop (Question 3, Option A), each shipping its own colocated example-based and property-based tests as it is built (Question 2, Option A). Grouping follows the 6-unit technical-layer sequence proposed during Workflow Planning (Question 1, Option A).

## Unit 1: Design Tokens & Theming

- **Responsibility**: Establish named light/dark medical design tokens (FR-02), typography (editorial serif + readable sans-serif), and subtle anatomy/pulse/clinical-line motif guidelines.
- **In scope**: Token definitions, `colorMode` service retargeting to new tokens, reduced-motion baseline, contrast validation approach.
- **Out of scope**: Any component markup beyond applying tokens.
- **Depends on**: Nothing (foundation unit).

## Unit 2: Content Data & Asset Allowlist

- **Responsibility**: Typed `content` module (FR-13) and `assetAllowlist` module with `isAllowedAsset` (FR-15) — the single privacy-boundary enforcement point.
- **In scope**: All verified-content data structures (hero, narrative, education, scores, awards, leadership/service, closing statement), the explicit public-asset allowlist, colocated example and property-based tests (allowlist denial, section-ID uniqueness).
- **Out of scope**: Any rendering component.
- **Depends on**: Nothing structurally, but sequenced after Unit 1 per the approved strict-sequential ordering (Question 3, Option A).

## Unit 3: Navigation & Layout Shell

- **Responsibility**: `App` simplification (remove template/layout-mode state), `MedicalShell`, `MedicalNav`, skip link, removal of `PortfolioStyleSelector`/`EngineeringShell`/`BusinessShell` (FR-01, FR-03, FR-14).
- **In scope**: Hash-anchor navigation, active-section/`aria-current` logic, sticky desktop + accessible mobile nav, color-mode control wiring, colocated tests (hash round-trip properties, nav/section agreement properties).
- **Out of scope**: Content-area component internals (built in Unit 4).
- **Depends on**: Unit 1 (tokens applied by shell), Unit 2 (`content`/`assetAllowlist` consumed by nav/shell-level color-mode control).

## Unit 4: Content Section Components

- **Responsibility**: The eight content-area components and shared primitives excluding the gallery (FR-04 through FR-09, FR-11): `MedicalHero`, `CallingToMedicine`, `EducationJourney`, `AcademicExcellence`, `ScienceAndAwards`, `LeadershipAndService`, `ClosingContact`, plus `ScoreCard`, `AwardItem`, `TimelineEntry`.
- **In scope**: All non-gallery content rendering, colocated tests (rendering, content-accuracy regression tests, former-identity absence checks scoped to these components).
- **Out of scope**: `EvidenceGallery`, `GalleryItem`, `GalleryModal` (Unit 5).
- **Depends on**: Unit 1 (tokens), Unit 2 (content/allowlist), Unit 3 (shell composes these components).

## Unit 5: Evidence Gallery

- **Responsibility**: `EvidenceGallery`, `GalleryItem`, `GalleryModal` (FR-10) — keyboard access, meaningful alt text, focus containment/Escape/close/focus-restoration, lazy-loading with reserved dimensions.
- **In scope**: Gallery-specific components and colocated tests (keyboard navigation, focus-trap behavior, lazy-loading/layout-shift checks, allowlist-only sourcing).
- **Out of scope**: Non-gallery content sections.
- **Depends on**: Unit 1 (tokens), Unit 2 (content/allowlist), Unit 3 (shell placement in composition order).

## Unit 6: Testing & Documentation

- **Responsibility**: Cross-cutting regression and documentation only (per-unit tests are already colocated and complete by this point): former-owner-identity absence across the full app, retired-template-choice absence, full production-build asset-boundary sweep (no prohibited CV file in the bundle), and repository documentation updates (FR-16, NFR-06 cross-cutting scope).
- **In scope**: Full-app regression test suite additions, `README`/contributor documentation updates describing the new content structure and public/private asset boundary.
- **Out of scope**: Any new component or content work (all already delivered in Units 1-5).
- **Depends on**: Units 1 through 5 (validates the completed system as a whole).

## Code Organization Note (Brownfield)

No new directory structure is introduced; units map onto the existing `src/data`, `src/types`, `src/hooks`, `src/components/shared`, and root-level component conventions already used by the codebase (see `aidlc-docs/inception/reverse-engineering/component-inventory.md`).
