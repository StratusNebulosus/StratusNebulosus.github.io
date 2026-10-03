import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import App from "./App";
import { Provider } from "./components/ui/provider";
import { content } from "./data/medical/content";
import { galleryItems } from "./data/medical/gallery";
import {
  medicalNavigation,
  medicalSectionIds,
} from "./data/medical/navigation";

const renderPortfolio = () =>
  render(
    <Provider>
      <App />
    </Provider>,
  );

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
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
});

afterEach(() => cleanup());

describe("medical portfolio application", () => {
  it("renders the finished non-gallery medical profile", () => {
    renderPortfolio();
    expect(screen.getByTestId("medical-portfolio-shell")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: content.hero.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(content.hero.role)).toBeInTheDocument();
    expect(
      screen.getByText("Exploring Nanomaterials in Medicine"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("WIS Conference - WHO Committee"),
    ).toBeInTheDocument();
  });

  it("renders exactly eight top-level section targets in approved order", () => {
    renderPortfolio();
    const main = screen.getByTestId("medical-main");
    const sectionIds = Array.from(main.children, (element) => element.id);
    expect(sectionIds).toEqual(medicalSectionIds);
    medicalNavigation.forEach((item) => {
      expect(screen.getByTestId(`medical-section-${item.id}`)).toHaveAttribute(
        "aria-labelledby",
        `${item.id}-heading`,
      );
    });
  });

  it("renders the final gallery with every approved image trigger", () => {
    renderPortfolio();
    expect(screen.getByTestId("medical-gallery-grid")).toBeInTheDocument();
    expect(screen.getAllByTestId(/^medical-gallery-item-/)).toHaveLength(18);
    galleryItems.forEach((item) => {
      expect(
        screen.getByTestId(`medical-gallery-item-${item.id}`),
      ).toHaveAttribute("data-content-id", item.id);
    });
  });

  it("opens award evidence in the shared dialog and restores the award trigger", async () => {
    renderPortfolio();
    const award = content.awardGroups[0].awards.find(
      (entry) => entry.evidence,
    )!;
    const galleryItem = galleryItems.find(
      (entry) => entry.asset === award.evidence,
    )!;
    const trigger = screen.getByTestId(`medical-award-evidence-${award.id}`);

    trigger.focus();
    fireEvent.click(trigger);

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveAccessibleName(galleryItem.title);
    expect(screen.getByTestId("medical-gallery-modal-image")).toHaveAttribute(
      "src",
      galleryItem.asset,
    );
    expect(screen.getAllByTestId("medical-gallery-modal")).toHaveLength(1);

    fireEvent.click(screen.getByTestId("medical-gallery-modal-close"));
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
    );
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it("features valedictorian academically and replaces the Gold illustration with evidence", () => {
    renderPortfolio();
    expect(
      screen.getByTestId("medical-gpa-metric-gpa-grade-10"),
    ).toHaveTextContent("9.38 /10");
    const academics = screen.getByTestId("medical-section-academics");
    expect(
      within(academics).getByTestId(
        "medical-award-evidence-american-dual-diploma-valedictorian",
      ),
    ).toBeInTheDocument();
    expect(screen.getByTestId("medical-hero-academic-honor")).toHaveTextContent(
      "Valedictorian",
    );
    expect(screen.getByTestId("medical-hero-academic-honor")).toHaveAttribute(
      "href",
      "#academics",
    );
    expect(
      screen.getByTestId("medical-award-evidence-hkiso-gold-2022-heat"),
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId("medical-award-illustration-hkiso-gold-2022-heat"),
    ).not.toBeInTheDocument();
  });

  it("renders the approved email-only Contact draft form", () => {
    renderPortfolio();
    const contact = screen.getByTestId("medical-section-contact");

    expect(
      within(contact).getByTestId("medical-contact-form"),
    ).toBeInTheDocument();
    expect(within(contact).getByLabelText("Name")).toBeInTheDocument();
    expect(
      within(contact).getByLabelText("Reply-to email"),
    ).toBeInTheDocument();
    expect(within(contact).getByLabelText("Message")).toBeInTheDocument();
    expect(
      within(contact).getByRole("button", { name: /open email draft/i }),
    ).toBeInTheDocument();
    expect(contact).not.toHaveTextContent("student.email@example.com");
    expect(contact).not.toHaveTextContent("+84 XXX XXX XXX");
    expect(contact).not.toHaveTextContent("Phone");
  });

  it("navigates with a plain hash anchor", () => {
    renderPortfolio();
    fireEvent.click(screen.getByTestId("medical-nav-link-science"));
    expect(window.location.hash).toBe("#science");
    expect(window.location.hash).not.toContain("#/");
  });

  it("leaves obsolete layout and template preferences inert", () => {
    window.localStorage.setItem("portfolio-layout-mode", "multi");
    window.localStorage.setItem("portfolio-template-id", "business");
    renderPortfolio();
    expect(screen.queryByText(/portfolio style/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/engineering portfolio/i),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/business showcase/i)).not.toBeInTheDocument();
  });

  it("retains the accessible color-mode control", async () => {
    renderPortfolio();
    const control = screen.getByTestId("medical-nav-theme-toggle");
    expect(control).toHaveAccessibleName("Toggle color mode");
    fireEvent.click(control);
    await waitFor(() => expect(document.documentElement).toHaveClass("dark"));
  });
});
