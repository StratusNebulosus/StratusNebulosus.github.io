# Unit 2: Content Data & Asset Allowlist - NFR Design Patterns

## Pattern 1: Text-scan privacy guard test

- **Applies to**: BR-1, the accidental-exposure threat model.
- **Pattern**: A Vitest test reads every `.ts`/`.tsx` file under `src/` (via `node:fs`, glob-style directory walk), excluding `src/data/medical/content.ts`, `src/data/medical/assetAllowlist.ts`, and any `*.test.ts`/`*.property.test.ts` file, and asserts none of them contain the substring `assets/CV/`. This mirrors the existing `src/themeAccessibility.test.ts` pattern of reading source files as text rather than requiring a custom lint rule or AST tooling.
- **Failure mode**: if a future component imports directly from `src/assets/CV/`, this test fails with the offending file path in its assertion message.

## Pattern 2: Flat, diffable allowlist literal

- **Applies to**: Maintainability requirement (single-file auditability).
- **Pattern**: `assetAllowlist.ts` exports `ALLOWED_ASSETS: AssetAllowlistEntry[]` as one literal array, ordered exactly as BR-2's table (portrait, then HKISO awards, then WIS Conference, then Science and Passion, then Chemistry/project/event certificates). No factory function, loop, or conditional constructs entries — every entry is a plain `{ asset, sourceFileName, description }` object, so a code review diff shows exactly what changed.

## Pattern 3: Content-to-allowlist cross-check test

- **Applies to**: Keeping BR-1/BR-2 true as `content.ts` evolves.
- **Pattern**: A Vitest test collects every `AllowedAsset` reference reachable from `getPortfolioContent()` (the hero portrait, every `AwardEntryData.evidence`) and asserts each one is present (by value equality of the resolved import) in `getAllowlistedAssets()`. This is the automated enforcement that a future content edit cannot introduce an image that bypasses the allowlist, closing the loop left open by relying on code review alone.

## Explicitly Not Applicable

- No resilience, scalability, or runtime-security patterns (retry, circuit breaker, authN/authZ, encryption) apply — static, build-time-only module with no backend or user input.
