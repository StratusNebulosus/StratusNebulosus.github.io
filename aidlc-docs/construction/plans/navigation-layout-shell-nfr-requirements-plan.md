# Unit 3: Navigation & Layout Shell - NFR Requirements Plan

## Context

This unit is the primary accessibility/usability surface for site-wide navigation. Relevant NFR categories: usability/accessibility (dominant — WCAG 2.2 AA keyboard/touch/skip-link/aria-current requirements from NFR-01), performance (sticky-nav scroll listener cost), reliability (stale-preference safety already decided in Functional Design), maintainability (removing template-registry coupling).

## Planning Checklist

- [x] Analyze Unit 3 functional design artifacts.
- [x] Generate context-appropriate questions.
- [x] Collect answers.
- [x] Analyze answers for ambiguity/contradiction. All four answers selected the recommended option (A); no ambiguity, contradiction, or follow-up needed.
- [x] Record explicit approval.

## Generation Checklist

- [x] Generate `nfr-requirements.md`.
- [x] Generate `tech-stack-decisions.md`.

## Planning Questions

### Question 1: Accessibility conformance target for interactive nav elements

A) Every nav link, the mobile-menu toggle, and the Drawer's close control must have a visible focus outline meeting the ≥3:1 contrast requirement (NFR-01) and a minimum 44×44 CSS-pixel hit target; the mobile Drawer must trap focus while open and restore focus to the toggle button on close (recommended)
B) Rely on Chakra UI's default focus/contrast styling without any explicit verification
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2: Scroll-listener performance pattern

A) The sticky-nav `isScrolled` scroll listener and the `useActiveSection` scroll listener are each passive (`{ passive: true }`, already true for `useActiveSection`) and unthrottled — acceptable at this page's scale (a handful of sections, no virtualization needed); no additional debouncing/throttling library is introduced (recommended)
B) Add a debounce/throttle utility (e.g., lodash) to reduce scroll-handler invocation frequency
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3: GitHub Pages hash-anchor compatibility requirement

A) `getMedicalNavigationHref`/`navigateToMedicalSection` must produce and consume only plain `#sectionId` anchors (no leading `/`), since GitHub Pages serves this as a static site with no server-side rewrite rule — matches FR-03's explicit "GitHub Pages-safe anchors" requirement and NFR-05's base-path compatibility (recommended)
B) No specific anchor-format constraint beyond what already works today
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4: Tech stack for this unit

A) No new dependency; continue using the already-present `@chakra-ui/react` (`Drawer`, `useDisclosure`, `IconButton`) and `react-icons` for the menu icons, consistent with the existing `Navbar.tsx` (recommended)
B) Introduce a different UI/menu library for the mobile navigation
X) Other (please describe after [Answer]: tag below)

[Answer]: A
