# Build Instructions

## Prerequisites

| Requirement | Project value |
|---|---|
| Runtime | Node.js 20.19 or newer, or Node.js 22.12 or newer |
| Package manager | npm with the committed `package-lock.json` |
| Build tools | TypeScript 5.9 and Vite 7 through repository scripts |
| Required secrets | None |
| Optional variables | `VITE_BASE_PATH` for a project Pages build; `EXPECTED_BASE_PATH` for matching output verification |
| Output directory | `dist/` |

The GitHub Actions workflow uses Node.js 20, installs locked dependencies, derives the Pages base path, runs the full quality gate, builds, verifies `dist/`, and only then uploads the static artifact.

## Build Steps

### 1. Install Locked Dependencies

From the repository root:

```bash
npm ci
```

Use `npm install` only when intentionally changing dependencies or regenerating the lockfile.

### 2. Run the Source Quality Gate

```bash
npm run quality
```

This runs TypeScript, ESLint, all example tests, and all property tests.

### 3. Build and Verify Root Pages Output

```bash
npm run build
npm run verify:dist
```

Expected verifier result for the active revision: 16 approved JPG files, three approved WebP illustrations, one approved CV PDF, and base path `/`.

### 4. Build and Verify Project Pages Output

```bash
VITE_BASE_PATH=/student-profile/ npm run build
EXPECTED_BASE_PATH=/student-profile/ npm run verify:dist
```

Replace `student-profile` with the actual repository name when reproducing a deployed project Pages path.

## Successful Build Evidence

- TypeScript compilation succeeds before Vite bundles the application.
- `dist/index.html` exists and its local URLs stay inside the requested base path.
- `dist/assets/` contains one JavaScript bundle, one CSS bundle, 16 approved JPG files, three approved WebP illustrations, and one approved CV PDF.
- The approved website Contact placeholders occur in the built JavaScript.
- CV-only placeholders, former-owner identity, prohibited/private filenames, dynamic asset discovery, and application runtime requests are absent.
- No backend, database, secret, or runtime configuration is required.

## Current Non-Blocking Advisory

Vite reports the main JavaScript chunk above its 500 kB advisory threshold. The verified section-heading project-path build produced approximately 666.23 kB minified and 192.84 kB gzip. This is a performance follow-up candidate, not a build failure.

## Troubleshooting

### Dependency or Native Binding Failure

1. Confirm the active Node.js version meets the requirement.
2. Confirm the terminal is in the repository root.
3. Reinstall locked dependencies with `npm ci` in a clean local dependency environment.
4. Rerun `npm run quality` before rebuilding.

### TypeScript or ESLint Failure

Run the failing command separately:

```bash
npm run typecheck
npm run lint
```

Fix the first reported source issue, then rerun the complete quality gate.

### Production Verifier Failure

- Confirm `npm run build` completed immediately before verification.
- Use the same path value for `VITE_BASE_PATH` and `EXPECTED_BASE_PATH`.
- Review the verifier message for an unexpected asset, prohibited marker, runtime request, or out-of-base URL.
- Do not weaken the allowlist or denylist to make an unreviewed file pass.
