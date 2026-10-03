import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import App from "../App";
import { Provider } from "../components/ui/provider";
import { content } from "../data/medical/content";
import { galleryItems } from "../data/medical/gallery";
import {
  APPROVED_WEBSITE_CONTACT_MARKERS,
  APPROVED_SECTION_IDS,
  CURRENT_PUBLIC_IDENTITY_MARKERS,
  FORMER_PUBLIC_IDENTITY_MARKERS,
  PLACEHOLDER_CONTACT_MARKERS,
  RETIRED_PUBLIC_EXPERIENCE_MARKERS,
} from "./medicalPortfolioPolicy";

beforeEach(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  window.localStorage.clear();
  window.history.replaceState(null, "", "/");
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

const renderProductionApp = () =>
  render(
    <Provider>
      <App />
    </Provider>,
  );

describe("completed medical portfolio regression", () => {
  it("renders the current public identity and all eight sections in order", () => {
    renderProductionApp();
    const main = screen.getByTestId("medical-main");

    expect(Array.from(main.children, (element) => element.id)).toEqual(
      APPROVED_SECTION_IDS,
    );
    CURRENT_PUBLIC_IDENTITY_MARKERS.forEach((marker) => {
      expect(main).toHaveTextContent(marker);
    });
    expect(
      screen.getByRole("heading", { level: 1, name: content.hero.name }),
    ).toBeInTheDocument();
  });

  it("keeps the approved CV action and exact evidence inventory available", () => {
    renderProductionApp();
    const download = screen.getByTestId("medical-hero-cv-download");

    expect(download).toHaveAttribute("href", content.hero.cvDownload.asset);
    expect(download).toHaveAttribute("download", "bui-tuan-phat-cv.pdf");
    expect(screen.getAllByTestId(/^medical-gallery-item-/)).toHaveLength(
      galleryItems.length,
    );
    expect(galleryItems).toHaveLength(18);
  });

  it("keeps former identity, retired choices, and CV-only contacts out of the interface", () => {
    window.localStorage.setItem("portfolio-layout-mode", "multi");
    window.localStorage.setItem("portfolio-template-id", "business");
    const { container } = renderProductionApp();
    const renderedText = container.textContent ?? "";

    [
      ...FORMER_PUBLIC_IDENTITY_MARKERS,
      ...RETIRED_PUBLIC_EXPERIENCE_MARKERS,
      ...PLACEHOLDER_CONTACT_MARKERS,
    ].forEach((marker) => {
      expect(renderedText).not.toContain(marker);
    });
    expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
    expect(
      screen.queryByText(/choose.*(?:template|layout|style)/i),
    ).not.toBeInTheDocument();
  });

  it("requires the approved email-only draft form without site submission", () => {
    const { container } = renderProductionApp();
    const contact = screen.getByTestId("medical-section-contact");

    APPROVED_WEBSITE_CONTACT_MARKERS.forEach((marker) => {
      expect(content.contact.recipientEmail).toBe(marker);
    });
    expect(screen.getByTestId("medical-contact-form")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /open email draft/i }),
    ).toBeInTheDocument();
    expect(contact).toHaveTextContent(/nothing is submitted to or stored/i);
    expect(contact).not.toHaveTextContent(/phone/i);
    expect(container.innerHTML).not.toMatch(/tel:/i);
  });
});
