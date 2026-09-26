# Unit 1: Design Tokens & Theming - Business Logic Model

## Overview

This unit is data/rule-centric rather than workflow-centric: it defines the `Theme` domain model (`domain-entities.md`) and the rules that govern it (`business-rules.md`). The functions below are the operations that connect the two.

## Core Operations

### `getTheme(mode: "light" | "dark"): Theme`

- Returns `lightTheme` or `darkTheme` as defined per BR-1 (token completeness parity).
- Pure function; no side effects.

### `resolveColorModePreference(): ColorModePreference`

- Implements BR-5: attempts to read the persisted preference; on any failure, falls back to `prefers-color-scheme`; on total unavailability, defaults to `"light"`.
- Runs before/at first paint per FR-12's flash-prevention requirement.

### `applyReducedMotion(theme: Theme, prefersReducedMotion: boolean): Theme`

- Implements BR-4: when `prefersReducedMotion` is true, returns a derived `Theme` where every `MotionToken` with `essential: false` is neutralized (duration resolves to 0 / animation disabled). When false, returns `theme` unchanged.
- Pure function; does not mutate the input `Theme`.

### `validateContrast(theme: Theme, pairs: Array<{ textToken: string; backgroundToken: string; sizeClass: "normal" | "large-or-essential" }>): ContrastCheckResult[]`

- Implements BR-3: computes the WCAG contrast ratio for each pair and compares against the threshold for its `sizeClass` (4.5 for `normal`, 3 for `large-or-essential`).
- Used by the automated property-based test described in NFR Requirements/NFR Design for this unit.

## Data Flow

1. `resolveColorModePreference()` runs once at app start (owned by `App`, consuming this unit's exported logic).
2. `getTheme(preference.value)` retrieves the corresponding `Theme`.
3. `applyReducedMotion(theme, prefersReducedMotionMediaQuery.matches)` produces the final `Theme` applied to the document (e.g., as CSS custom properties).
4. `validateContrast` runs at test time (not at runtime) against every registered token pair, for both `lightTheme` and `darkTheme`, as a build-time/CI quality gate rather than a runtime operation.

## Explicitly Out of Scope for This Unit

- Any component markup or rendering logic (delivered by Units 3-5).
- The `content` and `assetAllowlist` modules (Unit 2).
- Hash-anchor navigation logic (Unit 3).
