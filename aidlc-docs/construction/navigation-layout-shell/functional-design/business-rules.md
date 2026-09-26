# Unit 3: Navigation & Layout Shell - Business Rules

## BR-1: Single navigation mode only (FR-03, approved after conflict resolution)

`MedicalShell`/`App` must not implement, read, or expose a multi-page layout mode. There is no `layoutMode` state, no `LAYOUT_MODE_STORAGE_KEY` read or write, and no recognition of the `#/section` hash format for the medical experience. Only scroll-anchored single-page navigation with plain `#section` anchors exists. (This resolves a direct conflict identified during planning between an initial answer requesting both layout modes and the already-approved FR-03; the user confirmed following FR-03 as approved.)

## BR-2: Stale preferences are inert, not migrated (Question 3, Option A)

The medical shell never reads `portfolio-layout-mode` or the template-selection storage key. No migration or deletion code touches these keys. A returning visitor's stale stored values simply go unread and cannot affect rendering, satisfying the Acceptance Criteria requirement that "obsolete stored template preferences cannot break the site" without adding migration complexity.

## BR-3: No template selector and no template-registry dependency (FR-01, FR-14)

`MedicalShell` renders unconditionally — it does not accept or use an `activeTemplateId`/`onSelectTemplate` prop, and does not import from `src/templates/`. `PortfolioStyleSelector` is not rendered by `MedicalNav`.

## BR-4: Active-section derivation (FR-03)

`activeSection` is derived purely by scroll position (reusing the existing `useActiveSection` scroll-offset algorithm), among the eight enabled medical `SectionId`s only. There is no hash-based override of the active section (that behavior belonged to the removed multi-page mode).

## BR-5: `aria-current` on the active nav link (FR-03)

`MedicalNav` sets `aria-current="true"` (or `"page"`) on the navigation link whose `id` equals `activeSection`, and omits the attribute on every other link.

## BR-6: Skip link precedes all other focusable content (FR-03)

`MedicalShell` renders a skip-to-main-content link as the first focusable element in the DOM, before `MedicalNav`, targeting the main content landmark.

## BR-7: Keyboard and touch operability (NFR-01)

Every nav link and the mobile-menu toggle must be reachable and operable via keyboard (visible focus indicator, `Enter`/`Space` activation) and via touch (minimum 44×44 CSS-pixel target), consistent with NFR-01.
