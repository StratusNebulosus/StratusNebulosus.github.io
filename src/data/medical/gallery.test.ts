import { describe, expect, it } from "vitest";

import { getAllowlistedAssets } from "./assetAllowlist";
import {
  APPROVED_GALLERY_SOURCE_FILE_NAMES,
  galleryItems,
  getGalleryItems,
} from "./gallery";

describe("medical gallery data", () => {
  it("contains the exact approved 16-image inventory in curated order", () => {
    expect(galleryItems).toHaveLength(16);
    expect(galleryItems.map((item) => item.sourceFileName)).toEqual(
      APPROVED_GALLERY_SOURCE_FILE_NAMES,
    );
    expect(galleryItems[0]?.category).toBe("portrait");
    expect(galleryItems.at(-1)?.category).toBe("science");
  });

  it("uses unique stable IDs and one allowlisted asset per record", () => {
    expect(new Set(galleryItems.map((item) => item.id))).toHaveProperty(
      "size",
      galleryItems.length,
    );
    const allowlist = getAllowlistedAssets();
    galleryItems.forEach((item) => {
      expect(allowlist).toContainEqual(
        expect.objectContaining({
          asset: item.asset,
          sourceFileName: item.sourceFileName,
        }),
      );
    });
  });

  it("excludes the approved CV PDF from gallery media", () => {
    expect(galleryItems.some((item) => item.sourceFileName.endsWith(".pdf"))).toBe(false);
  });

  it("returns the authored collection without sorting or copying it", () => {
    expect(getGalleryItems()).toBe(galleryItems);
  });
});
