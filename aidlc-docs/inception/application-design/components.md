# Application Design - Components

Approach: one component per content area plus shared presentational primitives (Question 1, Option A).

## Shell and Orchestration

### `App` (retained, simplified)

- **Purpose**: Top-level orchestration retained from the existing foundation.
- **Responsibilities**: Owns browser hash state, active-section tracking, color-mode state/persistence, and renders `MedicalShell`. No longer owns template selection or layout-mode state (both removed per FR-01/FR-03/FR-14).

### `MedicalShell`

- **Purpose**: Single unified page shell replacing `EngineeringShell`/`BusinessShell`.
- **Responsibilities**: Renders the skip link, `MedicalNav`, and the eight content-area components in approved order; applies medical design tokens at the root; has no knowledge of any retired template.

### `MedicalNav`

- **Purpose**: Sticky desktop navigation and accessible compact mobile navigation, replacing `Navbar` and removing `PortfolioStyleSelector`.
- **Responsibilities**: Renders links to every enabled section, indicates the active section (including `aria-current`), hosts the color-mode control, and exposes a mobile menu toggle.

## Content-Area Components (FR-04 through FR-11)

### `MedicalHero`

- **Purpose**: Overview hero (FR-04).
- **Responsibilities**: Renders name, role, positioning statement, `profile_pic.jpg` portrait, concise highlight tags (Medicine, Science, Leadership, Service), and a secondary action downloading the explicitly approved public CV.

### `CallingToMedicine`

- **Purpose**: Reflective narrative section (FR-05).
- **Responsibilities**: Renders narrative copy distinguishing aspiration from verified experience.

### `EducationJourney`

- **Purpose**: Education timeline (FR-06).
- **Responsibilities**: Renders the Wellspring American Dual course, Grade 10-12 GPA progression, high-school completion, and the current Medicine program using `TimelineEntry` primitives; excludes private identifiers.

### `AcademicExcellence`

- **Purpose**: Score presentation (FR-07).
- **Responsibilities**: Renders SAT, IELTS, AP results, and the Wellspring Merit Scholarship using `ScoreCard` and recognition primitives.

### `ScienceAndAwards`

- **Purpose**: Science/award recognition (FR-08).
- **Responsibilities**: Features the Innoverse 2026 student research project and groups HKISO, Chemistry, and Science and Passion recognitions using `ResearchFeature` and `AwardItem` primitives; renders selected certificate imagery with descriptive alt text.

### `LeadershipAndService`

- **Purpose**: Leadership and service activities (FR-09).
- **Responsibilities**: Renders WHO committee participation, IOGT-VN training, Wellspring Hunger Games, fundraising/donation support, Tram & Cham, Happy Run, and interests using careful, non-clinical language.

### `EvidenceGallery`

- **Purpose**: Accessible evidence gallery (FR-10).
- **Responsibilities**: Renders `GalleryItem` primitives sourced only from the asset allowlist; opens `GalleryModal` for expanded preview; lazy-loads non-critical images with reserved dimensions.

### `ClosingContact`

- **Purpose**: Closing/contact section (FR-11).
- **Responsibilities**: Renders the non-interactive closing statement; contains no direct contact detail until verified information is supplied.

## Shared Presentational Primitives

### `ScoreCard`

- **Purpose**: Compact, accessible display of a single verified score or credential.

### `AwardItem`

- **Purpose**: Compact display of a single award/recognition, optionally with certificate imagery and descriptive alt text.

### `TimelineEntry`

- **Purpose**: Single entry in an education/journey timeline.

### `ResearchFeature`

- **Purpose**: Structured presentation of the Innoverse 2026 question, student method, and CV-reported observations without clinical-effectiveness claims.

### `GalleryItem`

- **Purpose**: Single keyboard-operable gallery thumbnail with meaningful alt text; triggers `GalleryModal` on activation.

### `GalleryModal`

- **Purpose**: Reusable modal/expanded-preview component (Question 4, Option A).
- **Responsibilities**: Owns Escape handling, focus containment, a visible close control, and focus restoration to the triggering `GalleryItem` on close.

## Removed Components

- `EngineeringShell`, `BusinessShell`, `PortfolioStyleSelector`, `Navbar` (engineering-specific), `Hero`, `BusinessHero`, `About`, `Experience`, `Projects`, `BusinessProjects`, `Journal`, `JournalPostPage`, `Skills` — replaced by the components above or removed outright per FR-01 and FR-14.
- `Gallery` and `Awards` are superseded by `EvidenceGallery`/`GalleryItem`/`GalleryModal` and `ScienceAndAwards`/`AwardItem` respectively; `Education` is superseded by `EducationJourney`/`TimelineEntry`.
