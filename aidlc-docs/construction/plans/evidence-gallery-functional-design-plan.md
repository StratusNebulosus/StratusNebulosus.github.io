# Unit 5: Evidence Gallery - Functional Design Plan

## Design Progress

- [x] Load the approved Unit 5 definition, story map, application design, requirements, Unit 2 allowlist, Unit 3 shell contract, and Unit 4 Gallery handoff.
- [x] Evaluate business logic, domain model, validation rules, data flow, integration points, failure handling, interaction state, and frontend-component boundaries.
- [x] Resolve the five gallery decisions below.
- [x] Analyze answers for ambiguity or contradiction.
- [x] Generate domain entities, business rules, business-logic model, and frontend-component specifications.
- [x] Identify applicable property-based tests and verify enabled-extension compliance.

## Category Assessment

- **Business logic/domain model**: explicit gallery records must map stable IDs, source metadata, accessible copy, display order, and an allowlisted image asset.
- **Business rules**: only reviewed image entries may render; the approved PDF is downloadable but never a gallery image; private/unlisted assets fail closed.
- **Data flow**: static typed data flows from the medical content/allowlist layer into the gallery grid and selected preview. There is no persistence or remote API.
- **Integration points**: Unit 5 replaces only Unit 4's `medical-gallery-stage` while preserving section ID `gallery`, navigation behavior, tokens, and GitHub Pages asset resolution.
- **Error handling**: invalid/unlisted items are omitted and verification fails; closing a preview restores focus to its exact trigger.
- **Interaction state**: a selected gallery item is the only new domain UI state. Escape, visible close, focus containment, and restoration are required.
- **Property testing**: allowlist membership, unique IDs, exact-once rendering, valid selection, and generated open/close command sequences are applicable invariants.

## Question 1
Which approved images should appear in the Evidence Gallery?

A) Include the publication-ready portrait plus all 12 allowlisted achievement/event/certificate images, and exclude the PDF because it is a document download rather than gallery media (recommended)
B) Include only the 12 achievement/event/certificate images because the portrait is already prominent in the hero
C) Include only the six evidence images currently attached to Unit 4 awards
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 2
How should gallery records and captions be maintained?

A) Add an explicit typed gallery-record list with stable ID, allowlisted asset reference, title, concise context, category, period, and meaningful alt text; never derive records automatically from a directory or every allowlist entry (recommended)
B) Derive gallery records automatically from every image in the allowlist and reuse the allowlist description as both caption and alt text
C) Keep only asset URLs and display images without visible captions
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 3
How should the gallery be ordered and grouped for the visitor journey?

A) Use one curated editorial sequence: portrait/introduction, science recognition, conference/leadership, then school/community projects; show compact category and period metadata on every card (recommended)
B) Sort every item only by year from newest to oldest
C) Create separate tabbed or filterable category views
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 4
What interaction scope should the expanded evidence preview support?

A) Open one selected item in an accessible modal with visible close, Escape, focus containment, and focus restoration; close and choose another card to change items, with no previous/next controls (recommended)
B) Add previous/next controls and Left/Right Arrow navigation inside the modal
C) Do not use a modal; link each thumbnail directly to the image asset
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 5
How should images fit between compact thumbnails and the expanded preview?

A) Use consistent reserved thumbnail frames with a careful `cover` crop, then show the complete image with `contain` in the modal; lazy-load thumbnails and load the selected preview from the same allowlisted asset (recommended)
B) Use `contain` everywhere, accepting variable empty space in thumbnail cards
C) Use `cover` everywhere, including the modal, accepting that certificate edges may remain cropped
X) Other (please describe after [Answer]: tag below)

[Answer]: A
