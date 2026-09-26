# Medical Student Portfolio Revamp - Unit of Work Story Map

Each story maps to exactly one primary unit, based on its dominant component/requirement (Question 4, Option A), even where a story also touches shared services delivered by an earlier unit.

| Story | Title | Primary Unit |
|---|---|---|
| 1 | Recognize the student's medical identity immediately | Unit 4: Content Section Components (`MedicalHero`) |
| 2 | See a unified medical design with no leftover engineering/business identity | Unit 3: Navigation & Layout Shell (`MedicalShell`, removal of template selector) |
| 3 | Navigate confidently across devices and input methods | Unit 3: Navigation & Layout Shell (`MedicalNav`) |
| 4 | Understand the student's calling to medicine | Unit 4: Content Section Components (`CallingToMedicine`) |
| 5 | Follow the education journey from high school to medical school | Unit 4: Content Section Components (`EducationJourney`) |
| 6 | Review verified academic scores with confidence | Unit 4: Content Section Components (`AcademicExcellence`) |
| 7 | Explore science and award recognition grouped for scanability | Unit 4: Content Section Components (`ScienceAndAwards`) |
| 8 | See leadership and service framed accurately | Unit 4: Content Section Components (`LeadershipAndService`) |
| 9 | Browse an accessible evidence gallery without encountering private records | Unit 5: Evidence Gallery (`EvidenceGallery`, `GalleryItem`, `GalleryModal`) |
| 10 | Read comfortably in light or dark medical theme | Unit 1: Design Tokens & Theming |
| 11 | Use the site with reduced motion and adaptive layout | Unit 1: Design Tokens & Theming (reduced-motion/responsive token and layout behavior) |
| 12 | Keep private and prohibited assets out of the public build | Unit 2: Content Data & Asset Allowlist (`assetAllowlist`) |
| 13 | Maintain content through typed, decoupled data modules | Unit 2: Content Data & Asset Allowlist (`content`) |
| 14 | Trust example-based and property-based tests to catch regressions | Unit 6: Testing & Documentation (cross-cutting regression/property coverage) |
| 15 | Keep documentation aligned with the medical portfolio | Unit 6: Testing & Documentation (repository documentation) |
| 16 | Preserve reliable static GitHub Pages delivery | Unit 6: Testing & Documentation (final build/deployment verification) |
| 17 | Understand that contact channels are placeholders | Unit 4: Content Section Components (`ClosingContact`) |

## Coverage Check

- All 17 stories from `aidlc-docs/inception/user-stories/stories.md` are assigned to exactly one unit.
- All 6 units in `unit-of-work.md` have at least one mapped story:
  - Unit 1: Stories 10, 11
  - Unit 2: Stories 12, 13
  - Unit 3: Stories 2, 3
  - Unit 4: Stories 1, 4, 5, 6, 7, 8, 17
  - Unit 5: Story 9
  - Unit 6: Stories 14, 15, 16
