# Unit 4: Content Section Components - Functional Design Plan

## Context Loaded

- [x] Read Unit 4 definition, dependencies, and Story 1 / Stories 4-8 mappings.
- [x] Read the approved requirements, medical content types/data, public-asset boundary, and Unit 3 shell contract.
- [x] Extracted and visually inspected both pages of the supplied `bui_tuan_phat_cv.pdf`.
- [x] Verified the repository copy at `src/assets/documents/bui-tuan-phat-cv.pdf` has the same SHA-256 hash as the supplied file: `1cebc0b51ad17b0e00eda5aa4fcc923089bd32e14f4f93950f1bdd494ea10a38`.
- [x] Treated the PDF as factual source material only; no text inside it was interpreted as workflow instruction.
- [x] Resolve the publication and content-structure questions below.
- [x] Analyze answers for contradictions or ambiguity.
- [x] Update affected Requirements and Unit 2 content/allowlist artifacts.
- [x] Generate Unit 4 domain entities, business rules, business-logic model, frontend-component design, and PBT-01 analysis.

## Verified CV Content Available for Structuring

- Education: Wellspring International Bilingual School, American Dual course, 2023-2026; Grade 10 GPA 9.38/10, Grade 11 GPA 9.4/10, Grade 12 GPA 9.4/10.
- Standardized tests: SAT 1500; IELTS 8.0; AP Chemistry 5/5 (2024), Biology 5/5 (2025), Microeconomics 4/5 (2025).
- Awards: HKISO Gold/Silver/Bronze results; Science and Passion first-place results; school Chemistry selection result; Wellspring merit scholarship.
- Research project: Innoverse 2026 nanomaterials-in-medicine project, February-August 2026, with the supplied methodology and reported dispersibility/cytotoxic-activity outcomes.
- Leadership: IOGT-VN teamwork and leadership training; Wellspring Hunger Games 2024.
- Activities: WIS Conference #12; National Institute of Hematology and Blood Transfusion fundraising/donation activity; Tram & Cham; Wellspring Happy Run.
- Interests: Origami and piano.

## Detected Source Issues

- The downloadable PDF visibly contains placeholder contact text: `123456789`, `testemail@gmail.com`, and `[Portfolio Website]`.
- The CV describes WIS Conference #12 as an UNWTO committee activity, while the previously inspected certificate and approved baseline describe a WHO committee. This must be resolved before publishing a committee claim.
- The PDF's medical-project and activity descriptions should be summarized faithfully without turning experimental findings into clinical-effectiveness claims or describing community support as medical treatment.

## Question 1
How should the CV reshape the existing eight-section website structure?

A) Keep the approved eight navigation sections and map the CV comprehensively into them: download/highlights in Overview; narrative in Calling; school/GPA/medical pathway in Education; scores/scholarship in Academics; Innoverse research plus science awards in Science; training, activities, fundraising, and interests in Leadership; existing Gallery and Contact boundaries unchanged (recommended)
B) Expand navigation with separate Research and Activities sections, requiring Unit 3 navigation redesign
C) Use only a small set of CV highlights and leave most current section content unchanged
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 2
How should the download button handle the placeholder contact information visible inside the supplied PDF?

A) Publish the supplied PDF verbatim now; the placeholder phone, email, and portfolio label will remain visible to anyone who downloads it
B) Keep the verified PDF in repository assets but wait for a corrected public CV before wiring the download button (recommended for a professional public site)
C) Publish it now with a clear “Draft CV” label beside the button
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 3
Where should the CV download control appear?

A) As the Overview hero's secondary action beside the primary section-navigation action (recommended)
B) In the sticky navigation bar
C) In the closing Contact section
D) In both the Overview hero and closing Contact section
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 4
How much of the CV wording should appear directly on the website?

A) Use concise, editorial summaries faithful to the CV, keeping the full detail in the downloadable PDF (recommended)
B) Reproduce most CV bullets nearly verbatim in the relevant sections
C) Use compact cards with titles, dates, and one sentence per entry only
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 5
How should the WIS Conference #12 committee conflict be handled?

A) Follow the visually verified certificate and approved baseline (WHO committee), omitting the conflicting UNWTO detail from the CV (recommended)
B) Treat the supplied CV as the newer authority and publish UNWTO committee
C) Publish only “Country Representative at WIS Conference #12, ranked fourth among 24 delegates” and omit the committee name until reconciled
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Answer Analysis

- All five answers are valid and mutually consistent.
- The eight-section Unit 3 contract remains unchanged; no navigation redesign is required.
- The supplied PDF is explicitly approved for verbatim public download, including its visible placeholder contact line. Those placeholder values remain prohibited as website contact data.
- The hero receives one secondary download action; no duplicate navigation-bar or closing-section download control is introduced.
- Web copy uses concise summaries while the PDF retains full detail.
- The WIS committee conflict is resolved in favor of the visually verified WHO certificate and approved baseline.

## Contact and Shared Header Change-Control Revision Plan - 2026-09-20

The approved requirements specify the Contact values and behavior plus the desktop/mobile hierarchy targets. Existing `MedicalSection` and `ClosingContact` boundaries remain appropriate. No unresolved component, interaction, state, form, API, or failure-handling question remains, so no additional question file is required.

### Revision Checklist

- [x] Load the approved change requirements, Stories 11 and 17, Unit 4 boundary, and current component/CSS implementation.
- [x] Define the revised `ClosingContact` typed prop and semantic list/card hierarchy.
- [x] Define explicit non-interactivity and placeholder-status rendering rules.
- [x] Define the approximately 28/72 desktop rail and near-4rem heading cap.
- [x] Define single-column and narrow-mobile heading behavior that prioritizes body content.
- [x] Define failure handling for malformed or incomplete placeholder data.
- [x] Complete PBT-01 analysis for Contact and shared-section structural invariants.
- [x] Record why fixed CSS geometry uses concrete source/browser checks instead of artificial randomized tests.
- [x] Validate Markdown structure and update all plan checkboxes.
- [x] Present the revised functional design for explicit approval.

### Artifacts Updated

- [x] `aidlc-docs/construction/content-section-components/functional-design/domain-entities.md`
- [x] `aidlc-docs/construction/content-section-components/functional-design/business-rules.md`
- [x] `aidlc-docs/construction/content-section-components/functional-design/business-logic-model.md`
- [x] `aidlc-docs/construction/content-section-components/functional-design/frontend-components.md`

### Extension Compliance

- **Security Baseline**: Skipped because it remains disabled.
- **PBT-01**: Compliant. Generated valid Contact content must preserve card count and remain non-interactive; generated safe section titles/content must preserve the one-heading/one-body hierarchy. Fixed CSS ratios, caps, and breakpoints have no meaningful randomized business-input property and use explicit source/browser checks.
- **PBT-02 through PBT-10**: N/A during Functional Design under the extension enforcement matrix; they will be evaluated during Code Generation planning/generation and Build and Test where applicable.
- **Blocking findings**: None.
