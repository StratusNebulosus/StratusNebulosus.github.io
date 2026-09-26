# Unit 3: Navigation & Layout Shell - Business Logic Model

## Core Operations

### `getEnabledNavigationItems` / `getEnabledSectionIds` (reused unchanged)

- Existing functions from `src/utils/scroll.ts`; work unmodified against the eight medical navigation items (BR-1's single-mode simplification does not change their signature or behavior).

### `useActiveSection` (reused unchanged)

- Existing scroll-offset hook from `src/utils/scroll.ts`; drives `activeSection` per BR-4.

### `getMedicalNavigationHref(sectionId: SectionId): string`

- Always returns `` `#${sectionId}` `` — the single-mode equivalent of the old `getNavigationHref`, with the multi-page branch deleted per BR-1.

### `navigateToMedicalSection(sectionId: SectionId): void`

- Updates the browser hash to `` `#${sectionId}` `` and calls `scrollToSection(sectionId)` (reusing the existing `scrollToSection` utility). No `layoutMode` branching.

### `useMedicalLayout(enabledSectionIds, scrollActiveSection): MedicalLayoutState`

- New, smaller replacement for `usePortfolioLayout`: returns `{ activeSection: scrollActiveSection, getNavigationHref: getMedicalNavigationHref, navigateToSection: navigateToMedicalSection }`. No internal state beyond what `useActiveSection` already provides — no `useState` for a layout mode, no `localStorage` read/write.

## Data Flow

1. `App` computes `enabledSectionIds` from the eight medical navigation items (reusing `getEnabledNavigationItems`).
2. `App` calls `useActiveSection(enabledSectionIds)` (existing hook, unchanged) to get `scrollActiveSection`.
3. `App` calls `useMedicalLayout(enabledSectionIds, scrollActiveSection)` to get the simplified `MedicalLayoutState`.
4. `App` renders `MedicalShell` with `activeSection`, `getNavigationHref`, `navigateToSection`, and the ordered list of content-area components.
5. `MedicalShell` renders the skip link (BR-6), then `MedicalNav` (passing `activeSection` for BR-5's `aria-current`), then the eight content-area sections in order.
6. `MedicalNav`'s mobile menu uses `useDisclosure` (Question 4) for `MobileMenuState`; desktop nav is always visible and sticky via the existing scroll-based `isScrolled` pattern from `Navbar.tsx`.

## Explicitly Out of Scope for This Unit

- The eight content-area components' internal markup (Units 4-5).
- Removal of `EngineeringShell`/`BusinessShell`/`PortfolioStyleSelector`/template registry source files themselves — this unit builds `MedicalShell`/`MedicalNav` as new, additive components; the old shells and selector remain until code generation for this unit explicitly retires `App`'s dependency on them (see Code Generation plan for exact file-level removal scope).

## Testable Properties (PBT-01)

| Component or operation | Property category | Property | Code-generation test obligation |
|---|---|---|---|
| Medical navigation registry | Invariant | Every enabled medical navigation item has a unique ID, and the ordered IDs are exactly the eight approved section IDs. | Generate navigation lists from the domain-specific medical section-ID arbitrary and assert uniqueness, ordering, and membership constraints. |
| `getMedicalNavigationHref` | Oracle / easy verification | For every valid medical section ID, the result equals the simple reference model `` `#${sectionId}` ``, contains no slash route, and targets that same ID. | Compare generated valid medical IDs against the reference string model with `fast-check`. |
| Navigation rendering | Invariant | For any generated active medical section ID, `MedicalNav` renders exactly one desktop link and one mobile link for each enabled item, and only the matching pair carries `aria-current`. | Use a reusable medical-navigation arbitrary plus focused DOM assertions; retain concrete examples for critical behavior. |
| Shell/section agreement | Invariant | The shell's navigation IDs and staged section-anchor IDs have the same ordered set, with no missing or extra target. | Assert the agreement property across generated valid subsets at the pure-data boundary and pin the production eight-section case in an example test. |
| `useMedicalLayout` | No additional PBT property identified | The hook delegates active-section state and navigation to already-tested pure helpers; it introduces no serialization, normalization, mutable domain model, or inverse pair. | Cover hook wiring with example-based tests; do not invent an artificial idempotence or state-machine property. |
| Chakra Drawer state | No PBT property identified | Open/close, focus containment, and focus restoration are library-managed interaction behavior rather than custom domain-state logic. | Verify with example-based Testing Library interaction tests. |

PBT-02 is not applicable because the medical navigation path has no production parser or inverse operation; slash-route parsing is intentionally retired. PBT-04 and PBT-06 are not applicable because this unit defines no idempotent domain operation or custom mutable state machine. PBT-05 applies only to the trivial hash reference model recorded above.
