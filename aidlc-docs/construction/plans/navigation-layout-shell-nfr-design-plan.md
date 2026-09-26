# Unit 3: Navigation & Layout Shell - NFR Design Plan

## Context

NFR requirements (`aidlc-docs/construction/navigation-layout-shell/nfr-requirements/`) center on focus management (Drawer trap/restore), aria-current/skip-link ordering, plain-anchor GitHub Pages compatibility, and passive scroll listeners. This plan defines the concrete implementation pattern for each.

## Planning Checklist

- [x] Analyze Unit 3 NFR requirements.
- [x] Generate context-appropriate questions.
- [x] Collect answers.
- [x] Analyze answers for ambiguity/contradiction. All three answers selected the recommended option (A); no ambiguity, contradiction, or follow-up needed.
- [x] Record explicit approval.

## Generation Checklist

- [x] Generate `nfr-design-patterns.md`.
- [x] Generate `logical-components.md`.

## Planning Questions

### Question 1: Focus-trap/restoration implementation

A) Rely on Chakra UI `Drawer`'s built-in focus-trap and initial-focus/return-focus behavior (it already implements this internally via its underlying dialog primitive) rather than writing custom focus-management code; verify it with a `@testing-library/react` interaction test rather than assuming it works (recommended)
B) Write custom focus-trap logic instead of relying on Chakra's built-in Drawer behavior
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2: Sticky nav CSS pattern

A) Use native CSS `position: sticky` with `top: 0` on the nav element and a scroll-triggered class toggle (`isScrolled`) only for a background/shadow style change, not for the sticky behavior itself — matches the existing `Navbar.tsx` approach and needs no JS-driven positioning (recommended)
B) Use JS-calculated fixed positioning instead of CSS `position: sticky`
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3: Skip-link visibility pattern

A) The skip link is visually hidden by default (off-screen via CSS, not `display: none`, so it remains in the accessibility tree and tab order) and becomes visible on `:focus`, a standard accessible skip-link pattern (recommended)
B) The skip link is always visible at the top of the page
X) Other (please describe after [Answer]: tag below)

[Answer]: A
