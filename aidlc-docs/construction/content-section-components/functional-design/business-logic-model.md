# Unit 4: Content Section Components - Business Logic Model

## Content Flow

1. `content.ts` exposes typed CV-derived content and approved existing medical-pathway content.
2. `App` replaces each Unit 3 staged body with its corresponding section component while preserving section IDs.
3. Each section reads only its owned content slice and maps typed records to presentational primitives.
4. `MedicalHero` validates portrait and CV asset membership through `isAllowedAsset` before rendering image/download actions.
5. `ScienceAndAwards` validates optional evidence assets before passing them to `AwardItem`; the research feature itself uses text data only.
6. Unit 5 later replaces the Gallery staging body without changing the Unit 4 composition contract.

## Pure Selectors

### `getHeroContent()`

Returns hero identity, positioning, highlights, portrait, and CV download metadata. If either asset is not allowlisted, the corresponding visual/download control is omitted rather than bypassing the boundary.

### `getEducationJourney()`

Returns Wellspring and medical-program milestones plus the ordered Grade 10-12 GPA series. It never reads raw transcript/report assets.

### `getAcademicCredentials()`

Returns current SAT, IELTS, AP, and scholarship entries with explicit type/context labels.

### `getResearchProjects()`

Returns the Innoverse project with separate `methods` and `reportedObservations` arrays. The selector performs no scientific inference or clinical interpretation.

### `getScienceRecognitions()`

Returns HKISO, Chemistry, and Science and Passion entries grouped chronologically or by theme. WIS Conference is excluded from this selector and owned by Leadership.

### `getLeadershipAndActivities()`

Returns IOGT-VN, Wellspring Hunger Games, WIS Conference, fundraising/donation support, Tram & Cham, Happy Run, and interests. The WIS entry uses WHO committee per BR-4.

## Rendering Rules

- Array order is the editorial order; components do not sort by parsing human-readable period strings.
- Keys use stable content IDs introduced during code generation, not array indexes.
- Decorative labels are `aria-hidden`; facts remain real text.
- Every section has one visible `h2` connected to its section landmark.
- Cards remain presentational articles/list items; no click interaction is added unless the element is a real link or button.
- The download action uses the native anchor/download behavior, with no JavaScript-generated blob or runtime network request.

## Failure Handling

- Missing optional evidence: render the text recognition without an empty image shell.
- Non-allowlisted portrait/CV/evidence: omit the media/action and surface a failing test; never render the raw candidate.
- Empty optional list: omit its subsection heading rather than rendering a blank card group.
- Missing or malformed Contact data: treat it as a content-contract failure in tests; the component does not invent replacement values. The approved fictional placeholder records are intentional presentation content, not a runtime fallback.

## Test Strategy

- Example tests pin the medical identity, exact current scores, GPA series, CV filename, WHO conflict resolution, research attribution, and careful community wording.
- Property tests use domain-specific generators for section records and verify exact-once rendering, stable section ownership, allowlisted CV action shape, and forbidden-clinical-language invariants.
- PBT complements rather than replaces the concrete source-fidelity examples.

## Contact and Shared Header Change-Control Addendum

### `getContactContent()` Consumption

`PortfolioApp` reads `content.contact` and passes it unchanged to `ClosingContact`. The component maps `channels` in editorial order and performs no parsing, normalization, URI construction, or action generation.

### Contact Rendering Flow

1. Render the existing Contact section landmark and associated heading through `MedicalSection`.
2. Render the reflective statement as the primary closing message.
3. Render `channels` as a semantic list of visually card-like, non-focusable records.
4. Within each record, render the channel label, plain-text value, and visible placeholder status.
5. Render `verificationNotice` after the list so the fictional/non-active state is explicit in surrounding copy.
6. Expose no interaction state, event handler, form state, or navigation target.

### Shared Section Hierarchy Flow

1. At desktop widths, `MedicalSection` presents the header and body in the existing two-column source order with approximately 28% and 72% shares.
2. The desktop heading uses fluid sizing with a hard maximum near `4rem`.
3. At the existing single-column breakpoint, the rail becomes static, the grid collapses to one column, the gap contracts, and the heading cap decreases.
4. At narrow mobile widths, the heading cap and surrounding spacing decrease again while text remains readable and body content retains full width.

### Verification Strategy

- Example tests pin the exact two website placeholders, labels, status copy, lack of interactive elements, prohibited CV/former-owner values, 28/72 CSS rule, heading caps, and responsive overrides.
- Property tests generate structurally valid Contact data to verify exact-once rendering and universal non-interactivity.
- Property tests also generate safe section titles/body copy to verify that `MedicalSection` preserves its one-heading/one-body structure.
- Declarative CSS constants use source-level and browser-layout examples instead of artificial randomized arithmetic that would not exercise browser behavior.
