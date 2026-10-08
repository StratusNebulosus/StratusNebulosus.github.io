# Performance Test Instructions

## Purpose

Track browser-delivery and static-build characteristics appropriate to this GitHub Pages portfolio. Server load, throughput, concurrent-user, database, queue, and autoscaling tests are not applicable because the application has no runtime server or API.

## Applicable Requirements

- Non-critical gallery media remains lazy-loaded with reserved dimensions.
- The section-heading refinement adds no image, font download, network request, runtime dependency, or interactive JavaScript state.
- Shared layout changes remain CSS-only and preserve 320-CSS-pixel overflow safeguards.
- Root and project Pages builds must complete and pass deterministic output verification.

## Execute the Static Performance Check

```bash
npm run build
npm run verify:dist
```

Record the Vite build time and JavaScript/CSS sizes printed in the terminal.

## Verified Baseline

| Measure | Observed result |
|---|---|
| Root build time | Approximately 3.05 seconds for Vite bundling |
| Project-path build time | Approximately 2.89 seconds for Vite bundling |
| Main JavaScript | Approximately 666.23 kB minified; 192.84 kB gzip |
| Main CSS | Approximately 36.46 kB minified; 7.92 kB gzip |
| Complete `dist/` | Approximately 3.0 MB including approved media and CV |
| Public media inventory | 13 JPG files and one PDF |
| Runtime application requests | None |

The main JavaScript remains above Vite's 500 kB advisory threshold. This is tracked as a non-blocking warning because the section-heading refinement added no runtime dependency or network behavior.

## Optional Browser Measurement

For a future performance-focused change, run Lighthouse against `npm run preview` using a controlled browser/network profile and record mobile performance, accessibility, and largest-contentful-paint results. No Lighthouse score or runtime layout metric is claimed for this revision because dedicated browser measurement is not configured.

## Failure or Regression Response

1. Compare current Vite output with the baseline above.
2. Confirm no new dependency or eager media import was introduced.
3. Review the production graph and gallery lazy-loading tests.
4. Optimize the largest justified source of growth.
5. Rebuild both root and project Pages forms and rerun the verifier.

## Not Applicable

- Requests per second, server response percentiles, and concurrent-user targets.
- Load, stress, endurance, database, cache, or queue tests.
- API latency or service-level objectives.
