# NFR Requirements — Stratus Visual Refresh

## Scope

One static medical-student portfolio, two styles (Notebook/Casebook), two layouts (full-page/section), two colors (dark/light). Approved requirements and Application Design are the source of quality goals; this document makes them observable. First-visit defaults are Notebook/full-page/dark. Existing student facts/evidence/CV/email-draft behavior remain binding.

## Measurable quality requirements

| ID | Requirement and acceptance | Verification/evidence | Owner / approved mapping |
| --- | --- | --- | --- |
| SV-Q-01 | At 320, 390, 768 and 1440 CSS pixels, both styles/layouts/colors have no document horizontal overflow or clipped essential controls; all eight sections remain reachable | DOM overflow measurements across 32 display/width configurations; inspect long headings, navigation, form and gallery; representative screenshots | Shell/section CSS; SV-NFR-01, SV-NFR-09 |
| SV-Q-02 | Normal reading/action text has at least 4.5:1 contrast; light primary/secondary reading text targets 7:1; essential focus/control indicators have 3:1 against adjacent surfaces | Token pair checks plus actual computed rendered colors for labels, links, selected/hover/error states and overlays; record ratios and fix findings | Theme/control/dialog styling; SV-NFR-03 |
| SV-Q-03 | Controls have useful names/selected states, keyboard operation and visible focus. Semantic landmarks/heading order remain coherent; selected section heading receives focus in section view | Keyboard review of desktop and drawer/control paths; component/browser focus assertions after navigation; skip targets main without route mutation | Nav/shell/focus coordinator; SV-NFR-02, SV-FR-07 |
| SV-Q-04 | Evidence dialog retains trapping, Escape/close, metadata and failure behavior. Ordinary close restores a connected origin; view changes close/reconcile it and focus a mounted safe target | Integration/browser cases from award and gallery controls; failed image, route/history/layout/style changes with dialog selected; no focus on absent content | Stable evidence provider/dialog; SV-NFR-02, SV-NFR-07, SV-FR-08 |
| SV-Q-05 | Valid preferences restore independently; invalid/missing/blocked reads/writes never prevent use. Saved light wins; fresh/invalid color defaults dark regardless of OS. Initial root/theme provider agree | Deterministic storage/normalization tests plus browser fresh-light-OS, saved-light, unsupported value and inaccessible storage cases; observe initial computed theme | Preference adapter/bootstrap/provider; SV-NFR-07, SV-FR-06 |
| SV-Q-06 | #section and #/section choose their respective layouts over saved layout; history follows routes; unknown route recovers Overview. Style/layout switches keep the active section | Unit tests for route families/invalid values and integration/browser back/forward, full-page scroll to section-mode switch, internal hero/actions and modified link activation | Navigation/controller/section links; SV-NFR-07, SV-FR-04, SV-FR-05 |
| SV-Q-07 | Reduced-motion preference removes unnecessary decoration and smooth navigation; content and controls remain fully available | Existing motion tests plus computed styles/scroll behavior in a reduced-motion browser configuration | Motion/scroll helpers; SV-NFR-04 |
| SV-Q-08 | Both styles share existing verified facts and allowlisted assets; no private/dontuse/full-record/identity data enters output. Approved PDF is unchanged and resolves for root/project builds | Existing content/allowlist/privacy suites and verify:dist for both base paths; inspect actual CV URL, PDF response and download metadata | Data/asset policy/verifier; SV-NFR-05, SV-FR-01, SV-FR-09, SV-FR-11, SV-FR-12 |
| SV-Q-09 | Existing required-field/email checks focus first invalid field; 5000-character message limit/counter and encoded configured-recipient email draft remain accurate; UI accurately describes a draft | Existing meaningful contact tests; submit valid/invalid/limit-boundary input across display integrations; verify mailto contents without claiming email delivery | ClosingContact; SV-NFR-02, SV-NFR-07, SV-FR-10 |
| SV-Q-10 | Use the current runtime stack with no extra chart/animation/modal library for decoration. Record baseline/final production JS/CSS/assets and gzip sizes; investigate increases and explain retained warnings | Locked reproducible baseline/final builds and actual asset inventories; browser check for uncaught errors/loading failures; no invented performance score or percentage target | Build/styles/app; SV-NFR-04, SV-NFR-06, SV-NFR-08 |
| SV-Q-11 | Preserve one content graph, stable evidence/controller lifetime, and meaningful existing suites including property tests; no duplicate style-specific facts or obsolete single-style/default assumptions | Source/diff review; applicable updated tests and typecheck/lint/build/verify:dist; effects/listener cleanup under StrictMode and focus/state transitions | Shared app/contracts/tests; SV-NFR-06, SV-NFR-07, SV-NFR-08 |
| SV-Q-12 | Distinct medical editorial designs match the reference's typography/spacing/control polish while retaining student identity; no fabricated clinical measurements | Desktop/mobile screenshots in both styles/colors, with focused section examples; compare hierarchy, portrait, score/evidence framing, contents, reading measure and light readability | Visual review; SV-NFR-09, SV-FR-02, SV-FR-03 |

## Coverage and review matrix

All nine approved NFRs map above: NFR-01 to Q-01; NFR-02 to Q-03/Q-04/Q-09; NFR-03 to Q-02; NFR-04 to Q-07/Q-10; NFR-05 to Q-08; NFR-06 to Q-10/Q-11; NFR-07 to Q-04/Q-05/Q-06/Q-09/Q-11; NFR-08 to Q-08/Q-10/Q-11; NFR-09 to Q-01/Q-12. All nine stories remain covered by the approved design traceability and these quality gates.

Responsive matrix has 2 styles × 2 layouts × 2 colors × 4 widths = 32 configurations. Check document layout in each; capture representative visual evidence instead of requiring 32 redundant screenshots. Interaction cases cover both style/layout pairs, both colors for rendered readability, desktop/mobile drawer paths, and important history/preference/focus failures. Use actual browser behavior for focus and computed styles, not only jsdom.

## Performance, scaling and availability boundaries

No new API/backend creates throughput or capacity requirements. Static delivery and the existing GitHub Pages architecture suffice for this scope. No new uptime SLA, failover, disaster-recovery infrastructure, monitoring service or traffic projection is promised. External email/PDF software availability is outside the app; real native links and clear draft/download labeling are the app's responsibility.

Build output must be measured on equivalent baseline/final build settings. Existing chunk advisories are recorded honestly; do not claim measured load-time improvements without representative timing evidence. Reuse existing portrait dimensions/eager hero loading and lazy evidence behavior where appropriate. New presentation code should avoid duplicate assets, dependencies and unnecessary remounts; optimization work follows concrete findings rather than speculative targets.

## Reliability and privacy boundaries

Storage denial/corruption, unsupported hashes and evidence image errors are normal recoverable conditions. Lifecycle cleanup must prevent duplicate listeners/history actions. No persistent contact draft, analytics request, server email send or additional private asset import is introduced. Existing production verifier remains a blocking acceptance check irrespective of disabled optional extensions.

## Completion evidence and limitations

Construction must record actual command results, browser screenshots/checks, remaining limitations and measured bundle inventories. Root and repository-base build verification are required; failures must be resolved before claiming completion. This stage defines acceptance only: no source edits, baseline execution, browser measurements or runtime passes are asserted.
## Extension compliance

Security Baseline: N/A — disabled B in Extension Configuration. Property-Based Testing: N/A — disabled C. Full extension rules not loaded; enforcement skipped. Existing production privacy/asset policy, accessibility obligations and existing property suites remain required independently. No enabled-extension blocking findings.
