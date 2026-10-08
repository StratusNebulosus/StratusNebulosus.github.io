# Stratus Visual Refresh — Requirements

## Intent and scope

User requests an AI-DLC visual revamp of StratusNebulosus matching the functionality and design polish of https://trannguyenvu-code.github.io/nguyenvu.github.io/. This is a moderate, multi-component enhancement of one existing React/TypeScript/Vite static medical-student portfolio.

Portfolio owner remains Bui Tuan Phat, Medical Student at Thai Nguyen University of Medicine and Pharmacy. No reference-owner facts, student metrics, channels, graphics implying measured data, or identity are substituted. Scope includes visual presentation and reference-equivalent display controls, while retaining current student content, evidence preview behavior, CV access, and email-draft interaction.

Requirements depth: Standard. Existing architecture/component inventory/technology stack and prior medical/privacy requirements reused; current workspace findings correct the inherited metadata root. Full reverse-engineering rerun is unnecessary because the eight-section medical architecture remains current.

## Validated decisions

- Scope question 1: A — preserve medical features and add two presentation styles, single-page/section views, and persistent style/layout/theme choices.
- Visual question 2: A — distinct medical editorial notebook, ink/teal/sage and ivory, with dark default and readable light mode.
- Security extension: B — disabled, consistent with existing project configuration.
- PBT extension: C — disabled, consistent with existing project configuration; existing property suites still run.
- User chat: "approve and continue"; question file contains explicit A/A answers. No ambiguity or conflicting answer remains.

This scope supersedes earlier product choices restricting the app to one presentation style or relying on the operating-system color default. Prior content/privacy/allowlist and email-draft boundaries remain applicable.

## Functional requirements

### SV-FR-01 — Student identity and content

Retain verified identity, academic records displayed as current summarized public facts, medicine pathway, science/research, awards, leadership/service, interests, approved portrait/evidence, and established contact details. All new presentation styles use the same typed source data. Do not invent medical credentials, outcomes, patient experience, scores, or newly publish sensitive records.

### SV-FR-02 — Visual design

Create a cohesive medical editorial notebook with generous spacing, a strong heading/body hierarchy, restrained borders, clear metrics, polished portrait/evidence framing, and ink/teal/sage accents. Ivory light surfaces remain warm and readable. Decorative medical/science motifs are illustrative and must not imply actual clinical measurements or personal health records.

### SV-FR-03 — Two presentation styles

Offer two clearly labeled medical presentation styles, provisionally Notebook and Casebook: one open editorial introduction/grid layout and one structured document/contents layout. Each exposes all eight current content sections and identical source facts/features. Make Notebook the first-visit style. Labels can be refined during design without changing this two-style requirement.

### SV-FR-04 — Single-page and section views

Default to the full single-page presentation. Offer a section view that renders the selected current section, with functioning navigation and hero/content actions. The mode selector is available at desktop and mobile sizes. The evidence preview context remains available in either view.

### SV-FR-05 — Hash navigation and history

Preserve current public anchors: overview, calling, education, academics, science, leadership, gallery, contact. Existing #section links continue to work in single-page mode; section-view routes use #/section so static hosting supports deep links. Direct links determine the appropriate layout; unknown/invalid routes recover to overview. Back/forward updates view/context. Hero, academic/evidence links, and next-section actions must navigate through the selected layout rather than scroll to unmounted content.

### SV-FR-06 — Preferences

Persist valid style/layout/color selections locally. Reload restores them; switching styles preserves the current section/layout/color. Missing/invalid/unavailable storage must not prevent rendering. A first visit without a valid saved color choice opens dark, regardless of OS preference. A saved light choice remains honored. Bootstrap and provider must agree to avoid a first-paint mismatch.

### SV-FR-07 — Responsive navigation

Retain active navigation, sticky shell, brand/home action, mobile drawer, and skip-to-content behavior. Controls have meaningful names and clear selected states. Mobile selection completes navigation and closes the drawer. Layout/style controls remain reachable when desktop contents/navigation are hidden.

### SV-FR-08 — Evidence previews

Retain allowlisted gallery items, award-to-evidence preview links, and the accessible shared dialog. Preserve caption/alt metadata, opening/closing, Escape, focus trapping/restoration, failed-image handling, and keyboard activation. A style/layout switch must safely reconcile any open preview; no stale selected item or stranded focus remains.

### SV-FR-09 — CV download

Both styles and layouts retain the approved student's CV download, its actual asset URL, PDF labeling, download filename, and accessible name. No private academic/identity report becomes a substitute public download.

### SV-FR-10 — Contact

Retain the established owner email and client-side email-draft composer. Preserve required name/reply-to/message validation, first-invalid-field focus, message limit/counter, and encoded draft contents. Describe opening an email draft accurately; no automatic send/backend or delivery claim is added.

### SV-FR-11 — Asset and production policy

Preserve the existing approved asset allowlist and production checks. Do not add references to private identity, immigration, full academic-record, address/candidate-number, or dontuse assets. New decorative visuals should be repo-native CSS/SVG unless a separately justified asset is approved. Retire conflicting presentation code/styles only after checking retained references.

### SV-FR-12 — Static compatibility

Retain the single static application, existing GitHub Pages base-path behavior, and current build/policy scripts. Root and repository-path builds must resolve public assets, CV, and hashes. No new backend or hosting provider is required.

## Non-functional requirements and acceptance

| ID | Requirement / verification |
| --- | --- |
| SV-NFR-01 | Responsive at 320, 390, 768, 1440px in both styles, both layouts, and both colors; no horizontal document overflow, clipped controls, or unreadable cards |
| SV-NFR-02 | Keyboard-operable controls; visible focus; semantic landmarks/headings; useful selected states; evidence focus behavior retained; section view navigation focuses its heading; skip link preserves route |
| SV-NFR-03 | Opaque text/action pairs pass at least 4.5:1; target 7:1 for light-theme primary/secondary reading text; essential control/focus indicators pass 3:1 against adjacent surfaces; actual rendered states reviewed |
| SV-NFR-04 | Honor reduced motion; no decorative animation needed to read or navigate; no new charting/animation dependency merely for visual motifs |
| SV-NFR-05 | Source fidelity and existing privacy/asset checks remain mandatory; content/data changes limited to accurate presentation copy required by new controls |
| SV-NFR-06 | Reuse existing React/Chakra/next-themes stack and shared data; avoid copied parallel content models; both styles must remain maintainable through the same section contracts |
| SV-NFR-07 | Preserve meaningful existing test suites, including property suites; update intentional single-style/system-default assumptions and add needed route/style/layout integration coverage |
| SV-NFR-08 | Run applicable tests, typecheck, lint, production build, and verify:dist; validate root/project base paths; record current bundle sizes without inventing performance percentages or scores |
| SV-NFR-09 | Compare browser screenshots with the reference's hierarchy/spacing/control polish, while retaining distinct medical styling; verify fresh/saved defaults, mobile menus, CV/contact, and evidence interaction |

## Acceptance scenarios

1. Fresh visitor: Notebook, full page, dark color; medical identity and clear CV/path actions are visible.
2. Saved visitor: valid style/layout/light choice restores; invalid or blocked storage falls back safely.
3. Reviewer in section view: selecting Science & Awards opens only science content; evidence still previews and returns focus after closing.
4. Reviewer switches style: current section/layout/color are preserved and the same facts/actions remain available.
5. Direct link: #education opens the full-page anchor; #/education opens section view; unknown hashes return to a valid overview view.
6. Mobile reviewer: drawer, selectors, CV, evidence controls, and form are usable without overflow at 320px; keyboard focus is clear.
7. Contact visitor: invalid fields focus the first error; valid fields open an encoded email draft addressed to the configured owner.
8. Maintainer: all applicable quality/public-bundle checks pass; source private files and unapproved assets remain outside production output.

## Out of scope

New student biography/facts, source-document rewriting, patient/clinical datasets, backend email delivery, analytics tracking, dependencies upgraded solely for freshness, unsolicited deployment, and publishing private evidence. Publication requires a later explicit user request. This stage produces requirements only, not application edits.

## Extension compliance

| Extension | Enabled | Stage status |
| --- | --- | --- |
| Security Baseline | No — answer B | N/A; full rules not loaded and enforcement skipped |
| Property-Based Testing | No — answer C | N/A; full rules not loaded and enforcement skipped; existing property suites retained |

Existing privacy/accessibility/correctness requirements remain binding independently of these extensions. No enabled-extension blocking findings.

## Next stage recommendation

User Stories should execute at concise depth because this introduces style/layout preference controls and affects multiple visitor interactions. Application/units/NFR stage decisions follow Workflow Planning after requirements/story approval; no infrastructure change is currently required.
