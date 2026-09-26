import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import fc from "fast-check";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Provider } from "../ui/provider";
import {
  medicalNavigation,
  type MedicalSectionId,
} from "../../data/medical/navigation";
import { medicalSectionIdArbitrary } from "../../test/arbitraries/medicalNavigation";
import { MedicalShell } from "./MedicalShell";

afterEach(() => cleanup());

const renderShell = (activeSection: MedicalSectionId = "overview") => {
  const onNavigate = vi.fn();
  const result = render(
    <Provider>
      <MedicalShell
        activeSection={activeSection}
        getNavigationHref={(sectionId) => `#${sectionId}`}
        navigationItems={medicalNavigation}
        onNavigate={onNavigate}
      >
        <section id="overview">Overview body</section>
      </MedicalShell>
    </Provider>,
  );

  return { ...result, onNavigate };
};

describe("MedicalShell", () => {
  it("places the skip link before navigation and main content", () => {
    renderShell();
    const shell = screen.getByTestId("medical-portfolio-shell");

    expect(shell.firstElementChild).toBe(screen.getByTestId("medical-skip-link"));
    expect(screen.getByTestId("medical-skip-link")).toHaveAttribute(
      "href",
      "#main-content",
    );
    expect(screen.getByRole("navigation", { name: "Medical portfolio sections" })).toBeInTheDocument();
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
  });

  it("renders all approved links with one active desktop location", () => {
    renderShell("science");

    medicalNavigation.forEach((item) => {
      expect(screen.getByTestId(`medical-nav-link-${item.id}`)).toHaveAttribute(
        "href",
        `#${item.id}`,
      );
    });
    expect(screen.getByTestId("medical-nav-link-science")).toHaveAttribute(
      "aria-current",
      "location",
    );
    expect(
      screen.getAllByRole("link", { current: "location" }),
    ).toHaveLength(1);
  });

  it("navigates from desktop links without a layout or style selector", () => {
    const { onNavigate } = renderShell();

    fireEvent.click(screen.getByTestId("medical-nav-link-education"));

    expect(onNavigate).toHaveBeenCalledWith("education");
    expect(screen.queryByText(/multi-page/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/portfolio style/i)).not.toBeInTheDocument();
    expect(screen.getByTestId("medical-nav-theme-toggle")).toBeInTheDocument();
  });

  it("opens the accessible mobile drawer and restores focus after closing", async () => {
    renderShell("leadership");
    const toggle = screen.getByTestId("medical-nav-menu-toggle");

    toggle.focus();
    fireEvent.click(toggle);
    const close = await screen.findByTestId("medical-nav-menu-close");
    expect(close).toBeInTheDocument();
    expect(screen.getByTestId("medical-nav-mobile-link-leadership")).toHaveAttribute(
      "aria-current",
      "location",
    );

    close.focus();
    expect(close).toHaveFocus();
    fireEvent.click(close);

    await waitFor(() => expect(toggle).toHaveFocus());
  });

  it("keeps rendered active state exclusive for every generated section", () => {
    fc.assert(
      fc.property(medicalSectionIdArbitrary, (activeSection) => {
        renderShell(activeSection);

        const currentDesktopLinks = screen
          .getAllByTestId(/^medical-nav-link-/)
          .filter((link) => link.getAttribute("aria-current") === "location");

        expect(currentDesktopLinks).toHaveLength(1);
        expect(currentDesktopLinks[0]).toHaveAttribute(
          "data-testid",
          `medical-nav-link-${activeSection}`,
        );
        cleanup();
      }),
      { numRuns: 16 },
    );
  });
});
