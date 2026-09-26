# Unit 2: Content Data & Asset Allowlist - NFR Requirements

## Security / Privacy (dominant NFR for this unit)

- **Threat model**: accidental exposure by a future maintainer, not a malicious external actor — this is a static site with no user input, authentication, or backend (Question 1, Option A). The Security Baseline extension remains disabled, but the FR-15 privacy-safe asset boundary is a separately-approved product requirement and remains fully enforced.
- **Mitigation**: a build/test-time guard (an example-based test, per NFR-06) scans source files for direct imports from `src/assets/CV/` outside `content.ts`/`assetAllowlist.ts`, and fails if found. No runtime access control is required or applicable.
- Production build output must never contain a prohibited or unreviewed CV source file (NFR-08, Acceptance Criteria 17) — verified at Build and Test via the asset-boundary regression sweep (Unit 6).

## Performance

- No new image-optimization requirement is introduced by this unit; Vite's default static-asset handling (content hashing, cache-friendly URLs) is sufficient at this unit's scope (Question 2, Option A). Responsive image sizing and lazy-loading are Unit 5's (Evidence Gallery) NFR responsibility.

## Maintainability

- The allowlist must be auditable by reading `assetAllowlist.ts` top to bottom: every entry is a plain object literal with `sourceFileName` and `description`, with no computed, conditional, or derived entries (Question 3, Option A) — a reviewer never needs to execute code to know what is publicly exposed.
- `content.ts` and `assetAllowlist.ts` each hold a single, flat responsibility (content data vs. allowlist), consistent with NFR-04's coherent-module preference.

## Reliability

- `isAllowedAsset` and `getPortfolioContent` are pure functions with no I/O; they cannot fail at runtime in a way that blocks rendering (consistent with NFR-05).

## Testing

- Example-based test enforcing BR-1 (no direct `src/assets/CV/` import outside the two designated modules).
- Example-based test enforcing BR-2 (the allowlist contains exactly the 13 approved assets, by source filename, and explicitly does not contain `IOGTVN.jpg`, `donation.jpg`, `dontuse.jpg`, `dontuse(1).jpg`, or any identity/immigration/transcript file).
- Property-based test (`fast-check`) for BR-4 (no `TimelineEntryData`/`ScoreEntryData`/narrative field matches a date-of-birth-like or identifier-like pattern) — a documentation-strength heuristic check, not a full data-loss-prevention scanner.
- Example-based test confirming `PortfolioContent` traces every award/timeline/service entry back to the Verified Public Content Baseline (BR-3).

## Tech Stack

- No new dependency: plain TypeScript modules and Vite's built-in static asset import handling, consistent with the existing `src/data/*.ts` pattern (Question 4, Option A).
