import fc from "fast-check";
import { describe, expect, it } from "vitest";

import {
  EXPECTED_ASSET_PREFIXES,
  EXPECTED_WEBP_PREFIXES,
  normalizeBasePath,
  validateHtmlBasePath,
  validateProductionFiles,
} from "../../scripts/production-build-policy.mjs";

const safeHashArbitrary = fc
  .array(fc.constantFrom(..."abcdefghijklmnopqrstuvwxyz0123456789"), {
    minLength: 5,
    maxLength: 14,
  })
  .map((characters) => characters.join(""));

const prohibitedStemArbitrary = fc.constantFrom(
  "dontuse",
  "passport",
  "cccd",
  "visa",
  "birth-certificate",
  "transcript",
  "scorerecord",
  "apreport",
);

const projectBasePathArbitrary = fc
  .array(fc.constantFrom(..."abcdefghijklmnopqrstuvwxyz0123456789-"), {
    minLength: 3,
    maxLength: 24,
  })
  .map((characters) => `/${characters.join("").replace(/^-+|-+$/g, "") || "portfolio"}/`);

function approvedInventory(hash: string): string[] {
  return [
    "index.html",
    `assets/index-${hash}.js`,
    `assets/index-${hash}.css`,
    ...EXPECTED_ASSET_PREFIXES.map((prefix) => {
      const extension = prefix.startsWith("bui-tuan-phat-cv-")
        ? "pdf"
        : EXPECTED_WEBP_PREFIXES.includes(prefix)
          ? "webp"
          : "jpg";
      return `assets/${prefix}${hash}.${extension}`;
    }),
  ];
}

describe("production build policy properties", () => {
  it("accepts every generated exact approved inventory", () => {
    fc.assert(
      fc.property(safeHashArbitrary, (hash) => {
        expect(validateProductionFiles(approvedInventory(hash))).toEqual([]);
      }),
    );
  });

  it("rejects every generated prohibited asset addition", () => {
    fc.assert(
      fc.property(
        safeHashArbitrary,
        prohibitedStemArbitrary,
        (hash, prohibitedStem) => {
          const errors = validateProductionFiles([
            ...approvedInventory(hash),
            `assets/${prohibitedStem}-${hash}.jpg`,
          ]);
          expect(errors.some((error) => error.includes(prohibitedStem))).toBe(true);
        },
      ),
    );
  });

  it("normalizes and contains generated project Pages asset URLs", () => {
    fc.assert(
      fc.property(projectBasePathArbitrary, safeHashArbitrary, (basePath, hash) => {
        const normalized = normalizeBasePath(basePath.slice(1, -1));
        const html = `<script src="${normalized}assets/index-${hash}.js"></script>`;
        expect(normalized).toBe(basePath);
        expect(validateHtmlBasePath(html, basePath)).toEqual([]);
        expect(
          validateHtmlBasePath(`<script src="/assets/index-${hash}.js"></script>`, basePath),
        ).not.toEqual([]);
      }),
    );
  });
});
