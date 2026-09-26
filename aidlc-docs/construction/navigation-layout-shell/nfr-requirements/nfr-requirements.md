# Unit 3: Navigation & Layout Shell - NFR Requirements

## Usability / Accessibility (dominant NFR for this unit)

- Every nav link, the mobile-menu toggle `IconButton`, and the Drawer's close control must have a visible focus outline meeting ≥3:1 contrast against its background, and a minimum 44×44 CSS-pixel hit target (Question 1, Option A; NFR-01).
- The mobile Drawer must trap focus while open (Tab/Shift+Tab cycles only within it) and restore focus to the toggle button on close.
- `aria-current` is set on the active nav link (BR-5); the skip link is the first focusable element (BR-6).
- Reduced-motion preference (from Unit 1's tokens) applies to the Drawer's open/close transition.

## Performance

- The sticky-nav `isScrolled` listener and `useActiveSection`'s scroll listener remain passive (`{ passive: true }`) and unthrottled; no debounce/throttle dependency is introduced, since this unit's scale (eight sections, no virtualization) does not warrant it (Question 2, Option A).

## Reliability / Compatibility

- `getMedicalNavigationHref`/`navigateToMedicalSection` produce and consume only plain `#sectionId` anchors, with no leading `/`, for GitHub Pages base-path compatibility (Question 3, Option A; FR-03, NFR-05).
- Per Unit 3 Functional Design BR-2, stale `portfolio-layout-mode`/template-selection `localStorage` keys are never read; this NFR carries that decision forward as a reliability guarantee (a stale key cannot throw or alter behavior since nothing reads it).

## Maintainability

- `MedicalShell`/`MedicalNav` have zero import-time dependency on `src/templates/` (BR-3); this is verifiable by static import analysis, not just convention.

## Testing

- Example-based tests for: `aria-current` presence/absence on nav links (BR-5), skip-link-first-in-DOM ordering (BR-6), Drawer focus trap and focus restoration, plain `#sectionId` anchor format for every enabled section.
- Property-based test (`fast-check`) for the round-trip property named in NFR-07: for any enabled `SectionId`, `getMedicalNavigationHref` followed by hash-parsing recovers the original section id.

## Tech Stack

- No new dependency: continues using `@chakra-ui/react` (`Drawer`, `useDisclosure`, `IconButton`) and `react-icons`, matching the existing `Navbar.tsx` (Question 4, Option A).
