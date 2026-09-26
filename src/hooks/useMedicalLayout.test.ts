import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { medicalSectionIds } from "../data/medical/navigation";
import {
  getMedicalNavigationHref,
  navigateToMedicalSection,
  useMedicalLayout,
} from "./useMedicalLayout";

beforeEach(() => {
  window.history.replaceState(null, "", "/");
});

describe("medical single-page layout", () => {
  it("creates a plain GitHub Pages-safe anchor", () => {
    expect(getMedicalNavigationHref("science")).toBe("#science");
  });

  it("updates the hash and scrolls the matching section", () => {
    const section = document.createElement("section");
    section.id = "education";
    section.scrollIntoView = vi.fn();
    document.body.appendChild(section);

    navigateToMedicalSection("education");

    expect(window.location.hash).toBe("#education");
    expect(section.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
    section.remove();
  });

  it("exposes only active section, href creation, and navigation", () => {
    const { result } = renderHook(() =>
      useMedicalLayout(medicalSectionIds, "leadership"),
    );

    expect(result.current.activeSection).toBe("leadership");
    expect(result.current.getNavigationHref("contact")).toBe("#contact");
    expect(result.current).not.toHaveProperty("layoutMode");
    expect(result.current).not.toHaveProperty("toggleLayoutMode");

    act(() => result.current.navigateToSection("contact"));
    expect(window.location.hash).toBe("#contact");
  });
});
