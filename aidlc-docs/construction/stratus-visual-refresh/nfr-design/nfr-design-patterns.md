# NFR Design Patterns — Stratus Visual Refresh

## 1. Semantic palette with explicit contrast pairs

Use the existing generated-token pipeline and naming scheme in both styles. Preserve token-name parity between modes; retain existing accent names to avoid breaking consumers. Add colorBorderStrong for essential outlined controls; keep colorBorderSubtle for decorative dividers only. Suggested subtle values: light #d5ddd5, dark #2c4241. Muted typography uses the secondary text token at full opacity, not faint borders or uncontrolled alpha.

| Token | Light | Dark | Light minimum contrast | Dark minimum contrast |
| --- | --- | --- | --- | --- |
| colorBackgroundPage | #f7f4ec | #0b1718 | Surface | Surface |
| colorBackgroundSurface | #fffdf7 | #112326 | Surface | Surface |
| colorTextPrimary | #172b2b | #f5f1e8 | 13.48:1 | 14.42:1 |
| colorTextSecondary | #374c49 | #bbc9c5 | 8.33:1 | 9.50:1 |
| colorAccentTeal | #14534e | #83ddd0 | 8.04:1 | 10.23:1 |
| colorAccentSurgicalGreen | #405b3d | #b9cca4 | 6.87:1 | 9.47:1 |
| colorAccentBurgundy | #7a2e3a | #f3a6b4 | 8.38:1 | 8.45:1 |
| colorBorderStrong | #76867c | #68817c | 3.49:1 | 3.88:1 |

Ratios above are calculated from sRGB relative luminance against both proposed opaque page/surface colors; the displayed value is the lower ratio. Primary/secondary reading pairs exceed 7:1 in both modes. Accent/error reading pairs exceed 4.5:1; essential border pairs exceed 3:1. These are proposed token calculations, not rendered-theme or browser test passes.

Use teal for primary links/buttons and sage for restrained secondary emphasis. Filled teal buttons use the light surface text color in light mode, and dark page text color in dark mode, giving a deliberate readable foreground/background pair. Text on tinted chips or image overlays needs its actual composite-background check; prefer opaque backing for captions and controls. Error text/icons use the existing burgundy role with the proposed readable value. Never use subtle borders as the only signal for input outlines, selected controls or keyboard focus.

Expand documented contrast coverage to normal-size accents/actions, secondary text on surface, filled controls, errors and essential borders. Retain existing property suites and include the stricter light reading target. Browser verification must inspect selected/hover/disabled/error states and Chakra portals, where inheritance can differ.

## 2. Two layouts with shared semantics and responsive containment

Notebook uses a wide editorial canvas (maximum approximately 1280px), split cover at wide widths, generous whitespace, numbered section headings, and varied portrait/score/timeline/evidence compositions. Casebook uses a document canvas (approximately 1180px) with a 240px contents rail and minmax(0, 1fr) reading column from 1100px upward. Its cover, chapter rules and structured rows differ meaningfully from Notebook.

At widths below 1100px Casebook becomes one column with a drawer for contents. Notebook's full horizontal section links appear only when space allows (initial threshold 1200px); below that threshold use the same drawer. Review thresholds at 768/1440 and intermediate widths; adjust for content fit rather than clipping.

Use a first header row for brand/theme/menu and a wrapping second control row for Style/View. Native named select controls provide visible selected values with at least 44px control height; at 320px they fit in two flexible columns or wrap safely. Global CV action stays reachable through desktop shell and the mobile drawer even when Overview is unmounted. Limit rigid minimum widths; use min-width: 0 for flex/grid children, wrap long titles/contact strings, and make image width/max-width responsive.

Use 16px minimum body/input text with comfortable 1.6–1.75 line height. Use approximately 13–14px minimum visible control/metric captions at approved contrast. Reading paragraphs have a roughly 65-character maximum measure. Existing serif heading/sans body font families remain; no new font request is required. Hero headings use responsive clamp sizing, natural wrapping and a safe line height; Casebook has a smaller document-cover scale. CSS spacing follows a small consistent scale (8, 12, 16, 24, 32, 48, 64px) with responsive section padding.

Section view renders exactly the selected shared section inside main; full-page renders all eight with stable keys/IDs. Include a named section-view position/next action where useful, derived from existing navigation data. Keep semantic H1 identity/cover or accessible page heading and coherent selected-section H2 hierarchy rather than inventing new content facts.

## 3. Deterministic defaults and recoverable browser preferences

Use validated IDs for medical-style and medical-layout and the existing theme key for light/dark. Read/write storage inside guards; normalize each key independently. Missing/unsupported theme (including system) resolves to product dark default; valid saved light is honored. No OS preference may override the approved first-visit default.

Bootstrap resolves color synchronously before mount and applies matching data-color-mode, light/dark classes and color-scheme. Configure next-themes with dark default, enableSystem false and supported light/dark values. Normalize unsupported saved theme values with a guarded correction where storage permits. A validated color bridge must keep root data/classes and React theme consumption coherent when storage correction fails; do not cast an unknown resolvedTheme to a valid union or retain a light fallback in color-mode-utils. Reconcile provider output using validated state before paint where necessary; test both blocked writes and invalid saved values together.

Keep one owner for live color, and one coordinated display/layout owner. Style change preserves layout/section/color; selected style is applied via root data attributes so content/form/provider is not keyed/remounted. Theme changes update both generated CSS scope and Chakra mode, including portals. No unrequested contact data is saved locally.

## 4. Route precedence and lifecycle cleanup

Pure route helpers recognize #section full-page and #/section section-view routes using existing IDs. Explicit valid route layout wins over saved layout, which wins over full-page. Empty route starts Overview in saved/default layout. Invalid routes normalize to Overview; keep recognizable family layout, otherwise use validated fallback, and replace the invalid history entry.

User navigation/layout changes update history once; history/hash listeners adopt external changes without pushing entries. Passive full-page scrolling updates only active section, never route history or dialog selection. In section view the route is authoritative. A layout switch uses the current active section; style switch preserves it. Generate real hrefs for all internal actions and intercept only ordinary same-tab activation. Clean up event subscriptions/observers under StrictMode, and cancel outdated pending focus/scroll requests when a newer transition supersedes them.

## 5. Focus transaction and stable evidence context

Keep the shared EvidencePreviewProvider above shell/section replacement, retaining failures and validated items. Explicit route/layout/style transitions reconcile an open dialog; passive scrolling does not. Ordinary close selects a connected/enabled evidence trigger, otherwise a current mounted section heading/main. No unconditional absent gallery/science-heading fallback.

Treat committed navigation as an ordered transaction: identify target, dismiss/reconcile transient dialog/drawer, commit route/view, then scroll/focus the mounted target after overlay close/focus restoration has completed. Use the existing Chakra close-completion lifecycle where available, with a cancellable scheduled fallback; avoid competing arbitrary timeout chains. Keep the newest target in a ref/token so rapid actions cannot focus an obsolete heading.

Programmatic heading/main targets use tabIndex -1. Section-view navigation ends on the selected heading; drawer cancellation/Escape ends on the menu trigger; ordinary style selection retains its connected control. Skip-to-content focuses main without writing a new section hash. Focus indicators are at least 2–3px with adequate offset and contrasting teal against adjacent surfaces; sticky regions must not obscure target content or focus rings. Dialog captions/errors/close controls use semantic opaque theme values.

## 6. Reduced motion and restrained loading

Do not introduce decorative entrance animations or animated clinical graphs. Existing motion tokens remain non-essential; reduced-motion resolves them to zero and sets CSS animation/transition suppression. Navigation checks prefers-reduced-motion and uses immediate scrolling when requested rather than unconditional smooth scrolling. Keep native eager/high-priority hero portrait and lazy evidence loading where already appropriate; no new duplicate image copies or runtime library.

Measure baseline/final production JS/CSS/assets and gzip sizes using equivalent build settings. Investigate unexplained growth and preserve/report existing advisories. No claimed latency/score gain without measurements. Use shared provider/section definitions instead of duplicate content bundles for the two presentations.

## 7. Public asset and retained feature gates

Continue existing allowlist/content/privacy tests and production verifier independently of disabled optional extensions. Use the actual approved CV asset and filename in shell/Hero, preserving native download semantics and root/project-base URLs. Evidence validation remains centralized; private/dontuse files never become style illustrations or previews.

Retain ClosingContact's required fields/email validation, first-invalid focus, 5000-character limit/counter and encoded configured-recipient draft. Restyle form/control/error surfaces with the same semantic tokens; no delivery claim or new backend. Existing typed student facts and labels remain authoritative; decorative native SVG/CSS remains clearly illustrative.

## Quality-to-pattern coverage

| Quality check | Patterns |
| --- | --- |
| SV-Q-01 | Responsive shared layout/containment (2) |
| SV-Q-02 | Semantic token pairs and rendered-state checks (1, 5) |
| SV-Q-03 | Named controls, semantics and ordered focus (2, 5) |
| SV-Q-04 | Stable evidence and focus transaction (5, 7) |
| SV-Q-05 | Guarded preferences and validated bootstrap/provider (3) |
| SV-Q-06 | Route precedence, history and context (4, 5) |
| SV-Q-07 | Reduced motion including navigation (6) |
| SV-Q-08 | Public graph/CV/root-project gates (7) |
| SV-Q-09 | Retained contact behavior/errors (7) |
| SV-Q-10 | Shared loading/native visuals and measured output (2, 6) |
| SV-Q-11 | Shared ownership, lifecycle cleanup and retained tests (3, 4, 5, 7) |
| SV-Q-12 | Distinct editorial/document compositions (1, 2) |

## Verification boundary

Code Generation must implement these contracts and update meaningful regressions; Build and Test must measure actual browser behavior across the approved 32 configurations and verify both base paths. Design calculations do not substitute for rendered contrast/focus/layout evidence. No application implementation, browser pass or runtime test result is claimed here.
## Extension compliance

Security Baseline: N/A — disabled B. Property-Based Testing: N/A — disabled C. Full rules not loaded and enforcement skipped according to Extension Configuration. Existing privacy/asset policy and property suites remain required. No enabled-extension blocking findings.
