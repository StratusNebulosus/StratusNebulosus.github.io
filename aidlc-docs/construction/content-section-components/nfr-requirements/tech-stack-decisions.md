# Unit 4: Content Section Components - Technology Stack Decisions

## Semantic React and Dedicated CSS

- **Decision**: Build Unit 4 with React 19 semantic JSX and a colocated `medical-content.css` file.
- **Rationale**: The sections are predominantly static, typed content. Native elements preserve semantics and keep the editorial layout precise without adding Chakra-generated layout styles or another runtime abstraction.
- **Boundary**: Existing Chakra-based shell controls remain unchanged; Unit 4 does not rewrite Unit 3 navigation.

## Existing Medical Token System

- **Decision**: Use the Unit 1 CSS custom properties for every color, font, and motion value.
- **Rationale**: Preserves accessible light/dark parity and keeps the approved clinical-humanities identity coherent.
- **Rejected**: New literal palette, component-local theme object, Tailwind-only restyling.

## Vite Static Asset Imports

- **Decision**: Import `profile_pic.jpg` and `bui-tuan-phat-cv.pdf` through typed content/allowlist modules using Vite's native asset handling.
- **Rationale**: Produces GitHub Pages-safe hashed URLs and keeps the public/private boundary auditable.
- **Loading**: Portrait is eager with reserved dimensions; PDF uses a native download anchor and is not preloaded.
- **Rejected**: Runtime fetch/blob creation, public-directory bypass, dynamic asset glob, runtime checksum.

## Accessibility Verification

- **Decision**: Continue with `@testing-library/react`, `@testing-library/jest-dom`, Vitest source-level CSS checks, and a Build-and-Test manual checklist.
- **Rationale**: Covers semantics, interaction contracts, styling safeguards, and real-browser behaviors without adding a dependency.
- **Rejected**: Adding `axe-core` in this unit; automated scanning may be reconsidered in Unit 6 if explicitly approved.

## Property-Based Testing

- **Decision**: Retain `fast-check` 4.10.1 integrated with Vitest.
- **Rationale**: It already provides custom arbitraries, shrinking, replayable seeds, and CI-compatible execution for the properties identified in Functional Design.
- **Generator boundary**: Reusable medical content arbitraries live under `src/test/arbitraries/`; example and property tests remain visibly distinct.

## No New Runtime Services

- **Decision**: No backend, CMS, document service, analytics, runtime API, authentication, or external content request.
- **Rationale**: Maintains static GitHub Pages reliability, privacy, and zero-secret deployment.

## Build and Compatibility

- **Decision**: Preserve TypeScript, ESLint, Vitest, Vite, and the current GitHub Pages workflow without configuration changes.
- **Verification commands**: `npx tsc -b`, `npm run lint`, `npm test`, `npm run build`.
