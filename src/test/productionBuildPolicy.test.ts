import { describe, expect, it } from "vitest";

import {
  EXPECTED_ASSET_PREFIXES,
  EXPECTED_WEBP_PREFIXES,
  validateBundleText,
  validateHtmlBasePath,
  validateProductionFiles,
} from "../../scripts/production-build-policy.mjs";

function approvedInventory(): string[] {
  return [
    "index.html",
    "assets/index-example.js",
    "assets/index-example.css",
    ...EXPECTED_ASSET_PREFIXES.map((prefix) => {
      const extension = prefix.startsWith("bui-tuan-phat-cv-")
        ? "pdf"
        : EXPECTED_WEBP_PREFIXES.includes(prefix)
          ? "webp"
          : "jpg";
      return `assets/${prefix}example.${extension}`;
    }),
  ];
}

describe("production build policy examples", () => {
  it("accepts the exact approved image and CV inventory", () => {
    expect(validateProductionFiles(approvedInventory())).toEqual([]);
  });

  it("reports a prohibited addition with an actionable filename", () => {
    const errors = validateProductionFiles([
      ...approvedInventory(),
      "assets/passport-secret.jpg",
    ]);

    expect(errors.join(" ")).toContain("passport-secret.jpg");
    expect(errors.join(" ")).toContain("exactly 18 approved JPG files");
  });

  it("rejects unreviewed media even when its filename is not a sensitive marker", () => {
    const errors = validateProductionFiles([
      ...approvedInventory(),
      "assets/unreviewed-photo.png",
    ]);

    expect(errors).toContain(
      "Unexpected production media: unreviewed-photo.png.",
    );
  });

  it("allows only Vite's module-preload fetch in generated bundle text", () => {
    expect(validateBundleText("modulepreload;fetch(link.href,{})")).toEqual([]);
    expect(
      validateBundleText('fetch("https://example.test/content")'),
    ).toContain("Unexpected application runtime request marker detected.");
  });

  it("accepts root and project Pages URLs and rejects escaped URLs", () => {
    expect(
      validateHtmlBasePath(
        '<script src="/assets/index.js"></script><link href="/vite.svg">',
        "/",
      ),
    ).toEqual([]);
    expect(
      validateHtmlBasePath(
        '<script src="/student/assets/index.js"></script>',
        "/student/",
      ),
    ).toEqual([]);
    expect(
      validateHtmlBasePath(
        '<script src="/assets/index.js"></script>',
        "/student/",
      ),
    ).toContain(
      "Local URL /assets/index.js is outside expected base path /student/.",
    );
  });
});
