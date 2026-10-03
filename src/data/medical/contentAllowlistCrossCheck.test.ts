import { describe, expect, it } from "vitest";

import { getAllowlistedAssets } from "./assetAllowlist";
import { content } from "./content";
import { galleryItems } from "./gallery";
import type { AllowedAsset } from "../../types/medicalPortfolio";

function collectAssets(): AllowedAsset[] {
  const assets: AllowedAsset[] = [
    content.hero.portrait,
    content.hero.cvDownload.asset,
  ];

  content.awardGroups.forEach((group) => {
    group.awards.forEach((award) => {
      if (award.evidence) {
        assets.push(award.evidence);
      }
    });
  });

  return assets;
}

describe("content-to-allowlist cross-check (NFR Design Pattern 3)", () => {
  it("every asset referenced in content.ts is present in the asset allowlist", () => {
    const allowlistedAssetValues = getAllowlistedAssets().map(
      (entry) => entry.asset,
    );

    collectAssets().forEach((asset) => {
      expect(allowlistedAssetValues).toContain(asset);
    });
  });

  it("keeps the CV source name, public entry, and download filename aligned", () => {
    const entry = getAllowlistedAssets().find(
      (candidate) => candidate.asset === content.hero.cvDownload.asset,
    );

    expect(entry?.sourceFileName).toBe(content.hero.cvDownload.sourceFileName);
    expect(content.hero.cvDownload.fileName).toBe("bui-tuan-phat-cv.pdf");
  });

  it("keeps every gallery asset allowlisted and excludes every PDF", () => {
    const allowlist = getAllowlistedAssets();

    galleryItems.forEach((item) => {
      const entry = allowlist.find(
        (candidate) => candidate.sourceFileName === item.sourceFileName,
      );
      expect(entry?.asset).toBe(item.asset);
      expect(item.sourceFileName).not.toMatch(/\.pdf$/i);
    });

    expect(galleryItems).toHaveLength(18);
    expect(
      galleryItems.some((item) => item.asset === content.hero.cvDownload.asset),
    ).toBe(false);
  });
});
