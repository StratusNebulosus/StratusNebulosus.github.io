# Unit 1: Design Tokens & Theming - Code Generation Summary

## Files Created

- `src/theme/tokens.ts` — `Theme`/`ColorToken`/`TypographyToken`/`MotionToken` types and the `lightTheme`/`darkTheme` instances (medical palette: warm ivory/deep teal/surgical green/burgundy in light; deep blue-green/warm near-white/teal-burgundy accents in dark; editorial serif heading + readable sans-serif body/nav/control/metric typography).
- `src/theme/getTheme.ts` — `getTheme(mode)` accessor.
- `src/theme/applyReducedMotion.ts` — implements BR-4 (non-essential motion suppression).
- `src/theme/resolveColorModePreference.ts` — implements BR-5 (persisted → system → light fallback chain, never throws).
- `src/theme/generateThemeCss.ts` — implements NFR Design Pattern 2 (module-load-time CSS generation from tokens).
- `src/theme/colorModeBootstrap.ts` — `bootstrapColorMode()`, the pre-mount flash-prevention function (NFR Design Pattern 1).
- `src/theme/injectThemeCss.ts` — idempotently injects the generated theme CSS plus a `prefers-reduced-motion: reduce` media block as a single `<style id="medical-theme-tokens">` element (refined from the plan's static-CSS-file idea to avoid manual drift between `tokens.ts` and a hand-maintained stylesheet).
- `src/test/theme/contrastRatio.ts` — test-only WCAG contrast-ratio and `validateContrast` utilities (BR-3); not imported by any production module.
- `src/theme/tokens.property.test.ts` — `fast-check` property test for BR-1 token parity.
- `src/theme/contrastValidation.property.test.ts` — example-based and property-based tests for BR-3 across both themes.
- `src/theme/applyReducedMotion.test.ts` — example-based tests for BR-4.
- `src/theme/resolveColorModePreference.test.ts` — example-based tests for BR-5 (normal, thrown-error, and total-unavailability cases).

## Files Modified

- `package.json` — added `fast-check` devDependency (NFR-07).
- `src/main.tsx` — added `bootstrapColorMode()` (runs before `createRoot(...).render`) and `injectThemeCss()` calls, additive to the existing `next-themes`/`.light`-class mechanism; no existing behavior removed.

## Deviations From Plan

- Step 9 originally specified a static `src/theme/medical-theme.css` file. Implemented instead as `src/theme/injectThemeCss.ts`, an idempotent runtime injector that calls `generateThemeCss()` once and writes a single `<style>` element — this avoids maintaining a hand-written CSS file that could drift from `tokens.ts`, while still satisfying "generated once, not per render" (NFR Design Pattern 2). Reflected in the updated code-generation plan.

## Story Coverage

- **Story 10** (light/dark medical theme): `tokens.ts`, `getTheme.ts`, `generateThemeCss.ts`, `injectThemeCss.ts`, `colorModeBootstrap.ts`, `resolveColorModePreference.ts`.
- **Story 11** (reduced motion and adaptive layout): `applyReducedMotion.ts`, the reduced-motion media block in `injectThemeCss.ts`.

## Verification Performed

- `npx tsc -b` — passes with no errors.
- `npx eslint src/theme src/test/theme src/main.tsx` — no lint errors.
- `npx vitest run` — full suite: **13 test files, 99 tests passed** (21 new tests for this unit; 78 pre-existing tests unaffected).

## Not Yet Wired to Rendered UI

Per this unit's scope boundary (`unit-of-work.md`), no component yet consumes these tokens via `var(--token-name)` in rendered markup — that begins in Unit 3 (Navigation & Layout Shell), which will apply `data-color-mode` styling to `MedicalShell`. The existing Engineering (`src/index.css`) and Business (`src/templates/business/business.css`) token sets remain untouched and fully functional.
