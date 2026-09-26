import fc from "fast-check";

import { ALLOWED_ASSETS } from "../../data/medical/assetAllowlist";
import type {
  GalleryCommand,
  GalleryItemData,
} from "../../types/medicalPortfolio";

export const IMAGE_ALLOWLIST_ENTRIES = ALLOWED_ASSETS.filter(
  (entry) => !entry.sourceFileName.endsWith(".pdf"),
);

const galleryIdArbitrary = fc
  .tuple(
    fc.constantFrom("portrait", "science", "conference", "project", "community"),
    fc.integer({ min: 1, max: 9999 }),
  )
  .map(([prefix, suffix]) => `gallery-${prefix}-${suffix}`);

export const galleryItemArbitrary: fc.Arbitrary<GalleryItemData> = fc
  .constantFrom(...IMAGE_ALLOWLIST_ENTRIES)
  .chain((entry) =>
    fc.record({
      id: galleryIdArbitrary,
      asset: fc.constant(entry.asset),
      sourceFileName: fc.constant(entry.sourceFileName),
      title: fc.constantFrom("Science recognition", "Student project", "Portfolio portrait"),
      description: fc.constantFrom(
        "Verified evidence from the approved public portfolio collection.",
        "A reviewed record of student learning and participation.",
      ),
      category: fc.constantFrom(
        "portrait",
        "science",
        "conference",
        "leadership",
        "school-project",
        "community",
      ),
      period: fc.constantFrom("2023", "2024", "2025", "Grade 11"),
      altText: fc.constantFrom(
        "Certificate recognizing a verified student achievement",
        "Portrait of Bui Tuan Phat in graduation attire",
      ),
      thumbnailPosition: fc.option(
        fc.constantFrom("center", "center 22%", "50% 40%"),
        { nil: undefined },
      ),
    }),
  );

export const invalidGalleryItemArbitrary: fc.Arbitrary<GalleryItemData> = fc.oneof(
  galleryItemArbitrary.map((item) => ({ ...item, asset: "unknown-gallery-asset" })),
  galleryItemArbitrary.map((item) => ({ ...item, sourceFileName: "bui-tuan-phat-cv.pdf" })),
  galleryItemArbitrary.map((item) => ({ ...item, altText: "" })),
);

export function galleryCommandArbitrary(
  validIds: readonly string[],
): fc.Arbitrary<GalleryCommand> {
  return fc.oneof(
    fc.constant<GalleryCommand>({ type: "close" }),
    fc.constantFrom(...validIds).map((itemId) => ({ type: "open", itemId }) as const),
    galleryIdArbitrary.map((itemId) => ({ type: "open", itemId: `unknown-${itemId}` }) as const),
  );
}

export function galleryCommandSequenceArbitrary(validIds: readonly string[]) {
  return fc.array(galleryCommandArbitrary(validIds), { minLength: 0, maxLength: 30 });
}

export function failedGalleryIdsArbitrary(validIds: readonly string[]) {
  return fc.uniqueArray(fc.constantFrom(...validIds), {
    minLength: 0,
    maxLength: validIds.length,
  });
}
