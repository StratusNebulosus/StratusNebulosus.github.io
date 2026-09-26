# Unit 3: Navigation & Layout Shell - Tech Stack Decisions

## Decision: No new production dependency

- **Choice**: Continue using `@chakra-ui/react`'s `Drawer`, `useDisclosure`, `IconButton`, and `react-icons` for the mobile menu icons, exactly as `Navbar.tsx` already does (Question 4, Option A).
- **Rationale**: These libraries are already installed, already provide accessible focus-trap and Escape-to-close behavior out of the box for `Drawer`, and switching would mean re-implementing accessibility behavior this unit can get for free. This also matches NFR-04's preference against introducing new abstractions without added value.

## Decision: No debounce/throttle library for scroll listeners

- **Choice**: Keep both scroll listeners passive and unthrottled (Question 2, Option A).
- **Rationale**: At this page's scale (eight sections, one page), the cost of an unthrottled scroll handler checking `getBoundingClientRect()` for eight elements is negligible; adding a throttling dependency would be complexity without a measurable benefit, consistent with NFR-04.

## Confirmed Testing Stack (no new addition beyond already-approved `fast-check`)

- **`fast-check`**: used for the hash round-trip property test.
- **Vitest** + **`@testing-library/react`** (already a devDependency): used for focus-trap/aria-current/skip-link example-based tests, rendering `MedicalNav`/`MedicalShell` in `jsdom`.
