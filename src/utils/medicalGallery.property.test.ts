import fc from "fast-check";
import { describe, expect, it } from "vitest";

import { getAllowlistedAssets } from "../data/medical/assetAllowlist";
import { galleryItems } from "../data/medical/gallery";
import {
  failedGalleryIdsArbitrary,
  galleryCommandSequenceArbitrary,
  galleryItemArbitrary,
  invalidGalleryItemArbitrary,
} from "../test/arbitraries/medicalGallery";
import type { GallerySelectionState } from "../types/medicalPortfolio";
import {
  isGalleryImage,
  transitionGalleryState,
  validateGalleryCollection,
} from "./medicalGallery";

const allowlist = getAllowlistedAssets();
const validIds: readonly string[] = galleryItems.map((item) => item.id);

describe("medical gallery properties", () => {
  it("accepts generated valid records and rejects generated invalid records", () => {
    fc.assert(
      fc.property(galleryItemArbitrary, invalidGalleryItemArbitrary, (valid, invalid) => {
        expect(isGalleryImage(valid, allowlist)).toBe(true);
        expect(isGalleryImage(invalid, allowlist)).toBe(false);
      }),
    );
  });

  it("rejects duplicate generated IDs from otherwise valid collections", () => {
    fc.assert(
      fc.property(galleryItemArbitrary, (item) => {
        const result = validateGalleryCollection(
          [item, { ...item }],
          allowlist,
          [item.sourceFileName],
        );
        expect(result.items).toEqual([]);
        expect(result.errors.join(" ")).toMatch(/duplicate gallery id/i);
      }),
    );
  });

  it("keeps every generated command sequence closed or on a valid non-failed ID", () => {
    fc.assert(
      fc.property(
        failedGalleryIdsArbitrary(validIds),
        galleryCommandSequenceArbitrary(validIds),
        (failedIds, commands) => {
          const failed = new Set(failedIds);
          let actual: GallerySelectionState = { selectedItemId: null };
          let model: GallerySelectionState = { selectedItemId: null };

          commands.forEach((command) => {
            actual = transitionGalleryState(actual, command, galleryItems, failed);
            model = command.type === "close" || failed.has(command.itemId) || !validIds.includes(command.itemId)
              ? { selectedItemId: null }
              : { selectedItemId: command.itemId };
            expect(actual).toEqual(model);
            expect(
              actual.selectedItemId === null ||
                (validIds.includes(actual.selectedItemId) && !failed.has(actual.selectedItemId)),
            ).toBe(true);
          });
        },
      ),
    );
  });

  it("keeps repeated close equivalent to one close for generated states", () => {
    fc.assert(
      fc.property(fc.option(fc.constantFrom(...validIds), { nil: null }), (selectedItemId) => {
        const state = { selectedItemId };
        const once = transitionGalleryState(state, { type: "close" }, galleryItems);
        const twice = transitionGalleryState(once, { type: "close" }, galleryItems);
        expect(twice).toEqual(once);
      }),
    );
  });
});
