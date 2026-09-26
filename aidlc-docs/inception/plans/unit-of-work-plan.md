# Medical Student Portfolio Revamp - Unit of Work Plan

## Purpose

Decompose the approved application design into units of work for the CONSTRUCTION phase's per-unit loop (Functional Design, NFR Requirements, NFR Design, Code Generation). This is a single monolithic static frontend (`my-portfolio`); "units" here are logical modules built and completed in sequence, not independently deployable services.

## Context Summary

- The execution plan (`aidlc-docs/inception/plans/execution-plan.md`) proposed a 6-unit sequence: Design Tokens & Theming; Content Data & Asset Allowlist; Navigation & Layout Shell; Content Section Components; Evidence Gallery; Testing & Documentation.
- Application design (`aidlc-docs/inception/application-design/`) defines `MedicalShell`/`MedicalNav`, eight content-area components, shared primitives, `content`/`assetAllowlist`/`colorMode`/`navigation` services, and `GalleryModal`.
- 16 approved user stories map onto these components; every story must be assigned to exactly one unit for traceability.

## Planning Checklist

- [x] Load application design, requirements, and user stories.
- [x] Generate context-appropriate questions.
- [x] Collect answers.
- [x] Analyze answers for ambiguity/contradiction. All four answers selected the recommended option (A); no ambiguity, contradiction, or follow-up needed.
- [x] Record explicit approval of the plan.

## Mandatory Artifacts (Part 2)

- [x] `aidlc-docs/inception/application-design/unit-of-work.md`
- [x] `aidlc-docs/inception/application-design/unit-of-work-dependency.md`
- [x] `aidlc-docs/inception/application-design/unit-of-work-story-map.md`

## Planning Questions

Please answer every question by entering the selected letter after its `[Answer]:` tag. If none of the options match your preference, choose `X) Other` and describe the preference after the tag.

### Question 1: Unit grouping strategy

The execution plan proposed 6 units grouped by technical layer (tokens, data, shell/nav, sections, gallery, tests/docs). Should this grouping be kept?

A) Keep the 6-unit technical-layer grouping as proposed (recommended) — clean dependency ordering (tokens → data → shell → sections → gallery → tests/docs), each unit independently completable
B) Merge into fewer, larger units (e.g., combine tokens+data as "Foundation", combine shell+sections+gallery as "Experience", keep "Testing & Documentation")
C) Split into more, smaller units (e.g., separate each of the 8 content-area components into its own unit)
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2: Testing & Documentation unit sequencing

Should "Testing & Documentation" run strictly last, or should each earlier unit include its own colocated tests as it is built (per Application Design's colocated-testing decision), with a final unit only for cross-cutting regression/property tests and documentation?

A) Each unit (2-5) includes its own colocated example-based and property-based tests as it is built; the final "Testing & Documentation" unit covers only cross-cutting regression tests (former-identity absence, full asset-boundary sweep) and repository documentation (recommended)
B) Defer ALL test-writing (including per-component tests) to the final unit, after all components and data exist
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3: Dependency strictness between units

Should units be completed strictly in sequence, or can some proceed in parallel?

A) Strictly sequential: Design Tokens & Theming → Content Data & Asset Allowlist → Navigation & Layout Shell → Content Section Components → Evidence Gallery → Testing & Documentation, each fully completed (including its own code and tests) before the next starts (recommended) — matches the per-unit Construction loop, which completes one unit fully before moving to the next
B) Allow Content Data & Asset Allowlist and Design Tokens & Theming to be worked in either order or together, since they have no dependency on each other, before Navigation & Layout Shell starts
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4: Story-to-unit mapping granularity

How should the 16 approved user stories be mapped to units?

A) Each story maps to exactly one primary unit based on its dominant component/requirement (e.g., Story 9 "Evidence Gallery" → Evidence Gallery unit), even where a story also touches shared services from an earlier unit (recommended)
B) Allow stories to be split across multiple units when they touch multiple components, creating partial-story entries per unit
X) Other (please describe after [Answer]: tag below)

[Answer]: A
