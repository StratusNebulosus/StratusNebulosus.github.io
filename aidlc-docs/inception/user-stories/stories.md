# Medical Student Portfolio Revamp - User Stories

Approved approach: hybrid user-journey and domain-based stories (Question 1, Option A), 4 personas (Question 2, Option A), ~12-16 stories (Question 3, Option A), Given/When/Then acceptance criteria throughout (Question 4, Option A), ordered by visitor journey and risk (Question 5, Option A), balanced success emphasis (Question 6, Option A).

Personas: see `aidlc-docs/inception/user-stories/personas.md` — Academic Reviewer (AR), Medical Educator/Mentor (ME), Peer/General Visitor (PV), Portfolio Owner/Maintainer (OM).

## First Impression

### Story 1: Recognize the student's medical identity immediately

- **Unit implementation status**: [x] Unit 4 implementation complete and verified on 2026-09-20.

As a **visitor (AR, ME, PV)**, I want to see Bui Tuan Phat identified as a Medical Student at Thai Nguyen University of Medicine and Pharmacy within the first viewport, so that I immediately understand who he is and his current path.

- **Personas**: AR, ME, PV
- **Requirements traced**: FR-04, Acceptance Criteria 1, 5

**Acceptance Criteria**
- Given a visitor loads the site, when the hero section renders, then it displays the student's name, "Medical Student at Thai Nguyen University of Medicine and Pharmacy," and a concise positioning statement.
- Given the hero renders, when the portrait loads, then it uses `src/assets/profile_pic.jpg` with an intentional editorial crop.
- Given the hero renders, when a visitor activates the CV action, then the explicitly approved `bui-tuan-phat-cv.pdf` downloads with a stable descriptive filename.
- Given the website renders contact information, then the placeholder phone and email visible inside the approved PDF are not reused as website contact channels; only the separate fictional values approved under FR-11 may appear, clearly labeled and non-interactive.

### Story 2: See a unified medical design with no leftover engineering/business identity

- **Unit implementation status**: [x] Unit 3 implementation complete and verified on 2026-09-19.

As a **visitor (AR, ME, PV)**, I want the portfolio to present one cohesive medical design with no trace of a prior engineering/business persona or template picker, so that I trust the site is a dedicated, current medical portfolio.

- **Personas**: AR, ME, PV
- **Requirements traced**: FR-01, FR-14, Acceptance Criteria 2

**Acceptance Criteria**
- Given any page load, when the visitor inspects the interface, then no engineering/business profile content, template selector, or layout selector is visible or reachable.
- Given a visitor has a stale stored template preference from before the revamp, when the site loads, then it renders correctly without error using the unified medical presentation.

### Story 3: Navigate confidently across devices and input methods

- **Unit implementation status**: [x] Unit 3 implementation complete and verified on 2026-09-19.

As a **visitor (AR, ME, PV)**, I want sticky, accessible navigation to every enabled section on desktop and mobile, so that I can move directly to the content I care about using keyboard, touch, or pointer.

- **Personas**: AR, ME, PV
- **Requirements traced**: FR-03, Acceptance Criteria 4

**Acceptance Criteria**
- Given a desktop viewport, when the visitor scrolls, then a sticky navigation bar remains visible with links to every enabled section.
- Given a mobile viewport, when the visitor opens the compact menu, then all section links are reachable and operable by touch.
- Given a visitor uses only the keyboard, when they tab through navigation, then focus order is logical, the active section is indicated (including via `aria-current` where applicable), and a skip link reaches main content.
- Given the visitor follows a hash-anchor link, when the target section is reached, then the URL and scroll position remain compatible with GitHub Pages hosting.

## Narrative

### Story 4: Understand the student's calling to medicine

- **Unit implementation status**: [x] Unit 4 implementation complete and verified on 2026-09-20.

As a **medical educator or mentor (ME)**, I want to read a reflective narrative connecting scientific curiosity, discipline, empathy, leadership, and service, so that I can assess the student's motivation and character.

- **Personas**: ME, AR
- **Requirements traced**: FR-05, Acceptance Criteria 6

**Acceptance Criteria**
- Given the visitor reaches the Calling to Medicine section, when they read the narrative, then aspiration and values are clearly distinguished from verified experience.
- Given the narrative describes the student's background, when it is read in full, then it does not imply completed clinical training, patient care, research publications, or professional licensure.

### Story 5: Follow the education journey from high school to medical school

- **Unit implementation status**: [x] Unit 4 implementation complete and verified on 2026-09-20.

As a **visitor (AR, ME)**, I want to see a readable journey from Wellspring high-school completion to the current Medicine program, so that I understand the student's educational trajectory without exposure to private records.

- **Personas**: AR, ME
- **Requirements traced**: FR-06, Acceptance Criteria 6, 9

**Acceptance Criteria**
- Given the Education section renders, when the visitor reviews it, then Wellspring completion (2026) and the current Medicine program at Thai Nguyen University of Medicine and Pharmacy are both presented in a timeline or journey layout.
- Given the section renders, when the visitor inspects it, then no date of birth, applicant number, student number, admission score, address, or phone number from source records appears anywhere in the markup or content.

## Evidence

### Story 6: Review verified academic scores with confidence

- **Unit implementation status**: [x] Unit 4 implementation complete and verified on 2026-09-20.

As an **academic reviewer (AR)**, I want compact, accessible score cards for SAT, IELTS, and AP results, so that I can quickly verify academic strength without seeing raw score reports.

- **Personas**: AR
- **Requirements traced**: FR-07, Acceptance Criteria 7, 9

**Acceptance Criteria**
- Given the Academic Excellence section renders, when the reviewer inspects it, then SAT 1500, IELTS 8.0, AP Scholar status, AP Biology 5, AP Chemistry 5, and AP Microeconomics 4 are each shown with a clear label.
- Given the reviewer looks for source documents, when they inspect links and assets, then no raw SAT, AP, IELTS, transcript, or report-card file is linked or rendered.
- Given the scores are displayed, when read in context, then they are not framed in a misleading comparative context (e.g., unverified rankings or percentiles).

### Story 7: Explore science and award recognition grouped for scanability

- **Unit implementation status**: [x] Unit 4 implementation complete and verified on 2026-09-20.

As an **academic reviewer or mentor (AR, ME)**, I want science-olympiad, Chemistry, Science and Passion, and conference recognitions grouped by theme or chronology, so that I can scan achievements efficiently and trust their authenticity.

- **Personas**: AR, ME
- **Requirements traced**: FR-08, Acceptance Criteria 7

**Acceptance Criteria**
- Given the Science and Awards section renders, when the visitor scans it, then HKISO Silver (2022) and Bronze (2023, 2025) awards, the Chemistry Second Prize, Science and Passion recognitions, and the WIS Conference/Top 10 Delegate (ranked fourth) result are each present and grouped.
- Given a certificate image is shown, when a screen-reader user inspects it, then the alternative text describes the achievement rather than transcribing decorative certificate text verbatim.

### Story 8: See leadership and service framed accurately

- **Unit implementation status**: [x] Unit 4 implementation complete and verified on 2026-09-20.

As a **medical educator or mentor (ME)**, I want WHO committee participation, leadership training, the Science of Tram and Cham project, "Embrace the Present," and pediatric-patient support presented with careful, accurate language, so that I can evaluate character without being misled about the nature of the activities.

- **Personas**: ME, AR
- **Requirements traced**: FR-09, Acceptance Criteria 7

**Acceptance Criteria**
- Given the Leadership and Service section renders, when the visitor reads each activity, then the described participation matches the verified public content baseline exactly.
- Given the pediatric-patient support activity is described, when read in context, then it is never characterized as clinical service or medical treatment.

### Story 9: Browse an accessible evidence gallery without encountering private records

- **Unit implementation status**: [x] Unit 5 implementation complete and verified on 2026-09-20.

As a **visitor (AR, ME, PV)**, I want an accessible gallery of approved portrait, achievement, event, and certificate imagery, so that I can inspect credible evidence without risk of seeing private source records.

- **Personas**: AR, ME, PV
- **Requirements traced**: FR-10, FR-15, Acceptance Criteria 9, 10

**Acceptance Criteria**
- Given the Evidence Gallery renders, when the visitor browses it via keyboard, then every item is reachable and operable, and each item has meaningful alternative text.
- Given a gallery item opens in a modal or expanded preview, when the visitor interacts with it, then Escape closes it, focus is contained within it, a visible close control exists, and focus returns to the triggering element on close.
- Given the gallery's asset list, when compared against the public asset allowlist, then it contains only approved assets and never a prohibited or `dontuse` file.
- Given a non-critical gallery image, when the page loads, then it is lazy-loaded and its dimensions are reserved to avoid layout shift.

## Accessibility and Preference

### Story 10: Read comfortably in light or dark medical theme

As a **visitor (PV, AR, ME)**, I want to switch between accessible light and dark medical color modes, so that I can read the portfolio comfortably in my preferred or ambient lighting condition.

- **Personas**: PV, AR, ME
- **Requirements traced**: FR-02, FR-12, Acceptance Criteria 3, 11

**Acceptance Criteria**
- Given the visitor toggles the color-mode control, when the new mode applies, then both modes preserve the same medical identity and information hierarchy.
- Given the visitor reloads the page after choosing a mode, when the page renders, then the chosen preference persists via the existing safe client-side mechanism and no flash of unreadable content occurs.
- Given any mode is active, when contrast is measured, then normal text meets at least 4.5:1 and large text/essential controls meet at least 3:1.

### Story 11: Use the site with reduced motion and adaptive layout

- **Unit implementation status**: [x] Contact/layout revision implemented and verified on 2026-09-20.

As a **visitor using assistive settings (PV, AR, ME)**, I want the portfolio to respect reduced-motion preferences and adapt cleanly from 320 CSS pixels up to wide desktop, so that I can use the site without discomfort or lost content regardless of device or motion sensitivity.

- **Personas**: PV, AR, ME
- **Requirements traced**: NFR-01, NFR-02, Acceptance Criteria 12, 13

**Acceptance Criteria**
- Given `prefers-reduced-motion` is enabled, when the visitor browses any section, then non-essential animation and motion are suppressed while content remains fully accessible.
- Given a viewport of 320 CSS pixels, when the visitor browses the site, then no horizontal scrolling occurs and all essential content remains visible.
- Given a wide desktop viewport, when the visitor browses the site, then navigation, portrait, score cards, timeline, and gallery adapt without hiding essential content.
- Given any shared content section renders on desktop, when the visitor scans its layout, then the header uses an approximately 28% editorial rail, main content receives approximately 72% of the section width, and the heading is capped near 4rem.
- Given a shared content section renders below the single-column breakpoint, when the visitor begins reading it, then the heading scales down enough that it does not dominate the viewport or delay access to the main content.

## Content Maintenance and Privacy

### Story 12: Keep private and prohibited assets out of the public build

As the **portfolio owner or maintainer (OM)**, I want an explicit public-asset allowlist enforced in code, so that raw identity, immigration, address, transcript, and `dontuse` files can never be bundled or linked even by accident.

- **Personas**: OM
- **Requirements traced**: FR-15, Acceptance Criteria 9, 17

**Acceptance Criteria**
- Given the asset allowlist module, when a developer inspects it, then it explicitly lists only approved public assets rather than importing or enumerating the entire `src/assets/CV/` directory.
- Given the production build completes, when its output is inspected, then it contains no passport, national identity, visa, birth-certificate, address-bearing, candidate-number-bearing, transcript, report-card, or `dontuse` file.
- Given a developer attempts to add a non-allowlisted asset to a public component, when tests run, then the test suite fails and identifies the violation.

### Story 13: Maintain content through typed, decoupled data modules

As the **portfolio owner or maintainer (OM)**, I want student facts and evidence metadata stored in typed data modules separate from presentation components, so that I can update content (including a future résumé or verified contact details) without touching layout code.

- **Personas**: OM
- **Requirements traced**: FR-13, NFR-04, Acceptance Criteria 6

**Acceptance Criteria**
- Given a maintainer needs to update a score, award, or narrative line, when they edit the relevant typed data module, then the change reflects across the site without modifying component markup.
- Given the codebase after the revamp, when reviewed, then no leftover engineering/business, journal, or project data models or dead template abstractions remain.

### Story 14: Trust example-based and property-based tests to catch regressions

- **Unit implementation status**: [x] Unit 6 implementation complete and verified on 2026-09-20.

As the **portfolio owner or maintainer (OM)**, I want example-based and property-based tests covering navigation, content, color-mode, asset boundaries, and prior-identity regressions, so that I can change the site with confidence and reproduce any failure deterministically.

- **Personas**: OM
- **Requirements traced**: NFR-06, NFR-07, Acceptance Criteria 14, 15

**Acceptance Criteria**
- Given the test suite runs, when it completes, then explicit regression tests confirm the former owner's identity and retired template choices are absent.
- Given `fast-check` property-based tests run for navigation, allowlists, hash round-trips, and color-mode validation, when a property fails, then the failure output includes a reproducible seed and shrinking information.
- Given TypeScript compilation, ESLint, Vitest (example-based and property-based), and the Vite production build run, when the pipeline completes, then all steps pass.

### Story 15: Keep documentation aligned with the medical portfolio

- **Unit implementation status**: [x] Unit 6 implementation complete and verified on 2026-09-20.

As the **portfolio owner or maintainer (OM)**, I want repository documentation to describe the current medical content structure, asset boundary, and customization workflow, so that future contributors understand how to safely update the site.

- **Personas**: OM
- **Requirements traced**: FR-16, Acceptance Criteria 18

**Acceptance Criteria**
- Given a contributor reads the repository documentation, when they look for how to update content, then it accurately describes the current data files, sections, and navigation.
- Given a contributor looks for the privacy boundary, when they read the documentation, then it explicitly documents which assets are public versus private and why.

## Delivery

### Story 16: Preserve reliable static GitHub Pages delivery

- **Unit implementation status**: [x] Unit 6 implementation complete and verified on 2026-09-20.

As a **visitor and portfolio owner (PV, OM)**, I want the site to remain a static, GitHub Pages-deployed experience with no backend or new runtime dependency, so that the portfolio stays fast, reliable, and simple to host.

- **Personas**: PV, OM
- **Requirements traced**: NFR-05, NFR-08, Acceptance Criteria 16

**Acceptance Criteria**
- Given the site is deployed via the existing GitHub Actions workflow, when it is loaded from the GitHub Pages base path, then hash-anchor navigation and all assets resolve correctly.
- Given the deployed build, when inspected, then it contains no backend, database, authentication, paid service, or runtime secret.
- Given a client-side preference (such as color mode) fails to load, when the page renders, then content still displays correctly without blocking on the failed preference.

## Contact Revision

### Story 17: Understand that contact channels are placeholders

- **Unit implementation status**: [x] Contact/layout revision implemented and verified on 2026-09-20.

As a **visitor (AR, ME, PV)**, I want the Contact section to show clearly fictional placeholder channels without activating them, so that I understand how verified contact information will eventually appear without being directed to an invalid recipient.

- **Personas**: AR, ME, PV
- **Requirements traced**: FR-11, Acceptance Criterion 8

**Acceptance Criteria**
- Given the visitor reaches the Contact section, when its contact entries render, then it displays `student.email@example.com` and `+84 XXX XXX XXX` with explicit placeholder labels.
- Given either placeholder entry is inspected or activated, when the visitor uses keyboard, touch, or pointer, then it is non-interactive and exposes no `mailto:`, `tel:`, form control, or submission behavior.
- Given the Contact section renders, when its text and links are inspected, then neither the CV's placeholder values nor any former-owner contact detail appears.
- Given the visitor reads the full section, when they reach the closing status, then it explains that verified contact channels will replace the placeholders later.
