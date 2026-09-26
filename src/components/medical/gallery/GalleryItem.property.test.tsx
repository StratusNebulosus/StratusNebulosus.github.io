import { cleanup, render, screen } from "@testing-library/react";
import fc from "fast-check";
import { afterEach, describe, expect, it, vi } from "vitest";

import { galleryItemArbitrary } from "../../../test/arbitraries/medicalGallery";
import { GalleryItem } from "./GalleryItem";

afterEach(() => cleanup());

describe("GalleryItem properties", () => {
  it("renders every generated valid record exactly once with its stable identity", () => {
    fc.assert(
      fc.property(galleryItemArbitrary, (item) => {
        render(
          <GalleryItem
            item={item}
            failed={false}
            onActivate={vi.fn()}
            onImageError={vi.fn()}
          />,
        );

        const trigger = screen.getByTestId(`medical-gallery-item-${item.id}`);
        expect(trigger).toHaveAttribute("data-content-id", item.id);
        expect(screen.getAllByRole("img", { name: item.altText })).toHaveLength(1);
        cleanup();
      }),
      { numRuns: 24 },
    );
  });
});
