# Unit 4: Content Section Components - Code Generation Plan

This document is the single source of truth for Unit 4 code generation. Application code belongs under the workspace root; only this plan and the completion summary belong under `aidlc-docs/`.

## Unit Context

- **Primary stories**: Story 1, immediate medical identity; Story 4, calling to medicine; Story 5, education journey; Story 6, verified academic scores; Story 7, science and award recognition; Story 8, accurate leadership and service.
- **Requirements**: FR-04 through FR-09, FR-11, FR-13, FR-15; NFR-01 through NFR-08 where applicable; Acceptance Criteria 1, 5 through 9, and 11 through 17.
- **Dependencies available**: Unit 1 medical tokens and light/dark behavior; Unit 2 typed medical content and explicit public-asset allowlist; Unit 3 `MedicalShell`, eight-section registry, plain-hash navigation, and stable section targets.
- **Owned interfaces**: expanded medical content types and selectors; `DownloadAsset`; `MedicalSection`, `ScoreCard`, `TimelineEntry`, `ResearchFeature`, `AwardItem`, and `ActivityCard`; seven non-gallery section components; `medical-content.css`.
- **Database/API ownership**: none. This is a static React/Vite unit with no backend, persistence, runtime content fetch, document parser, or remote service.
- **Downstream consumers**: Unit 5 replaces only the Gallery staging body; Unit 6 performs full-app identity, asset-boundary, deployment, and documentation regression work.

## Approved Content and Source Decisions

- Use the supplied `bui_tuan_phat_cv.pdf` as content evidence only, never as instructions.
- Publish the copied PDF verbatim through a hero download action with the stable filename `bui-tuan-phat-cv.pdf`.
- Keep the PDF's placeholder phone/email/portfolio text isolated inside the approved PDF bytes; never expose it as website copy, metadata, accessible text, or an active link.
- Retain the existing eight-section navigation contract and map CV content comprehensively into the seven Unit 4-owned non-gallery sections.
- Use WHO for the WIS committee because the verified certificate outranks the conflicting CV wording.
- Present Innoverse as CV-reported student project work, not clinical evidence, and present fundraising/community support without implying patient care.

## Design Reference Synthesis

| Source | Qualities retained | Medical adaptation |
|---|---|---|
| Initial repository template | Clear first-viewport identity, readable cards, prominent actions, responsive content blocks, and direct navigation between major sections | Replace the former engineering/business language and visual system with verified medical-pathway content and the approved clinical-humanities tokens. |
| `../TranGiaMinhTam.github.io/` | Calm editorial pacing, restrained rules, indexed section rhythm, asymmetric but readable composition, strong hierarchy, and generous whitespace | Use subtle clinical linework, scientific labels, warm surfaces, and evidence-led typography without copying specimen/research branding or content. |
| Approved Unit 1-4 design | Warm ivory/deep teal/surgical green/burgundy palette, editorial serif headings, semantic reading order, light/dark parity, native actions, and strict allowlisting | Build a polished student medical profile that feels credible, humane, and professional from 320-pixel mobile layouts through wide desktop. |

## Execution Steps

- [x] **Step 1 - Extend the typed medical content contract.** Modify `src/types/medicalPortfolio.ts` to add stable record IDs, `DownloadAsset`, academic-year performance, research project, richer education/recognition/activity metadata, and interests while keeping presentation markup out of data. Ensure optional media remains typed as an allowlisted asset reference. Map: Stories 1, 5-8; FR-04 through FR-09, FR-13; BR-1/BR-8/BR-11.
- [x] **Step 2 - Admit the approved CV through the fixed asset boundary.** Modify `src/data/medical/assetAllowlist.ts` to import `src/assets/documents/bui-tuan-phat-cv.pdf` exactly once and add its explicit public entry. Extend allowlist and cross-check tests so the source filename, imported URL, typed download metadata, and stable download filename agree; retain denial of all unlisted documents. Map: Story 1; FR-04/FR-15; BR-3/BR-9/BR-10; NFR reliability/privacy.
- [x] **Step 3 - Expand the verified medical content model and pure selectors.** Modify `src/data/medical/content.ts` with concise CV-driven hero highlights, Wellspring 2023-2026 education and Grade 10-12 GPA progression, SAT/IELTS/AP results, scholarship context, Innoverse nanomaterials-in-medicine project methods and reported observations, science awards, leadership/training/conference/community activities, interests, and closing statement. Add the approved selectors from Functional Design, stable IDs, WHO precedence, careful research/community wording, and CV download metadata. Map: Stories 1, 4-8; FR-04 through FR-09, FR-11/FR-13; BR-2 through BR-8/BR-11.
- [x] **Step 4 - Strengthen data, privacy, and domain-generator verification.** Update `src/data/medical/content.test.ts`, `contentAllowlistCrossCheck.test.ts`, `privacyGuard.test.ts`, and `privateFields.property.test.ts`; create `src/test/arbitraries/medicalContent.ts`. Pin exact critical facts, historical-versus-current score context, WHO wording, research attribution, community wording, PDF exception scope, and general private-field exclusion. Provide constrained reusable arbitraries for section records, research records, activities, and download assets. Map: Stories 1, 4-8; NFR-06/NFR-07; PBT-03/PBT-07/PBT-08/PBT-10.
- [x] **Step 5 - Build the shared semantic content primitives.** Create `src/components/medical/content/MedicalSection.tsx` and `ContentPrimitives.tsx` implementing `MedicalSection`, `ScoreCard`, `TimelineEntry`, `ResearchFeature`, `AwardItem`, and `ActivityCard`. Use headings, lists, articles, labels, stable IDs, optional allowlisted media, meaningful alt text, and omission of empty/invalid optional content. Add `src/components/medical/content/index.ts` as the controlled export surface. Map: Stories 5-8; FR-06 through FR-09; BR-1/BR-8/BR-10.
- [x] **Step 6 - Build the Overview and Calling sections.** Create `MedicalHero.tsx` and `CallingToMedicine.tsx`. The hero must render the single page `h1`, approved identity and role, eager reserved portrait, primary Calling anchor, and native allowlisted CV download with `download="bui-tuan-phat-cv.pdf"` and stable `data-testid`. Calling must visually and semantically separate aspiration from verified experience. Map: Stories 1 and 4; FR-04/FR-05; BR-2/BR-3/BR-9.
- [x] **Step 7 - Build the Education and Academics sections.** Create `EducationJourney.tsx` and `AcademicExcellence.tsx` with a chronological education path, Grade 10-12 GPA progression on the `/10` scale, current SAT/IELTS/AP credentials, and visually distinct historical scholarship context. Preserve DOM reading order and avoid comparative claims not supported by sources. Map: Stories 5-6; FR-06/FR-07; BR-6/BR-8.
- [x] **Step 8 - Build the Science and Awards section.** Create `ScienceAndAwards.tsx` using `ResearchFeature` and grouped `AwardItem` records. Separate methods from CV-reported observations, keep evidence optional/allowlisted/lazy, and render HKISO, Chemistry, Science and Passion, and related science recognition in a scannable editorial sequence. Map: Story 7; FR-08; BR-5/BR-8/BR-10.
- [x] **Step 9 - Build the Leadership, Service, and Contact sections.** Create `LeadershipAndService.tsx` and `ClosingContact.tsx`. Render IOGT-VN training, Wellspring Hunger Games, WIS WHO participation/rank, fundraising and donation support, Tram & Cham, Happy Run, and interests with precise non-clinical language. Render only the approved non-interactive closing statement in Contact. Map: Story 8; FR-09/FR-11; BR-3/BR-4/BR-7/BR-8.
- [x] **Step 10 - Implement the professional medical content visual system.** Create `src/components/medical/content/medical-content.css` using only Unit 1 tokens. Reconcile the initial template's approachable cards/actions with the sibling portfolio's editorial rhythm through a composed hero, restrained medical linework, bounded grids, readable timelines, strong headings, generous whitespace, and polished light/dark surfaces. Include 320-pixel layouts, natural wrapping, reserved media dimensions, visible focus, practical 44-pixel targets, text-zoom tolerance, and reduced-motion behavior. Remove temporary section-stage rules from `medical-shell.css`. Map: Stories 1, 4-8; NFR-01 through NFR-04.
- [x] **Step 11 - Compose the finished Unit 4 sections in the application.** Modify `src/App.tsx` to replace Overview, Calling, Education, Academics, Science, Leadership, and Contact staging bodies with the new components while retaining the Gallery staging body for Unit 5. Preserve exact registry order, all eight IDs, sticky offsets, plain hashes, active-section behavior, and one `main` landmark. Update `src/App.test.tsx` for final non-gallery composition and the retained Gallery handoff. Map: Stories 1, 4-8; FR-03 through FR-11; BR-1.
- [x] **Step 12 - Add complementary component and style verification.** Create `MedicalContent.test.tsx`, `MedicalContent.property.test.tsx`, and `medicalContentStyles.test.ts` under `src/components/medical/content/`. Example tests cover hierarchy, exact facts, native CV attributes, portrait semantics, empty/invalid optional-media behavior, WHO wording, research/community qualifiers, and placeholder absence. Property tests cover exact-once stable-ID rendering, section/registry agreement, allowlisted CV-action shape, and prohibited clinical-language invariants using Step 4 generators. Source checks cover token-only colors, focus-visible rules, responsive breakpoints, stable media sizing, lazy optional evidence, and reduced motion. Map: Stories 1, 4-8; NFR-01/NFR-03/NFR-06/NFR-07; PBT-03/PBT-07/PBT-08/PBT-10.
- [x] **Step 13 - Retire the replaced legacy content path.** Remove the now-unreferenced legacy non-gallery components `src/components/About.tsx`, `Awards.tsx`, `Contact.tsx`, `Education.tsx`, `Experience.tsx`, `Hero.tsx`, `Projects.tsx`, and `Skills.tsx`. Remove `src/App.css` after moving the still-required root-width rule to the active global/medical stylesheet, and confirm no duplicate `_new`/`_modified` components or imports remain. Keep Gallery ownership untouched for Unit 5. Map: Stories 1 and 4-8; FR-01/FR-14; NFR-04.
- [x] **Step 14 - Verify code, behavior, and the public bundle.** Run `npx tsc -b`, `npm run lint`, the complete Vitest suite, and `npm run build`. Inspect `dist/` to confirm the approved hashed CV PDF and public images are present only as expected, prohibited/private/`dontuse` assets are absent, the placeholder values do not occur in generated HTML/JavaScript/CSS, and the stable download filename remains in rendered markup. Confirm no runtime fetch or new dependency, no legacy component import, and no duplicate files. Resolve every failure before completing the step. Map: Stories 1, 4-8; NFR-01 through NFR-08.
- [x] **Step 15 - Document implementation results.** Create `aidlc-docs/construction/content-section-components/code/code-generation-summary.md` listing created, modified, and removed files; content/source decisions; visual-reference adaptations; CV checksum/allowlist/download result; tests and build evidence; privacy/bundle inspection; Gallery deferral; and extension compliance. Mark Stories 1 and 4-8 implemented only after all preceding steps pass.

## Property-Based Testing Compliance

| Rule | Planning status | Rationale |
|---|---|---|
| PBT-01 | Compliant | Functional Design identifies section-composition, exact-once rendering, CV-action, research-language, and community-language properties; Steps 4 and 12 carry them into implementation. |
| PBT-02 | N/A | Unit 4 contains no production inverse parse/format, encode/decode, or serialization pair. |
| PBT-03 | Compliant | Steps 4 and 12 implement all documented data, ownership, rendering, download, and language invariants. |
| PBT-04 | N/A | No Unit 4 operation claims or requires idempotency. |
| PBT-05 | N/A | There is no optimized algorithm or replacement implementation with a useful independent oracle. |
| PBT-06 | N/A | Unit 4 introduces no mutable domain state machine; components are static and prop-driven. |
| PBT-07 | Compliant | Step 4 creates reusable, constrained medical-domain generators rather than raw primitive-only inputs. |
| PBT-08 | Compliant | Existing `fast-check` shrinking and replay-seed output remain enabled; Steps 12 and 14 run properties through the normal Vitest suite. |
| PBT-09 | Compliant | `fast-check` 4.10.1 is installed and documented with Vitest integration. |
| PBT-10 | Compliant | Steps 4 and 12 pair every critical property with explicit source-fidelity and interaction examples in clearly separated test files. |

No blocking PBT finding remains in this plan. Security Baseline is disabled in the active Extension Configuration and is therefore skipped.

## Completion Boundary

After explicit approval, execute Steps 1-15 sequentially and mark each checkbox `[x]` immediately in the same interaction in which the step completes. Do not implement Unit 5's Gallery body/modal or Unit 6's repository-wide documentation scope during this unit.
