# Unit 3: Navigation & Layout Shell - NFR Design Patterns

## Pattern 1: Chakra Drawer for focus trap/restoration

- **Applies to**: NFR-01 focus-trap/restoration requirement.
- **Pattern**: `MedicalNav`'s mobile menu is a Chakra `Drawer` (via `useDisclosure`), which already implements focus-trap (Tab cycling confined to the open panel) and focus-restoration (returns focus to the triggering element on close) internally. No custom focus-management code is written.
- **Verification**: a `@testing-library/react` test opens the Drawer, tabs through its contents, asserts focus never leaves it, closes it, and asserts focus returns to the toggle button — verifying the library's behavior rather than assuming it.

## Pattern 2: Native CSS sticky positioning

- **Applies to**: Performance requirement (no JS-driven layout), sticky-nav behavior.
- **Pattern**: the nav's root element uses `position: sticky; top: 0;` in CSS. The existing `isScrolled` boolean (from a passive scroll listener, Question 2 of NFR Requirements) only toggles a class that changes background/shadow — it never sets `position` or `top` via JavaScript.

## Pattern 3: Visually-hidden-until-focused skip link

- **Applies to**: BR-6 (skip link first in DOM), accessibility.
- **Pattern**: the skip link uses the standard "clip" technique (absolutely positioned off-screen, `width`/`height` constrained, not `display: none` or `visibility: hidden`, so it remains in the accessibility tree and tab order) and resets to normal, visible positioning on `:focus`.

## Pattern 4: Plain-anchor hash format (carried from Functional Design/NFR Requirements)

- **Applies to**: GitHub Pages compatibility.
- **Pattern**: `getMedicalNavigationHref` always returns `` `#${sectionId}` `` with no leading `/`, and no code path re-introduces the retired `#/section` multi-page format.

## Explicitly Not Applicable

- No resilience/scalability/runtime-security patterns apply — static, client-only navigation with no backend.
