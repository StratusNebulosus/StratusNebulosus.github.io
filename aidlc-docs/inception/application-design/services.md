# Application Design - Services

No backend or network service exists or is introduced (NFR-08). "Services" here means module-level orchestration layers consumed by components, per Question 2 (Option A: separate content and allowlist modules).

## `content` module (`src/data/medicalContent.ts` or equivalent)

- **Responsibility**: Single source of typed, verified portfolio content (hero copy and CV download metadata, narrative, education/GPA timeline, scores, scholarship, research project, awards, leadership/service/activity entries, interests, closing statement).
- **Consumed by**: `MedicalHero`, `CallingToMedicine`, `EducationJourney`, `AcademicExcellence`, `ScienceAndAwards`, `LeadershipAndService`, `ClosingContact`.
- **Orchestration pattern**: Pure data export plus small accessor functions (see `component-methods.md`); no side effects, no network calls.

## `assetAllowlist` module (`src/data/assetAllowlist.ts` or equivalent)

- **Responsibility**: Explicit allowlist of public-safe asset paths (FR-15) and a checking function (`isAllowedAsset`) used by any component that renders an image or exposes the approved public CV download.
- **Consumed by**: `EvidenceGallery`, `GalleryItem`, `AwardItem` (for certificate imagery), `MedicalHero` (for the portrait).
- **Orchestration pattern**: No component may import or enumerate `src/assets/CV/` directly; every image reference is validated through this module, which is the single point of privacy-boundary enforcement.

## `colorMode` service (retained from existing foundation)

- **Responsibility**: Read/write the visitor's light/dark preference via the existing safe client-side persistence mechanism (FR-12), with safe fallback on failure (NFR-05).
- **Consumed by**: `App` (owns state), `MedicalNav` (renders the control).
- **Orchestration pattern**: Unchanged from the current implementation; only the token values it applies change.

## `navigation` service (retained from existing foundation, simplified)

- **Responsibility**: Hash-anchor creation/parsing and active-section derivation, compatible with GitHub Pages (FR-03).
- **Consumed by**: `App`, `MedicalNav`.
- **Orchestration pattern**: Simplified to remove template-switch and layout-mode branching; otherwise reuses existing hash-routing logic.

## Service Interaction Summary

- `App` composes `colorMode` and `navigation` services and passes derived state down to `MedicalShell`.
- `MedicalShell`'s content-area components each pull their slice of data from the `content` service; any component rendering imagery additionally validates the path through the `assetAllowlist` service before rendering.
- No service depends on the removed template-registry, layout-mode, journal, or skills systems; those are deleted, not adapted.
