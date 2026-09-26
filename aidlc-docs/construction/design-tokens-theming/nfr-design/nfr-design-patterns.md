# Unit 1: Design Tokens & Theming - NFR Design Patterns

## Pattern 1: Synchronous pre-mount color-mode resolution (flash prevention)

- **Applies to**: FR-12 (prevent flash of unreadable content), BR-5 (fallback rule).
- **Pattern**: A small synchronous script/module runs before the React tree mounts. It calls `resolveColorModePreference()` and immediately sets `data-color-mode` on the document root element. Only after this attribute is set does the main stylesheet's CSS custom properties resolve to the correct mode's values, so the very first paint already reflects the right theme.
- **Failure handling**: If the persistence read throws, the same synchronous call falls through to `prefers-color-scheme`, then `"light"`, per BR-5 — the script itself never throws uncaught, so it can never block mounting.

## Pattern 2: Build/module-load-time CSS generation (not per-render)

- **Applies to**: Performance requirement (single-frame, no-flicker switching), NFR-04 (no scattered literal colors).
- **Pattern**: A single function walks `lightTheme` and `darkTheme` once (at module load) and emits two CSS rule sets scoped by `[data-color-mode="light"]` / `[data-color-mode="dark"]` selectors, each defining the full set of `--token-name` custom properties. Component stylesheets reference `var(--token-name)` and never recompute colors themselves. Switching modes is therefore just an attribute toggle — the browser re-resolves existing CSS custom properties with no React re-render required for color values.

## Pattern 3: Reduced-motion as a CSS media-query layer, not JS branching

- **Applies to**: BR-4 (reduced-motion suppression).
- **Pattern**: Non-essential `MotionToken`s are expressed as CSS transition/animation declarations gated by `@media (prefers-reduced-motion: no-preference)`; the default (no media query match) is therefore already "no motion," and no JavaScript needs to read `prefers-reduced-motion` at runtime for this unit's tokens.

## Pattern 4: Test-only contrast validation (no production runtime cost)

- **Applies to**: BR-3 (contrast validation), NFR-03 (performance — no unnecessary runtime computation).
- **Pattern**: `contrastRatio(colorA, colorB)` and the property-based test that exercises it live in a test-only module, imported exclusively by `*.property.test.ts` files. It is never imported by any component or the `content`/`assetAllowlist` runtime modules, so it is tree-shaken out of the production bundle.

## Explicitly Not Applicable

- Resilience patterns (retry, circuit breaker), scalability patterns (load balancing, caching layers), and security patterns (authN/authZ, encryption) do not apply to this unit — no backend, no network calls, no user input processed here.
