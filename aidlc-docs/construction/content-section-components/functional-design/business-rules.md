# Unit 4: Content Section Components - Business Rules

## BR-1: Preserve the eight-section contract

Unit 4 replaces Unit 3's staged bodies without adding, removing, or reordering navigation IDs. The content order remains Overview, Calling, Education, Academics, Science, Leadership, Gallery, Contact.

## BR-2: Concise website copy, full CV download

Website components summarize the supplied CV in an editorial, scannable form. They do not reproduce long CV bullets verbatim. The explicitly approved PDF provides the full detail through the Overview download action.

## BR-3: Verbatim CV publication with isolated placeholders

The supplied `bui-tuan-phat-cv.pdf` may be downloaded verbatim. Its placeholder phone, email, and portfolio label remain inside the file by explicit approval but must not be read into `content.ts`, rendered in Contact, used in structured data, or presented as active contact channels.

## BR-4: Source precedence resolves WIS conflict

Public copy uses WHO committee because the visually inspected certificate and previously approved evidence baseline outrank the conflicting UNWTO wording in the CV. The country-representative and rank-four facts may be retained.

## BR-5: Research is a student project, not clinical proof

The Innoverse 2026 feature may describe the CV-stated top-down production process, ball-mill processing, OD600 observation, and observations across named cell lines. Copy must attribute these as project-reported observations and must not claim therapeutic benefit, clinical effectiveness, treatment success, publication, or professional research status.

## BR-6: Academic context stays unambiguous

- GPA values are labeled by grade and `/10` scale.
- Current SAT 1500, IELTS 8.0, and AP results remain separate from the merit scholarship's historical IELTS 7.5/PSAT 1310 basis.
- The scholarship amount may be shown as VND 14,000,000 without implying an ongoing award.

## BR-7: Community activity is not patient care

The donation activity is described as fundraising with a team and donating 100 gifts to children receiving care for thalassemia and hemophilia. Website copy omits the CV phrase about providing emotional support to patients to avoid implying clinical or direct-care responsibility.

## BR-8: One owner per content record

- Education owns school/program/GPA milestones.
- Academics owns scores and scholarship recognition.
- Science owns Innoverse research and science/competition recognition.
- Leadership owns training, conference, community/school activities, and interests.
- Gallery owns evidence media only and remains Unit 5.
- Contact owns only the approved closing statement until real contact channels are supplied.

## BR-9: Download action requirements

The hero renders a visible secondary action with a descriptive accessible name, local allowlisted href, HTML `download` attribute, stable filename `bui-tuan-phat-cv.pdf`, keyboard operability, and a stable `data-testid`. It must not open the placeholder email or portfolio URL embedded in the PDF.

## BR-10: Asset boundary remains explicit

The hero portrait, award evidence, and CV download must all pass through the fixed allowlist. Unit 4 cannot import any raw file from `src/assets/CV/`; only the content and allowlist modules may own evidence imports.

## BR-11: No content invention

Components render only typed fields supplied by `content.ts`. They do not synthesize medical specialization, admission rank, clinical training, publications, lab affiliation, patient-care experience, licensure, or contact information.

## BR-12: Clearly fictional Contact presentation

`ClosingContact` renders the exact approved website examples, `student.email@example.com` and `+84 XXX XXX XXX`, with visible Email/Phone labels and visible `Placeholder` status text. The surrounding verification notice states that verified channels will replace them later.

## BR-13: Contact remains non-interactive

Placeholder channels render as semantic list/card content, not anchors, buttons, inputs, a form, or another operable control. No `mailto:`, `tel:`, click handler, keyboard handler, submission behavior, or actionable ARIA role is permitted.

## BR-14: CV placeholder isolation remains enforced

The Contact section must never render the PDF's `testemail@gmail.com`, `123456789`, or `[Portfolio Website]` values. The separate approved website examples do not weaken the existing prohibition on those CV-only values or former-owner contact details.

## BR-15: Main content owns the desktop hierarchy

Every shared non-hero content section uses an approximately 28/72 header-to-body grid on desktop. The inter-column gap must remain restrained enough that the body retains the clear majority of usable width.

## BR-16: Section-heading scale is bounded

Shared section `h2` elements cap near `4rem` on desktop, reduce at the single-column breakpoint, and reduce again on narrow mobile. The heading may wrap, but it must not dominate most of the initial viewport or push the body needlessly below the fold.

## BR-17: Responsive structure preserves reading order

Desktop retains header-then-body source order and side-by-side presentation. Single-column layouts preserve that source order, disable sticky heading behavior, use a compact gap, and introduce no horizontal scrolling at 320 CSS pixels.
