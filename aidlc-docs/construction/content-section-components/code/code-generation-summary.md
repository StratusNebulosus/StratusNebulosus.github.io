# Unit 4: Content Section Components - Code Generation Summary

## Outcome

Unit 4 replaces every non-gallery staging body with a polished, responsive medical-student profile for Bui Tuan Phat. The implementation draws on the initial portfolio's approachable actions and content cards and the sibling portfolio's calm editorial pacing, strong hierarchy, restrained rules, and generous whitespace. The result uses the approved warm clinical-humanities token system rather than either reference's former identity.

## Created Application Files

- `src/components/medical/content/MedicalSection.tsx`
- `src/components/medical/content/ContentPrimitives.tsx`
- `src/components/medical/content/MedicalHero.tsx`
- `src/components/medical/content/CallingToMedicine.tsx`
- `src/components/medical/content/EducationJourney.tsx`
- `src/components/medical/content/AcademicExcellence.tsx`
- `src/components/medical/content/ScienceAndAwards.tsx`
- `src/components/medical/content/LeadershipAndService.tsx`
- `src/components/medical/content/ClosingContact.tsx`
- `src/components/medical/content/index.ts`
- `src/components/medical/content/medical-content.css`
- `src/components/medical/content/MedicalContent.test.tsx`
- `src/components/medical/content/MedicalContent.property.test.tsx`
- `src/components/medical/content/medicalContentStyles.test.ts`
- `src/test/arbitraries/medicalContent.ts`
- `src/assets/documents/bui-tuan-phat-cv.pdf`

## Modified Application Files

- `src/types/medicalPortfolio.ts`: added stable-ID, download, GPA, scholarship, research, activity, and interest contracts.
- `src/data/medical/assetAllowlist.ts`: added the one explicitly approved downloadable document.
- `src/data/medical/content.ts`: expanded the verified CV-derived content and pure selectors.
- Medical data tests: added exact-fact, download-alignment, placeholder-isolation, privacy, and domain-property safeguards.
- `src/App.tsx`: composed the seven final Unit 4 sections while retaining the Unit 5 Gallery staging boundary.
- `src/App.test.tsx`: retargeted integration checks to the completed non-gallery experience.
- `src/components/medical/medical-shell.css`: removed temporary staging styles and retained the root/shell boundary.

## Removed Legacy Files

- `src/App.css`
- `src/components/About.tsx`
- `src/components/Awards.tsx`
- `src/components/Contact.tsx`
- `src/components/Education.tsx`
- `src/components/Experience.tsx`
- `src/components/Hero.tsx`
- `src/components/Projects.tsx`
- `src/components/Skills.tsx`

These files were unreferenced after the new section composition. `src/components/Gallery.tsx` remains for Unit 5 ownership.

## Content and Source Decisions

- The Overview identifies Bui Tuan Phat as a Medical Student at Thai Nguyen University of Medicine and Pharmacy and provides an allowlisted native CV download.
- Education includes Wellspring's 2023-2026 American Dual Course, the current Medicine program, and Grade 10-12 GPA values of 9.38, 9.4, and 9.4 on a ten-point scale.
- Academics distinguishes current SAT 1500, IELTS 8.0, and AP results from the VND 14,000,000 historical scholarship basis.
- Science includes the Innoverse nanomaterials-in-medicine student project with methods and project-reported observations explicitly separated.
- Recognition includes HKISO, Chemistry, and Science and Passion results.
- Leadership and service include IOGT-VN training, Wellspring Hunger Games, WIS Conference using verified WHO precedence, fundraising and 100-gift donation support, Tram & Cham, Happy Run, Origami, and Piano.
- Community wording does not claim treatment or direct clinical care. Research wording does not claim clinical effectiveness or professional publication.

## CV and Privacy Boundary

- Source: `src/assets/documents/bui-tuan-phat-cv.pdf`
- Stable download filename: `bui-tuan-phat-cv.pdf`
- SHA-256: `1cebc0b51ad17b0e00eda5aa4fcc923089bd32e14f4f93950f1bdd494ea10a38`
- The built PDF has the same checksum and is byte-identical to the supplied/copy source.
- The visible placeholder phone and email remain only inside the explicitly approved PDF bytes; they are absent from website data, source behavior, accessible names, HTML, JavaScript, and CSS.
- Production inspection found no prohibited identity, immigration, transcript, score-report, report-card, admission, or `dontuse` asset.

## Verification Evidence

- `npx tsc -b`: passed.
- `npm run lint`: passed.
- `npm test`: 19 files passed, 75 tests passed.
- `npm run build`: passed; Vite transformed 1,403 modules and emitted the expected hashed CV asset.
- `git diff --check`: passed.
- Legacy-import and duplicate-file scans: passed.
- Runtime-fetch and dependency review: no Unit 4 runtime fetch and no new dependency.
- Build advisory: the existing main JavaScript chunk remains above Vite's 500 kB advisory threshold; Unit 4 added no framework or document-processing dependency.

## Property-Based Testing Compliance

| Rule | Result | Evidence |
|---|---|---|
| PBT-01 | Compliant | Functional Design properties were carried into data and component tests. |
| PBT-02 | N/A | No inverse transformation exists. |
| PBT-03 | Compliant | Stable-ID, section-registry, download-shape, research-language, and community-language invariants are exercised. |
| PBT-04 | N/A | No idempotent operation exists. |
| PBT-05 | N/A | No optimized/reference algorithm pair exists. |
| PBT-06 | N/A | Unit 4 adds no mutable domain state machine. |
| PBT-07 | Compliant | Reusable constrained medical-domain generators live in `src/test/arbitraries/medicalContent.ts`. |
| PBT-08 | Compliant | `fast-check` shrinking and failure-seed replay remain enabled through the normal Vitest suite. |
| PBT-09 | Compliant | `fast-check` 4.10.1 remains installed and integrated with Vitest. |
| PBT-10 | Compliant | Separate example, property, source-style, and app-integration tests cover critical paths. |

Security Baseline was skipped because it is explicitly disabled. No blocking enabled-extension finding remains.

## Deferred Boundary

The Gallery section intentionally remains a polished staging body. Unit 5 owns its evidence items, modal behavior, keyboard focus management, and gallery-specific loading tests.

## Contact and Shared Header Change-Control Addendum - 2026-09-20

- Modified `ClosingContact.tsx` to consume structured Contact data and render two semantic, non-focusable cards with visible labels, plain-text values, and `Placeholder` status.
- Modified `App.tsx` to pass `content.contact`; no link, form, handler, `mailto:`, or `tel:` behavior was introduced.
- Modified `medical-content.css` so shared desktop content sections use `minmax(12rem, 28fr) minmax(0, 72fr)`, the shared desktop `h2` cap is `4rem`, and the single-column/narrow-mobile caps reduce to `3.5rem` and `2.85rem`.
- Added token-based Contact card styling with a one-column mobile layout and preserved the hero's separate `h1` scale.
- Expanded example tests for exact Contact values, status copy, non-interactivity, and CSS contracts.
- Expanded domain arbitraries and property tests for exact-count Contact rendering, universal non-interactivity, and the one-heading/one-body `MedicalSection` invariant.
- Integrated verification: 32 test files and 130 tests passed normally and with seed `20260920`; both production base-path forms passed with the expected asset inventory. The existing Vite main-chunk advisory remains non-blocking and no dependency was added.

## Section Heading Declutter Refinement Addendum - 2026-09-21

- Modified `src/components/medical/content/medical-content.css` so every shared non-hero `h2` uses `clamp(2.25rem, 3.25vw, 3rem)` on desktop, `clamp(2.15rem, 5vw, 2.5rem)` at the existing `62rem` single-column breakpoint, and `clamp(1.9rem, 8vw, 2.1rem)` at the existing `30rem` narrow-mobile breakpoint.
- Preserved the separate medical hero `h1` scale, 28/72 desktop grid, sticky behavior, theme tokens, Contact styling, and reduced-motion rules.
- Modified `src/components/medical/content/ClosingContact.tsx` so the visible level-two Closing title is `Looking ahead`; the section identity, eyebrow, content, placeholders, semantics, and navigation anchor are unchanged.
- Updated focused CSS-source and component regression assertions. Two focused files and 10 tests passed.
- No type, interface, data, asset, dependency, runtime request, privacy boundary, or deployment artifact changed.
- No new randomized property is meaningful for fixed CSS constants or a fixed title string. Existing fast-check suites, shrinking, and deterministic seed replay remain required in the separate Build and Test stage.
- Security Baseline remains explicitly disabled. No blocking enabled-extension finding exists.
