# Stratus Visual Refresh — User Stories

Approved inputs: stratus-visual-refresh-requirements.md and stratus-visual-refresh-story-generation-plan.md. These nine journey-oriented stories use feature boundaries, shared role archetypes, observable acceptance criteria, and complete FR/NFR traceability. They describe desired behavior; no implementation or runtime test completion is implied.

## SV-US-01 — Understand the student's medical pathway

As an academic reviewer, I want a polished and readable introduction to the student's medical journey so that I can understand identity, direction, and verified strengths quickly.

Primary persona: SV-P-01. Also serves SV-P-02, SV-P-03, SV-P-04.
Requirements: SV-FR-01, SV-FR-02; SV-NFR-03, SV-NFR-05, SV-NFR-09.

Acceptance criteria:
1. Given either style, when I open the overview, then Bui Tuan Phat's medical-student identity and existing verified introduction are visible with clear path/CV actions.
2. Given the approved medical palette, when I read headings, summary metrics, portrait captions, and section introductions, then hierarchy and spacing support scanning without fabricated scores, credentials, clinical experience, or outcomes.
3. Given a decorative science/medical motif, when it appears, then its context is illustrative and does not present invented clinical measurements as evidence.
4. Given light or dark mode, when I read the content, then text/action contrast meets approved thresholds; light primary/secondary reading text targets 7:1.

## SV-US-02 — Choose a presentation without losing context

As a visitor, I want to choose Notebook or Casebook so that I can use the presentation that suits my reading while retaining the same content and actions.

Primary persona: SV-P-03. Also serves SV-P-01, SV-P-04.
Requirements: SV-FR-03, SV-FR-06; SV-NFR-06, SV-NFR-07.

Acceptance criteria:
1. Given a fresh visit, when no valid style choice is saved, then Notebook is selected and both available styles are clearly labeled.
2. Given either layout and color mode, when I select the other style, then my current section, layout, and color remain selected.
3. Given either style, when I browse retained sections, then all eight medical sections and their verified facts, CV/contact actions, and evidence controls are available through the same underlying content.
4. Given mobile or desktop controls, when I operate the style selector with keyboard or pointer, then its selected state and accessible name are clear.

## SV-US-03 — Browse full pages or individual sections

As a reviewer, I want to switch between the full portfolio and a focused section so that I can navigate efficiently and share useful direct links.

Primary persona: SV-P-01. Also serves SV-P-02, SV-P-03.
Requirements: SV-FR-04, SV-FR-05, SV-FR-07; SV-NFR-02, SV-NFR-07.

Acceptance criteria:
1. Given a fresh visit without a layout choice or explicit section-view route, when I open the site, then the full single-page portfolio renders.
2. Given full-page mode, when I select Education or a hero/content section action, then the target section is reached and its #section anchor identifies it.
3. Given section mode, when I select a section or hero/content action, then only the intended retained section renders at #/section, and focus reaches its heading.
4. Given #education or #/education directly, when I load the page, then the former opens the single-page anchor and the latter opens section view, even if a different layout was previously saved.
5. Given navigation history, when I use Back/Forward, then the view reflects the route; an unknown/invalid section hash resolves to a valid overview view.
6. Given a mobile drawer, when I select a section, then navigation completes, the drawer closes, and its focus behavior remains usable.

## SV-US-04 — Keep comfortable display preferences

As a returning visitor, I want my style, layout, and color choices to be restored safely so that I can read in my preferred setup each time.

Primary persona: SV-P-03. Also serves SV-P-04.
Requirements: SV-FR-06; SV-NFR-03, SV-NFR-07.

Acceptance criteria:
1. Given no valid saved choices, when I first visit, then the default is Notebook, full page, and dark mode regardless of OS color preference.
2. Given valid saved style/layout/light choices, when I reload without a conflicting direct route, then those choices are restored and the saved light choice remains honored.
3. Given corrupt, unsupported, or inaccessible local storage, when preferences are read or written, then the portfolio still renders with valid defaults and usable controls.
4. Given the initial color bootstrap and rendered page, when the app loads, then they agree on the chosen color without a visible first-paint mode mismatch.

## SV-US-05 — Inspect evidence and return safely

As a reviewer, I want to inspect approved evidence in an accessible preview so that I can corroborate the student's stated achievements without losing my place.

Primary persona: SV-P-01. Also serves SV-P-02, SV-P-03.
Requirements: SV-FR-08, SV-FR-11; SV-NFR-02, SV-NFR-05, SV-NFR-07.

Acceptance criteria:
1. Given either style/layout, when I activate an approved gallery or award evidence control, then the matching evidence opens with the established image, caption, and alt metadata.
2. Given an open preview, when I use keyboard navigation, then focus remains within the dialog; close or Escape dismisses it and restores appropriate browsing focus.
3. Given an image cannot load, when I inspect it, then the existing meaningful failure state and close controls remain usable.
4. Given a view/context change while a preview is selected, when that change completes, then the preview is safely reconciled with current content and focus does not remain on an absent element.
5. Given private or unapproved evidence, when I browse cards or previews, then it remains unavailable through public presentation controls.

## SV-US-06 — Download the approved CV

As a reviewer, I want to download the student's approved CV so that I can review the profile outside the website.

Primary persona: SV-P-01. Also serves SV-P-04.
Requirements: SV-FR-09, SV-FR-12; SV-NFR-05, SV-NFR-08.

Acceptance criteria:
1. Given either presentation/layout, when I reach the CV action, then it is clearly identified as the student's PDF with a useful accessible name.
2. Given the CV action, when I activate it, then it targets the actual approved CV asset and intended download filename rather than a private source record.
3. Given root or repository-base-path output, when I follow the CV URL, then it resolves correctly and the original approved document is preserved.

## SV-US-07 — Start a conversation through an email draft

As a medical mentor, I want to compose a validated message so that I can start a learning conversation using my email application.

Primary persona: SV-P-02. Also serves SV-P-04.
Requirements: SV-FR-10; SV-NFR-02, SV-NFR-07.

Acceptance criteria:
1. Given either style/layout, when I open Contact, then the established owner email, draft explanation, and required name/reply-to/message fields are available.
2. Given missing or invalid fields, when I submit, then no draft opens, errors are clear, and the first invalid field receives focus.
3. Given valid input within the existing message limit, when I submit, then an encoded email draft opens addressed to the configured owner with the entered message/reply details.
4. Given message input, when I edit it, then the existing limit/counter behavior remains accurate; the UI never claims automatic sending or confirmed delivery.

## SV-US-08 — Browse comfortably on mobile and with a keyboard

As a mobile or keyboard visitor, I want readable content and accessible navigation in every display configuration so that I can use the portfolio comfortably.

Primary persona: SV-P-03. Also serves SV-P-01, SV-P-02, SV-P-04.
Requirements: SV-FR-02, SV-FR-07; SV-NFR-01, SV-NFR-02, SV-NFR-03, SV-NFR-04, SV-NFR-09.

Acceptance criteria:
1. Given 320, 390, 768, or 1440px widths across both styles/layouts/colors, when I browse, then no horizontal document overflow, clipped control, or unreadable card blocks use.
2. Given desktop contents/navigation is hidden, when I use the narrow layout, then menu and style/layout/color controls remain reachable.
3. Given keyboard navigation, when I Tab or activate controls, then names, selected states, visible focus, and semantic landmarks/headings are useful; the skip link focuses main without changing the route.
4. Given reduced-motion preference, when I browse or navigate, then unnecessary decorative movement is suppressed and essential content/actions remain available.
5. Given light/dark controls and reading surfaces, when the actual rendered states are reviewed, then approved text/action contrast and 3:1 essential control/focus indicator thresholds are met.

## SV-US-09 — Maintain an accurate and publication-safe site

As the student or trusted maintainer, I want shared content and clear publication checks so that both presentations stay accurate and private records remain protected.

Primary persona: SV-P-04.
Requirements: SV-FR-01, SV-FR-11, SV-FR-12; SV-NFR-05, SV-NFR-06, SV-NFR-07, SV-NFR-08.

Acceptance criteria:
1. Given I update an approved public fact, when both styles render it, then they use the same authoritative typed source and do not diverge through duplicated biographies or metrics.
2. Given production output, when existing asset/privacy policies inspect it, then only approved public images/CV are included; dontuse/private identity/immigration/full-record/address/candidate-number assets remain excluded.
3. Given the redesigned UI, when applicable tests including existing property suites, typecheck, lint, build, and verify:dist run, then they pass without removing meaningful safeguards merely to accept the new presentation.
4. Given root and repository-base-path builds, when navigation and public assets are checked, then deep links, CV, and evidence remain valid under static hosting.
5. Given verification reporting, when build size/browser results are documented, then current measured evidence is distinguished from unmeasured scores or improvement percentages; no unsolicited deployment occurs.

## Requirements traceability

| Requirement | Stories |
| --- | --- |
| SV-FR-01 | SV-US-01, SV-US-09 |
| SV-FR-02 | SV-US-01, SV-US-08 |
| SV-FR-03 | SV-US-02 |
| SV-FR-04 | SV-US-03 |
| SV-FR-05 | SV-US-03 |
| SV-FR-06 | SV-US-02, SV-US-04 |
| SV-FR-07 | SV-US-03, SV-US-08 |
| SV-FR-08 | SV-US-05 |
| SV-FR-09 | SV-US-06 |
| SV-FR-10 | SV-US-07 |
| SV-FR-11 | SV-US-05, SV-US-09 |
| SV-FR-12 | SV-US-06, SV-US-09 |
| SV-NFR-01 | SV-US-08 |
| SV-NFR-02 | SV-US-03, SV-US-05, SV-US-07, SV-US-08 |
| SV-NFR-03 | SV-US-01, SV-US-04, SV-US-08 |
| SV-NFR-04 | SV-US-08 |
| SV-NFR-05 | SV-US-01, SV-US-05, SV-US-06, SV-US-09 |
| SV-NFR-06 | SV-US-02, SV-US-09 |
| SV-NFR-07 | SV-US-02, SV-US-03, SV-US-04, SV-US-05, SV-US-07, SV-US-09 |
| SV-NFR-08 | SV-US-06, SV-US-09 |
| SV-NFR-09 | SV-US-01, SV-US-08 |

Persona-to-story mappings are recorded with each story and in personas.md. All four personas are represented; all twelve FRs and nine NFRs have coverage.

## INVEST verification

| Criterion | Assessment |
| --- | --- |
| Independent | Each story has one independently reviewable goal; shared theme/content/navigation foundations are acknowledged without cyclic story requirements |
| Negotiable | Stories define observable outcomes and approved boundaries, leaving component implementation and final stylistic details to design |
| Valuable | Each benefits a named reviewer, mentor, visitor, or maintainer through reading, navigation, evidence, contact, or accurate upkeep |
| Estimable | Approved scope limits work to one existing static frontend, two styles, eight sections, and retained feature contracts |
| Small | Nine feature-bounded goals avoid a single whole-site story; theme/accessibility criteria are shared where appropriate |
| Testable | Given/When/Then cases specify routes, selected modes, rendered content, focus, draft/CV destinations, asset checks, contrast, and responsive widths |

No contradictions or missing approved requirements found. This is story-level review, not a claim that code is implemented or tests have run. Requirements precedence is explicit: new two-style/dark-default decisions supersede the old single-style/system-default choices, while established student facts/privacy/contact boundaries remain.

## Extension compliance

Security Baseline N/A (disabled B); Property-Based Testing N/A (disabled C). Full rules not loaded/enforcement skipped; existing property suites and privacy/asset/accessibility requirements retained. No enabled-extension blocking findings.
