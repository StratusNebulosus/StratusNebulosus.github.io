# Static Performance Instructions — Stratus Visual Refresh

## Applicable checks

This static portfolio has no runtime API/server. Load/stress, throughput, concurrent-user and database tests are N/A. Delivery checks cover comparable bundle bytes, asset reuse, lazy evidence media, reduced motion and usable responsive controls. No Lighthouse score or load-time improvement is claimed.

```bash
npm run build
npm run verify:dist
```

Record output sizes and build time with the same base path as the baseline. Compare gzip using the same compressor/settings. Baseline/final inventories are in /private/tmp/stratus-visual-refresh/baseline-sizes.json and final-sizes.json.

| Root build asset | Baseline bytes | Final bytes | Baseline gzip | Final gzip |
| --- | ---: | ---: | ---: | ---: |
| JavaScript | 675330 | 681273 | 194937 | 196728 |
| CSS | 43866 | 44388 | 8917 | 8253 |

Navigation/preference/focus code added 5943 JS bytes (1791 gzip). CSS added 522 bytes; compressed CSS decreased 664 bytes. Approved images/PDF hashes and sizes match baseline. No new dependency or font download was introduced. The existing Vite chunk-over-500-kB advisory remains.

Review unexpected growth against the source graph and dependency diff, optimize only the measured cause, and repeat affected quality/output checks. A future timing study should use controlled browser/network conditions and report measured results separately; this stage does not invent timing targets.

## Extension compliance

Security Baseline: N/A — disabled B. Property-Based Testing: N/A — disabled C. Existing property suites and production privacy policy remain enforced. No enabled-extension blocking finding.
