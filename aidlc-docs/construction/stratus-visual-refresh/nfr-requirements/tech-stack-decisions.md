# Tech Stack Decisions — Stratus Visual Refresh

## Decision

Retain the repository's existing stack and npm lockfile. The visual refresh needs browser display state, CSS layouts and accessible controls; existing primitives cover them. Dependencies are not upgraded solely for freshness. Versions/ranges below reflect the inspected local package.json, not a claim about the latest available versions.

| Area | Choice / current manifest | Rationale / constraints |
| --- | --- | --- |
| Rendering/types | React/React DOM ^19.2.0, TypeScript ~5.9.3 | Existing typed components and shared content; preserve StrictMode-safe lifecycle |
| Build | Vite ^7.2.4, React SWC plugin, existing base configuration | Existing root/project-base static output; npm ci uses the checked-in lockfile |
| Accessible primitives | Chakra UI ^3.30.0 with Emotion ^11.14.0 | Reuse current drawer/dialog focus behavior; avoid a second UI/modal library |
| Color mode | next-themes ^0.4.6 and existing bootstrap/token pipeline | Keep theme storage compatibility; align product-dark fallback and saved-light normalization |
| Styling | Existing generated CSS tokens, native CSS/SVG and Tailwind ^4.1.18 integration | Two distinct layout variants with shared content; no new runtime animation/charting dependency |
| Icons | Existing react-icons ^5.5.0 | Reuse established accessible control icons; decorative icons hidden from assistive technology |
| Navigation/preferences | Existing React hooks, native history/hash/localStorage with pure guards | Static host compatible; no router/state library required for eight section IDs |
| Tests | Existing Vitest ^4.1.9, Testing Library, jsdom, fast-check ^4.10.1 | Preserve meaningful suites/property coverage; add behavior-oriented route/preference/focus integration |
| Static validation | Existing ESLint/tsc/verify-production-build.mjs | Keep type/lint/public-graph policy as quality gates |
| Delivery | Existing GitHub Actions Node 20/npm ci and GitHub Pages base-path derivation | No infrastructure or publish change requested; local checks should respect locked engine requirements |

## Alternatives considered

- A new router or global state library adds an unnecessary dependency for hash-addressed sections and a few display preferences. Use focused hooks/pure helpers instead.
- Separate style-specific content trees would increase drift risk. Shared section contracts plus variant presentation preserve facts and reduce remounting.
- A new modal/animation/chart library duplicates existing accessible primitives or creates decorative overhead. Existing Chakra and CSS/SVG suffice.
- A backend email sender or alternate hosting provider changes functionality/infrastructure beyond the approved scope. Existing mailto composition and Pages remain the selected approach.

## Verification/tooling decisions

Use package scripts: quality (typecheck/lint/tests), build, and verify:dist. Build separately with root and project VITE_BASE_PATH values and verify the matching outputs. Browser validation supplements DOM tests for actual responsiveness, colors, keyboard/drawer/dialog focus, downloads and saved settings. Capture standalone screenshots for review; select available browser tooling without adding runtime dependencies. Actual baseline/final size evidence belongs in Construction verification artifacts.

Keep the existing property suites despite the disabled PBT extension. New tests focus on observable behavior and meaningful failure/transition cases rather than mirroring CSS implementation. Locked dependency installation and any source/test updates occur during the authorized code/build stages; this stage changes documentation only.
## Extension compliance

Security Baseline: N/A — disabled B in Extension Configuration. Property-Based Testing: N/A — disabled C. Full extension rules not loaded; enforcement skipped. Existing production privacy/asset policy, accessibility obligations and existing property suites remain required independently. No enabled-extension blocking findings.
