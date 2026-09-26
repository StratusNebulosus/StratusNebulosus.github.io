# Unit 5: Evidence Gallery - NFR Design Plan

## Design Progress

- [x] Load approved Unit 5 Functional Design, NFR Requirements, technology decisions, existing medical components, allowlist boundary, and extension configuration.
- [x] Evaluate resilience, scalability, performance, privacy/security, accessibility-state, and logical-component pattern applicability.
- [x] Resolve the four pattern decisions below.
- [x] Analyze answers for ambiguity or contradiction.
- [x] Generate `nfr-design-patterns.md` and `logical-components.md`.
- [x] Verify extension compliance before review.

## Category Assessment

- **Resilience**: local image load failure, unknown selection, repeated close, and focus restoration require deterministic fail-closed behavior; network retries and service recovery do not apply.
- **Scalability**: runtime infrastructure scaling is N/A; the bounded 13-item grid needs only static responsive layout and native lazy loading.
- **Performance**: stable media geometry, asynchronous decode, the same thumbnail/preview URL, and no eager preload/cache are applicable.
- **Security/privacy**: Security Baseline is disabled, while pure allowlist validation, PDF exclusion, no dynamic imports, and bundle/source checks remain required product controls.
- **Logical components**: typed gallery data/validation, a pure selection state model, three focused React components, token CSS, and test support are sufficient; queues, caches, services, and global stores are N/A.

## Question 1
How should the UI recover if an allowlisted image still fails to load at runtime?

A) Preserve its visible caption/context, replace the failed image area with a restrained unavailable status, disable further preview activation for that item, and close its modal if it was selected; do not retry automatically (recommended)
B) Keep the trigger active and allow the browser's broken-image display in both card and modal
C) Add automatic retry/backoff and repeated image requests
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 2
How should modal selection and focus-restoration state be coordinated?

A) Use a pure selected-ID transition function, derive the selected item through validated lookup, control Chakra Dialog from whether that item exists, and keep trigger refs in a stable ID-keyed map solely for restoration (recommended)
B) Store a complete copied gallery item object in modal state and track the last clicked DOM node separately
C) Put gallery selection in a global application state store
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 3
Which scalability/performance pattern should the bounded gallery use?

A) Render the validated 13-item list once in authored order with native lazy loading and a CSS one/two/three-column grid; add no pagination, virtualization, observer-based loader, preload queue, cache, or carousel state (recommended)
B) Virtualize the gallery and render only visible cards
C) Add progressive batches with an IntersectionObserver and client-side cache
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 4
Which logical boundary should enforce gallery privacy and maintainability?

A) Use one explicit typed gallery-data/validation module, one pure selection-state module, focused `EvidenceGallery`/`GalleryItem`/`GalleryModal` components, one token stylesheet, and separate example/property/source/bundle tests; components never import raw CV assets (recommended)
B) Let each gallery component import and validate its own source images independently
C) Add a runtime media service that discovers and filters assets dynamically
X) Other (please describe after [Answer]: tag below)

[Answer]: A
