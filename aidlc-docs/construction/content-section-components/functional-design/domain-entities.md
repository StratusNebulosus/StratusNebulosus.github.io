# Unit 4: Content Section Components - Domain Entities

## `MedicalSectionDefinition`

- `id: MedicalSectionId`, `label: string`, `eyebrow: string`, `title: string`, `description: string`.
- The ordered IDs remain `overview`, `calling`, `education`, `academics`, `science`, `leadership`, `gallery`, `contact`.
- **Invariant**: every Unit 4 component owns exactly one non-gallery ID except `EvidenceGallery`, which remains Unit 5.

## `DownloadAsset`

- `asset: AllowedAsset`, `fileName: "bui-tuan-phat-cv.pdf"`, `label: string`, `ariaLabel: string`.
- The asset is the byte-identical repository copy of the supplied public CV and must be present in the explicit allowlist before rendering.

## `AcademicYearPerformance`

- `grade: "Grade 10" | "Grade 11" | "Grade 12"`, `gpa: string`, `scale: "10"`.
- Approved values: 9.38, 9.4, and 9.4 respectively.

## `EducationMilestone`

- Extends the existing timeline concept with `institution`, `location?`, `period`, `program`, `description`, and optional `academicYears`.
- Website content includes Wellspring's American Dual course and current medical-study pathway; no private record fields are accepted.

## `AcademicCredential`

- `label`, `value`, `year?`, `context?`, `kind: "test" | "ap" | "scholarship"`.
- Scholarship context is distinct from current SAT/IELTS/AP results so earlier PSAT/IELTS evidence is not mistaken for the current score profile.

## `ResearchProjectData`

- `title`, `period`, `context`, `summary`, `methods[]`, `reportedObservations[]`.
- The Innoverse project is modeled as student research, with method and observations separated from interpretation.
- **Invariant**: no field describes a treatment, clinical trial, patient outcome, approved therapy, or proven medical effectiveness.

## `RecognitionEntry`

- `title`, `organization`, `period`, `summary`, `category`, optional allowlisted evidence and descriptive alt text.
- Covers HKISO, Science and Passion, Chemistry selection, and scholarship recognition without duplicating entries across sections.

## `ActivityEntry`

- `title`, `period`, `category: "leadership" | "conference" | "community" | "school"`, `summary`, optional `highlights[]`.
- Covers IOGT-VN, Wellspring Hunger Games, WIS Conference, fundraising/donation support, Tram & Cham, and Happy Run.
- **Invariant**: community activities use fundraising/support language and never clinical-service language.

## `InterestEntry`

- `label: string`.
- Initial values: Origami and Piano.

## `PortfolioContent` Extension

The existing typed content object is extended without embedding presentation markup:

- `cvDownload: DownloadAsset`
- `academicYears: AcademicYearPerformance[]`
- `researchProjects: ResearchProjectData[]`
- richer education, recognition, and activity entries
- `interests: InterestEntry[]`

The existing narrative separation, scores, award groups, allowlisted evidence, and closing statement remain compatible.

## Testable Properties (PBT-01)

| Component or data boundary | Category | Property |
|---|---|---|
| Section composition | Invariant | Unit 4's rendered non-gallery section IDs are unique, ordered, and match the corresponding registry entries. |
| List rendering | Invariant | Every supplied education, credential, recognition, activity, research, and interest entry is rendered exactly once by its owning section. |
| CV action | Easy verification | The rendered download href equals the allowlisted CV asset and the `download` filename always equals `bui-tuan-phat-cv.pdf`. |
| Research copy | Invariant | Generated valid project content preserves method/observation separation and contains none of the forbidden clinical-claim terms. |
| Community copy | Invariant | Generated valid activity collections never label community support as treatment, diagnosis, or clinical care. |
| Responsive presentation | No PBT property identified | CSS layout behavior is better verified through source-level rules and concrete DOM/viewport checks than randomized business inputs. |

PBT-02, PBT-04, PBT-05, and PBT-06 are not applicable: Unit 4 adds no inverse pair, idempotent operation, optimized algorithm/oracle pair, or custom mutable domain state machine.

## Contact and Shared Header Change-Control Addendum

### `ContactChannelData`

- `id: string`, `kind: "email" | "phone"`, `label: string`, `value: string`, `statusLabel: "Placeholder"`.
- **Invariant**: no field contains a URI scheme or interaction metadata.
- **Invariant**: the value is rendered as text, never as an anchor target or form value.

### `ContactSectionData`

- `statement: string`, `channels: ContactChannelData[]`, `verificationNotice: string`.
- **Invariant**: the initial collection contains the exact approved email and phone examples once each.
- **Invariant**: the status and verification notice remain visible without relying on color.

### `SectionPresentationContract`

- Desktop content sections allocate approximately 28% of usable grid width to the header rail and 72% to the body, excluding the inter-column gap.
- Shared desktop `h2` text is capped near `4rem`; title length may wrap naturally and must not enlarge the cap.
- At the existing single-column breakpoint, the sticky rail becomes static and the heading scale is reduced.
- At narrow mobile width, the heading cap reduces again so the body begins promptly and the page remains free of horizontal overflow.

## Revised Testable Properties (PBT-01)

| Component or boundary | Category | Property |
|---|---|---|
| `ClosingContact` | Invariant | For generated valid `ContactSectionData`, the rendered Contact card count equals the supplied channel count and every value, label, and status appears exactly once. |
| `ClosingContact` | Invariant | For generated valid placeholder channels, rendering introduces no anchor, button, input, textarea, select, form, `mailto:` value, or `tel:` value. |
| `MedicalSection` | Invariant | For generated safe titles and body copy, the section retains exactly one associated `h2` and one body container without dropping either text value. |
| Shared CSS geometry | No PBT property identified | The fixed 28/72 columns, 4rem cap, and breakpoint overrides are declarative constants rather than transformations over domain input; concrete CSS-source and browser-layout checks are the meaningful verification. |

PBT-02, PBT-04, PBT-05, and PBT-06 remain N/A: the revision introduces no inverse, idempotent operation, reference algorithm, or mutable state machine. PBT-03 applies to the generated rendering invariants above. Domain-specific generators must produce structurally valid Contact data and safe section strings; shrinking and deterministic replay remain provided by fast-check.
