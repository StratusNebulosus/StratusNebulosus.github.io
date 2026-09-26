# Unit 1: Design Tokens & Theming - Business Rules

## BR-1: Token completeness parity (Question 1)

Every token `name` present in `lightTheme` must also be present in `darkTheme`, and vice versa. No component may reference a token that exists in only one mode. This is the enforceable form of FR-02's requirement that "both modes must use the same medical identity and information hierarchy."

- **Validation approach**: Property-based test generates a token name from either theme's key set and asserts the same key exists in the other theme (Unit 2/Unit 1 boundary: enforced here since themes are defined in this unit).

## BR-2: Palette leadership constraints (FR-02)

- The light palette's `background`/`surface`-role tokens must be led by warm ivory; `accent`-role tokens must be led by deep teal, surgical green, and restrained burgundy (no single accent may dominate to the exclusion of the others across the token set).
- The dark palette's `background`/`surface`-role tokens must use deep blue-green surfaces; `text`-role tokens must be warm near-white; `accent`-role tokens must be teal or burgundy and remain contrast-accessible against dark surfaces.
- No token may use emergency-red as a `background` or dominant `accent` role (FR-02 explicitly avoids emergency-red dominance).

## BR-3: Contrast validation rule (Question 2)

For every documented text/background `ColorToken` pair used by a component:

- If the pairing renders normal body text, the computed contrast ratio must be **≥ 4.5:1** in both `lightTheme` and `darkTheme`.
- If the pairing renders large text or an essential graphical control, the computed contrast ratio must be **≥ 3:1** in both modes.
- A pairing that fails either threshold is a blocking defect for this unit, not a warning.
- **Enforcement**: An automated test computes `ContrastCheckResult` for every registered text/background pair and fails the build if any `passes` is `false`.

## BR-4: Reduced-motion suppression rule (Question 3)

- When the visitor's environment signals `prefers-reduced-motion: reduce`, every `MotionToken` with `essential: false` must resolve to no transition/animation (duration effectively zero or animation disabled), regardless of which color mode (`light`/`dark`) is active.
- A `MotionToken` may only be marked `essential: true` if the information it conveys has no equivalent non-motion presentation; this unit defines no `essential: true` tokens for the initial design (decorative anatomy/pulse/cellular motifs are all non-essential per FR-02, which requires decorative graphics not compete with reading order).

## BR-5: Color-mode persistence fallback rule (Question 3)

- On initial load, the color-mode value is read from the existing safe client-side persistence mechanism.
- If that read fails (storage unavailable, corrupted value, or any thrown error), the system falls back to the visitor's OS-level `prefers-color-scheme` signal, and if that is also unavailable, defaults to `light`.
- A persistence read failure must never block or delay rendering of content (NFR-05); the fallback resolves synchronously before first paint or is applied without a visible flash (FR-12's "prevent flashes of unreadable content").

## BR-6: No template-specific token leakage

Tokens for this unit contain no reference to the retired Engineering/Business template identities; all token names and values are scoped to the unified medical theme only (FR-01, FR-14).
