# Medical Student Portfolio Revamp - Application Design

Consolidated application design. Approved via `aidlc-docs/inception/plans/application-design-plan.md` (all five questions answered with the recommended option).

## Approach Summary

- **Component granularity**: One component per content area, composed by a single `MedicalShell`, plus shared presentational primitives (`ScoreCard`, `AwardItem`, `TimelineEntry`, `GalleryItem`, `GalleryModal`).
- **Content/allowlist layer**: Two separate typed modules — a `content` module for all portfolio copy/data, and an `assetAllowlist` module that is the single enforcement point for FR-15's public-asset boundary.
- **Shell/navigation split**: `App` retains ownership of hash/active-section/color-mode state; `MedicalShell` renders navigation and composes sections.
- **Evidence gallery**: A reusable `GalleryModal` component owns focus-trap, Escape, and focus-restoration behavior independently of `EvidenceGallery`.
- **Property-based tests**: Colocated with the module under test (e.g., `assetAllowlist.property.test.ts` beside `assetAllowlist.ts`), consistent with the existing per-module test convention.

## Components

See `components.md` for full detail. Summary: `App` (retained), `MedicalShell`, `MedicalNav`, and eight content-area components (`MedicalHero`, `CallingToMedicine`, `EducationJourney`, `AcademicExcellence`, `ScienceAndAwards`, `LeadershipAndService`, `EvidenceGallery`, `ClosingContact`), plus shared primitives (`ScoreCard`, `AwardItem`, `TimelineEntry`, `GalleryItem`, `GalleryModal`). The template registry, style selector, and template-specific components (`EngineeringShell`, `BusinessShell`, `Journal`, `Skills`, etc.) are removed.

## Component Methods

See `component-methods.md` for method signatures. Business rules (exact allowlist-matching algorithm, hash-parsing edge cases, focus-trap tab-cycling details) are deferred to Functional Design.

## Services

See `services.md`. Four module-level "services," none backed by a network call: `content`, `assetAllowlist`, `colorMode` (retained), `navigation` (retained, simplified).

## Component Dependencies

See `component-dependency.md` for the dependency matrix and data-flow diagram. Key invariant: every component rendering an image path must pass through `assetAllowlist.isAllowedAsset` — this is the single privacy-boundary chokepoint required by FR-15.

## Traceability to Requirements

| Requirement | Design Coverage |
|---|---|
| FR-01, FR-14 | Removal of template registry, style selector, `EngineeringShell`/`BusinessShell`; `MedicalShell` as sole shell |
| FR-02, FR-12 | Design tokens applied by `MedicalShell`; `colorMode` service retained |
| FR-03 | `navigation` service retained/simplified; `MedicalNav` renders sticky/mobile nav with skip link |
| FR-04 through FR-11 | One dedicated content-area component per requirement |
| FR-13 | `content` module as typed, decoupled data layer |
| FR-15 | `assetAllowlist` module as sole enforcement point |
| NFR-06, NFR-07 | Colocated example-based and property-based tests per module |

## Next Stage

Proceeds to Units Generation, using the 6-unit sequence proposed in `aidlc-docs/inception/plans/execution-plan.md`, refined against this component/service design.
