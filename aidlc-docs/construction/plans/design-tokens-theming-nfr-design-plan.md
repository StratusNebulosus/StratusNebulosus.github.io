# Unit 1: Design Tokens & Theming - NFR Design Plan

## Context

NFR requirements for this unit (`aidlc-docs/construction/design-tokens-theming/nfr-requirements/`) center on performance (single-frame, no-flicker theme switch), reliability (safe fallback), accessibility (contrast, reduced motion), and maintainability (single source-of-truth token files). No resilience/scalability/security patterns apply (static, build-time, no backend). This plan focuses on the concrete design pattern and logical component needed to satisfy those requirements.

## Planning Checklist

- [x] Analyze Unit 1 NFR requirements.
- [x] Generate context-appropriate questions.
- [x] Collect answers.
- [x] Analyze answers for ambiguity/contradiction. All three answers selected the recommended option (A); no ambiguity, contradiction, or follow-up needed.
- [x] Record explicit approval.

## Generation Checklist

- [x] Generate `nfr-design-patterns.md`.
- [x] Generate `logical-components.md`.

## Planning Questions

### Question 1: Flash-of-unstyled-content prevention pattern

FR-12 requires preventing flashes of unreadable content during initial render.

A) Resolve `ColorModePreference` synchronously in a small inline script/module executed before the main React tree mounts, setting the `data-color-mode` attribute on `<html>` immediately, so CSS custom properties are correct before first paint (recommended)
B) Resolve color mode inside a React `useEffect` after mount, accepting a brief flash on first load
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2: Token-to-CSS generation pattern

A) A single build-time (or module-load-time) function walks `lightTheme`/`darkTheme` and emits a `<style>` block or CSS-in-JS rule defining `:root[data-color-mode="light"] { --token: value; }` / `[data-color-mode="dark"]` selectors — generated once, not per-render (recommended)
B) Each component computes and injects its own inline `style` attribute from the active theme object on every render
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3: Logical component for contrast validation

A) A standalone, test-only `contrastRatio(colorA, colorB): number` utility (WCAG relative-luminance formula) is the only new "logical component" this unit introduces; it is not shipped in the production bundle, only imported by tests (recommended)
B) Ship the contrast-ratio utility in the production bundle for potential runtime use
X) Other (please describe after [Answer]: tag below)

[Answer]: A
