# Unit 1: Design Tokens & Theming - Tech Stack Decisions

## Decision: No new production dependency

- **Choice**: Plain TypeScript objects for `lightTheme`/`darkTheme`, compiled to native CSS custom properties; no design-token library (e.g., Style Dictionary) introduced (Question 4, Option A).
- **Rationale**: The existing codebase already uses Chakra UI for component primitives and CSS for styling; introducing a separate token-build pipeline would add tooling complexity disproportionate to a single static site's needs, and conflicts with NFR-04's preference for coherent but simple design tokens over scattered or over-engineered abstraction.
- **Consequence**: Token generation (TS object → CSS custom properties) is a small first-party utility, not a third-party build step.

## Decision: CSS custom properties + attribute-based mode toggle

- **Choice**: Root-level CSS custom properties (e.g., `--color-background-surface`) whose values are swapped by toggling a `data-color-mode="light" | "dark"` attribute (or equivalent class) on a root element (Question 1, Option A).
- **Rationale**: Avoids per-component re-computation on theme switch, keeps switching cost near-zero (single style recalculation), and is directly compatible with `prefers-reduced-motion`/`prefers-color-scheme` media queries already used by the existing color-mode mechanism.
- **Consequence**: Components consume tokens via `var(--token-name)` in their styles; no component needs to read the active mode directly to pick a color.

## Testing Stack (confirmed, no new addition beyond already-approved NFR-07)

- **`fast-check`**: Already approved in Requirements Analysis (NFR-07) for property-based testing; used here for BR-1 (token parity) and BR-3 (contrast validation) properties.
- **Vitest**: Existing test runner; hosts both the new property-based tests and example-based tests for this unit.
- **No new contrast-calculation library decision needed at this stage**: the contrast-ratio computation itself (WCAG relative luminance formula) is a small first-party utility; if a library is later found necessary during Code Generation, that is an implementation detail deferred to that stage, not a new tech-stack commitment now.
