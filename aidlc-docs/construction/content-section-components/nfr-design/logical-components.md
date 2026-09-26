# Unit 4: Content Section Components - Logical Components

Unit 4 uses first-party data, React, CSS, asset, and test modules only. It introduces no runtime infrastructure service.

## Medical content and allowlist layer

- **Responsibility**: own typed CV-derived records, stable IDs, editorial order, Vite asset imports, public metadata, and fixed allowlist membership.
- **Inputs**: approved claims and approved public assets from Units 1 and 2 plus the explicitly approved CV PDF.
- **Outputs**: typed section content, portrait metadata, optional evidence references, and the `DownloadAsset` used by the hero.
- **Controls**: no directory glob, raw component import, runtime path construction, or placeholder contact field.
- **Likely modules**: `src/data/medical/content.ts`, `src/data/medical/assetAllowlist.ts`, and their focused tests.

## Shared presentational-primitives layer

- **Responsibility**: provide `MedicalSection`, `ScoreCard`, `TimelineEntry`, `ResearchFeature`, `AwardItem`, and `ActivityCard` with consistent semantics and token-based styling.
- **Inputs**: focused typed props only.
- **Outputs**: accessible headings, lists, articles, fact labels, and optional allowlisted media.
- **Failure contract**: omit invalid optional media and empty optional groups while preserving verified text.
- **Likely modules**: a focused `src/components/medical/content/` directory and `medical-content.css`.

## Section-components layer

- **Responsibility**: compose verified content into `MedicalHero`, `CallingToMedicine`, `EducationJourney`, `AcademicExcellence`, `ScienceAndAwards`, `LeadershipAndService`, and `ClosingContact`.
- **Inputs**: section-owned slices from the medical content layer.
- **Outputs**: the existing eight-section DOM contract expected by `MedicalShell`; Gallery remains the Unit 5 staging boundary.
- **Rules**: preserve registry order and section IDs, render one page `h1`, render one visible `h2` for each other owned section, and keep all copy out of component literals.

## Application composition boundary

- **Responsibility**: replace Unit 3 staged bodies with Unit 4 section components without changing hash navigation, sticky offsets, active-section behavior, color mode, or the Gallery ownership boundary.
- **State**: none added by Unit 4.
- **Dependency direction**: application composition depends on section components; sections depend on primitives and content; content depends on approved asset imports. Lower layers never import higher layers.

## Static asset delivery boundary

- **Responsibility**: let Vite resolve the portrait and PDF to GitHub Pages-safe build URLs.
- **Download contract**: the browser receives the PDF only after activation of the native anchor with the stable download filename.
- **Image contract**: the portrait reserves layout space and loads eagerly; optional below-the-fold evidence reserves space and loads lazily.
- **Excluded components**: document viewer, PDF parser, fetch client, checksum service, CDN integration, and server endpoint.

## Test-support layer

- **Example tests**: validate heading hierarchy, exact critical facts, score/GPA context, portrait semantics, CV link attributes, WHO source precedence, research qualification, community wording, and placeholder-contact absence.
- **Property tests**: validate registry agreement, stable-ID exact-once rendering, allowlisted download shape, and forbidden-clinical-language invariants.
- **Generators**: reusable constrained medical section, asset, activity, recognition, and research arbitraries under `src/test/arbitraries/`.
- **Source and bundle checks**: validate token-only content CSS, focus and responsive rules, approved PDF inclusion, and prohibited-asset exclusion.

## Logical interaction sequence

1. Application composition requests the ordered typed portfolio content.
2. The content layer exposes only records and asset metadata admitted by the fixed allowlist.
3. Section components pass focused records to semantic presentation primitives.
4. Primitives render verified text and render media only when it has approved asset metadata.
5. Activating the native CV anchor asks the browser to download the Vite-resolved PDF with the approved stable filename.
6. Example, property, source, and bundle tests independently enforce the content and asset contracts.

## Scalability boundary

- Content growth within the portfolio is handled by adding valid typed records and allowing semantic grids/lists to wrap or collapse.
- Reconsider pagination or filtering only if content volume makes a single editorial page materially unusable; those features are not pre-built.
- No cache, global state store, queue, worker, database, CMS, analytics service, or remote API is justified for this unit.

## Extension Compliance

- **Security Baseline**: skipped because it is explicitly disabled.
- **Property-Based Testing**: logical ownership for domain generators and invariant tests is explicit; the current design introduces no inverse, idempotent, oracle-backed, or stateful operation. No blocking finding remains.
