# Application Design — Stratus Visual Refresh

## Result

One React application offers two distinct medical presentations, Notebook and Casebook, through shared section components, content and evidence ownership. Notebook is the open editorial default; Casebook provides a document cover and desktop contents column. Both support full-page/section layouts, saved preferences, dark default and readable light color. Student identity/facts, approved evidence/CV and email draft behavior remain the same.

## Design artifacts

- [Components](components.md): presentation direction, component boundaries and ownership.
- [Component methods](component-methods.md): typed signatures and high-level input/output contracts.
- [Services](services.md): browser preference/navigation, transient UI/focus and content orchestration.
- [Component dependencies](component-dependency.md): dependency matrix and validated diagram/text alternative.

## Key decisions

| Concern | Decision |
| --- | --- |
| Visual differentiation | Notebook open editorial layouts; Casebook structured document/contents; shared semantic content and typography identity |
| Persistence | Guarded medical-style/medical-layout values; existing theme key and normalized color policy |
| Defaults | Notebook/full-page/dark unless valid saved preferences or explicit route override layout |
| Routing | Existing #section full-page links and new #/section routes; static hosting compatibility; history updates view |
| Context preservation | Style changes preserve section/layout/color and stable component keys; layout switches preserve active section |
| Evidence | Single stable provider above view replacement; explicit changes reconcile dialog; connected trigger or mounted focus fallback |
| Mobile/keyboard | Shared reachable controls/drawer; close then committed heading focus; skip targets main without altering route |
| CV/contact | Global shell PDF action plus Hero action; established local contact validation/mailto composer |
| Stack/data | Existing React/Chakra/next-themes, native CSS/SVG, shared typed content; no new API or duplicate content model |

## Requirements and story coverage

| Approved requirements | Design owner | Stories |
| --- | --- | --- |
| SV-FR-01, SV-FR-02, SV-FR-03 | Shared section renderer, style registry, shell and visual variants | SV-US-01, SV-US-02 |
| SV-FR-04, SV-FR-05, SV-FR-07 | Navigation controller, controls, shell and section-link adapter | SV-US-03, SV-US-08 |
| SV-FR-06 | Preference adapter, navigation precedence, theme bootstrap/provider | SV-US-02, SV-US-04 |
| SV-FR-08 | Stable evidence provider, dialog and focus coordination | SV-US-05 |
| SV-FR-09 | Allowlisted shell/Hero CV links | SV-US-06 |
| SV-FR-10 | Existing ClosingContact composer | SV-US-07 |
| SV-FR-11, SV-FR-12 | Shared approved data/asset policy and existing static build | SV-US-05, SV-US-06, SV-US-09 |
| SV-NFR-01, SV-NFR-02, SV-NFR-03, SV-NFR-04 | Shell/control semantics, tokens, focus and reduced motion; measurable details follow NFR stages | SV-US-01, SV-US-03, SV-US-04, SV-US-05, SV-US-07, SV-US-08 |
| SV-NFR-05, SV-NFR-06 | Single content graph and allowlist; stable component/provider ownership | SV-US-01, SV-US-02, SV-US-05, SV-US-06, SV-US-09 |
| SV-NFR-07, SV-NFR-08, SV-NFR-09 | Existing suites plus focused integration/browser/root-project build review | SV-US-01, SV-US-02, SV-US-03, SV-US-04, SV-US-05, SV-US-06, SV-US-07, SV-US-08, SV-US-09 |

## Consistency/completeness validation

- All twelve FRs, nine NFRs and nine stories have an owner; all eight section IDs and the actual public CV/evidence contract remain represented.
- Responsibilities/methods/dependencies agree: app composition owns coordination, navigation resolves layout, theme owns color, evidence owns selection; no new service layer or cyclic content/nav ownership is introduced.
- High-level state/precedence and focus contracts address the new display features. No complex domain logic or new schema requires separate Functional Design; NFR implementation detail follows the approved plan.
- Diagram uses simple validated node/link syntax and has a text alternative; Markdown/tables/link targets were checked before creation. Existing history is preserved.
- Medium integration risk remains until implementation/testing: provider focus ordering, full-page scroll context, bootstrap agreement and root/project assets require real verification. This stage changed documentation only; no runtime tests or screenshots are claimed.

## Next stage

After explicit Application Design approval, proceed to Construction — NFR Requirements for the single visual-refresh unit. Units Generation remains skipped, but the user may add it through the review file. Concrete tokens, responsive thresholds and focus/motion implementations are specified in NFR Design; detailed code planning and implementation approvals follow.
## Extension compliance

Security Baseline: N/A, disabled B. Property-Based Testing: N/A, disabled C. Full rules not loaded; enforcement skipped according to Extension Configuration. Existing privacy/allowlist checks and property suites remain required. No enabled-extension blocking findings.
