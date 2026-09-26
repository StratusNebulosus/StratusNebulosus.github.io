import { describe, expect, it } from "vitest";

import { getAllowlistedAssets } from "../data/medical/assetAllowlist";
import {
  APPROVED_GALLERY_SOURCE_FILE_NAMES,
  galleryItems,
} from "../data/medical/gallery";
import {
  getValidatedGalleryItems,
  resolveGalleryItem,
  transitionGalleryState,
  validateGalleryCollection,
} from "./medicalGallery";

const allowlist = getAllowlistedAssets();

describe("medical gallery domain logic", () => {
  it("validates the complete production collection", () => {
    const result = validateGalleryCollection(
      galleryItems,
      allowlist,
      APPROVED_GALLERY_SOURCE_FILE_NAMES,
    );
    expect(result.errors).toEqual([]);
    expect(result.items).toEqual(galleryItems);
  });

  it("rejects duplicate IDs and a PDF record", () => {
    const pdfEntry = allowlist.find((entry) => entry.sourceFileName.endsWith(".pdf"))!;
    const invalid = {
      ...galleryItems[0],
      id: galleryItems[1].id,
      asset: pdfEntry.asset,
      sourceFileName: pdfEntry.sourceFileName,
    };
    const result = validateGalleryCollection(
      [...galleryItems, invalid],
      allowlist,
      APPROVED_GALLERY_SOURCE_FILE_NAMES,
    );
    expect(result.errors.join(" ")).toMatch(/duplicate gallery id/i);
    expect(result.errors.join(" ")).toMatch(/invalid gallery item|unexpected gallery source/i);
  });

  it("opens only valid non-failed items and closes unknown selections", () => {
    const validItems = getValidatedGalleryItems(
      galleryItems,
      allowlist,
      APPROVED_GALLERY_SOURCE_FILE_NAMES,
    );
    const opened = transitionGalleryState(
      { selectedItemId: null },
      { type: "open", itemId: validItems[0].id },
      validItems,
    );
    expect(opened.selectedItemId).toBe(validItems[0].id);
    expect(
      transitionGalleryState(opened, { type: "open", itemId: "unknown" }, validItems),
    ).toEqual({ selectedItemId: null });
    expect(resolveGalleryItem(validItems, validItems[0].id, new Set([validItems[0].id]))).toBeNull();
  });

  it("makes close idempotent", () => {
    const once = transitionGalleryState(
      { selectedItemId: galleryItems[0].id },
      { type: "close" },
      galleryItems,
    );
    const twice = transitionGalleryState(once, { type: "close" }, galleryItems);
    expect(twice).toEqual(once);
  });
});
