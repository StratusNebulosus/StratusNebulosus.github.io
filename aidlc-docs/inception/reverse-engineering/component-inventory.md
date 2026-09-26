# Component Inventory

## Application Package

- `my-portfolio` - one React/Vite static application.

## Runtime Component Groups

### Composition and Shell

- `src/App.tsx` - eight-section composition.
- `src/components/medical/MedicalShell.tsx` - document shell and landmarks.
- `src/components/medical/MedicalNav.tsx` - responsive sticky navigation and color-mode control.

### Medical Content

- `MedicalHero`
- `CallingToMedicine`
- `EducationJourney`
- `AcademicExcellence`
- `ScienceAndAwards`
- `LeadershipAndService`
- `ClosingContact`
- `MedicalSection`
- Shared primitives: `ScoreCard`, `TimelineEntry`, `ResearchFeature`, `AwardItem`, and `ActivityCard`.

### Evidence Gallery

- `EvidenceGallery` - validated collection and selection orchestration.
- `GalleryItem` - interactive thumbnail and caption card.
- `GalleryModal` - accessible detail dialog.

### Theme and UI Support

- Chakra provider, color-mode utilities, tooltip, and toaster modules.
- Generated medical token and contrast modules under `src/theme/`.

## Data and Policy Modules

- `src/data/medical/content.ts` - verified portfolio content.
- `src/data/medical/gallery.ts` - 13 evidence items.
- `src/data/medical/assetAllowlist.ts` - 13 approved JPGs and one approved CV PDF.
- `src/data/medical/navigation.ts` - eight-section navigation.
- `src/types/medicalPortfolio.ts` - medical domain contracts.
- `src/utils/medicalGallery.ts` - gallery validation and selection logic.

## Infrastructure Package

- `.github/workflows/deploy.yml` - GitHub Pages quality, build, verification, and deployment workflow.

## Test Packages

- 32 Vitest files covering components, data, privacy, themes, navigation, gallery state, production graph, documentation, and production policy.
- Testing Library and jsdom provide DOM behavior tests.
- fast-check provides property tests with shrinking and seed replay.

## Counts

- **Application packages**: 1.
- **Infrastructure packages**: 1 workflow configuration.
- **Files under `src/`**: 137.
- **Medical TSX files**: 20, including tests.
- **Medical data TypeScript files**: 10, including tests.
- **Automated test files**: 32.
- **Approved public gallery images**: 13.
- **Approved downloadable CVs**: 1.
