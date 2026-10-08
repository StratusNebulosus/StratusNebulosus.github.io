# Services and Orchestration — Stratus Visual Refresh

No backend service is required. This artifact describes application-side controllers and browser adapters, implemented with the existing stack.

## Display preference adapter

Owns guarded reads/writes for medical-style and medical-layout. Existing theme key remains next-themes compatible. Valid values are restored individually, so a bad style value does not discard a valid layout. Storage failures affect persistence only, not rendering. A fresh visitor uses Notebook/full-page/dark. Color reads use the shared resolver; provider configuration and bootstrap agree on disabled OS override and saved-light support.

## Navigation controller

Owns the effective current route and view transitions. Direct hash routes take precedence over saved layout, then valid saved layout, then full-page. Style does not affect the route syntax. #section selects full-page and #/section selects section mode. Unknown routes recover to Overview, retaining an identifiable route family's layout where possible; unrecognized forms use the validated fallback. Empty hash starts Overview in saved/default layout.

Explicit section/layout actions create useful history entries; invalid-route normalization replaces the current entry. Back/Forward and hashchange are observed without creating new history entries. Passive full-page scrolling updates active navigation only, without pushing entries or resetting evidence. In section view, route selection is authoritative and scroll tracking cannot overwrite it.

On full-page navigation, render all content and scroll to the requested section. On section navigation, render the selected shared component, position it below the shell and focus its heading. Layout switching uses the currently active section, including a full-page scroll-selected section. Style switching preserves section/layout/color and updates only presentation, using stable section keys.

## Transient UI and focus coordination

PortfolioApp coordinates explicit route/layout/style transitions with the stable evidence controller. An open dialog is dismissed/reconciled before its origin becomes absent. Ordinary dialog close restores a connected trigger; context changes use a current mounted heading/main fallback. Programmatic heading focus is scheduled after drawer/dialog focus management finishes so finalFocus restoration cannot steal it. Pure passive scrolling does not close a preview.

The mobile drawer closes after selection. Cancellation/Escape returns focus to its trigger; committed section navigation completes focus at the selected heading. The skip action focuses main directly without changing the URL hash. Style/layout controls remain reachable at narrow widths even when desktop navigation is hidden. Controller effects/subscriptions clean up under StrictMode; no accumulating history or scroll listeners.

## Content and evidence orchestration

Keep EvidencePreviewProvider outside shell/content view replacement. PortfolioApp maps the existing eight section IDs to shared section components using a stable registry. Both variants read the same content/gallery/allowlist. Route changes may render fewer sections but do not create independent gallery stores, duplicated data, or new public assets. Failed-item state survives style switches.

CV links use the existing allowlisted asset and filename with native download semantics. Contact keeps the existing local validation/draft behavior; no network/mail sender is introduced. Hero honor/path links and any internal section actions use the shared layout-aware adapter. Evidence controls remain evidence actions rather than becoming route anchors.

## Service interactions and limitations

Preferences feed navigation and shell; navigation feeds shared section composition; explicit view changes notify transient UI coordination; evidence validates against local data; theme state drives generated tokens and overlays. These are one application lifecycle, with no new external API, persistent message store, analytics collector or hosting dependency. Current assets remain unchanged at design time.
## Extension compliance

Security Baseline: N/A, disabled B. Property-Based Testing: N/A, disabled C. Full rules not loaded; enforcement skipped according to Extension Configuration. Existing privacy/allowlist checks and property suites remain required. No enabled-extension blocking findings.
