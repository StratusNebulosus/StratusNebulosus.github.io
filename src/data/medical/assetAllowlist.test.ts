import { describe, expect, it } from "vitest";

import {
  ALLOWED_ASSETS,
  getAllowlistedAssetBySourceFileName,
  getAllowlistedAssets,
  isAllowedAsset,
} from "./assetAllowlist";

const EXPECTED_SOURCE_FILE_NAMES = [
  "profile_pic.jpg",
  "HKISO2022silver.jpg",
  "HKISO2023bronze.jpg",
  "HKISO2025bronze.jpg",
  "WISCONg10.jpg",
  "WISCONg10top4.jpg",
  "SAPfinalg11.jpg",
  "SAPround1g11.jpg",
  "SAPround1g12.jpg",
  "SAPround3g11.jpg",
  "excellentsecond.jpg",
  "Tram&Chamg11.jpg",
  "presentg11.jpg",
  "VUCAg9.jpg",
  "greatprogressg11.jpg",
  "internationalg9.jpg",
  "origami-interest.webp",
  "piano-interest.webp",
  "gold-award-commemorative.webp",
  "bui-tuan-phat-cv.pdf",
];

const PROHIBITED_SOURCE_FILE_NAMES = [
  "IOGTVN.jpg",
  "donation.jpg",
  "dontuse.jpg",
  "dontuse(1).jpg",
  "passport.jpg",
  "visa.jpg",
  "cccd.jpg",
  "cccdprint.jpg",
  "certofbirth.jpg",
  "transcript.jpg",
  "SAT.pdf",
  "apreport.pdf",
  "IELTS.jpg",
];

describe("assetAllowlist (BR-1, BR-2)", () => {
  it("contains exactly the 20 approved source files", () => {
    const sourceFileNames = ALLOWED_ASSETS.map((entry) => entry.sourceFileName);

    expect(sourceFileNames.sort()).toEqual([...EXPECTED_SOURCE_FILE_NAMES].sort());
  });

  it("never contains a prohibited or text-verification-only source file", () => {
    const sourceFileNames = ALLOWED_ASSETS.map((entry) => entry.sourceFileName);

    PROHIBITED_SOURCE_FILE_NAMES.forEach((prohibited) => {
      expect(sourceFileNames).not.toContain(prohibited);
    });
  });

  it("isAllowedAsset accepts every allowlisted asset and rejects an arbitrary value", () => {
    ALLOWED_ASSETS.forEach((entry) => {
      expect(isAllowedAsset(entry.asset)).toBe(true);
    });

    expect(isAllowedAsset("not-an-allowlisted-asset")).toBe(false);
  });

  it("getAllowlistedAssets returns the same entries as ALLOWED_ASSETS", () => {
    expect(getAllowlistedAssets()).toBe(ALLOWED_ASSETS);
  });

  it("admits exactly one approved downloadable document", () => {
    const documents = ALLOWED_ASSETS.filter((entry) =>
      entry.sourceFileName.endsWith(".pdf"),
    );

    expect(documents).toHaveLength(1);
    expect(documents[0]?.sourceFileName).toBe("bui-tuan-phat-cv.pdf");
  });

  it("looks up only exact explicit source filenames", () => {
    expect(getAllowlistedAssetBySourceFileName("profile_pic.jpg")?.asset).toBeTruthy();
    expect(getAllowlistedAssetBySourceFileName("PROFILE_PIC.JPG")).toBeUndefined();
    expect(getAllowlistedAssetBySourceFileName("passport.jpg")).toBeUndefined();
  });
});
