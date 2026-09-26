import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { galleryItems } from "../../../data/medical/gallery";
import { GalleryItem } from "./GalleryItem";

afterEach(() => cleanup());

const item = galleryItems[0];

describe("GalleryItem", () => {
  it("renders a native lazy-loading evidence button with complete metadata", () => {
    const onActivate = vi.fn();
    render(
      <GalleryItem
        item={item}
        failed={false}
        onActivate={onActivate}
        onImageError={vi.fn()}
      />,
    );

    const trigger = screen.getByRole("button", {
      name: `Open ${item.title} evidence preview`,
    });
    const image = screen.getByRole("img", { name: item.altText });

    expect(trigger).toHaveAttribute("type", "button");
    expect(trigger).toHaveAttribute("data-content-id", item.id);
    expect(image).toHaveAttribute("src", item.asset);
    expect(image).toHaveAttribute("loading", "lazy");
    expect(image).toHaveAttribute("decoding", "async");
    expect(image).toHaveAttribute("width", "720");
    expect(image).toHaveAttribute("height", "540");
    expect(screen.getByText(item.period, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(item.description)).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(onActivate).toHaveBeenCalledOnce();
    expect(onActivate).toHaveBeenCalledWith(item.id, trigger);
  });

  it("reports media failure and preserves a non-interactive caption", () => {
    const onImageError = vi.fn();
    const { rerender } = render(
      <GalleryItem
        item={item}
        failed={false}
        onActivate={vi.fn()}
        onImageError={onImageError}
      />,
    );

    fireEvent.error(screen.getByRole("img", { name: item.altText }));
    expect(onImageError).toHaveBeenCalledWith(item.id);

    rerender(
      <GalleryItem
        item={item}
        failed
        onActivate={vi.fn()}
        onImageError={onImageError}
      />,
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Preview unavailable");
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.getByText(item.description)).toBeInTheDocument();
  });
});
