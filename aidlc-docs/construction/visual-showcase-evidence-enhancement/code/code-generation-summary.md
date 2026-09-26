# Visual Showcase and Evidence Enhancement - Code Generation Summary

## Outcome

The portfolio now gives evidence and main content visual priority. Shared section headings use the approved compact 22/78 desktop hierarchy and smaller responsive caps. Award cards provide large evidence-first previews, explicit detail controls, and honest unavailable states. Award and Gallery entry points share one accessible dialog controller. Grade 10 renders as the intact metric `9.38 /10`, and the evidence dialog is top-aligned with responsive safe-area spacing.

The hero, navigation, content surfaces, awards, and Gallery were refined with indexed rails, restrained accent rules, stronger evidence framing, and token-based depth while retaining the existing clinical-humanities palette, verified content, navigation order, themes, and GitHub Pages behavior.

## Created Application File

- `src/components/medical/gallery/EvidencePreviewProvider.tsx` - validates the reviewed Gallery collection, owns shared selection and failure state, routes award and Gallery triggers to one dialog, and restores focus to the originating control.

## Modified Application Files

- `src/App.tsx` - mounts one evidence provider around the medical experience and one shared dialog instance.
- `src/components/medical/content/ContentPrimitives.tsx` - converts awards to evidence-first cards with explicit `View evidence` controls and unavailable states.
- `src/components/medical/content/EducationJourney.tsx` - renders value and scale as one testable metric unit.
- `src/components/medical/content/medical-content.css` - implements the 22/78 hierarchy, 2.4/2.1/1.8rem heading caps, non-breaking GPA metric, two-column evidence-first awards, one-column mobile fallback, and refined content surfaces.
- `src/components/medical/gallery/EvidenceGallery.tsx` and `GalleryItem.tsx` - consume the shared controller and pass the exact activating button for focus restoration.
- `src/components/medical/gallery/GalleryModal.tsx` and `medical-gallery.css` - top-align the dialog with a 3rem desktop inset and a mobile inset of 1rem plus the safe area.
- `src/components/medical/medical-shell.css` - refines navigation and brand framing with existing tokens.
- `src/App.test.tsx` and focused medical component/style tests - add award dialog, focus, GPA, hierarchy, evidence-state, and popup-inset regressions.
- `README.md` - documents the shared award/Gallery evidence contract.

## Restored Approved Asset

- `src/assets/profile_pic.jpg` was missing from the source tree even though the current generated production output contained the approved portrait. The exact generated JPEG was copied back to its authoritative source path. Both files had SHA-256 `65f74a25b8f1b4b55020abaf04dcf0e5f0cc9cfaa0f562dd5d93af61212dfd70`; no new image or private source record was introduced.

## Removed Retired Test

- `src/test/data/portfolio.test.ts` was removed because it exercised the retired former-owner data graph and imported already-deleted legacy image assets. The production-graph test independently confirms that `data/portfolio.ts` is not reachable from the current application. Current medical content, privacy, and production contracts remain covered by the active 31-file suite.

## Requirement Traceability

- **FR-02 / AC 12**: 22/78 shared layout and heading caps of 2.4rem, 2.1rem, and 1.8rem are implemented and source-tested.
- **FR-06 / AC 22**: Grade 10 renders exactly `9.38 /10` inside a no-wrap inline-flex metric.
- **FR-08 / AC 19 and 21**: evidence-first award cards use 3:2 media and an explicit control; missing evidence remains visible and labeled.
- **FR-10 / AC 20 and 23**: one validated controller and one Chakra dialog serve award and Gallery triggers with close, Escape, error, and focus-restoration behavior; responsive top inset and safe-area geometry are source-tested.
- **FR-17 / AC 24**: shared medical tokens and component classes refine the hero, navigation, sections, award surfaces, and evidence framing without copying the reference identity or changing verified content.
- **NFR-01 through NFR-08**: accessibility, responsive behavior, stable media sizing, no new dependency, strict typing, deterministic property replay, static builds, privacy policy, and both base paths are retained.

## Verification Evidence

- Focused medical suites: 6 files and 30 tests passed.
- `npm run quality`: TypeScript, ESLint, 31 files, and 126 tests passed.
- `FC_SEED=20260921 npm test`: 31 files and 126 tests passed with deterministic property replay.
- Root `npm run build` and `npm run verify:dist`: passed; exactly 13 approved images and one approved CV verified at `/`.
- Repository-path build and verification: passed at `/StratusNebulosus.github.io/`.
- `git diff --check`: passed.
- Duplicate modified/new/copy filename scan: passed.
- Production builds emit the existing non-blocking Vite advisory for the main JavaScript chunk exceeding 500 kB; no dependency was added by this change.

## Extension Compliance

- **Security Baseline**: Disabled by explicit user choice. Independent privacy and accessibility controls passed.
- **Property-Based Testing extension**: Disabled for this change by explicit user choice. Existing fast-check suites, shrinking, and seed replay remain operational and passed.
- **Blocking findings**: None.

## Requested Revision - Leadership, Gallery, and Presentation Polish

### Viewer-Facing Changes

- Added `1rem` of explicit spacing above evidence-dialog media while preserving the responsive 3rem viewport inset, mobile safe-area inset, internal scrolling, and reachable close control.
- Replaced the public phrase `The CV reports differences...` with final-presentation wording: `Recorded OD600 readings showed differences...`. The useful `Download CV` action remains unchanged.
- Added category-aware Leadership and Service card accents for leadership, conference, community, and school activities using existing accessible medical-theme tokens.
- Replaced the simple Origami and Piano labels with illustrated, lazy-loaded 3:2 interest cards.
- Expanded the reviewed Evidence Gallery from 13 to 16 images with `VUCAg9.jpg`, `greatprogressg11.jpg`, and `internationalg9.jpg`.
- Added an original Gold Award visual with the visible disclosure `Commemorative illustration · not documentary evidence`. It has no `View evidence` control, is not in the Evidence Gallery, and is not routed through the evidence dialog.

### Asset Audit Boundary

Publication-safe additions from `src/assets/CV/`:

- `VUCAg9.jpg` - interdisciplinary Grade 9 project recognition.
- `greatprogressg11.jpg` - Grade 11 progress recognition.
- `internationalg9.jpg` - international-program academic merit scholarship recognition.

Continued exclusions:

- `IOGTVN.jpg` exposes a date of birth.
- `graduationcert.jpg` exposes a date of birth and certificate record numbers.
- `acceptance.jpg` and admission PDFs expose applicant, payment, and administrative details.
- Raw SAT, AP, and IELTS records remain text-verification only.
- `donation.jpg` remains text-verification only because the full institutional letter adds unnecessary personal detail.
- `dontuse.jpg` and `dontuse(1).jpg` remain prohibited.

### Generated Artwork

The built-in image-generation tool created three original 1536 by 1024 PNG masters, which are retained in `src/assets/illustrations/`. Optimized WebP delivery copies reduce the combined production payload from approximately 7.5 MB to approximately 447 KB.

| Purpose | Production asset | SHA-256 of PNG master | Prompt summary |
|---|---|---|---|
| Origami | `src/assets/illustrations/origami-interest.webp` | `1e3ee9e06ba4494d3c9b818b47bcf4558702d030f4d760c04eddec4e5ac32545` | Editorial still life of a teal origami crane on warm ivory paper, with medical-palette accents, no text or logos. |
| Piano | `src/assets/illustrations/piano-interest.webp` | `d59a21cc6152de6da0dbc13f943310f3d62173c631538174f818fc2bdedcbdb7` | Editorial piano-key still life with teal notebook, burgundy pencil, natural light, and no readable music or branding. |
| Gold Award | `src/assets/illustrations/gold-award-commemorative.webp` | `4dd5768f5b71a27c31df0063021ce5dc37f47359922c558efc6fb15ce2c6356c` | Abstract gold scientific medallion in a paper-cut editorial style, explicitly avoiding official names, logos, seals, signatures, and certificate styling. |

### Revised Verification Evidence

- Focused revision suites: 11 files and 56 tests passed.
- `npm run quality`: TypeScript, ESLint, 31 files, and 129 tests passed.
- `FC_SEED=20260921 npm test`: 31 files and 129 tests passed with deterministic replay.
- Root and `/StratusNebulosus.github.io/` production builds passed.
- Production verification passed with exactly 16 reviewed JPG files, three optimized WebP illustrations, and one approved CV PDF.
- Public source and built output contain no `The CV reports`, `extracted from`, or `derived from the CV` phrasing.
- `git diff --check`, duplicate-suffix scan, allowlist alignment, privacy tests, and production-bundle policy passed.
- The existing non-blocking Vite advisory for the main JavaScript chunk above 500 kB remains; the revision added no dependency.

### Revision Extension Compliance

- **Security Baseline**: Disabled; independent privacy review and production exclusions passed.
- **Property-Based Testing extension**: Disabled for this revision; the existing property suite and deterministic replay passed.
- **Blocking findings**: None. The Gold Award artwork is visibly and structurally separated from documentary evidence.

## Evidence Gallery Two-Column Refinement

- Removed the previous three-column wide-screen override.
- Gallery evidence now renders one card per row below 45rem and exactly two cards per row at 45rem and wider.
- Focused Gallery tests passed: two files and eight tests, followed by clean TypeScript, ESLint, and diff validation.
