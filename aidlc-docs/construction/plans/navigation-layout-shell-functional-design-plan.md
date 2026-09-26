# Unit 3: Navigation & Layout Shell - Functional Design Plan

## Unit Context

- **Responsibility** (`unit-of-work.md`): `App` simplification (remove template/layout-mode state), `MedicalShell`, `MedicalNav`, skip link, removal of `PortfolioStyleSelector`/`EngineeringShell`/`BusinessShell` (FR-01, FR-03, FR-14).
- **Mapped stories**: Story 2 (unified design, no leftover engineering/business identity), Story 3 (confident navigation across devices/input methods).
- **Existing code reviewed**: `src/App.tsx` (`PortfolioApp`) currently owns template selection (`activeTemplateId`), layout mode (single/multi-page via `usePortfolioLayout`), and hash sync. `src/hooks/usePortfolioLayout.ts` implements both scroll-anchor single-page navigation and a separate multi-page hash-routed mode with `localStorage`-persisted `layoutMode`. `src/utils/scroll.ts` provides `useActiveSection` (scroll-position-based active section) and `getEnabledNavigationItems`/`getEnabledSectionIds`. `src/components/Navbar.tsx` renders the current sticky/mobile nav with a Chakra `Drawer`, scroll-based `isScrolled` state, and the `PortfolioStyleSelector`/layout-toggle controls to be removed. `src/types/portfolio.ts` defines `SectionId` as a fixed union used across the current app.

## Planning Checklist

- [x] Analyze unit context, mapped stories, and existing navigation/layout code.
- [x] Generate context-appropriate questions.
- [x] Collect answers.
- [x] Analyze answers for ambiguity/contradiction. Q1's initial answer ("keep both layout options") directly contradicted approved FR-03; flagged to the user, who confirmed following FR-03 as approved (multi-page layout removed entirely). Q2-Q4 raised no contradictions.
- [x] Record explicit approval.

## Generation Checklist

- [x] Generate `business-logic-model.md`.
- [x] Generate `business-rules.md`.
- [x] Generate `domain-entities.md`.
- [x] Generate `frontend-components.md`.

## Planning Questions

### Question 1: Layout-mode removal scope

FR-03/FR-14 require removing the single-page/multi-page layout toggle.

A) Delete `usePortfolioLayout`'s multi-page branch entirely for the medical experience: `MedicalShell` only ever renders single-page, scroll-anchored navigation (reusing `useActiveSection` and `createAnchorHash`/`parseSectionHash`-style helpers), with no `layoutMode` state, no `LAYOUT_MODE_STORAGE_KEY` persistence, and no multi-page hash format (`#/section`) support at all (recommended)
B) Keep the multi-page hash format recognized (so old bookmarked `#/section` links don't 404) but silently redirect it to the single-page anchor equivalent
X) Other (please describe after [Answer]: tag below)

[Answer]: A (confirmed after flagging conflict with approved FR-03 — "keep both layout options" would violate the already-approved requirement; user confirmed to follow FR-03 as approved)

### Question 2: Section identifier model

A) Define a new `MedicalSectionId` union type (`"overview" | "calling" | "education" | "academics" | "science" | "leadership" | "gallery" | "contact"`) in a new `src/types/medicalPortfolio.ts` addition, independent of the existing `SectionId` (which stays as-is for the Engineering/Business identity until Units 4-5 need it removed) (recommended)
B) Reuse and extend the existing `SectionId` union in `src/types/portfolio.ts` with the new medical section names mixed in alongside the old ones
X) Other (please describe after [Answer]: tag below)

[Answer]: B

### Question 3: Stale template/layout-mode preference handling

Acceptance Criteria requires "obsolete stored template preferences cannot break the site."

A) `App`/`MedicalShell` never reads `portfolio-layout-mode` or the template-selection storage key at all going forward (they simply become inert, unread keys still sitting in a returning visitor's `localStorage`); no migration or cleanup code is written, since leaving an unread key alone can never break rendering (recommended)
B) Add explicit migration code that reads and deletes the old `portfolio-layout-mode` and template-selection keys on first load of the medical shell
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4: Mobile navigation component

A) `MedicalNav`'s mobile menu reuses the existing Chakra `Drawer` + `useDisclosure` pattern already used by `Navbar.tsx`, just re-themed and stripped of the style-selector/layout-toggle controls (recommended)
B) Build a new, different mobile menu implementation (e.g., a full-screen overlay) rather than reusing the Drawer pattern
X) Other (please describe after [Answer]: tag below)

[Answer]: A
