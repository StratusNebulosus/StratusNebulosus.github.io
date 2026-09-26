# Unit 2: Content Data & Asset Allowlist - Domain Entities

## `PortfolioContent`

Top-level content object, one instance, exported from `src/data/medical/content.ts` (Question 2, Option A). Fields:

- `hero: HeroContent`
- `narrative: NarrativeSection`
- `education: TimelineEntryData[]`
- `scores: ScoreEntryData[]`
- `awardGroups: AwardGroup[]`
- `serviceEntries: ServiceEntryData[]`
- `closingStatement: string`
- `cvDownload: DownloadAsset`
- `academicYears: AcademicYearPerformance[]`
- `researchProjects: ResearchProjectData[]`
- `interests: string[]`

## `HeroContent`

- `name: string`, `role: string`, `positioningStatement: string`, `highlights: string[]` (e.g., "Medicine", "Science", "Leadership", "Service"), `portrait: AllowedAsset`.

## `DownloadAsset`

- `asset: AllowedAsset`, `fileName: string`, `label: string`, `ariaLabel: string`.
- **Invariant**: the asset is allowlisted and the stable filename is `bui-tuan-phat-cv.pdf`.

## `AcademicYearPerformance`

- `grade: string`, `gpa: string`, `scale: string`.

## `ResearchProjectData`

- `title: string`, `period: string`, `context: string`, `summary: string`, `methods: string[]`, `reportedObservations: string[]`.
- **Invariant**: observations are attributed to the student project/CV and never expressed as clinical effectiveness, treatment, or patient outcome.

## `NarrativeSection`

- `aspirationParagraphs: string[]` — forward-looking values/aspiration copy.
- `experienceParagraphs: string[]` — copy grounded in verified current status.
- **Invariant**: no paragraph in `experienceParagraphs` may describe completed clinical training, patient care, research publication, or licensure (FR-05).

## `TimelineEntryData`

- `institution: string`, `period: string`, `milestone: string`, `description: string`.
- **Invariant**: no field may contain a date of birth, applicant number, student number, admission score, address, or phone number (FR-06).

## `ScoreEntryData`

- `label: string` (e.g., "SAT", "IELTS", "AP Biology"), `value: string` (e.g., "1500", "8.0", "5"), `context?: string`.

## `AwardGroup`

- `theme: string` (e.g., "Science Olympiad", "Chemistry", "Science and Passion", "Global Engagement"), `awards: AwardEntryData[]`.

## `AwardEntryData`

- `title: string`, `year: string`, `description: string`, `evidence?: AllowedAsset`, `evidenceAltText?: string`.
- **Invariant**: `evidenceAltText`, when present, describes the achievement rather than transcribing decorative certificate text verbatim (FR-08).

## `ServiceEntryData`

- `title: string`, `description: string`.
- **Invariant**: no entry may describe an activity as clinical service or medical treatment (FR-09).

## `AllowedAsset`

- **Shape**: the *value produced by a Vite static asset import* (a resolved URL string at build time), never a raw filesystem path string typed by hand.
- **Purpose**: this is the type that `isAllowedAsset` checks membership of (Question 4, Option A) — comparing the imported reference itself, not a string path, so the allowlist stays correct even though Vite hashes/renames asset output paths.

## `AssetAllowlistEntry`

- `asset: AllowedAsset`, `sourceFileName: string` (for documentation/traceability only, e.g., `"HKISO2022silver.jpg"`), `description: string` (e.g., `"HKISO Silver Award certificate, 2022"`).

## Contact Change-Control Addendum

### `ContactChannelData`

- Extends `IdentifiedContent` with `kind: "email" | "phone"`, `label: string`, `value: string`, and `statusLabel: "Placeholder"`.
- It deliberately has no `href`, URI, action, submission, or enabled-state field; presentation code cannot turn these fictional values into working contact channels through the data contract.
- Initial records are exactly:
  - Email: `student.email@example.com`
  - Phone: `+84 XXX XXX XXX`

### `ContactSectionData`

- `statement: string` - the reflective closing statement.
- `channels: ContactChannelData[]` - the ordered fictional channel examples.
- `verificationNotice: string` - explicit surrounding copy explaining that the values are placeholders and verified channels will replace them later.
- **Invariant**: the initial array contains one email record and one phone record, each with the `Placeholder` status.
- **Invariant**: neither record may contain the CV-only values `testemail@gmail.com` or `123456789`, a former-owner value, or a URI scheme.

### `PortfolioContent` Revision

- Replace `closingStatement: string` with `contact: ContactSectionData`.
- All Contact copy remains in the typed content module; components receive data and do not embed student-editable values.
- The public asset types and allowlist are unchanged because Contact introduces no media or downloadable file.

## Testable Properties (PBT-01)

- **No PBT properties identified for the Unit 2 revision**: it adds immutable, exact static records and a pure accessor without a transformation, inverse, algorithm, or mutable state. Example tests are the meaningful verification for exact values, prohibited CV values, field completeness, and absence of action metadata.
- Round-trip, idempotence, commutativity, oracle, induction, and stateful categories are N/A for this revision.
- Generated component-rendering invariants for the same data are owned by Unit 4.
