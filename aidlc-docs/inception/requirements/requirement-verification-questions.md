# Visual Showcase and Evidence Enhancement - Requirements Questions

Please answer every question by entering one letter after its `[Answer]:` tag. The recommended choices preserve the existing medical identity and privacy boundary while giving evidence and main content substantially more visual priority.

## Question 1
How compact should the shared non-hero section header become?

A) Balanced compact rail: approximately 22% header and 78% content on desktop, with heading caps near 2.4rem desktop, 2.1rem at the single-column breakpoint, and 1.8rem on narrow mobile (recommended)
B) Ultra-compact rail: approximately 20% header and 80% content, with heading caps near 2.1rem desktop, 1.9rem single-column, and 1.65rem narrow mobile
C) Keep the current 28/72 rail and reduce only the heading type to approximately 2.4rem, 2.1rem, and 1.8rem
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 2
How should awards with approved image evidence be presented before opening the detail view?

A) Use two-column evidence-first cards on desktop, with a large 3:2 image above concise award copy and an explicit keyboard-accessible “View evidence” control; stack to one column on mobile (recommended)
B) Use one full-width horizontal evidence row per award, with the image beside the copy on desktop and stacked on mobile
C) Keep the current compact award cards and enlarge only the thumbnail
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 3
How should awards without an approved image be handled?

A) Keep them as visually consistent text-first cards with a clear “Evidence image not available” status; never invent or substitute evidence (recommended)
B) Move awards without image evidence into a separate compact recognition list below the evidence cards
C) Hide awards that do not have a public evidence image
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 4
How should award evidence open for detailed review?

A) Reuse the existing accessible evidence dialog and its focus restoration, Escape handling, metadata, and image-error behavior so the site has one consistent detail-view system (recommended)
B) Add a separate award-specific dialog with distinct styling and state
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 5
What top spacing should the evidence popup use?

A) Top-aligned responsive inset: approximately 3rem on larger screens and at least 1rem plus safe-area inset on narrow mobile, with the dialog height reduced to remain fully scrollable (recommended)
B) A larger fixed-looking inset of approximately 5rem on desktop and 2rem on mobile
C) Keep centered placement and add only 1rem of extra top padding
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 6
How broadly should the reference-informed visual refinement apply?

A) Apply a cohesive site-wide polish to the hero, navigation, and all content sections using compact hierarchy, modular bordered surfaces, accent rails, indexed metadata, stronger evidence framing, and restrained hover/focus states while preserving the current medical palette, verified copy, navigation, and content order (recommended)
B) Limit the polish to non-hero content sections, awards, GPA cards, and evidence dialogs; leave the hero and navigation unchanged
C) Redesign the page much more closely to the reference site, including stronger changes to layout and identity treatment
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 7
Should security extension rules be enforced for this project?

A) Yes — enforce all SECURITY rules as blocking constraints (recommended for production-grade applications)
B) No — skip all SECURITY rules (suitable for PoCs, prototypes, and experimental projects)
X) Other (please describe after [Answer]: tag below)

[Answer]: B

## Question 8
Should property-based testing rules be enforced for this project?

A) Yes — enforce all PBT rules as blocking constraints (recommended for projects with business logic, data transformations, serialization, or stateful components)
B) Partial — enforce PBT rules only for pure functions and serialization round-trips
C) No — skip PBT rules for this UI-focused change
X) Other (please describe after [Answer]: tag below)

[Answer]: C

## Confirmed Non-Negotiable Requirements

- Grade 10 must render as `9.38 /10` without splitting the scale across lines or changing the verified value.
- Only allowlisted public evidence may be displayed or opened.
- Award evidence must be keyboard accessible and usable with Escape and focus restoration.
- The existing eight-section navigation, verified content, CV download, fictional Contact placeholders, light/dark medical themes, reduced-motion support, and GitHub Pages delivery remain intact.
- The reference site informs layout principles only; its content, identity, assets, code, and branding must not be copied.
