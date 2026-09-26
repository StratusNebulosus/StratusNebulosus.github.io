# Unit 1: Design Tokens & Theming - Domain Entities

## `ColorToken`

- **Fields**: `name: string` (e.g., `colorBackgroundSurface`), `light: string` (hex/hsl value), `dark: string` (hex/hsl value), `role: "background" | "text" | "accent" | "border"`.
- **Invariant**: Every `ColorToken` must define both `light` and `dark` values; neither may be empty.

## `TypographyToken`

- **Fields**: `name: string` (e.g., `fontHeadingEditorial`, `fontBodySans`), `family: string`, `usage: "heading" | "body" | "nav" | "control" | "metric"`.

## `MotionToken`

- **Fields**: `name: string`, `essential: boolean` (true only for motion conveying information that has no non-motion equivalent), `durationMs: number`, `reducedMotionBehavior: "suppress" | "retain"`.
- **Invariant**: Per the reduced-motion business rule, any token with `essential: false` must have `reducedMotionBehavior: "suppress"`.

## `Theme`

- **Fields**: `mode: "light" | "dark"`, `colors: ColorToken[]`, `typography: TypographyToken[]`, `motion: MotionToken[]`.
- **Instances**: `lightTheme`, `darkTheme` — two independently exported `Theme` objects sharing the identical set of token `name`s (Question 1, Option A).

## `ColorModePreference`

- **Fields**: `value: "light" | "dark"`, `source: "user-selected" | "system-default"`.
- **Invariant**: A read failure of the persisted preference always yields `{ value: <system prefers-color-scheme>, source: "system-default" }`, never a blocked or unreadable render (Question 3, Option A).

## `ContrastCheckResult`

- **Fields**: `pair: { textToken: string; backgroundToken: string }`, `ratio: number`, `requiredRatio: 4.5 | 3`, `passes: boolean`.
- **Purpose**: Output of the automated contrast-validation rule (Question 2, Option A) for every documented text/background token pair in both `lightTheme` and `darkTheme`.
