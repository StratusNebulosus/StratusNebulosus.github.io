# Unit 4: Content Section Components - NFR Requirements Plan

## Assessment Progress

- [x] Load Unit 4 Functional Design, approved Requirements, Unit 1 theme constraints, Unit 2 asset boundary, and Unit 3 shell contract.
- [x] Evaluate accessibility, responsiveness, performance, reliability, maintainability, availability, scalability, privacy, and technology choices.
- [x] Resolve the four NFR decisions below.
- [x] Analyze answers for ambiguity or contradiction.
- [x] Generate `nfr-requirements.md` and `tech-stack-decisions.md`.
- [x] Verify PBT-09 framework compliance and stage extension compliance.

## Assessment Notes

- Availability and horizontal scalability require no new mechanisms: the project remains a static GitHub Pages site with no backend or mutable server state.
- Security Baseline remains disabled, but the independently approved asset allowlist and website-contact isolation remain binding product requirements.
- `fast-check` and Vitest already satisfy the PBT framework requirement; no replacement framework is needed.
- The current production build reports a non-blocking large-chunk advisory, so Unit 4 should avoid adding runtime dependencies.

## Question 1
Which implementation style should Unit 4 use for content sections and primitives?

A) Semantic React JSX plus a dedicated token-based `medical-content.css`, using Chakra only for the already-established shell controls (recommended for lower runtime/style overhead and precise editorial layout)
B) Chakra layout primitives throughout every content section for consistency with older components
C) Tailwind utility classes throughout Unit 4
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 2
How should the hero portrait and downloadable CV be loaded?

A) Import both through Vite; render the above-the-fold portrait eagerly with fixed aspect ratio/dimensions, and expose the PDF through a native download anchor without preloading its bytes (recommended)
B) Lazy-load the hero portrait and fetch the PDF only after JavaScript intercepts the click
C) Preload both portrait and PDF during initial page load
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 3
What accessibility verification should Unit 4 add without changing the existing toolchain?

A) Testing Library semantic/keyboard assertions, source-level CSS checks for focus/responsive rules, and a documented manual WCAG checklist; add no dependency (recommended)
B) Add `axe-core` and automated accessibility scanning in addition to Testing Library
C) Rely only on manual browser review
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 4
How should CV download integrity and public-asset safety be verified?

A) Add the PDF to the explicit imported-reference allowlist, assert its stable source filename/download filename, verify the download anchor, and extend the production-bundle prohibited-file sweep; do not add runtime checksum logic (recommended)
B) Add a runtime SHA-256 verification step before allowing the download
C) Link the PDF directly without adding it to the allowlist or asset tests
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Answer Analysis

- All answers are valid and mutually consistent.
- Unit 4 adds no dependency and does not expand the existing runtime framework surface.
- The portrait is the only eager content image and reserves layout space; the CV remains a native on-demand download.
- Accessibility verification combines automated semantic/interaction tests, source-level CSS safeguards, and a documented manual checklist.
- The PDF enters the explicit imported-reference allowlist and production-bundle safety checks; runtime hashing is intentionally excluded.
