# Unit 5: Evidence Gallery - NFR Requirements Plan

## Assessment Progress

- [x] Load approved Unit 5 Functional Design, Unit 1 tokens, Unit 2 allowlist, Unit 3 shell behavior, Unit 4 content system, current toolchain, and extension configuration.
- [x] Evaluate accessibility, responsive usability, performance, availability/scalability, reliability, privacy, maintainability, and testing needs.
- [x] Resolve the four NFR and technology decisions below.
- [x] Analyze answers for ambiguity or contradiction.
- [x] Generate NFR requirements and technology-stack decisions.
- [x] Verify extension compliance before review.

## Category Assessment

- **Accessibility/usability**: modal name, focus containment/restoration, Escape/close paths, keyboard-operable cards, meaningful captions, visible focus, zoom, and reduced motion are applicable.
- **Performance**: 13 below-the-fold thumbnails require reserved sizing, native lazy loading, asynchronous decoding, and no duplicate preview asset; runtime image transformation is not justified.
- **Responsive design**: the gallery must remain usable from 320 CSS pixels through wide desktop and the complete modal image must fit the viewport.
- **Reliability**: invalid selection or asset data must fail closed without breaking the surrounding section.
- **Privacy/security**: Security Baseline remains disabled, while explicit allowlist validation and production-bundle exclusion remain approved product controls.
- **Availability/scalability**: server failover, autoscaling, throughput, and recovery are N/A because this is a static local-asset gallery with no remote runtime dependency.
- **Maintainability/testing**: existing React, Chakra Dialog, semantic JSX, token CSS, Testing Library, Vitest, and fast-check can cover the unit without a new dependency.

## Question 1
Which modal implementation should provide focus containment, Escape handling, background suppression, and focus restoration?

A) Use the already-installed Chakra Dialog primitives, keep selected-item state in `EvidenceGallery`, and verify the library integration with Testing Library rather than writing custom focus-trap logic (recommended)
B) Build a custom React modal and custom focus trap from keyboard-event handlers
C) Use the native HTML `dialog` element and implement cross-browser focus restoration manually
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 2
What image-loading and layout-stability requirements should apply to the 13-item gallery?

A) Give every thumbnail a fixed aspect ratio/dimensions, use native `loading="lazy"` and `decoding="async"`, reuse the same Vite asset in the modal, and add no image-processing or lightbox dependency (recommended)
B) Eager-load every gallery image so all previews are immediately cached
C) Generate multiple responsive image variants and a custom preloading queue during this unit
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 3
How should responsive gallery and modal presentation be bounded?

A) Use a token-based CSS grid that progresses from one to two to three columns, preserves DOM order, supports 320-pixel widths and 200% zoom, and constrains modal content/image within the viewport without horizontal page scrolling (recommended)
B) Use a horizontal scrolling gallery rail on small screens and a masonry layout on desktop
C) Use a fixed three-column grid at every viewport width
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 4
What verification stack should enforce accessibility, state behavior, and the asset boundary?

A) Use existing Testing Library/Vitest interaction tests, source-level CSS checks, fast-check model/state properties, explicit gallery-to-allowlist cross-checks, and the final production-bundle sweep; add no dependency (recommended)
B) Add an automated accessibility package and image snapshot tooling now
C) Rely primarily on manual browser review and keep automated tests minimal
X) Other (please describe after [Answer]: tag below)

[Answer]: A
