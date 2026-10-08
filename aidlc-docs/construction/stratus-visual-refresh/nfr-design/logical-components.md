# Logical Components — Stratus Visual Refresh NFR Design

## Browser and validation components

| Logical component | Implementation boundary | Inputs / outputs | Quality responsibility |
| --- | --- | --- | --- |
| Semantic theme/token generator | Existing src/theme tokens/generator/injection | Shared light/dark token names to root-scoped CSS | Explicit reading/action/focus pairs, stronger essential borders, no faint reading labels |
| Validated color-mode bridge | Existing bootstrap/provider/color-mode helpers | Guarded saved color plus dark fallback to coherent class/data-color-mode/provider state | First paint, saved-light support, invalid/blocked storage resilience |
| Display preference adapter | New small pure helpers/hook | medical-style/medical-layout values to validated live selections | Independent normalization, guarded writes, no contact persistence |
| Route/history controller | Existing useMedicalLayout extended + pure route helpers | Hash/history/user commands and scroll context to effective view/current section | Precedence, direct links, Back/Forward, one history entry per action, listener cleanup |
| Responsive presentation shell | Existing MedicalShell/Nav + display controls/style metadata | Validated view/state callbacks to Notebook/Casebook landmarks/controls | 320px containment, reachable CV/menu/controls, selected states, stable keys |
| Shared section/link registry | App composition and existing content/section primitives | Existing typed content and active view to mounted section(s)/real hrefs | Fact parity, semantics, document reading measure and context preservation |
| Focus transition coordinator | App/navigation integration with Chakra overlay lifecycle | Latest navigation/context intent plus overlay completion to mounted focus target | Correct drawer/dialog focus ordering, cancellation of stale targets, route-preserving skip |
| Stable evidence controller | Existing EvidencePreviewProvider/gallery/modal | Validated allowlisted items/trigger/context change to shared preview state | Failure recovery, connected focus restoration, retained image failure state |
| Retained contact/CV controls | Existing ClosingContact and shared CV data | User fields / approved CV asset to validation/mailto or native download | Existing errors/limit/recipient encoding and true PDF access |
| Reduced-motion adapter | Existing token helper plus scroll/CSS consumption | Browser motion preference to zero non-essential duration/immediate navigation | Preference affects actual behavior, not only token metadata |
| Quality/public-build verifier | Existing tests/scripts plus focused integration/browser checks | Root/project output and rendered configurations to actual evidence/results | Public graph safety, meaningful regression preservation, measured size/contrast/overflow |

These are client-side logical responsibilities, not separately deployed services. No queue, cache server, circuit breaker, authentication service, new monitoring agent or scaling infrastructure is needed. Native browser storage is only a display-preference convenience and cannot be a rendering dependency.

## Integration sequence for code planning

1. Establish reproducible baseline using locked dependencies and existing quality/build policy; preserve unrelated edits and existing history.
2. Implement paired tokens/validated dark bootstrap and preference/route helpers; update old system-default assumptions and add recovery/precedence tests.
3. Wire one display/navigation owner to a stable shared shell/provider/section registry; ensure both layout families and history behave before detailed visual polish.
4. Build distinct Notebook/Casebook compositions, controls, semantic links/heading targets, CV access and readable contact/evidence styles.
5. Integrate overlay-close/focus sequencing, reduced-motion scrolling and failure cases; retain existing property/contact/asset suites.
6. Run affected checks, final type/lint/tests, root/project build verifier, actual color/overflow/keyboard interaction review and representative screenshots. Record baseline/final output sizes and any limitations.

Code Generation Part 1 turns this sequence into explicit file-level steps and immediate progress checkboxes; no code work is authorized by this design-generation step alone.

## Verification ownership

Pure helpers cover normalization and route grammar; React integration covers state/history/controller interactions and retained contact/evidence behavior. Real browser review covers layout, computed colors, initial/saved theme, keyboard/overlay focus, reduced motion, real assets and downloads. Production verifier checks both built public graphs. Every quality check SV-Q-01 through SV-Q-12 maps to patterns/owners in nfr-design-patterns.md and approved NFR Requirements.

## Risks and recovery

Primary integration risks are invalid next-themes values, competing overlay/navigation focus effects, and full-page scroll context during a layout change. Use single validated owners and explicit transition intents; fix concrete failures before completion. Keep code changes scoped and reviewable so refresh-only changes can be reverted without losing student data or workflow history.
## Extension compliance

Security Baseline: N/A — disabled B. Property-Based Testing: N/A — disabled C. Full rules not loaded and enforcement skipped according to Extension Configuration. Existing privacy/asset policy and property suites remain required. No enabled-extension blocking findings.
