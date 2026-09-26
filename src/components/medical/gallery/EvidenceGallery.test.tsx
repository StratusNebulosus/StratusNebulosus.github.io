import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { galleryItems } from "../../../data/medical/gallery";
import { Provider } from "../../ui/provider";
import { EvidenceGallery } from "./EvidenceGallery";
import { EvidencePreviewProvider } from "./EvidencePreviewProvider";

beforeEach(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

const renderGallery = () =>
  render(
    <Provider>
      <EvidencePreviewProvider items={galleryItems}>
        <EvidenceGallery />
      </EvidencePreviewProvider>
    </Provider>,
  );

describe("EvidenceGallery", () => {
  it("renders the exact approved inventory once and excludes the CV", () => {
    renderGallery();

    expect(screen.getAllByTestId(/^medical-gallery-item-/)).toHaveLength(16);
    galleryItems.forEach((item) => {
      expect(screen.getByTestId(`medical-gallery-item-${item.id}`)).toBeInTheDocument();
    });
    expect(screen.queryByText(/bui-tuan-phat-cv\.pdf/i)).not.toBeInTheDocument();
  });

  it("opens one same-source preview and restores focus from the visible close control", async () => {
    renderGallery();
    const item = galleryItems[1];
    const trigger = screen.getByTestId(`medical-gallery-item-${item.id}`);

    trigger.focus();
    fireEvent.click(trigger);

    const dialog = await screen.findByRole("dialog");
    const modalImage = screen.getByTestId("medical-gallery-modal-image");
    expect(dialog).toHaveAccessibleName(item.title);
    expect(dialog).toHaveAccessibleDescription(item.description);
    expect(modalImage).toHaveAttribute("src", item.asset);
    expect(modalImage).toHaveAttribute("decoding", "async");
    expect(screen.getAllByTestId("medical-gallery-modal")).toHaveLength(1);

    const close = screen.getByRole("button", { name: "Close evidence preview" });
    expect(close).toBeVisible();
    fireEvent.click(close);
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it("closes with Escape and restores the selected trigger", async () => {
    renderGallery();
    const trigger = screen.getByTestId(`medical-gallery-item-${galleryItems[2].id}`);

    trigger.focus();
    fireEvent.click(trigger);
    const dialog = await screen.findByRole("dialog");
    await waitFor(() => expect(dialog).toHaveFocus());
    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });

    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it("degrades a failed image without removing its caption or enabling retry", () => {
    renderGallery();
    const item = galleryItems[3];
    const trigger = screen.getByTestId(`medical-gallery-item-${item.id}`);
    const image = trigger.querySelector("img");

    expect(image).not.toBeNull();
    fireEvent.error(image as HTMLImageElement);

    expect(screen.queryByTestId(`medical-gallery-item-${item.id}`)).not.toBeInTheDocument();
    expect(screen.getByTestId(`medical-gallery-unavailable-${item.id}`)).toBeInTheDocument();
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.getByText(item.description)).toBeInTheDocument();
  });

  it("shows a non-interactive status for an invalid or empty collection", () => {
    render(
      <Provider>
        <EvidencePreviewProvider items={[]}>
          <EvidenceGallery />
        </EvidencePreviewProvider>
      </Provider>,
    );

    expect(screen.getByRole("status")).toHaveTextContent(
      "Verified gallery evidence is temporarily unavailable.",
    );
    expect(screen.queryByTestId("medical-gallery-grid")).not.toBeInTheDocument();
  });
});
