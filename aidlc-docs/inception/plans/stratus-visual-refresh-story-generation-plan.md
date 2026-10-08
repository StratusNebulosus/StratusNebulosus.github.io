# Stratus Visual Refresh — Story Generation Plan

## Inputs and approval status

Requirements stratus-visual-refresh-requirements.md explicitly approved in chat: "approve and continue". Scope file answers A/A and disabled extension answers B/C are validated. Existing medical architecture, eight sections, business overview, and four audience archetypes are available. This stage defines visitor outcomes and acceptance criteria; it does not prescribe component implementations, sprint priorities, or timelines.

## Part 1 — plan preparation

- [x] Record requirements approval and load the current requirements/reverse-engineering/persona context.
- [x] Validate the need for stories and write stratus-visual-refresh-user-stories-assessment.md.
- [x] Evaluate persona, granularity, format, journeys, business goals, technical boundaries, and acceptance-criteria completeness.
- [x] Select a concise breakdown and define exact story/persona artifacts and validation steps.
- [x] Validate Markdown and update state/audit with the plan-review gate.
- [x] Receive explicit story-plan approval before generating stories/personas — user: "approve and continue".

## Story breakdown approaches

| Approach | Benefits | Tradeoff for this project |
| --- | --- | --- |
| User journey | Captures reviewer browsing, preferences, evidence, and contact context | Shared requirements need an explicit traceability map |
| Feature | Clear boundaries around style/layout/preferences/dialog/contact | Can miss transitions between features |
| Persona | Keeps each audience's motivation clear | Repeats common navigation and presentation expectations |
| Domain | Separates medicine, academics, research, and service | Current content domains are already established; most changes concern presentation |
| Epic | Useful for a large backlog or several teams | Adds hierarchy without value for nine stories in one frontend |

Recommended: journey-oriented stories with feature boundaries. A story follows one visitor/maintainer goal, assigns a primary persona, states concrete Given/When/Then acceptance criteria, and maps to approved FR/NFR IDs. Shared criteria are referenced where necessary without copying whole requirements into every story.

## Planned coverage

| Story | Primary outcome | Requirements |
| --- | --- | --- |
| SV-US-01 | Understand the student's identity through a polished medical introduction | FR-01, FR-02; NFR-03, NFR-05, NFR-09 |
| SV-US-02 | Choose Notebook/Casebook while retaining the same content and context | FR-03, FR-06; NFR-06, NFR-07 |
| SV-US-03 | Browse full-page or section views with working direct links/history/actions | FR-04, FR-05, FR-07; NFR-02, NFR-07 |
| SV-US-04 | Restore valid display preferences and handle first visits/storage failures | FR-06; NFR-03, NFR-07 |
| SV-US-05 | Inspect approved evidence and return safely to the browsing context | FR-08, FR-11; NFR-02, NFR-05, NFR-07 |
| SV-US-06 | Download the approved student's CV | FR-09, FR-12; NFR-05, NFR-08 |
| SV-US-07 | Compose a validated email draft to the configured owner | FR-10; NFR-02, NFR-07 |
| SV-US-08 | Use both presentations comfortably on mobile and with a keyboard | FR-02, FR-07; NFR-01, NFR-02, NFR-03, NFR-04, NFR-09 |
| SV-US-09 | Maintain shared verified content and a publication-safe static build | FR-01, FR-11, FR-12; NFR-05, NFR-06, NFR-07, NFR-08 |

Use the SV- prefix for FR/NFR references in final story traceability. The coverage matrix abbreviates FR/NFR IDs only for readability.

## Persona adaptation

Adapt the existing four role archetypes to this refresh: academic/program reviewer, medical mentor, peer/general mobile visitor, and student/maintainer. Include each role's goals, browsing behavior, information needs, and accessibility concerns. Fictional demographic specifics are unnecessary; roles are stakeholder archetypes, not actual surveyed people.

## Clarification assessment

No additional product question is needed: approved requirements determine content identity, default style/layout/color, two styles, supported sections/routes, preference precedence, evidence/contact behavior, privacy boundaries, hosting, and acceptance widths. Standard INVEST stories and Given/When/Then criteria are routine format choices. Style names are provisional under approved FR-03 and remain negotiable during design. The only pending input is mandatory approval of this story-generation approach.

## Part 2 — generation steps (execute after approval)

- [x] Generate user-stories/stratus-visual-refresh/personas.md with the four adapted archetypes.
- [x] Generate user-stories/stratus-visual-refresh/stories.md with nine numbered As a / I want / So that stories.
- [x] Include observable acceptance criteria for each story, including important transition/error cases rather than implementation-only checks.
- [x] Map each persona to relevant stories and every SV-FR/SV-NFR to covered stories.
- [x] Verify INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable; check contradictions/omissions and repair findings.
- [x] Validate Markdown, update each completed checkbox immediately, and create the generated-artifact review questions.
- [x] Update state and append audit; present generated stories/personas for explicit review before Workflow Planning.

Both mandatory filenames remain stories.md/personas.md under a refresh-specific folder so existing medical-story history is preserved. No application code belongs in these artifacts.

## Extension compliance

Security Baseline: N/A, disabled B. PBT: N/A, disabled C. Full extension rules not loaded/enforcement skipped. Existing privacy/public-asset and property-test obligations retained. No enabled-extension blocking findings.

## Question 1 — Story plan review

How would you like to proceed with this story approach?

A) Approve & Continue — approve the plan and generate its nine stories and four personas.
B) Request Changes — describe changes to the breakdown, personas, or acceptance approach.
X) Other (describe after the Answer tag).

[Answer]: A — user: "approve and continue"
