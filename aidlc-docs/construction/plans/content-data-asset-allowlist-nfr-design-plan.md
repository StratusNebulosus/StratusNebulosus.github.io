# Unit 2: Content Data & Asset Allowlist - NFR Design Plan

## Context

NFR requirements (`aidlc-docs/construction/content-data-asset-allowlist/nfr-requirements/`) center on the accidental-exposure threat model, single-file auditability, and a test-time guard rather than runtime/lint enforcement. This plan defines the concrete pattern for that guard and for structuring the allowlist file itself.

## Planning Checklist

- [x] Analyze Unit 2 NFR requirements.
- [x] Generate context-appropriate questions.
- [x] Collect answers.
- [x] Analyze answers for ambiguity/contradiction. All three answers selected the recommended option (A); no ambiguity, contradiction, or follow-up needed.
- [x] Record explicit approval.

## Generation Checklist

- [x] Generate `nfr-design-patterns.md`.
- [x] Generate `logical-components.md`.

## Planning Questions

### Question 1: Privacy-guard test scanning pattern

A) The guard test reads every `.ts`/`.tsx` file under `src/` (excluding `content.ts`, `assetAllowlist.ts`, and test files themselves) as text via `node:fs`, and asserts none contain the substring `assets/CV/`, mirroring the existing `themeAccessibility.test.ts` file-reading pattern (recommended)
B) The guard test uses a full TypeScript AST parse to detect import specifiers rather than a text substring scan
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2: Allowlist file internal structure

A) `assetAllowlist.ts` is organized as a single flat array literal, one `AssetAllowlistEntry` object per line group, in the same order as the BR-2 table (profile portrait first, then awards grouped by theme) — no helper functions build entries programmatically, so the file is visually diffable in code review (recommended)
B) `assetAllowlist.ts` builds entries via a small factory function to reduce repetition
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3: Content-to-allowlist cross-check pattern

A) A dedicated test asserts every `evidence`/`portrait` asset referenced anywhere in `content.ts` also appears in `getAllowlistedAssets()` — this is the concrete mechanism that guarantees BR-1/BR-2 hold even as `content.ts` evolves (recommended)
B) Rely on manual code review only to keep `content.ts` and `assetAllowlist.ts` in sync
X) Other (please describe after [Answer]: tag below)

[Answer]: A
