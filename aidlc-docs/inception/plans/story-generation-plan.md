# Medical Student Portfolio Revamp - Story Generation Plan

## Purpose

Create implementation-neutral personas and user stories for the approved medical portfolio requirements in `aidlc-docs/inception/requirements/requirements.md`.

## Recommended Approach

Use a hybrid breakdown:

- **User journey-based** stories for discovery, navigation, reading the medical pathway, reviewing evidence, using accessibility preferences, and reaching the closing section.
- **Domain-based** supporting stories for verified content, privacy-safe assets, maintainability, testing, documentation, and GitHub Pages reliability.

This approach keeps the story set centered on visitor outcomes while preserving explicit coverage of high-risk evidence and maintenance requirements.

## Story Breakdown Options

### User Journey-Based

- **Benefits**: Closely follows how reviewers and visitors experience the portfolio.
- **Trade-off**: Maintenance, evidence governance, and testing need supporting stories.

### Feature-Based

- **Benefits**: Maps directly to navigation, themes, sections, gallery, and testing features.
- **Trade-off**: Can fragment the overall medical narrative.

### Persona-Based

- **Benefits**: Makes reviewer, mentor, visitor, and owner needs explicit.
- **Trade-off**: Similar capabilities may be repeated for several personas.

### Domain-Based

- **Benefits**: Cleanly separates narrative, evidence, accessibility, maintenance, and delivery concerns.
- **Trade-off**: The visitor's end-to-end journey is less visible when used alone.

### Epic-Based

- **Benefits**: Groups a larger story set under clear product outcomes.
- **Trade-off**: Adds hierarchy to a single-site project.

## Planning Questions

Please answer every question by entering the selected letter after its `[Answer]:` tag.

If none of the options match your preference, choose `X) Other` and describe the preference after the tag.

### Question 1

Which story breakdown approach should be used?

A) Hybrid user-journey and domain-based stories (recommended)
B) User journey-based stories only
C) Persona-based stories grouped by visitor type
D) Epic-based stories with feature-oriented child stories
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2

Which persona set should be represented?

A) Academic reviewer, medical educator or mentor, peer or general visitor, and portfolio owner or maintainer (recommended)
B) Academic reviewer, mentor, and general visitor only
C) Academic reviewer and portfolio owner only
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3

How large should the story set be?

A) Balanced set of approximately 12 to 16 stories covering the full journey and supporting domains (recommended)
B) Focused set of approximately 8 to 10 stories covering only critical visitor outcomes
C) Detailed set of approximately 17 to 22 stories with narrower evidence, accessibility, and maintenance scenarios
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4

How should acceptance criteria be written?

A) Given/When/Then criteria with explicit content-authenticity, privacy, accessibility, and responsive checks where relevant (recommended)
B) Concise checklist criteria for every story
C) Given/When/Then for visitor journeys and checklists for supporting owner or maintainer stories
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 5

How should the stories be ordered?

A) By visitor journey and risk: first impression, narrative, evidence, accessibility, content maintenance, then delivery (recommended)
B) By visible section order only
C) By implementation dependency order
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 6

Which success emphasis should guide the story set?

A) Balanced authenticity, visual storytelling, privacy-safe evidence, accessibility, maintainability, testing, and deployment reliability (recommended)
B) Primarily visual storytelling and reviewer engagement
C) Primarily content accuracy, testing, and technical reliability
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Part 1: Planning Checklist

- [x] Load approved requirements and current reverse-engineering context.
- [x] Validate that User Stories add value for this system-wide user-experience change.
- [x] Document the User Stories assessment decision.
- [x] Define context-appropriate story breakdown options.
- [x] Create the story-generation plan and embedded questions.
- [x] Collect answers for every planning question.
- [x] Validate answers for completeness, contradictions, and ambiguity.
- [x] Record explicit approval of the resolved story-generation approach.

## Part 2: Generation Checklist

- [x] Load the approved story-generation plan and identify the first incomplete generation step.
- [x] Generate `aidlc-docs/inception/user-stories/personas.md` with approved user archetypes, goals, behaviors, needs, and accessibility considerations.
- [x] Generate `aidlc-docs/inception/user-stories/stories.md` using the approved breakdown, volume, ordering, and acceptance-criteria format.
- [x] Ensure every story satisfies Independent, Negotiable, Valuable, Estimable, Small, and Testable criteria.
- [x] Include acceptance criteria for every story.
- [x] Map every persona to relevant stories.
- [x] Trace the story set to all applicable functional and non-functional requirements.
- [x] Verify explicit coverage of content authenticity, privacy-safe evidence, responsive behavior, accessibility, theme preference, maintainability, example tests, property-based tests, and GitHub Pages delivery.
- [x] Validate Markdown structure and content consistency.
- [x] Update all completed plan checkboxes in the same interaction as the work.
- [x] Update `aidlc-docs/aidlc-state.md` and the append-only audit.
- [x] Present the generated User Stories review checkpoint.

## Mandatory Artifacts

- [x] `aidlc-docs/inception/user-stories/stories.md`
- [x] `aidlc-docs/inception/user-stories/personas.md`

## Extension Compliance

- **Security Baseline**: Skipped because it is disabled for this workflow.
- **Property-Based Testing**: PBT-01 through PBT-10 are N/A during User Stories. The story set will retain the approved requirement that later applicable stages implement complementary example-based and property-based tests.
- **Blocking findings**: None.

## Contact and Header Story Revision Plan - 2026-09-20

The existing hybrid user-journey/domain methodology, four personas, Given/When/Then format, and risk-aware ordering remain approved. The three contact/layout requirements decisions are exact and introduce no unresolved story-methodology ambiguity, so no additional question file is required.

### Revision Planning Checklist

- [x] Reassess whether stories add value for the contact/layout change: execute because it adds a visitor-facing Contact presentation and changes the repeated reading hierarchy.
- [x] Reuse the approved persona set and hybrid story methodology.
- [x] Confirm the requirements provide exact placeholder values, non-interactive behavior, labels, desktop ratio, heading cap, and mobile intent.
- [x] Obtain explicit approval of this focused revision plan.

### Revision Generation Checklist

- [x] Revise Story 1 so the CV's placeholder values remain distinct from website placeholders.
- [x] Revise Story 11 with the compact approximately 28/72 desktop rail, near-4rem cap, and smaller mobile-heading acceptance criteria.
- [x] Add Story 17 for visitors to understand the clearly fictional, non-interactive Contact placeholders and closing status.
- [x] Map Story 17 to existing visitor personas and FR-11/Acceptance Criterion 8.
- [x] Update the unit story map so Story 17 belongs to Content Section Components, with Unit 6 retaining cross-cutting regression coverage.
- [x] Verify the revised set remains INVEST-aligned and all criteria stay implementation-neutral and testable.
- [x] Validate Markdown structure and update all checkboxes immediately as each revision completes.
- [x] Present the revised story artifacts for explicit review approval.

### Scope Decision

The revision adds one story, bringing the set from 16 to 17. This small exception to the original approximate 12-16 target is justified because Contact now has its own visible visitor outcome rather than only a closing statement. Personas remain unchanged; `personas.md` will be verified but does not require substantive revision.

### Extension Compliance

- **Security Baseline**: Skipped because it remains disabled.
- **Property-Based Testing**: N/A during User Stories; the revised acceptance criteria retain example/source-style regression expectations for later construction planning.
- **Blocking findings**: None.
