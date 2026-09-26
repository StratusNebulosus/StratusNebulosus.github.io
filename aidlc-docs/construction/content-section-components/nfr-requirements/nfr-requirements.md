# Unit 4: Content Section Components - NFR Requirements

## Accessibility

- Target WCAG 2.2 AA-oriented behavior for headings, landmarks, text contrast, focus visibility, keyboard access, names/roles/states, and 200% text zoom.
- Each content section has one programmatically associated visible `h2`; the Overview uses the page's single visible `h1`.
- The primary hero anchor and CV download anchor must be keyboard operable, visibly focused, and at least 44 by 44 CSS pixels where practical.
- Score, GPA, timeline, award, research, and activity layouts must retain meaningful reading order without relying on position, color, or decorative numbering alone.
- Research methods and reported observations require explicit text labels so the distinction is perceivable without visual styling.
- Decorative medical marks and lines are hidden from assistive technology.
- The placeholder phone, email, and portfolio label inside the explicitly approved PDF must not appear in website text, accessible names, structured data, or active links.

## Responsive Design and Usability

- Support 320 CSS pixels through wide desktop layouts without horizontal page scrolling.
- Multi-column hero, timeline, score, research, recognition, and activity layouts collapse to a logical single-column order on narrow viewports.
- Long titles, institution names, scientific terms, and download labels wrap without clipping or forcing fixed-width cards.
- The hero portrait remains legible at mobile sizes and never displaces the identity/role below the initial reading order.
- Unit 4 must preserve Unit 3's sticky-navigation offset and section scroll targets.
- Light and dark modes use the same DOM structure and information hierarchy.

## Performance

- Add no runtime or development dependency for Unit 4.
- Implement sections with semantic React JSX and a dedicated static CSS file using Unit 1 custom properties.
- Import the portrait and approved PDF through Vite so GitHub Pages base-path rewriting and hashed output names remain correct.
- Render the above-the-fold portrait eagerly with an explicit aspect ratio or dimensions to reserve layout space; it is the only eager content image.
- Do not preload, fetch, parse, or checksum the PDF at runtime. Browser download starts only when the visitor activates the native anchor.
- Optional below-the-fold award evidence, when rendered in Unit 4, uses stable dimensions and `loading="lazy"`; Unit 5 owns full gallery loading behavior.
- Unit 4 must not materially worsen the existing JavaScript chunk advisory by introducing a new component framework, animation library, or client-side document processor.

## Reliability and Compatibility

- The CV action uses a native anchor with `download="bui-tuan-phat-cv.pdf"` and an allowlisted Vite asset URL; JavaScript is not required to synthesize or fetch the file.
- If a portrait, PDF, or optional evidence item is not allowlisted, the relevant media/action is omitted and tests fail; components never bypass the boundary.
- Missing optional evidence does not suppress the associated text recognition.
- Empty optional content groups do not render empty headings, cards, or separators.
- Preserve TypeScript strictness, ESLint, Vitest, Vite production build, current evergreen browsers, and GitHub Pages base-path compatibility.
- Direct plain-hash navigation and Unit 3 active-section behavior must continue after staged sections are replaced.

## Privacy and Content Integrity

- `bui-tuan-phat-cv.pdf` is the only raw document approved for public download in this unit.
- Add the PDF through one explicit import and one allowlist entry; no directory enumeration or direct component import is allowed.
- Extend example/property tests so the stable source filename, download filename, and allowlisted reference agree.
- Extend the final production-bundle sweep to confirm prohibited CV, identity, immigration, admission, score-report, transcript, and `dontuse` assets remain absent.
- Website copy must preserve WHO source precedence, distinguish student research observations from clinical claims, and describe fundraising/community support without claiming patient care.
- Security Baseline remains disabled; these constraints are independently approved product/privacy requirements.

## Maintainability

- Keep all CV-derived copy and metadata in typed data modules; components contain layout and semantic markup only.
- Use stable content IDs for React keys and test IDs rather than array indexes or display text.
- Use one shared `MedicalSection` primitive and focused primitives (`ScoreCard`, `TimelineEntry`, `ResearchFeature`, `AwardItem`, `ActivityCard`) to avoid duplicated section structure.
- Use Unit 1 named tokens only; no literal palette is introduced in Unit 4 CSS.
- Keep Unit 5 gallery behavior separate from Unit 4 content components.

## Testing and Verification

- Testing Library example tests cover page hierarchy, section headings, exact critical facts, native CV download attributes, portrait semantics, WHO wording, research attribution, community wording, and absence of placeholder contact values.
- Property tests cover section/registry agreement, exact-once rendering, allowlisted CV-action shape, and forbidden-clinical-language invariants using reusable domain-specific generators.
- Source-level CSS tests cover token-only color usage, focus-visible rules, responsive breakpoints, stable media sizing, and reduced-motion compatibility.
- A manual checklist at Build and Test covers 320-pixel layout, 200% zoom, keyboard order, focus visibility, light/dark reading, native PDF download, and common desktop/mobile browsers.
- `fast-check` shrinking and seed replay remain enabled through Vitest; property tests complement concrete source-fidelity examples.

## Availability and Scalability

- No unit-specific server availability, failover, throughput, or autoscaling requirement applies because the site is static and deployed through the existing GitHub Pages pipeline.
- Availability is inherited from GitHub Pages; content sections add no remote runtime dependency or API failure mode.

## Extension Compliance

| Rule | Result | Rationale |
|---|---|---|
| Security Baseline | Skipped | Explicitly disabled in active Extension Configuration. |
| PBT-09 | Compliant | `fast-check` 4.10.1 is already installed, supports domain generators, shrinking, seed replay, and Vitest integration. |
| Other PBT rules | N/A at this stage | PBT-01 is satisfied in Functional Design; PBT-02 through PBT-08 and PBT-10 are enforced during Code Generation where applicable. |

No blocking extension finding remains.
