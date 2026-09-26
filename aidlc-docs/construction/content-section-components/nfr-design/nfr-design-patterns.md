# Unit 4: Content Section Components - NFR Design Patterns

## Pattern 1: Fail-closed media, fail-open verified copy

- **Applies to**: local-asset resilience, privacy, and content reliability.
- **Pattern**: section text renders from verified typed content independently of optional media. A portrait, evidence image, or CV action is rendered only when its asset identifier resolves through the fixed public allowlist. Invalid or absent media is omitted without an empty shell, broken image, dead download control, or page-level failure.
- **Development failure path**: example and property tests fail when configured media is unknown, disallowed, or inconsistent with its public metadata. Production markup never falls back to a raw path, dynamic directory lookup, or placeholder control.
- **CV exception boundary**: the approved PDF may retain its visible placeholder contact line inside its bytes; those values cannot enter website copy, accessible names, active links, or structured data.

## Pattern 2: Progressive static content composition

- **Applies to**: responsive scalability, reading order, and maintainability.
- **Pattern**: typed records render as semantic lists, articles, timelines, and bounded CSS grids. Grid columns collapse through approved breakpoints and content wraps naturally; DOM order remains the editorial and assistive-technology reading order.
- **Current scale**: awards, activities, credentials, and timeline entries render in one pass. Pagination, virtualization, accordions, carousels, filters, and client-side content state are intentionally excluded at the approved content volume.
- **Empty groups**: an empty optional collection omits its heading and container. Missing evidence never suppresses the associated verified text record.

## Pattern 3: Reserved critical media and deferred optional media

- **Applies to**: visual stability and page-load performance.
- **Pattern**: the hero portrait uses an allowlisted Vite import, explicit dimensions or aspect ratio, and eager loading because it is above the fold. Optional evidence images use stable dimensions and native lazy loading. The CV is a normal imported asset URL behind a native download anchor and is neither preloaded nor fetched by JavaScript.
- **Dependency boundary**: Unit 4 adds no component framework, animation library, document parser, runtime checksum, or remote request.

## Pattern 4: Token-governed semantic presentation

- **Applies to**: accessibility, theme parity, and visual consistency.
- **Pattern**: components use semantic React JSX and one dedicated `medical-content.css` stylesheet. Layout, color, typography, focus, and motion declarations use the Unit 1 token system; component code contains no theme branching.
- **Responsive contract**: layouts support 320 CSS pixels through wide viewports without horizontal page scrolling, preserve meaningful DOM order at every breakpoint, and allow long scientific and institutional text to wrap.
- **Interaction contract**: real actions use native anchors, visible `:focus-visible` treatment, and practical 44-by-44-pixel targets. Decorative medical marks are hidden from assistive technology.

## Pattern 5: Native, base-path-safe document download

- **Applies to**: GitHub Pages compatibility and reliable CV access.
- **Pattern**: the content/allowlist layer imports `bui-tuan-phat-cv.pdf` through Vite and exposes a typed `DownloadAsset`. `MedicalHero` renders that URL as an anchor with `download="bui-tuan-phat-cv.pdf"`, a descriptive accessible name, and a stable test identifier.
- **Failure behavior**: if the PDF is absent from the allowlist or its stable filename disagrees with the approved value, the action is omitted and verification fails. No blob creation, runtime fetch, direct `src/assets` path, or embedded-document parsing is allowed.

## Pattern 6: Defense-in-depth content isolation

- **Applies to**: accidental placeholder/private-data exposure.
- **Pattern**: source/content regression tests reject the exact placeholder phone and email from the supplied CV as well as general private-field patterns in website-facing TypeScript, JSX, generated markup fixtures, and public metadata. The explicitly approved PDF is the sole permitted byte-level exception.
- **Bundle boundary**: the production sweep permits the allowlisted PDF output while rejecting prohibited CV, identity, immigration, admission, score-report, transcript, and `dontuse` source assets.
- **Editorial safeguards**: example tests pin WHO wording, research attribution as student-reported observations, and community-service wording that does not imply clinical care.

## Pattern 7: Complementary example and property verification

- **Applies to**: content correctness and the enabled Property-Based Testing extension.
- **Pattern**: source-fidelity examples pin exact facts and critical user paths, while `fast-check` properties exercise the general invariants identified during Functional Design using reusable medical-domain generators.
- **Separation**: example tests and property tests use separately named files. Shrinking remains enabled, failure output retains replay seeds, and any meaningful shrunk counterexample becomes a permanent example regression.
- **Code-generation handoff**: properties must cover registry/section agreement, exact-once stable-ID rendering, allowlisted CV-action shape, and prohibited clinical-language invariants. Example tests must independently cover the expected CV download, portrait semantics, scores, GPA values, WHO text, research qualification, and absence of placeholder contacts.

## Explicitly Not Applicable

- Retry, backoff, circuit-breaker, failover, queue, cache, database, session, autoscaling, throughput, and server-recovery patterns are N/A because Unit 4 has no backend or remote runtime dependency.
- Stateful UI recovery is N/A because the section components introduce no mutable domain state, modal, form, filter, or carousel.

## Extension Compliance

| Rule | Result | Rationale |
|---|---|---|
| Security Baseline | Skipped | Explicitly disabled in the active Extension Configuration. |
| PBT-01 | Compliant | Functional Design already identifies invariant, induction, and easy-verification properties and carries them into Pattern 7. |
| PBT-02 | N/A | Unit 4 defines no inverse encode/decode, parse/format, or serialization pair. |
| PBT-03 | Design ready | Pattern 7 carries the identified business and rendering invariants into Code Generation. |
| PBT-04 | N/A | No operation claims an idempotency contract. |
| PBT-05 | N/A | No optimized or replacement algorithm has a useful reference oracle. |
| PBT-06 | N/A | Unit 4 adds no mutable state machine. |
| PBT-07 | Design ready | Reusable constrained medical-content generators are assigned to the test-support component. |
| PBT-08 | Design ready | Existing `fast-check` shrinking and seed replay remain required for Code Generation and Build and Test. |
| PBT-09 | Compliant | `fast-check` 4.10.1 with Vitest is selected, documented, and already installed. |
| PBT-10 | Design ready | Pattern 7 requires separate example and property coverage for every critical path. |

No blocking extension finding remains at this stage.
