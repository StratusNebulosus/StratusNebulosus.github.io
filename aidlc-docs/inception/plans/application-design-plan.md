# Medical Student Portfolio Revamp - Application Design Plan

## Purpose

Identify the high-level components, component methods (signatures only), services, and dependency relationships needed to deliver the unified medical portfolio approved in `aidlc-docs/inception/requirements/requirements.md` and `aidlc-docs/inception/user-stories/stories.md`. Detailed business rules are deferred to Functional Design (per-unit, Construction phase).

## Context Summary

- Single React/Vite static application (`my-portfolio`), no backend, no infrastructure change.
- Today's shared foundation (`App`/`PortfolioApp`, layout hooks, hash routing, color-mode persistence, GitHub Pages base-path handling) is reused; the `EngineeringShell`/`BusinessShell` pair, `PortfolioStyleSelector`, and per-template sections are replaced by one medical shell and section set.
- Eight content areas from FR-04 through FR-11: Overview, Calling to Medicine, Education, Academic Excellence, Science and Awards, Leadership and Service, Evidence Gallery, Contact.
- FR-15 requires an explicit public-asset allowlist rather than directory enumeration.
- NFR-07 requires `fast-check` property-based tests; candidate properties include section-ID uniqueness, nav/section agreement, hash round-trips, color-mode validation, and allowlist denial of non-allowlisted paths.

## Planning Checklist

- [x] Load approved requirements and user stories.
- [x] Identify key business capabilities and functional areas.
- [x] Determine design scope and complexity.
- [x] Generate context-appropriate questions.
- [x] Collect answers.
- [x] Analyze answers for ambiguity/contradiction. All five answers selected the recommended option (A); no ambiguity, contradiction, or follow-up needed.
- [x] Record explicit approval of the resolved design approach.

## Part 2: Generation Checklist

- [x] Generate `components.md` with component definitions and high-level responsibilities.
- [x] Generate `component-methods.md` with method signatures (business rules deferred to Functional Design).
- [x] Generate `services.md` with service definitions and orchestration patterns.
- [x] Generate `component-dependency.md` with dependency relationships and communication patterns.
- [x] Generate `application-design.md` consolidating the above.
- [x] Validate design completeness and consistency.
- [x] Update `aidlc-docs/aidlc-state.md` and the append-only audit.
- [ ] Present the Application Design completion message.

## Planning Questions

Please answer every question by entering the selected letter after its `[Answer]:` tag. If none of the options match your preference, choose `X) Other` and describe the preference after the tag.

### Question 1: Component granularity

How should the eight content areas be organized into components?

A) One dedicated component per content area (MedicalHero, CallingToMedicine, EducationJourney, AcademicExcellence, ScienceAndAwards, LeadershipAndService, EvidenceGallery, ClosingContact), composed by a single `MedicalShell`, plus small shared presentational primitives (ScoreCard, AwardItem, TimelineEntry, GalleryItem) reused across sections (recommended)
B) A smaller number of larger components, each rendering 2-3 content areas together
C) A larger number of finer-grained components, with every card/list-item type (score card, award item, timeline entry, gallery item, nav link) as its own top-level component alongside the section components
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2: Content/service layer shape

FR-13 and FR-15 require typed content data and an explicit asset allowlist, decoupled from presentation. How should this "service layer" (no backend, module-level only) be structured?

A) A single `content` module exporting the full typed portfolio content (narrative text, education, scores, awards, leadership/service entries) plus a separate `assetAllowlist` module exposing an allowlist-checking function used by any component that renders an image path (recommended)
B) One combined module that exports both content and the allowlist together with no separation
C) Per-section content modules (one file per content area) plus one shared allowlist module
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3: Navigation and shell responsibility split

Today `App`/`PortfolioApp` owns hash routing, active-section tracking, and layout state, while shells own header/nav markup. After removing the template selector and layout toggle, how should this be organized?

A) `App` keeps owning hash/active-section/color-mode state and passes it down; a single `MedicalShell` renders the sticky/mobile nav and composes the eight section components in order (recommended)
B) Fold `App`'s routing/state logic directly into `MedicalShell` and remove the separate `App` orchestration layer
C) Introduce a new dedicated `useMedicalNavigation` hook that fully owns nav/active-section state independently of existing layout hooks
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4: Evidence Gallery modal pattern

FR-10 requires keyboard access, meaningful alt text, and (if a modal is used) Escape/focus containment/close control/focus restoration.

A) Build a reusable `GalleryModal` component (own focus-trap and Escape handling) used by `EvidenceGallery`, so the modal behavior is independently testable (recommended)
B) Implement modal behavior inline inside `EvidenceGallery` with no separate component
C) Skip the modal entirely; gallery items link out or expand inline without an overlay
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 5: Property-based testing responsibility

NFR-07 requires `fast-check` properties for things like section-ID uniqueness, nav/section agreement, hash round-trips, color-mode validation, and allowlist denial.

A) Colocate property-based tests with the module they validate (e.g., `assetAllowlist.property.test.ts` next to `assetAllowlist.ts`), mirroring the existing per-module test convention (recommended)
B) Centralize all property-based tests in one dedicated `src/test/properties/` directory regardless of which module they cover
X) Other (please describe after [Answer]: tag below)

[Answer]: A
