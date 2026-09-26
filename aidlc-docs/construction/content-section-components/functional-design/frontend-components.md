# Unit 4: Content Section Components - Frontend Components

## Composition

`App` composes the existing `MedicalShell` with these bodies in registry order:

1. `MedicalHero` (`overview`)
2. `CallingToMedicine` (`calling`)
3. `EducationJourney` (`education`)
4. `AcademicExcellence` (`academics`)
5. `ScienceAndAwards` (`science`)
6. `LeadershipAndService` (`leadership`)
7. Unit 5 Gallery staging body (`gallery`)
8. `ClosingContact` (`contact`)

## `MedicalHero`

- **Props**: typed hero content, `DownloadAsset`, primary navigation target.
- **Structure**: identity eyebrow; name `h1`; approved role; positioning statement; highlight list; primary anchor action; secondary native CV-download action; allowlisted editorial portrait.
- **State**: none.
- **Interactions**: primary action navigates to Calling; secondary action downloads `bui-tuan-phat-cv.pdf`.
- **Accessibility**: descriptive portrait alt text, explicit download accessible name, visible focus, no placeholder contact text.

## `CallingToMedicine`

- **Props**: `NarrativeSection`.
- **Structure**: section heading; separate aspiration and verified-path narrative blocks.
- **State/interactions**: none.
- **Rule**: visual labels make the aspiration/experience distinction understandable without relying on color.

## `EducationJourney`

- **Props**: education milestones and academic-year performance.
- **Structure**: ordered timeline plus a compact Grade 10-12 GPA progression.
- **State/interactions**: none.
- **Responsive behavior**: two-column timeline becomes one column without horizontal overflow.

## `AcademicExcellence`

- **Props**: academic credentials.
- **Structure**: SAT, IELTS, and AP `ScoreCard` grid plus a visually distinct scholarship recognition.
- **State/interactions**: none.
- **Rule**: current scores and historical scholarship basis are never blended.

## `ScienceAndAwards`

- **Props**: research projects and grouped science recognitions.
- **Structure**: `ResearchFeature` followed by themed/chronological `AwardItem` groups.
- **State/interactions**: none in Unit 4; evidence expansion belongs to Unit 5.
- **Rule**: project observations are introduced as CV-reported student work, not clinical conclusions.

## `LeadershipAndService`

- **Props**: activity entries and interests.
- **Structure**: grouped leadership, conference, community, and school activities plus a quiet interests footer.
- **State/interactions**: none.
- **Rule**: WIS uses WHO; community support never claims treatment or direct clinical care.

## `ClosingContact`

- **Props**: `contact: ContactSectionData`.
- **Structure**: reflective closing heading, statement, semantic Contact channel list, two card-like records, and verification notice.
- **State/interactions**: none.
- **Rule**: render the approved fictional email and phone examples as plain text with visible channel and `Placeholder` labels; render no link, form control, action role, or event handler.
- **Accessibility**: meaningful source order is label, value, status; placeholder meaning is textual rather than color-only; cards are not focusable because they perform no action.
- **Failure behavior**: malformed or missing typed Contact data fails validation/tests; the component does not invent a fallback contact value.

## Shared Primitives

### `MedicalSection`

- Provides shared width, spacing, eyebrow, heading association, section ID, and alternating-surface treatment.

### `ScoreCard`

- Displays one typed credential with semantic label/value/context order.

### `TimelineEntry`

- Displays one education milestone; optionally composes the GPA progression.

### `AwardItem`

- Displays recognition title, organization/period, concise summary, and optional allowlisted evidence thumbnail.

### `ResearchFeature`

- Displays research title/period, concise question/context, method bullets, and separately labeled reported observations.

### `ActivityCard`

- Displays one leadership/service/activity entry with category and period.

## Styling Boundary

- Extend the existing medical shell stylesheet or add a colocated content stylesheet using Unit 1 tokens only.
- Preserve the sibling-inspired editorial rhythm and the initial template's readable cards/actions without copying research-observatory language.
- Respect 320-pixel width, reduced motion, text zoom, visible focus, and light/dark parity.
- Unit 4 introduces no modal, carousel, form, or custom focus-management state.

## Shared Section Hierarchy Revision

- `MedicalSection` retains its current header-then-body DOM order and section-heading association.
- Desktop uses an approximately 28/72 header/body grid with a restrained fluid gap.
- Shared desktop section headings cap near `4rem` rather than the previous `6rem` maximum.
- The existing single-column breakpoint disables sticky positioning, reduces gap and heading scale, and preserves full-width body content.
- The narrow-mobile breakpoint reduces heading scale again and retains 320-CSS-pixel overflow protection.
- The hero's `h1` is not a shared section `h2`; its separate identity hierarchy remains unchanged unless concrete overflow verification requires a minimal correction.

## `ContactCard` Presentation Primitive

- A conceptual repeated presentation inside `ClosingContact`; it may remain inline rather than becoming a separate exported React component.
- Receives one `ContactChannelData` record.
- Renders only semantic text inside a list item/article-style card.
- Has no state, action, focus target, URI construction, external integration, or error recovery behavior.
