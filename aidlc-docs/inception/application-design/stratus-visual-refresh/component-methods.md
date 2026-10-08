# Component Methods — Stratus Visual Refresh

Signatures are design contracts; exact filenames and React wiring may be refined during Code Generation without changing behavior. Pure helpers support deterministic tests. No new domain business logic is introduced.

## Types

- MedicalStyleId: notebook or casebook.
- MedicalLayoutMode: full-page or section.
- MedicalSectionId: the existing eight navigation IDs.
- MedicalDisplayPreferences: style and layout; color remains owned by the existing theme provider.
- MedicalRoute: validated section plus layout, and whether the route was explicit/invalid.
- MedicalNavigationState: activeSection, layout, getNavigationHref, navigateToSection, setLayout and viewRevision.
- MedicalStyleDefinition: id, label, description and root presentation attributes; no copied student content.

## Proposed method contracts

| Boundary | Signature | Purpose and high-level guarantee |
| --- | --- | --- |
| Style registry | resolveMedicalStyle(value: unknown): MedicalStyleId | Accept known IDs; otherwise Notebook |
| Preference helpers | readMedicalDisplayPreferences(): MedicalDisplayPreferences | Read guarded medical-style/medical-layout keys; independently normalize each; fallback Notebook/full-page |
| Preference helpers | persistMedicalDisplayPreference(key: DisplayPreferenceKey, value: DisplayPreferenceValue): void | Guard write failures; live selection still works |
| Preference hook | useMedicalDisplayPreferences(): MedicalDisplayPreferenceState | Expose validated style/layout and setters; one owner per app |
| Route helper | parseMedicalRoute(hash: string, fallbackLayout: MedicalLayoutMode): MedicalRoute | Existing #section means full-page; #/section means section; no route uses saved/default layout; invalid route resolves Overview with a valid layout |
| Route helper | getMedicalNavigationHref(sectionId: MedicalSectionId, layout: MedicalLayoutMode): string | Generate the public anchor for the active layout |
| Navigation hook | useMedicalLayout(options: MedicalLayoutOptions): MedicalNavigationState | Coordinate valid route, history, layout selection and scroll active state |
| Navigation action | navigateToSection(sectionId: MedicalSectionId): void | Close/reconcile transient UI, update route, render/scroll target and arrange focus as appropriate |
| Layout action | setLayout(layout: MedicalLayoutMode): void | Keep current section; persist valid selection and generate matching route; focus selected heading after a view change |
| Style action | setStyle(style: MedicalStyleId): void | Keep layout/section/color; persist selection; reconcile preview; retain focus on a connected style selector |
| Focus helper | focusMedicalSection(sectionId: MedicalSectionId): void | Target mounted heading; fall back to focusable main; respect dialog/drawer close sequencing |
| Section renderer | renderMedicalSections(view: MedicalSectionRenderState): ReactNode | Select shared registry entries without changing facts or evidence ownership |
| Section link | MedicalSectionLink(props: MedicalSectionLinkProps): ReactElement | Section ID/children/anchor props; preserve actual href and ordinary modified-click browser semantics |
| Evidence controller | openItem(itemId: string, trigger: HTMLButtonElement): void | Existing allowlisted-item behavior; remember connected trigger |
| Evidence controller | reconcilePresentationChange(): void | Dismiss stale preview before context replacement; avoid stale trigger restoration; invoked on explicit changes, not passive scrolling |
| Evidence controller | restoreFocusEl(): HTMLElement or null | Prefer connected/enabled origin for ordinary close; otherwise current mounted heading or main; never select absent gallery/science headings blindly |
| Theme resolver | resolveColorModePreference(): ColorModePreference | Valid saved light/dark wins; missing/invalid/unavailable storage returns product dark default |
| Theme bootstrap | bootstrapColorMode(): void | Match provider default and normalized saved choice; apply coherent class/data-color-mode attributes before mount |
| Contact composer | Existing component submit/validation handlers | Retain required fields/first-error focus and encoded email draft; no service or delivery callback added |

## Public component prop contracts

MedicalShell/MedicalNav receive activeSection, navigationItems, getNavigationHref, onNavigate, style, layout, onStyleChange and onLayoutChange. MedicalDisplayControls receives the selected style/layout plus their callbacks; color control uses the existing provider. Section renderer consumes typed existing content and the shared navigation action through props or a narrow navigation context. Evidence provider adds presentation-change coordination and a mounted focus fallback, while preserving existing item/failure/open APIs.

Avoid competing layout owners: the display hook stores selection; the navigation controller determines effective layout using route precedence and updates selection for explicit user layout changes. Color remains independent. Proposed source marker product-default replaces outdated system-default assumptions where required; type/tests/comments must be migrated together.
## Extension compliance

Security Baseline: N/A, disabled B. Property-Based Testing: N/A, disabled C. Full rules not loaded; enforcement skipped according to Extension Configuration. Existing privacy/allowlist checks and property suites remain required. No enabled-extension blocking findings.
