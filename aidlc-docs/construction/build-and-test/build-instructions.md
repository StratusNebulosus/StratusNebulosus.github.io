# Build Instructions — Stratus Visual Refresh

## Prerequisites

Run from `/Users/nhamhhung/StratusNebulosus.github.io`. Use Node 20.19+ or 22.12+, npm and the committed package-lock.json. Verification used Node 24.0.0, TypeScript 5.9 and Vite 7.3.0. No credentials or runtime services are needed. The existing workflow installs locked dependencies and verifies output before upload.

## Install and quality checks

```bash
npm ci
npm run quality
```

The quality command runs TypeScript, ESLint and all Vitest example/property suites.

## Root Pages build

```bash
npm run build
npm run verify:dist
```

## Project Pages build

```bash
VITE_BASE_PATH=/StratusNebulosus.github.io/ npm run build
EXPECTED_BASE_PATH=/StratusNebulosus.github.io/ npm run verify:dist
```

Each build replaces dist. Matching build/verifier base paths are mandatory. Expected output: dist/index.html, JS/CSS bundles, exactly 18 approved JPGs, two approved WebP illustrations and one approved CV PDF. The verifier reports 20 approved images and one approved CV; private source documents stay outside the output.

Both builds and verifiers passed. Vite bundling took 2.30 seconds root and 2.40 seconds project in the recorded final run. The existing chunk-over-500-kB advisory remains. No deployment is performed by these local commands.

## Recovery

For install failures check supported Node and repository directory, then use npm ci with the existing lockfile. For source failures run npm run typecheck or npm run lint separately and repair the reported issue. For verifier failures rebuild using the matching base path and inspect the named asset/marker; retain the exact public allowlist/privacy policy.

## Extension compliance

Security Baseline: N/A — disabled B. Property-Based Testing: N/A — disabled C. Existing property suites and production privacy policy remain enforced. No enabled-extension blocking finding.
