# Unit 2: Content Data & Asset Allowlist - NFR Requirements Plan

## Context

This unit is the FR-15 privacy-boundary enforcement point. Relevant NFR categories: security/privacy (the dominant concern for this unit, despite the Security Baseline extension being disabled — this is a separately-approved product requirement, not the extension), performance (image bundle size), maintainability (allowlist auditability), reliability (build-time guarantees), testing (NFR-06/NFR-07 coverage for the allowlist).

## Planning Checklist

- [x] Analyze Unit 2 functional design artifacts.
- [x] Generate context-appropriate questions.
- [x] Collect answers.
- [x] Analyze answers for ambiguity/contradiction. All four answers selected the recommended option (A); no ambiguity, contradiction, or follow-up needed.
- [x] Record explicit approval.

## Generation Checklist

- [x] Generate `nfr-requirements.md`.
- [x] Generate `tech-stack-decisions.md`.

## Planning Questions

### Question 1: Privacy threat model for this unit

A) The threat model is accidental exposure by a future maintainer (e.g., someone adding a new `<img src={...}>` importing directly from `src/assets/CV/` without going through `assetAllowlist.ts`), not a malicious external actor — since this is a static site with no user input or backend. Mitigation is a build-time/test-time guard (a lint rule or test scanning for direct `src/assets/CV/` imports outside `content.ts`/`assetAllowlist.ts`), not runtime access control (recommended)
B) Treat this as a full security threat model requiring runtime access control, even though the Security Baseline extension is disabled
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2: Image performance requirement

A) All allowlisted images must be served at reasonable web-optimized dimensions/compression; Vite's default asset handling (hashing, content-addressed caching) is sufficient for this static site's scale, and no additional image-optimization pipeline (e.g., responsive `srcset` generation) is required for this unit — that decision is deferred to Unit 5 (Evidence Gallery), which owns lazy-loading and layout-shift NFRs (recommended)
B) This unit must itself define and implement an image-optimization/responsive-image pipeline
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3: Allowlist auditability requirement

A) The allowlist must be auditable by reading a single file (`assetAllowlist.ts`) top to bottom — every entry is a plain object literal with `sourceFileName` and `description`, no computed or derived entries, so a reviewer never needs to run code to know what is publicly exposed (recommended)
B) No specific auditability requirement beyond passing tests
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4: Tech stack for this unit

A) No new dependency; plain TypeScript modules and Vite's built-in static asset import handling, consistent with the existing `src/data/*.ts` pattern (recommended)
B) Introduce a dedicated asset-management or CMS-like library
X) Other (please describe after [Answer]: tag below)

[Answer]: A
