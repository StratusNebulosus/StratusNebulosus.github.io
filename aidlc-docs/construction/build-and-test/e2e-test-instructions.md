# Browser Workflow Instructions — Stratus Visual Refresh

## Start a production preview

Build with the desired base path using build-instructions.md, then run:

```bash
npm run preview -- --host 127.0.0.1 --port 4173
```

Open the root or /StratusNebulosus.github.io/ path matching that build. Stop the preview with Ctrl+C afterward. Use a temporary browser profile; clear only this local site's display keys when checking fresh defaults.

## Responsive and visual matrix

Review Notebook/Casebook × full-page/section × light/dark × 320/390/768/1440 CSS-pixel widths (32 combinations). Confirm no horizontal document overflow, reachable sections, readable long labels, usable 44px controls and coherent heading hierarchy. Recorded DOM measurements passed all 32 configurations. Screenshot links are in ../stratus-visual-refresh/code/code-generation-summary.md.

## Complete workflows

1. Fresh profile with light OS: default dark, Notebook, full-page. Save light/style/view choices and reload. Try invalid values or denied storage; controls must remain usable.
2. Open #science and #/science against the opposite saved layout. Switch views after reading Science; back/forward must retain the selected section. Unknown routes recover Overview. Modified clicks retain native link behavior.
3. At mobile width open the menu, select Evidence, then inspect heading focus after drawer closure. Cancel should restore the menu trigger. Tab through native style/view controls; the skip link focuses main without changing the route.
4. Open award and gallery evidence; verify captions, full image, trapped Tab focus, Escape and origin restoration. Change view/style while a preview is open: no hidden stale dialog or stranded focus. Image failure retains useful close behavior.
5. Submit incomplete Contact fields; first invalid field gets focus. Inspect message counter/5000-character limit. Valid input opens the verified-recipient encoded draft in local email software. Close the draft without sending during testing.
6. Follow CV links in both views; confirm correct download metadata, HTTP success and actual PDF content. Inspect image/script/style URLs for both production base paths.
7. Enable reduced motion: suppress decorative animation and smooth scrolling while preserving controls/content. Inspect focus indicators and actual reading/action/error/overlay colors in both themes.

## Recorded evidence and limits

Local Chrome workflow checks passed. Minimum rendered normal-text contrast: 6.87:1 light and 8.20:1 dark; light primary/secondary reading exceeds 7:1. Essential borders: 3.49:1 light and 3.88:1 dark. Evidence: responsive.json, interactions.json, contrast.json, resilience.json and production-browser.json under /private/tmp/stratus-visual-refresh/. Tests use simulated viewports; every physical browser/device or assistive technology is not claimed.

API contract/load and authentication tests are N/A. Existing source/privacy/output tests remain required. No external message, deployment or backend request is needed to reproduce this review.

## Extension compliance

Security Baseline: N/A — disabled B. Property-Based Testing: N/A — disabled C. Existing property suites and production privacy policy remain enforced. No enabled-extension blocking finding.
