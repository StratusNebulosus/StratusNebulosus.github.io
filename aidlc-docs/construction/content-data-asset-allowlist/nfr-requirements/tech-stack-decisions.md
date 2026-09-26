# Unit 2: Content Data & Asset Allowlist - Tech Stack Decisions

## Decision: No new production dependency

- **Choice**: Plain TypeScript modules (`content.ts`, `assetAllowlist.ts`) using Vite's native static asset import mechanism (`import x from "../assets/CV/file.jpg"`), matching every existing file in `src/data/` (Question 4, Option A).
- **Rationale**: The existing codebase already handles all its imagery this way (see `src/data/gallery.ts`, `src/data/certificates.ts`); introducing an asset-management library or CMS would add operational complexity (build steps, external service dependency) disproportionate to a single static portfolio site, and would conflict with NFR-08's "no new runtime network dependency" constraint.
- **Consequence**: Adding a new public asset is always a two-line change (one `import`, one allowlist entry), not a configuration file or external tool interaction.

## Decision: Privacy guard as a test, not a lint rule

- **Choice**: The BR-1 "no direct `src/assets/CV/` import outside `content.ts`/`assetAllowlist.ts`" guard is implemented as a Vitest example-based test (reading source files with Node's `fs`, similar to the existing `src/themeAccessibility.test.ts` pattern that reads `.css` source directly) rather than a custom ESLint rule.
- **Rationale**: A custom ESLint rule would require an ESLint plugin/rule-authoring dependency and configuration; a Vitest file-content test achieves the same guarantee using tooling and a pattern already present in this codebase, and it runs in the same `npm test`/CI step as every other check (NFR-06).

## Confirmed Testing Stack (no new addition beyond Unit 1's already-approved `fast-check`)

- **`fast-check`**: used for the BR-4 private-field-pattern property test.
- **Vitest**: hosts both the file-content BR-1 guard test and the BR-2/BR-3 example-based tests.
