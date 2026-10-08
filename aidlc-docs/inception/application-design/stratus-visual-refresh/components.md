# Components — Stratus Visual Refresh

These are proposed interfaces and responsibilities. Existing content models and the eight section IDs stay authoritative; source implementation follows Code Generation approval.

## Presentation direction

Notebook: an open editorial portfolio with a prominent split introduction/portrait, serif display headings, compact academic summary, generous section spacing and a sticky horizontal navigation band. Teal and sage accents, restrained rules and numbered section introductions create a medical notebook identity. Cards emphasize content rather than repetitive boxes.

Casebook: a structured reading document with a persistent desktop contents column, narrower reading measure, section numbering, strong chapter dividers and organized score/evidence tables or grids. Portrait and introduction form a composed document cover. This differs in layout and rhythm, not merely colors. Mobile converts contents to the shared drawer and retains the document hierarchy.

Both use ink/dark surfaces by default and warm ivory light surfaces. Shared typography, verified labels and simple CSS/SVG decoration keep identity coherent. Do not introduce patient charts, invented clinical readings or decorative graphs that appear to be personal evidence. Exact palette/contrast tokens, breakpoints and motion rules are specified in NFR Design.

## Ownership and interfaces

| Component/boundary | Status | Responsibilities and interface |
| --- | --- | --- |
| PortfolioApp | Extend | Own composition; combine typed content, display state and navigation; pass state/actions to shell and render shared section registry |
| MedicalStyleRegistry | New small metadata module | Define notebook/casebook IDs, labels and presentation attributes; validate saved style without copying student facts |
| useMedicalDisplayPreferences | New hook + pure helpers | Own style/layout state and guarded persistence; expose validated selections and setters |
| useMedicalLayout | Extend | Own route-selected section/layout coordination, href generation, history subscriptions and view-change intent; consume enabled IDs/preferences and full-page scroll state |
| MedicalShell | Extend | Stable landmarks, skip link, main focus target, style/layout attributes, sticky band and Casebook desktop contents region; receive selected state and callbacks |
| MedicalNav | Extend | Brand/home, active section links, responsive drawer and display controls; consume common navigation/href actions; avoid duplicated primary nav landmarks |
| MedicalDisplayControls | New | Accessible style/layout selectors with visible selected values; reuse theme control; usable desktop/mobile placement without duplicated IDs |
| MedicalSectionRenderer | New composition boundary | Registry maps eight existing IDs to the existing components; render all in full-page mode or selected section in section mode; stable section keys |
| MedicalHero / MedicalSection / content components | Extend styling/links | Retain facts and section IDs; share semantic headings; supply focusable section headings and layout-aware internal anchors; style through root variant attributes |
| MedicalSectionLink | New small anchor adapter | Real layout-aware href plus standard navigation callback; preserve modified-click behavior; use for hero/honor/next-section internal actions |
| EvidencePreviewProvider | Extend, stable lifetime | Remain mounted above style/layout-dependent shell/content; validate allowlist, keep image failure state, reconcile preview on explicit view changes and restore connected focus |
| GalleryModal / EvidenceGallery / AwardItem | Retain and restyle | Shared accessible dialog/cards/award links; retain metadata, keyboard, failure and close behavior; consume the same evidence controller |
| ClosingContact | Retain and restyle | Existing client-side validation, first-error focus, 5000-character limit/counter, encoded mailto draft; unchanged recipient/contact data |
| Theme bootstrap/provider/token generator | Extend | Agree on saved color or product dark default; keep theme key, normalize unsupported values, apply correct root class/data attributes |
| Content / gallery data / asset allowlist / production verifier | Preserve boundaries | Single source of medical facts and approved public assets; actual CV URL/download; verify built graph at root and project base |

## Shared feature guarantees

- Every style exposes overview, calling, education, academics, science, leadership, gallery and contact. No medical section is removed under the refresh requirements.
- Style switching changes shell/CSS presentation without duplicating content or forcing a keyed App/provider remount. The same mounted Contact form retains entries on a style change; section navigation may unmount it as expected, with no new draft-storage feature.
- The shell includes an approved CV action so it remains reachable when Overview is not mounted. The Hero retains its existing approved PDF action. Both use the same typed download data and allowlist checks.
- A single set of theme tokens feeds the content, shell and Chakra overlays; portal styling must receive the active medical style where needed.
- Existing sections preserve their heading IDs. The main target and selected section heading can receive programmatic focus without entering the regular Tab order.
## Extension compliance

Security Baseline: N/A, disabled B. Property-Based Testing: N/A, disabled C. Full rules not loaded; enforcement skipped according to Extension Configuration. Existing privacy/allowlist checks and property suites remain required. No enabled-extension blocking findings.
