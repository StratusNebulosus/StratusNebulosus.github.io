# Medical Student Portfolio Revamp Requirements

## Intent Analysis Summary

- **User Request**: Customize the entire existing portfolio around the student profile supplied in `src/assets/CV/`, replacing the current design, theme, colors, layout, navigation, and data-engineering/business identity with a medicine-focused experience.
- **Request Type**: System-wide user-facing enhancement and presentation redesign.
- **Scope Estimate**: System-wide frontend change affecting navigation, content models, every visible section, assets, templates, styling, responsive behavior, tests, and documentation.
- **Complexity Estimate**: Complex because the redesign changes the complete visual and information architecture while deriving public content from source files that include sensitive personal records.
- **Requirements Depth**: Comprehensive.
- **Target Portfolio Owner**: Bui Tuan Phat.
- **Public Identity**: Medical Student at Thai Nguyen University of Medicine and Pharmacy.

## Goals

1. Present Bui Tuan Phat as a thoughtful medical student whose path combines scientific achievement, disciplined learning, leadership, and compassionate service.
2. Replace the existing engineering and business presentation systems with one cohesive medical portfolio.
3. Build a distinctive clinical-humanities visual language that feels credible, warm, precise, and personal rather than like a generic hospital template.
4. Use only verified facts and publication-safe media from the supplied materials.
5. Preserve responsive, accessible, static GitHub Pages delivery.

## Current Change Intent: Visual Showcase and Evidence Enhancement

- **Request Type**: Multi-component user-facing enhancement plus one rendering bug fix.
- **Scope**: Shared section hierarchy, award presentation and evidence interaction, GPA rendering, evidence dialog spacing, hero/navigation polish, content surfaces, responsive CSS, accessibility regressions, and documentation.
- **Complexity**: Moderate because the work affects every visible section and adds an award-to-dialog interaction while preserving the current data, privacy, navigation, and deployment boundaries.
- **Reference Boundary**: `trangiaminhtam.github.io/#identity` informs compact hierarchy, modular bordered surfaces, accent rails, indexed metadata, evidence framing, and restrained interaction states only. Its identity, content, assets, code, fonts, and branding must not be copied.

## Current Change Intent: Contact Email Draft

- **Request Type**: Focused user-facing interaction revision within the existing Contact section.
- **Scope**: Replace the non-interactive placeholder contact cards with an email-only, client-side draft composer addressed to the verified portfolio-owner email.
- **Complexity**: Low to moderate because the change introduces form state, accessible validation, a character counter, and `mailto:` composition while preserving static hosting and the existing section hierarchy.
- **Reference Boundary**: The supplied reference informs the pale clinical panel, top rule, compact uppercase labels, responsive field layout, explanatory copy, live counter, and prominent draft action. Its former-owner email, exact content, and branding must not be reused.

## Approved Product Decisions

- Use a balanced medicine pathway spanning admission, academics, science awards, leadership, and community service.
- Use a compassionate, precise, reflective voice.
- Use the clinical-humanities design direction: warm ivory, deep teal, surgical green, restrained burgundy, editorial typography, and subtle anatomy-inspired linework.
- Replace both current templates with one unified medical design and remove the style selector.
- Use a cohesive single-page narrative with sticky responsive anchor navigation.
- Use these content areas: Overview, Calling to Medicine, Education, Academic Excellence, Science and Awards, Leadership and Service, Evidence Gallery, and Contact.
- Use the publication-ready portrait at `src/assets/profile_pic.jpg`.
- Publish concise verified text and selected safe evidence images only.
- Offer the supplied dedicated public CV as a downloadable PDF from the Overview hero; the user explicitly approved publishing the file verbatim, including its visible placeholder contact line.
- Use the verified owner email `buituanphat123456@gmail.com` as the sole Contact recipient; do not publish or retain a website phone contact.
- Present Contact as a client-only email-draft composer that does not submit or store visitor data on the site.
- Use a compact editorial header rail across content sections so main content receives approximately 78% of desktop width; cap every shared non-hero section heading at approximately 2.4rem on desktop, 2.1rem at the single-column breakpoint, and 1.8rem on narrow mobile.
- Present awards through evidence-first cards, reuse the existing accessible evidence dialog for detail viewing, and show an honest unavailable status when no approved image exists.
- Apply a cohesive reference-informed polish to the hero, navigation, and every content section while preserving the medical palette, verified copy, content order, and interaction model.
- Publish in English only.
- Require responsive WCAG 2.2 AA-oriented behavior, reduced-motion support, optimized images, and light and dark medical color modes.
- Disable the Security Baseline extension.
- Disable Property-Based Testing extension enforcement for this UI-focused change while retaining the existing property suite and seed-replay capability.

## Audience and User Outcomes

### Primary Audiences

- Academic reviewers and medical educators.
- Scholarship and program reviewers.
- Mentors, peers, and collaborators.
- Visitors interested in the student's science, leadership, and service journey.

### Visitor Outcomes

- Understand the student's medical direction within the first viewport.
- Follow a coherent story from academic foundation to medicine, achievement, leadership, and service.
- Inspect credible evidence without encountering private source records.
- Navigate comfortably by keyboard, touch, or pointer on mobile and desktop.
- View the experience in an accessible light or dark medical theme.

## Verified Public Content Baseline

The implementation may use the following facts as concise public content:

- Bui Tuan Phat is a medical student at Thai Nguyen University of Medicine and Pharmacy.
- He completed high school at Wellspring and graduated in 2026.
- SAT total score: 1500.
- AP Scholar, with AP Biology 5, AP Chemistry 5, and AP Microeconomics 4.
- IELTS Academic overall band: 8.0.
- Hong Kong International Science Olympiad recognition: Silver Award in 2022 and Bronze Awards in 2023 and 2025.
- Second Prize in the school-level Grade 12 Chemistry excellent-student selection exam.
- Science and Passion competition recognition, including first-place and second-place stage or final awards represented by the supplied certificates.
- World Health Organization committee delegate at WIS Conference and Top 10 Delegate, ranked fourth.
- Participation in the Science of Tram and Cham project.
- Completion of teamwork and leadership training.
- Contribution to the school event "Embrace the Present."
- Community support for pediatric patients through a documented donation activity.
- Wellspring American Dual course, 2023-2026, with GPA 9.38/10 in Grade 10 and 9.4/10 in Grades 11 and 12.
- HKISO Gold Award in the 2021-2022 Heat Round, Silver Award in the 2021-2022 Final Round, and Bronze Awards in the 2022-2023 and 2024-2025 Heat Rounds.
- Wellspring Merit Scholarship totaling VND 14,000,000 for the 2022-2023 period, as stated in the supplied public CV.
- Innoverse 2026 research on nanomaterials in medicine, February-August 2026, including the CV-stated production method and reported dispersibility/cytotoxic-activity observations; this must be framed as a student project, not clinical proof.
- IOGT-VN teamwork and leadership training and Wellspring Hunger Games 2024 participation.
- Country Representative at WIS Conference #12, ranked fourth among 24 delegates; the committee is published as WHO based on the visually verified certificate, not the conflicting UNWTO wording in the CV.
- Fundraising in a team of 10 that donated 100 gifts to children receiving care for thalassemia and hemophilia, described as community support rather than clinical service.
- Participation in Tram & Cham and the Wellspring High School Happy Run.
- Interests: origami and piano.
- Verified Contact recipient: `buituanphat123456@gmail.com`, used only to address the visitor's local email draft.

Exact wording must remain faithful to the source evidence. Unsupported medical experience, clinical practice, research, volunteering, or career claims must not be invented.

## Functional Requirements

### FR-01: Unified Medical Experience

- Replace the Engineering and Business presentations with one medical portfolio presentation.
- Remove the user-facing portfolio-style selector and its persistence behavior.
- Remove or simplify template-registry code that no longer adds value after consolidation.
- Ensure obsolete stored template preferences cannot break the site.

### FR-02: Medical Visual System

- Establish named design tokens for light and dark medical themes.
- The light palette must be led by warm ivory, deep teal, surgical green, and restrained burgundy.
- The dark palette must use deep blue-green surfaces, warm near-white text, and accessible teal or burgundy accents.
- Use an editorial serif for major headings and a highly readable sans-serif for navigation, body text, metrics, and controls.
- Use subtle anatomy, pulse, cellular, or clinical-line motifs as supporting details only; avoid clichéd stock-doctor imagery, excessive crosses, or emergency-red dominance.
- Decorative graphics must not compete with reading order or create medical misinformation.
- Content sections must use a compact editorial header rail of approximately 22% header and 78% main content on desktop. Every shared non-hero section heading must use a compact responsive scale capped at approximately 2.4rem on desktop, 2.1rem at the single-column breakpoint, and 1.8rem on narrow mobile so headings support rather than dominate the showcase content.
- The hero, navigation, and content sections must share a coherent visual system using modular bordered surfaces, restrained accent rails, indexed metadata, evidence framing, and accessible hover/focus states without copying the reference site's identity or assets.

### FR-03: Responsive Navigation

- Provide a sticky desktop navigation bar with links to every enabled section.
- Provide an accessible compact mobile navigation menu.
- Use hash anchors compatible with GitHub Pages.
- Indicate the active section visually and through `aria-current` where appropriate.
- Remove the single-page/multi-page layout toggle.
- Include a skip link to the main content.

### FR-04: Overview Hero

- Show the student's name, approved medical-student role, concise positioning statement, and primary navigation actions.
- Use `src/assets/profile_pic.jpg` as the principal portrait.
- Present the portrait with an intentional editorial crop while preserving the source file.
- Include concise, verified highlights such as Medicine, Science, Leadership, and Service rather than the current technology stack.
- Show a secondary action that downloads `src/assets/documents/bui-tuan-phat-cv.pdf` with a stable, descriptive filename.
- Keep the placeholder phone, email, and portfolio label contained in the explicitly approved verbatim PDF; do not reuse those CV values as website contact channels. The Contact section uses the separately verified recipient defined by FR-11.

### FR-05: Calling to Medicine

- Replace the generic About content with a reflective narrative connecting scientific curiosity, disciplined study, empathy, leadership, and service.
- Clearly distinguish aspiration and values from verified experience.
- Do not imply completed clinical training, patient care, research publications, or professional licensure.

### FR-06: Education

- Present Wellspring high-school completion and the current Medicine program at Thai Nguyen University of Medicine and Pharmacy.
- Use a readable journey or timeline rather than the current engineering résumé layout.
- Do not expose dates of birth, applicant numbers, student numbers, admission scores, addresses, or phone numbers from source records.
- Include the Wellspring American Dual course period and concise Grade 10-12 GPA progression from the supplied CV.
- Render every GPA and its scale as one non-breaking metric unit; Grade 10 must display exactly `9.38 /10` without splitting `/10` across lines at any supported width.

### FR-07: Academic Excellence

- Present SAT 1500, IELTS 8.0, AP Scholar, AP Biology 5, AP Chemistry 5, and AP Microeconomics 4.
- Use compact, accessible score cards or evidence rows with clear labels.
- Avoid displaying raw SAT, AP, IELTS, transcript, or report-card files.
- Scores must not be presented in a misleading comparative context.
- Include the CV-stated Wellspring Merit Scholarship as a separate academic recognition, without implying that its earlier IELTS/PSAT basis is the student's current score profile.

### FR-08: Science and Awards

- Present the verified science-olympiad, Chemistry, Science and Passion, scholarship, and conference recognitions.
- Group awards by theme or chronology to keep the section scannable.
- Use selected safe certificate imagery only when it adds credibility and remains legible.
- Provide meaningful alternative text that describes the achievement rather than transcribing decorative certificate text.
- Feature the Innoverse 2026 nanomaterials-in-medicine work as a student research project, separating methodology and CV-reported observations from clinical claims.
- Render awards with approved evidence as evidence-first cards in a two-column desktop grid and one-column mobile layout, using a large 3:2 preview above concise copy and an explicit keyboard-accessible `View evidence` control.
- Awards without approved image evidence must remain visible as consistent text-first cards with an `Evidence image not available` status; no image may be invented, inferred, or substituted.
- Activating award evidence must open the same detail-view system used by the Evidence Gallery.

### FR-09: Leadership and Service

- Present WHO committee participation, teamwork and leadership training, science-project participation, event contribution, and pediatric-patient support.
- Use careful language that reflects documented participation and contribution.
- Do not describe these activities as clinical service or medical treatment.
- Include IOGT-VN training, Wellspring Hunger Games, WIS Conference, fundraising/donation support, Tram & Cham, Happy Run, origami, and piano as concise CV-derived entries.

### FR-10: Evidence Gallery

- Implement an accessible gallery of approved portrait, achievement artwork, event evidence, and safe certificates.
- Gallery items must support keyboard access and meaningful alternative text.
- If a modal or expanded preview is used, it must support Escape, focus containment, visible close controls, and focus restoration.
- Lazy-load non-critical gallery images and reserve image dimensions to reduce layout shift.
- The existing evidence dialog must be reused for award evidence and Gallery evidence so both paths share metadata, image-error behavior, focus containment, Escape handling, close control, and focus restoration.
- The dialog must be top-aligned with an approximate 3rem inset on larger screens and at least 1rem plus the device safe-area inset on narrow mobile; its available height must be reduced accordingly and remain internally scrollable.

### FR-11: Contact and Closing Section

- Retain a closing Contact section in the information architecture.
- Use the concise visible section title `Looking ahead` instead of `The next chapter is still being written`.
- Render an email-only draft form with fields for Name, Reply-to email, and Message.
- Address the draft to the verified portfolio-owner email `buituanphat123456@gmail.com`.
- Limit Message to 5,000 characters and show an accessible live character counter.
- Validate required values and email syntax before opening the draft, with errors associated to their fields and announced accessibly.
- Explain that the site does not submit or store the entered content and that the visitor will review, edit, and send the message from their local email application.
- On successful validation, compose a percent-encoded `mailto:` URL with a stable portfolio-contact subject and a body containing the visitor's name, reply-to email, and message.
- Make the form email-only: remove the placeholder phone card, telephone action, and fictional placeholder email.
- Preserve entered values if opening the local email application is unavailable or dismissed; the site must not imply that a message was sent.
- Do not reuse the former portfolio owner's contact details.

### FR-12: Light and Dark Medical Modes

- Retain an accessible color-mode control.
- Both modes must use the same medical identity and information hierarchy.
- Persist the visitor's color preference using the existing safe client-side mechanism where practical.
- Prevent flashes of unreadable content during initial rendering.

### FR-13: Content and Data Refactor

- Replace all current Nham Quoc Hung profile, engineering, business, project, journal, skills, certificate, and contact content that does not belong to Bui Tuan Phat.
- Update TypeScript data models to fit the new medical narrative rather than forcing unrelated project or employment concepts onto the content.
- Keep student-editable facts separate from presentation components.
- Keep source evidence filenames and public copy traceable in documentation or tests without exposing private records at runtime.

### FR-14: Remove Irrelevant Features

- Remove or disable the current journal, engineering projects, technology skills, external blog, video, template selector, and multi-page layout controls unless they are repurposed by the approved medical information architecture.
- Remove dead navigation entries, imports, styling, persistence keys, and tests associated only with retired experiences.
- Preserve GitHub Pages deployment and other reusable infrastructure.

### FR-15: Privacy-Safe Asset Boundary

- Use an explicit public-asset allowlist rather than importing the entire CV directory.
- The public build must exclude raw passport, national identity, visa, birth certificate, address-bearing reports, applicant or student identifiers, candidate numbers, full transcripts, report cards, and files marked `dontuse`.
- Admission, standardized-test, language-test, and transcript documents may be used to verify text but must not be linked or rendered.
- Any future derivative must remove sensitive fields before entering the public asset allowlist.
- Exception: `src/assets/documents/bui-tuan-phat-cv.pdf` is an explicitly approved verbatim public CV. Its placeholder contact line may remain inside the download, but its values must not populate website contact fields. The verified FR-11 recipient was supplied separately by the user.
- No component may dynamically enumerate or expose every file under `src/assets/CV/`.

### FR-16: Repository Documentation

- Update student-facing documentation so the described data files, sections, navigation, screenshots, and customization workflow match the medical portfolio.
- Document where approved profile content and public images are configured.
- Document the explicit private/public asset boundary.
- Preserve the existing beginner-friendly GitHub Pages setup and collaboration guidance unless implementation changes require corrections.

### FR-17: Site-Wide Visual Refinement

- Apply the approved compact hierarchy, modular bordered surfaces, accent rails, indexed metadata, stronger evidence framing, and restrained interaction states to the hero, navigation, and all content sections.
- Preserve the current warm-ivory, deep-teal, surgical-green, and restrained-burgundy medical identity in both light and dark modes.
- Preserve verified copy, content order, eight-section navigation, CV action, Contact placement, and semantic heading order.
- Avoid decorative density that competes with evidence, introduces horizontal overflow, or reduces text contrast.
- Use shared tokens and reusable component classes rather than isolated one-off literals.

## Public Asset Classification

### Approved Initial Public Asset

- `src/assets/profile_pic.jpg` - Publication-ready graduation portrait for the hero and selected profile contexts.
- `src/assets/documents/bui-tuan-phat-cv.pdf` - User-supplied two-page public CV, approved verbatim for download on 2026-09-19; SHA-256 `1cebc0b51ad17b0e00eda5aa4fcc923089bd32e14f4f93950f1bdd494ea10a38`.

### Candidate Evidence Assets Requiring Final Implementation Review

- HKISO award certificates.
- WIS Conference participation certificate and Top 10 Delegate artwork.
- Science and Passion award certificates.
- Wellspring scholarship, Chemistry, project, and event-contribution certificates that contain no private identifiers.
- Selected safe project or achievement artwork.

### Text-Verification Only; Never Publish Raw

- SAT report.
- AP score report.
- IELTS test report.
- University admission notices.
- Donation letter if its layout exposes unnecessary personal information.
- Academic transcripts, score records, graduation scores, and full school records.
- Graduation certificate containing personal identifiers.
- Teamwork and leadership certificate containing date-of-birth information.

### Prohibited Public Assets

- Passport images.
- National identity-card images or printouts.
- Visa images.
- Birth certificate.
- Any address-bearing or candidate-number-bearing record.
- `dontuse.jpg` and `dontuse(1).jpg`.

## Non-Functional Requirements

### NFR-01: Accessibility

- Target WCAG 2.2 Level AA for color contrast, keyboard access, visible focus, semantic landmarks, headings, names, roles, and states.
- Normal text must reach at least 4.5:1 contrast; large text and essential graphical controls must reach at least 3:1.
- Respect `prefers-reduced-motion` and avoid essential information conveyed only through motion or color.
- Touch targets should be at least 44 by 44 CSS pixels where practical.
- Give every Contact field a persistent visible label, keyboard-visible focus styling, programmatic error association, and clear required-state semantics; announce validation feedback and the Message counter without disruptive repeated speech.

### NFR-02: Responsive Design

- Support mobile widths from 320 CSS pixels, tablets, laptops, and wide desktop layouts without horizontal scrolling.
- Navigation, portrait composition, score cards, timelines, gallery, and theme controls must adapt without hiding essential content.
- At desktop widths, shared content sections should allocate approximately 22% to the heading rail and 78% to main content with a restrained gap. Shared non-hero headings must be capped at approximately 2.4rem on desktop, 2.1rem at the single-column breakpoint, and 1.8rem on narrow mobile so evidence and body content remain visually primary without horizontal overflow or a heading-dominated viewport.
- Award evidence cards must use two columns only when each card remains legible and must collapse to one column before evidence or copy becomes cramped.
- The dialog top inset, safe-area padding, maximum height, and internal scrolling must keep close controls and evidence reachable from 320 CSS pixels through wide desktop widths.

### NFR-03: Performance

- Optimize or appropriately size imported imagery and lazy-load below-the-fold evidence.
- Avoid bundling private or unused CV assets.
- Prevent avoidable layout shift by declaring stable media dimensions or aspect ratios.
- Preserve a fast static first render and avoid new runtime network dependencies for portfolio content.

### NFR-04: Maintainability

- Use coherent medical design tokens rather than scattered literal colors.
- Keep copy and evidence metadata in typed data modules.
- Remove dead template abstractions and CSS after consolidation.
- Use descriptive component and data names tied to content purpose rather than visual position alone.

### NFR-05: Reliability and Compatibility

- Preserve strict TypeScript compilation, ESLint, Vitest, and the Vite production build.
- Preserve hash-anchor behavior and GitHub Pages base-path compatibility.
- Support current evergreen desktop and mobile browsers.
- Client-side preference failures must fall back safely without preventing content rendering.

### NFR-06: Example-Based Testing

- Update rendering, navigation, content, color-mode, responsive-control, and asset-boundary tests for the unified medical experience.
- Include explicit regression tests that ensure former-owner identity and retired template choices are absent.
- Include tests that ensure prohibited filenames and sensitive source assets are not imported into public data modules.
- Retain concrete tests for critical routes and accessibility labels alongside property-based tests.
- Add concrete regressions for the 22/78 shared layout, the 2.4rem/2.1rem/1.8rem heading caps, Grade 10 `9.38 /10` non-breaking markup, evidence-first award states, award dialog activation, focus restoration, and responsive popup inset.

### NFR-07: Existing Property Test Preservation

- Property-Based Testing extension enforcement is disabled for this UI-focused change by explicit user choice.
- Retain the installed fast-check integration, existing property suites, shrinking, and reproducible seed support; do not remove or weaken them.
- No new randomized property is required unless implementation introduces a new pure transformation or state transition beyond the existing gallery model.

### NFR-08: Deployment

- Remain a static site deployed by the existing GitHub Actions and GitHub Pages workflow.
- Add no backend, database, authentication, paid service, or runtime secret.
- Production output must not contain prohibited source documents.

## Data Quality Requirements

- Every public claim must map to at least one supplied source file.
- Names, institutions, awards, scores, years, and roles must be normalized consistently in English.
- Ambiguous OCR output must not be treated as authoritative without visual confirmation.
- Private identifiers must not be copied into source code, alt text, filenames, metadata, tests, snapshots, or documentation intended for publication. The explicitly verified FR-11 recipient is the only actionable personal contact value approved for the website.
- Content must distinguish verified current status from future aspirations.

## Acceptance Criteria

1. The first viewport identifies Bui Tuan Phat as a Medical Student at Thai Nguyen University of Medicine and Pharmacy.
2. The current engineering/business identity, template selector, and layout selector are absent from the public interface.
3. One cohesive medical design renders in accessible light and dark modes.
4. Sticky desktop and accessible mobile navigation reach all approved sections through GitHub Pages-safe anchors.
5. The hero uses `src/assets/profile_pic.jpg` and provides a working secondary action that downloads `bui-tuan-phat-cv.pdf` with a stable filename.
6. All eight approved content areas are present and use verified medical-pathway content.
7. SAT, AP, IELTS, academic, science, leadership, and service claims match their source evidence.
8. The Contact section uses the visible title `Looking ahead` and an email-only draft form addressed to `buituanphat123456@gmail.com`; it contains Name, Reply-to email, and Message fields, a 5,000-character live counter, no phone contact, and no former-owner contact details.
9. No raw private, identity, immigration, address-bearing, candidate-number-bearing, transcript, report-card, or `dontuse` asset is imported or linked.
10. The evidence gallery contains only reviewed public assets and is keyboard accessible.
11. All normal text, controls, and essential visual states meet the specified contrast targets.
12. The experience works without horizontal scrolling at 320 CSS pixels and adapts through wide desktop widths; every shared content section uses an approximately 22/78 desktop header/content split, and every shared non-hero heading is capped at approximately 2.4rem on desktop, 2.1rem at the single-column breakpoint, and 1.8rem on narrow mobile.
13. Reduced-motion preferences are honored.
14. TypeScript, lint, example-based tests, property-based tests, and the production build pass after dependencies are installed.
15. Property-based failures report reproducible seed and shrinking information.
16. GitHub Pages deployment and base-path behavior remain functional.
17. The production bundle contains no prohibited CV source document.
18. Documentation matches the new content structure and records the public/private asset boundary.
19. Every award with approved evidence uses a large 3:2 preview in a two-column desktop evidence-first card layout that collapses to one column on mobile and exposes an explicit keyboard-accessible `View evidence` control.
20. Activating award evidence opens the same accessible evidence dialog used by Gallery cards; Escape and the close control dismiss it and focus returns to the originating award control.
21. Awards without approved public imagery remain visible and display `Evidence image not available` without a substituted or invented image.
22. Grade 10 displays exactly `9.38 /10`, and the `/10` scale never splits across lines at supported widths.
23. The evidence dialog is top-aligned with approximately 3rem inset on larger screens and at least 1rem plus safe-area inset on narrow mobile, remains fully scrollable, and keeps the close control reachable.
24. The hero, navigation, and all content sections use one cohesive reference-informed visual system while preserving the medical palette, verified content, semantic order, and accessibility behavior.
25. Invalid or incomplete Contact fields prevent draft opening and expose accessible field-level feedback; valid input opens a percent-encoded local email draft containing the visitor's name, reply-to email, and message without submitting or storing the content on the site.
26. Contact copy clearly states that the visitor must review and send the draft from their email application and never presents draft opening as successful delivery.

## Out of Scope

- Publishing a passport, identity card, visa, birth certificate, transcript, report card, full score report, or admission notice.
- Inventing clinical experience, research publications, patient-care responsibilities, credentials, or affiliations.
- Creating any additional downloadable public résumé or document that has not been explicitly approved.
- Publishing any actionable personal contact information other than the explicitly verified FR-11 recipient.
- Adding a backend contact form, CMS, database, authentication, analytics, or medical-data collection.
- Providing medical advice, diagnostic tools, health claims, or patient-facing functionality.
- Deploying the site or changing repository hosting settings during this workflow.

## Traceability to User Decisions

| Decision Source | Requirement Coverage |
|---|---|
| Question 1 | Public identity and FR-04 |
| Question 2 | Goals, public content baseline, FR-06 through FR-09 |
| Question 3 | Voice requirements and FR-05 |
| Question 4 | FR-02 and both color modes |
| Question 5 | FR-01 and FR-14 |
| Question 6 | FR-03 |
| Question 7 | Approved information architecture and FR-04 through FR-11 |
| Question 8 plus clarification | FR-04 and approved `profile_pic.jpg` portrait |
| Question 9 | FR-10, FR-15, and Public Asset Classification |
| Question 10 | FR-04 and résumé exclusion |
| Question 11 | FR-11 |
| Question 12 | English-only public copy |
| Question 13 | FR-12 and NFR-01 through NFR-03 |
| Question 14 revision | Security Baseline extension disabled |
| Question 15 | NFR-06 and NFR-07 |
| Supplied public CV change, Unit 4 Questions 1-5 | CV-led eight-section structure, verbatim PDF download, hero placement, concise web summaries, and WHO source precedence |
| Contact/layout change Questions 1-3 | FR-02, FR-04, FR-11, FR-15, NFR-02, Acceptance Criteria 8 and 12 |
| Section heading refinement Questions 1-3 | Approved Product Decisions, FR-02, FR-11, NFR-02, Acceptance Criteria 8 and 12 |
| Visual showcase Questions 1-6 | Current Change Intent, FR-02, FR-06, FR-08, FR-10, FR-17, NFR-02, NFR-06, Acceptance Criteria 12 and 19-24 |
| Visual showcase Question 7 | Security Baseline disabled |
| Visual showcase Question 8 | Property-Based Testing extension disabled for this change; existing suites preserved under NFR-07 |
| Contact email-draft revision Questions 1-2 | Approved Product Decisions, FR-04, FR-11, FR-15, FR-17, NFR-01, NFR-08, Acceptance Criteria 8 and 25-26 |

## Extension Configuration and Compliance

### Security Baseline

- **Status**: Disabled by explicit user instruction.
- **Stage handling**: SECURITY-01 through SECURITY-15 are skipped and the skip is recorded in `aidlc-docs/audit.md`.
- **Independent product requirement**: The privacy-safe asset boundary remains mandatory because it was separately approved in Questions 9 and 11.

### Property-Based Testing

- **Status**: Disabled for this UI-focused change by explicit user choice (Question 8, option C).
- **Stage handling**: PBT-01 through PBT-10 are not blocking extension rules for this change and their full rules file is not loaded.
- **Existing quality boundary**: Current fast-check suites, shrinking, seed replay, and CI execution remain part of the repository quality gate under NFR-07 and must not regress.

No blocking extension findings exist in Requirements Analysis.
