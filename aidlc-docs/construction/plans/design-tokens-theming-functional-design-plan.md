# Unit 1: Design Tokens & Theming - Functional Design Plan

## Unit Context

- **Responsibility** (from `unit-of-work.md`): Named light/dark medical design tokens (FR-02), typography, subtle anatomy/pulse/clinical-line motif guidelines, `colorMode` service retargeting, reduced-motion baseline, contrast validation approach.
- **Mapped stories** (from `unit-of-work-story-map.md`): Story 10 (light/dark medical theme), Story 11 (reduced motion and adaptive layout).
- **Scope note**: This unit is primarily a design-token/data concern, not complex business logic. Functional Design here focuses on the token domain model and the validation rules around it (contrast, persistence, reduced-motion) rather than workflows or entities in the traditional sense.

## Generation Checklist

- [x] Generate `business-logic-model.md`.
- [x] Generate `business-rules.md`.
- [x] Generate `domain-entities.md`.
- [x] Frontend-components.md not applicable to this unit (no rendering components; deferred to Units 3-5).

## Planning Checklist

- [x] Analyze unit context and mapped stories.
- [x] Generate context-appropriate questions.
- [x] Collect answers.
- [x] Analyze answers for ambiguity/contradiction. All three answers selected the recommended option (A); no ambiguity, contradiction, or follow-up needed.
- [x] Record explicit approval.

## Planning Questions

### Question 1: Token domain model shape

How should tokens be modeled/exported?

A) A single flat `theme` object per mode (`lightTheme`, `darkTheme`) with named keys grouped by category (color, typography, motion), each mode independently satisfying the same key set so no key is ever missing in one mode (recommended)
B) One combined token object with light/dark values nested under each key (e.g., `color.background = { light: "...", dark: "..." }`)
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2: Contrast validation rule

FR-02/NFR-01 require normal text ≥4.5:1 and large text/essential controls ≥3:1 contrast in both modes. How should this be enforced?

A) A documented business rule plus an automated property-based test that computes contrast ratio for every documented text/background token pair and fails if below threshold (recommended)
B) Manual design review only, no automated contrast check
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3: Reduced-motion and persistence fallback rule

FR-12/NFR-01/NFR-05 require respecting `prefers-reduced-motion` and safe fallback if the persisted color-mode preference fails to load.

A) Define an explicit business rule: reduced-motion suppresses all non-essential motion tokens/transitions regardless of chosen color mode; and color-mode read failures always fall back to a defined default (e.g., system `prefers-color-scheme`) rather than blocking render (recommended)
B) Treat reduced-motion and persistence-fallback as implementation details with no explicit documented rule
X) Other (please describe after [Answer]: tag below)

[Answer]: A
