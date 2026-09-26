# Unit 5: Evidence Gallery - Technology Stack Decisions

## Chakra Dialog Primitives

- **Decision**: Use the already-installed Chakra UI 3 Dialog primitives for the modal shell, backdrop, contained focus, Escape dismissal, background suppression, and focus restoration integration.
- **Rationale**: The repository already relies on Chakra overlay primitives in `MedicalNav`; using the same maintained accessibility mechanism avoids custom focus-trap code and adds no dependency.
- **Ownership boundary**: `EvidenceGallery` owns selected-item state; Chakra owns dialog mechanics; pure gallery state functions remain independently testable.
- **Rejected**: custom focus trap and native-dialog compatibility layer.

## React 19 and Semantic HTML

- **Decision**: Use React 19 state/refs with semantic buttons, headings, lists/articles, figures, and textual captions.
- **Rationale**: Native card activation behavior and explicit semantics reduce custom keyboard logic while preserving the approved component architecture.
- **Rejected**: clickable `div` cards or a global state store.

## Vite Static Image Imports

- **Decision**: Reuse the existing explicit Vite-imported allowlist values for all thumbnail and modal sources.
- **Rationale**: Maintains GitHub Pages base-path rewriting, hashed outputs, and the audited public/private boundary.
- **Loading policy**: native `loading="lazy"`, `decoding="async"`, stable geometry, same URL in thumbnail and modal.
- **Rejected**: dynamic globs, runtime fetch, CDN, responsive-image generator, duplicate preview imports, and client-side transforms.

## Token-Based CSS Grid

- **Decision**: Extend the medical visual system with a dedicated/focused token-based gallery stylesheet or colocated gallery rules.
- **Rationale**: Provides precise one/two/three-column layout, editorial card styling, `cover`/`contain` media behavior, and light/dark parity without a masonry or carousel package.
- **Rejected**: horizontal-scroll rail, fixed three-column layout, JS layout engine, literal palette.

## Existing Verification Stack

- **Decision**: Use Testing Library, Vitest, source-level file assertions, `fast-check` 4.10.1, and production-bundle inspection.
- **Rationale**: Covers DOM/accessibility contracts, dialog integration, pure state transitions, styling safeguards, and public asset output without introducing tooling.
- **Property testing**: domain-specific gallery record and command generators, automatic shrinking, and replayable failure seeds remain enabled.
- **Rejected for this unit**: new automated accessibility scanner, screenshot-diff package, or image snapshot service.

## No Runtime Services or Persistence

- **Decision**: No backend, CMS, database, analytics, remote image API, worker, cache, authentication, or runtime secret.
- **Rationale**: The gallery is a bounded static portfolio feature and must preserve the current GitHub Pages delivery model.

## Build and Compatibility

- **Decision**: Preserve TypeScript strict mode, ESLint, Vitest/jsdom, Vite, the current GitHub Pages workflow, and current evergreen browser support.
- **Verification commands**: `npx tsc -b`, `npm run lint`, `npm test`, `npm run build`.
