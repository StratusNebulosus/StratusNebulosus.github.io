# Unit 1: Design Tokens & Theming - Code Generation Plan

## Unit Context

- **Stories implemented**: Story 10 (light/dark medical theme), Story 11 (reduced motion and adaptive layout) — see `aidlc-docs/inception/application-design/unit-of-work-story-map.md`.
- **Dependencies**: None (foundation unit).
- **Consumed later by**: Unit 3 (Navigation & Layout Shell applies tokens to `MedicalShell`/`MedicalNav`), Units 4-5 (content/gallery components reference tokens via CSS custom properties).
- **Workspace root**: `/Users/nhamhhung/student_ports/StratusNebulosus.github.io` (brownfield Vite/React app; existing structure at `src/`).
- **Brownfield notes**: `src/index.css` currently defines the *Engineering* template's dark-default/`.light`-override tokens; `src/templates/business/business.css` defines Business-specific tokens. Both remain in place and functional until Units 3-4 replace the shells that consume them — this unit only *adds* the new medical token infrastructure alongside the existing one; it does not yet remove Engineering/Business tokens (that removal happens in Units 3-4 per `unit-of-work.md`). `next-themes` (`ThemeProvider attribute="class"`) is the existing color-mode persistence mechanism (`src/components/ui/color-mode.tsx`, `color-mode-utils.ts`) and is retained/extended rather than replaced, satisfying the approved "retained `colorMode` service" decision in Application Design.
- **New dependency**: `fast-check` (devDependency) must be added to `package.json` per NFR-07/Question 4 of NFR Requirements — first unit to require it.

## Steps

- [x] **Step 1**: Add `fast-check` to `package.json` devDependencies.
- [x] **Step 2**: Create `src/theme/tokens.ts` — `ColorToken`, `TypographyToken`, `MotionToken`, `Theme` types and the `lightTheme`/`darkTheme` instances (domain entities from Functional Design), covering the medical palette (warm ivory/deep teal/surgical green/burgundy in light; deep blue-green/warm near-white/teal-or-burgundy accents in dark) and typography (editorial serif heading token, readable sans-serif body/nav/control/metric token).
- [x] **Step 3**: Create `src/theme/getTheme.ts` — `getTheme(mode)` accessor (business-logic-model.md).
- [x] **Step 4**: Create `src/theme/applyReducedMotion.ts` — `applyReducedMotion(theme, prefersReducedMotion)` implementing BR-4.
- [x] **Step 5**: Create `src/theme/resolveColorModePreference.ts` — `resolveColorModePreference()` implementing BR-5's fallback chain (persisted `next-themes` value → `prefers-color-scheme` → `"light"`), safe against thrown errors.
- [x] **Step 6**: Create `src/theme/generateThemeCss.ts` — module-load-time function (NFR Design Pattern 2) that walks `lightTheme`/`darkTheme` and returns a CSS string defining `[data-color-mode="light"]`/`[data-color-mode="dark"]` custom-property blocks.
- [x] **Step 7**: Create `src/theme/colorModeBootstrap.ts` — the synchronous pre-mount script (NFR Design Pattern 1) that calls `resolveColorModePreference()` and sets `data-color-mode` on `document.documentElement` before the app mounts.
- [x] **Step 8**: Wire `colorModeBootstrap` into `src/main.tsx`, additive to (not replacing) the existing `next-themes`/`.light` class mechanism, so both the new `data-color-mode` attribute and the existing `.light` class are set consistently from the same resolved preference.
- [x] **Step 9**: Create `src/theme/injectThemeCss.ts` — calls `generateThemeCss()` once and injects it as a single `<style id="medical-theme-tokens">` element (module-load-time generation per NFR Design Pattern 2, refined from a static file to an idempotent runtime injector to avoid manual CSS/token drift), plus a `@media (prefers-reduced-motion: reduce)` block zeroing non-essential motion custom properties (NFR Design Pattern 3). Called from `src/main.tsx` alongside `bootstrapColorMode()`.
- [x] **Step 10**: Create `src/test/theme/contrastRatio.ts` (test-only utility, not imported by any production module) implementing the WCAG relative-luminance/contrast-ratio formula, and `validateContrast(colorsByToken, pairs)` from the business-logic-model.
- [x] **Step 11 (Unit Testing)**: Create `src/theme/tokens.property.test.ts` — `fast-check` property test for BR-1 (every token name present in `lightTheme` also present in `darkTheme` and vice versa).
- [x] **Step 12 (Unit Testing)**: Create `src/theme/contrastValidation.property.test.ts` — `fast-check` property test asserting `validateContrast` reports `passes: true` for every documented text/background token pair in both themes, per BR-3 thresholds (4.5:1 normal, 3:1 large/essential).
- [x] **Step 13 (Unit Testing)**: Create `src/theme/applyReducedMotion.test.ts` — example-based test confirming non-essential motion tokens are neutralized when `prefersReducedMotion` is true, and left unchanged when false.
- [x] **Step 14 (Unit Testing)**: Create `src/theme/resolveColorModePreference.test.ts` — example-based tests for: normal persisted-value read, thrown-error fallback to system preference, and total-unavailability fallback to `"light"`.
- [x] **Step 15 (Documentation)**: Create `aidlc-docs/construction/design-tokens-theming/code/code-generation-summary.md` summarizing files created/modified and story coverage.

## Story Traceability

| Step(s) | Story |
|---|---|
| 2, 6, 9 | Story 10 (light/dark medical theme) |
| 4, 9, 13 | Story 11 (reduced motion) |
| 3, 5, 7, 8, 14 | Supports Story 10 (color-mode mechanics) |
| 10-12 | Cross-cutting quality gate for BR-1/BR-3, supporting Story 10 |
