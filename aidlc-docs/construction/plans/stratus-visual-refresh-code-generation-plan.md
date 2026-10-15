# Stratus Visual Refresh — Code Generation Plan

## Status and single source of truth

NFR Design review B explicitly approved in chat: "approve and continue". This plan is the single source of truth for Code Generation of the stratus-visual-refresh unit. Part 1 preparation is complete; Part 2 approved in chat: "approve and continue"; execute the entire numbered sequence below. Application code belongs in /Users/nhamhhung/StratusNebulosus.github.io, using the existing src structure, never in aidlc-docs. Files that already exist are modified in place; no *_new or *_modified copies.

## Unit context and dependencies

One brownfield React/TypeScript/Vite application implements all nine SV-US stories and all twelve SV-Q quality checks. Unit decomposition and Functional/Infrastructure Design were skipped in the approved execution plan. Approved requirements, stories/personas, Application Design components/methods/services/dependencies, and NFR Requirements/Design supply the contracts. Historical reverse-engineering counts/worktree notes are checked against current source rather than treated as current facts.

No other unit, backend/API, database entity/migration, repository service, new runtime library or hosting change is required. Browser adapters use existing history/hash/localStorage and Chakra/next-themes. Existing content.ts/gallery.ts/assetAllowlist.ts and approved CV are authoritative. Default Notebook/full-page/dark, explicit route precedence and saved-light support are approved changes; previous single-style/system-default restrictions are superseded.

Expected interfaces: validated MedicalStyleId/MedicalLayoutMode; one display/layout owner; layout-aware href/navigation callbacks; shared section registry; stable evidence selection/failure context; validated color bridge; ordered overlay-close/navigation focus. The exact component contracts are recorded in the approved component-methods.md and logical-components.md.

## Part 1 — preparation progress

- [x] Read unit context, approved story/requirement mappings, application/NFR artifacts and code-generation rules.
- [x] Verify state/workspace, brownfield code structure, existing source/test paths and affected contracts.
- [x] Determine generation boundaries and dependencies; mark backend/API/database/infrastructure work N/A.
- [x] Create sequential file-level steps with implementation, meaningful test and documentation coverage.
- [x] Validate Markdown, paths, all story/quality coverage and privacy/code-location consistency before creation.
- [x] Generate review questions, summarize scope, update state and append approval prompt/audit.
- [x] Receive explicit approval covering this entire plan — user: "approve and continue".

## Part 2 — numbered execution steps

### Step 1 — Establish baseline and inspect full affected source

- [x] Confirm current git status/diff and preserve unrelated user edits/history; load full source/artifacts for the next steps, checking existence before changes.
- [x] Use locked dependencies (npm ci if needed) without dependency upgrades; check Node compatibility against the lockfile/engines. Run baseline npm run quality, npm run build and npm run verify:dist, recording any pre-existing failures separately.
- [x] Record baseline JS/CSS/assets and gzip sizes with root base settings; retain a comparable inventory and representative current browser view under /private/tmp/stratus-visual-refresh/ when browser tooling is available.

Paths inspected: package.json, package-lock.json, src/main.tsx, src/App.tsx, src/components/medical/, src/theme/, src/hooks/, src/utils/, src/test/, README.md, DEPLOYMENT.md, vite.config.ts, scripts/production-build-policy.mjs, scripts/verify-production-build.mjs. Do not change lockfile or weaken gates to make a baseline pass.

Coverage: SV-US-09; SV-Q-08, SV-Q-10, SV-Q-11.

### Step 2 — Add validated presentation metadata and preferences

- [x] Create src/data/medical/presentation.ts for Notebook/Casebook metadata and shared MedicalStyleId/MedicalLayoutMode types; no student facts copied.
- [x] Create src/utils/medicalDisplayPreferences.ts and src/hooks/useMedicalDisplayPreferences.ts with independent validation/defaults, guarded medical-style/medical-layout reads/writes and usable live state after persistence failure.
- [x] Create src/utils/medicalDisplayPreferences.test.ts and src/hooks/useMedicalDisplayPreferences.test.tsx for defaults, valid/invalid values, independent normalization and denied reads/writes.

Coverage: SV-US-02, SV-US-04; SV-Q-05, SV-Q-11.

### Step 3 — Implement paired theme tokens and reliable dark defaults

- [x] Modify src/theme/tokens.ts with the approved ink/ivory/teal/sage palette, stronger essential border token, matched names and readable full-opacity secondary text; retain established accent names.
- [x] Modify src/theme/resolveColorModePreference.ts, src/theme/colorModeBootstrap.ts, src/components/ui/color-mode.tsx, src/components/ui/color-mode-utils.ts and src/main.tsx/provider wiring as required to use valid saved light/dark or product dark default regardless of OS.
- [x] Add src/components/ui/ColorModeSynchronizer.tsx to reconcile validated root classes/data-color-mode/color-scheme with provider state before paint, including corrupt theme values when storage correction fails; maintain one live color owner.
- [x] Update src/theme/resolveColorModePreference.test.ts and src/theme/contrastValidation.property.test.ts; add src/theme/colorModeBootstrap.test.ts and src/components/ui/ColorModeSynchronizer.test.tsx for fresh/saved/invalid/blocked cases and ordinary control toggles. Preserve src/theme/tokens.property.test.ts coverage.

Retain generated-token mechanism in src/theme/generateThemeCss.ts and injectThemeCss.ts, modifying only if necessary for consistent scope. Update obsolete system-default source markers/tests/comments coherently. No arbitrary unknown-theme cast or surviving light fallback.

Coverage: SV-US-01, SV-US-04, SV-US-08; SV-Q-02, SV-Q-05, SV-Q-11.

### Step 4 — Implement route/history and focus contracts

- [x] Create src/utils/medicalNavigation.ts and src/utils/medicalNavigation.test.ts for known section IDs, #section/#/section hrefs, route precedence and invalid-route recovery.
- [x] Extend src/hooks/useMedicalLayout.ts and its existing .test.ts/.property.test.ts for effective layout, active section, single history actions and external history/hash adoption. Passive full-page scrolling updates selection only; section mode uses the route.
- [x] Create src/utils/medicalFocus.ts for latest-intent focus/scroll coordination, connected heading/main fallback and cancellable requests; add src/utils/medicalFocus.test.ts for recovery/cancellation rather than duplicating CSS behavior.
- [x] Modify src/utils/scroll.ts for reduced-motion-safe scrolling and enable/disable full-page tracking appropriately; preserve listener cleanup under StrictMode.

Keep legacy anchors operational and direct-route layout authoritative over saved layout. Layout switch preserves the scroll-active section; style change preserves route/layout/color. Overlay close ordering is integrated in Step 8.

Coverage: SV-US-03, SV-US-04, SV-US-08; SV-Q-03, SV-Q-06, SV-Q-07, SV-Q-11.

### Step 5 — Compose stable shared sections and layout-aware links

- [x] Create src/components/medical/MedicalNavigationContext.tsx for the narrow shared navigation contract, src/components/medical/MedicalSectionLink.tsx for real hrefs and standard unmodified-click handling, and src/components/medical/MedicalSectionRenderer.tsx for the eight stable registry entries.
- [x] Modify src/App.tsx to combine preferences/navigation/style, retain the evidence provider above view-dependent shell/content and render all sections or only the selected registry entry with stable keys.
- [x] Modify src/components/medical/content/MedicalHero.tsx to use layout-aware academic/path links; modify MedicalSection.tsx and Hero heading focus targets. Preserve source facts, existing test IDs, evidence buttons and CV props.
- [x] Add src/components/medical/MedicalSectionLink.test.tsx for ordinary/modified click behavior and src/components/medical/MedicalSectionRenderer.test.tsx for full-page/selected composition and stable shared facts.

Do not key-remount App/provider on style changes. A mounted contact form retains values when only style changes; no new draft persistence across section unmounts is introduced.

Coverage: SV-US-01, SV-US-02, SV-US-03, SV-US-05, SV-US-09; SV-Q-03, SV-Q-06, SV-Q-08, SV-Q-11.

### Step 6 — Build responsive shell, controls and Casebook contents

- [x] Create src/components/medical/MedicalDisplayControls.tsx with named native style/layout selectors and stable medical-display-style/medical-display-layout test IDs; selected values are visible and keyboard-operable.
- [x] Modify src/components/medical/MedicalShell.tsx and MedicalNav.tsx for style/layout callbacks, root variant attributes, a usable sticky band, Casebook desktop contents, shared mobile drawer and approved global CV action.
- [x] Modify src/components/medical/medical-shell.css for the approved wide Notebook/reading Casebook layouts, wrapping control row, strong outlined controls, visible focus and responsive thresholds. Keep one coherent primary navigation presentation and meaningful landmarks.
- [x] Update src/components/medical/MedicalShell.test.tsx and add MedicalDisplayControls.test.tsx for selected controls, callbacks, skip-without-route mutation and CV reachability. Preserve existing stable navigation test IDs.

At 320px controls wrap without clipping; desktop sidebar/navigation collapse according to available width. Skip action focuses main without modifying route. Drawer cancel returns trigger focus; committed navigation will complete heading focus through Step 8 coordination.

Coverage: SV-US-02, SV-US-03, SV-US-06, SV-US-08; SV-Q-01, SV-Q-02, SV-Q-03, SV-Q-08, SV-Q-12.

### Step 7 — Revamp both medical presentations and content styling

- [x] Modify src/components/medical/content/medical-content.css for distinct Notebook open-editorial and Casebook structured-document compositions: cover, portrait framing, academic summaries, chapter headings, timelines, research/awards, leadership/interests and contact surfaces.
- [x] Modify content/MedicalHero.tsx, ContentPrimitives.tsx, CallingToMedicine.tsx, EducationJourney.tsx, AcademicExcellence.tsx, ScienceAndAwards.tsx and LeadershipAndService.tsx only where markup needs semantic/readable layout refinement; retain all verified typed facts and approved assets.
- [x] Implement restrained repo-native decoration in CSS or inline SVG with aria-hidden semantics. Avoid new raster assets, animation libraries and fabricated clinical graphics.
- [x] Update relevant MedicalContent.test.tsx, MedicalContent.property.test.tsx and medicalContentStyles.test.ts assertions to cover retained meaning and deliberate style changes; remove obsolete visual-contract assumptions without deleting meaningful data/evidence checks.

Approved palette/typography/spacing and approximately 65-character reading measure guide both variants; labels and captions use readable full-opacity tokens. Headings wrap naturally and image frames fit their containers.

Coverage: SV-US-01, SV-US-02, SV-US-08, SV-US-09; SV-Q-01, SV-Q-02, SV-Q-08, SV-Q-10, SV-Q-11, SV-Q-12.

### Step 8 — Integrate evidence previews and ordered focus transitions

- [x] Modify src/components/medical/gallery/EvidencePreviewProvider.tsx to reconcile explicit style/layout/route transitions with a stable lifetime, preserve failed-item state and restore only connected/enabled origins or a mounted heading/main.
- [x] Modify GalleryModal.tsx, MedicalNav.tsx and app/controller focus coordination for close-completion ordering; committed navigation finishes after overlay focus restoration. Cancel obsolete pending targets and exclude passive scroll changes from dialog reconciliation.
- [x] Restyle src/components/medical/gallery/medical-gallery.css and adjust EvidenceGallery.tsx/GalleryItem.tsx where needed for both styles, readable portal captions/errors, responsive cards/dialog, and semantic focus targets.
- [x] Update gallery/EvidenceGallery.test.tsx, GalleryItem.test.tsx, GalleryItem.property.test.tsx and medicalGalleryStyles.test.ts as applicable; add EvidencePreviewProvider.test.tsx for stale origin/view changes, ordinary close, image failure and retained controller state.

Retain the allowlist, metadata, evidence utilities/property suites, Escape and focus trap. View changes must not leave hidden dialog state or stranded focus. Ordinary error/close remains usable in either layout.

Coverage: SV-US-03, SV-US-05, SV-US-08; SV-Q-01, SV-Q-02, SV-Q-03, SV-Q-04, SV-Q-11.

### Step 9 — Verify retained contact/CV and actual reduced-motion behavior

- [x] Refine src/components/medical/content/ClosingContact.tsx and medical-content.css for readable fields/errors/actions while preserving required checks, first-invalid focus, 5000-character counter/limit, configured recipient and encoded email draft.
- [x] Confirm Hero/shell/drawer approved PDF links use the same allowlisted asset, useful name and download filename in either layout. Keep src/data/medical/content.ts and assetAllowlist.ts authoritative.
- [x] Apply reduced-motion suppression in medical-shell.css, medical-content.css and medical-gallery.css; verify src/theme/applyReducedMotion.ts and scroll consumption agree. Update existing motion/contact tests only for relevant behavioral changes.

No email sender, persistent form data, contact substitution or private source download. Existing src/utils/contact.ts/contact.test.ts behavior remains meaningful and required.

Coverage: SV-US-06, SV-US-07, SV-US-08; SV-Q-02, SV-Q-03, SV-Q-07, SV-Q-08, SV-Q-09.

### Step 10 — Retire conflicting styling and check the public graph

- [x] Modify src/index.css to remove conflicting inherited blue-tech page surfaces/font imports where not used by the medical app; establish coherent medical root/body backgrounds and typography. Do not mask overflow findings with blanket overflow-x hiding.
- [x] Search imports/classes/references before removing obsolete presentation code/styles; limit cleanup to refresh-owned conflicts. Preserve all eight current sections, allowlisted images/CV, private source documents and unrelated history. Record any scoped deletion with its reference evidence.
- [x] Review src/test/productionGraph.test.ts, productionBuildPolicy tests and existing medical data/allowlist/privacy suites; retain strict exact public-asset graph validation. No weakening of scripts/production-build-policy.mjs or verify-production-build.mjs.

No broad legacy module cleanup, repository reset or source-document deletion is needed for this approved refresh. All new application files must be in src, without duplicate *_new/*_modified versions.

Coverage: SV-US-01, SV-US-09; SV-Q-08, SV-Q-10, SV-Q-11.

### Step 11 — Complete integration and concrete verification

- [x] Update src/App.test.tsx, src/test/medicalPortfolioRegression.test.tsx and src/themeAccessibility.test.ts for both styles/layouts, context preservation, fresh/saved themes, deep links/history, evidence and contact/CV. Preserve existing source/privacy/property coverage.
- [x] Run focused affected tests while integrating; repair implementation failures. Run final npm run quality, root npm run build and npm run verify:dist. Build with VITE_BASE_PATH=/StratusNebulosus.github.io/ and verify using matching EXPECTED_BASE_PATH; confirm real asset/CV URLs in both outputs.
- [x] Review all 32 style/layout/color/width configurations at 320/390/768/1440px for measured overflow and usable controls. Verify fresh-light-OS dark default, saved light, bad/denied storage, back/forward/direct routes, scroll-to-section switching, drawer/skip/keyboard/evidence focus, reduced motion and contact/CV actions.
- [x] Calculate actual rendered reading/action/focus pairs including overlays and state styling; fix contrast/findings. Capture representative desktop/mobile screenshots for Notebook/Casebook and light/dark plus selected-section examples under /private/tmp/stratus-visual-refresh/.
- [x] Record comparable final JS/CSS/assets and gzip sizes against Step 1, actual command/browser results, retained warnings and material limitations; review git diff and whitespace. Do not claim unpublished deployment or invented performance gains.

Use available local browser automation/tooling without adding runtime dependencies. Repair findings within the approved step scope and rerun affected checks. Reuse passing results at Build and Test unless new changes/failures justify rerunning; the later mandatory documentation/review gate remains separate.

Coverage: SV-US-01 through SV-US-09; SV-Q-01 through SV-Q-12.

### Step 12 — Documentation, traceability and generated-code review

- [x] Update README.md and DEPLOYMENT.md with Notebook/Casebook, full-page/section routes, preference keys/defaults, shared content ownership, accessibility/verification and current approved asset guidance; keep existing hosting/quality instructions accurate.
- [x] Update src/test/documentationContract.test.ts to replace obsolete no-two-styles/count assertions with accurate current contracts while retaining identity, public/private, contact and release-gate checks.
- [x] Generate aidlc-docs/construction/stratus-visual-refresh/code/code-generation-summary.md with created/modified/deleted files, story/quality coverage, actual test/browser/bundle evidence and links to screenshots. This code documentation folder contains Markdown summaries only.
- [x] Mark each completed numbered step/substep and implemented story immediately in this plan; update state/audit, preserve history and present the standardized generated-code review before Build and Test.

No deployment artifact changes are needed: existing workflow/static hosting suffice, and publishing has not been requested. No push/commit/deploy is included in this plan. Later Build and Test generates its instruction/summary documents using the verified results.

Coverage: SV-US-09; all story acceptance/quality evidence consolidated.

## Story completion tracking (Part 2 only)

- [x] SV-US-01 — medical identity and polished introduction (Steps 3, 5, 7, 10, 11).
- [x] SV-US-02 — two styles and context preservation (Steps 2, 5, 6, 7, 11).
- [x] SV-US-03 — full-page/section routes/history/navigation (Steps 4, 5, 6, 8, 11).
- [x] SV-US-04 — validated saved choices/dark default (Steps 2, 3, 4, 11).
- [x] SV-US-05 — approved accessible evidence (Steps 5, 8, 11).
- [x] SV-US-06 — real approved CV access (Steps 6, 9, 11).
- [x] SV-US-07 — existing validated email draft (Steps 9, 11).
- [x] SV-US-08 — responsive/readable/keyboard/reduced-motion use (Steps 3, 4, 6, 7, 8, 9, 11).
- [x] SV-US-09 — shared facts/privacy/static-build maintainability (Steps 1, 5, 7, 10, 11, 12).

All twelve quality requirements are referenced by the step coverage and consolidated Step 11. Do not mark a story finished until its implementation and applicable verification are complete.

## Execution discipline and scope

Load full code/context for each next step, validate new content before creation and update its checkboxes in the same interaction as completion. Follow this dependency sequence; if a material architectural/scope change is needed, update the plan and obtain the relevant review rather than silently diverging. Routine refinements necessary to satisfy listed contracts are part of their steps.

Estimated scope: twelve coordinated frontend implementation/verification/documentation steps over several working hours, with runtime failures and browser findings determining the actual duration. All numbered implementation steps now have recorded source and verification evidence in code/code-generation-summary.md. Generated-code approval remains pending.
## Extension compliance

Security Baseline: N/A — disabled B. Property-Based Testing: N/A — disabled C. Full rules not loaded; enforcement skipped. Existing public-asset/privacy policy and meaningful property suites remain mandatory independently. No enabled-extension blocking findings.

## Owner Revision — Bright Medical Light Theme (2026-10-10)

- [x] Replace cream/olive light colors with bright white, pale blue, navy, teal, and rose while retaining accessible contrast.
- [x] Apply sleek light surfaces, subtle elevation, and coordinated accents to the header, hero, section backgrounds, cards, contact form, and gallery in Notebook and Casebook.
- [x] Verify theme contrast, focused tests, production build, and desktop/mobile previews in both styles; reconcile review records.

## Owner Revision — Reference Green Palette (2026-10-10)

- [x] Match the supplied live reference main green and coordinate light text, backgrounds, and borders across both styles.
- [x] Verify accessible contrast, focused tests, build, and responsive browser rendering; update review records.

## Owner Revision — Contact Alignment (2026-10-11)

- [x] Align the contact statement above the form with readable body typography and natural full-width wrapping.
- [x] Verify both styles at desktop/mobile widths and production build; update review records.

## Owner Revision — INNOVERSE Video (2026-10-15)

- [x] Add the supplied video to the relevant research project with responsive accessible playback and a direct link.
- [x] Verify content tests, production build, and responsive rendering; record results.

## Owner Revision — University of Debrecen (2026-10-16)

- [x] Update current university and education copy, supporting documentation and identity checks.
- [x] Verify relevant content/identity regressions and build; record results.
