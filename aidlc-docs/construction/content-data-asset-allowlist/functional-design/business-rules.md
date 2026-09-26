# Unit 2: Content Data & Asset Allowlist - Business Rules

## BR-1: Explicit allowlist, no directory enumeration (FR-15)

`assetAllowlist.ts` must import each approved asset individually by its specific file path and export a fixed array of those imported references. No code may `import.meta.glob` or otherwise dynamically enumerate `src/assets/CV/`. Adding a new public asset always requires an explicit new `import` statement and allowlist entry, reviewed by a person.

## BR-2: Approved initial allowlist (Question 1, Option A)

The following assets, and only these, are approved for the public allowlist as of this unit:

| Asset | Verified as |
|---|---|
| `profile_pic.jpg` | Publication-ready portrait (already approved in Requirements Analysis) |
| `HKISO2022silver.jpg` | HKISO Silver Award, Secondary 2, 2022 — visually confirmed |
| `HKISO2023bronze.jpg` | HKISO Bronze Award, 2023 — same certificate template as the confirmed 2022/2025 awards |
| `HKISO2025bronze.jpg` | HKISO Bronze Award, 2025 — same certificate template as the confirmed 2022 award |
| `WISCONg10.jpg` | WIS Conference #12, WHO committee delegate — visually confirmed |
| `WISCONg10top4.jpg` | Top 10 Delegate, Ranking #4 — visually confirmed |
| `SAPfinalg11.jpg` | Science and Passion, First Prize (final) — visually confirmed |
| `SAPround1g11.jpg` | Science and Passion, Round 1 — same certificate template as the confirmed final-round award |
| `SAPround1g12.jpg` | Science and Passion, Round 1 — same certificate template as the confirmed final-round award |
| `SAPround3g11.jpg` | Science and Passion, Round 3 — same certificate template as the confirmed final-round award |
| `excellentsecond.jpg` | Chemistry (Grade 12) School-level Excellent Student Selection Exam, Second Prize — visually confirmed |
| `Tram&Chamg11.jpg` | Science of Tram and Cham project, team member — visually confirmed |
| `presentg11.jpg` | "Embrace the Present" outstanding contributor — visually confirmed |
| `bui-tuan-phat-cv.pdf` | User-supplied two-page public CV — extracted and visually confirmed, approved verbatim on 2026-09-19 |

Every other file in `src/assets/CV/` remains outside the allowlist, including (but not limited to) `IOGTVN.jpg` (contains a date of birth — visually confirmed) and `donation.jpg` (hospital thank-you letter — visually confirmed sensitive layout), consistent with the Text-Verification-Only and Prohibited classifications in `requirements.md`.

## BR-3: No claim without a source file (Data Quality Requirements)

Every `AwardEntryData`, `TimelineEntryData`, and narrative claim in `content.ts` must correspond to a fact listed in the Verified Public Content Baseline of `requirements.md`. No new achievement, activity, or credential may be introduced that is not already in that baseline, even if a plausible-looking source file exists for it (e.g., unreviewed files such as `VUCAg9.jpg`, `internationalg9.jpg`, `greatprogressg11.jpg` are excluded from both content and the allowlist because they are not part of the approved baseline).

## BR-4: Private field exclusion (FR-06, Data Quality Requirements)

No `TimelineEntryData`, `ScoreEntryData`, or narrative field may contain: date of birth, applicant/candidate number, student number, admission score, address, phone number, or any other private identifier — regardless of whether such a value appears in a source document.

## BR-5: Alt text describes achievement, not transcription (FR-08)

For every `AwardEntryData` with `evidence` set, `evidenceAltText` must describe what the achievement is (e.g., "Certificate recognizing Hong Kong International Science Olympiad Silver Award, 2022") and must not be a verbatim transcription of decorative certificate text.

## BR-6: Aspiration vs. verified-experience separation (FR-05)

`NarrativeSection.aspirationParagraphs` and `NarrativeSection.experienceParagraphs` are structurally separate arrays specifically so no single paragraph can blend an aspiration with a verified fact in a way that misleads a reader about current status.

## BR-7: No clinical-service mischaracterization (FR-09)

`ServiceEntryData` descriptions for WHO committee participation, teamwork/leadership training, project participation, event contribution, and pediatric-patient support must use participation/contribution language, never "treated," "practiced," "diagnosed," or equivalent clinical-service phrasing.

## BR-8: Explicit public-CV exception (2026-09-19 change request)

`bui-tuan-phat-cv.pdf` is the only raw document approved for direct public download. It is imported explicitly from `src/assets/documents/`, added to the fixed allowlist, and exposed through typed hero download metadata. The user approved its placeholder phone, email, and portfolio label remaining inside the PDF; those values must never populate website contact content.

## BR-9: Evidence precedence for WIS Conference

Where the supplied CV conflicts with the visually verified WIS certificate, public website copy follows the certificate and approved baseline: WHO committee. The conflicting UNWTO committee text is omitted. The rank-four fact may be retained.

## BR-10: Exact fictional website placeholders

The website Contact data contains exactly `student.email@example.com` and `+84 XXX XXX XXX`. Both values are deliberately fictional, labeled `Placeholder`, and separate from the placeholder line inside the approved PDF.

## BR-11: CV and website placeholder separation

The CV-only values `testemail@gmail.com`, `123456789`, and `[Portfolio Website]` remain prohibited from website content, metadata, alternative text, and accessible labels. Tests must keep those prohibited markers distinct from the separately approved FR-11 website placeholders.

## BR-12: Non-actionable Contact contract

`ContactChannelData` contains display-only fields and no URL, `mailto:`, `tel:`, form, action, or submission metadata. The content layer must not derive an actionable URI from a placeholder value.

## BR-13: Explicit placeholder status

Every initial Contact record has a visible channel label and `Placeholder` status, and `ContactSectionData.verificationNotice` explains that verified contact channels will replace the examples later. A bare value without its label or status is invalid content.

## BR-14: Asset boundary unchanged

The Contact revision introduces no asset import and does not modify `ALLOWED_ASSETS`, the gallery inventory, or the public CV exception.
