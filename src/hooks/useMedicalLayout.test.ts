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

  it("exposes active section, href creation, and navigation", () => {
    const { result } = renderHook(() =>
      useMedicalLayout(medicalSectionIds, "leadership"),
    );

    expect(result.current.activeSection).toBe("leadership");
    expect(result.current.getNavigationHref("contact")).toBe("#contact");
    expect(result.current.layout).toBe("full-page");
    expect(result.current).not.toHaveProperty("toggleLayoutMode");

    act(() => result.current.navigateToSection("contact"));
    expect(window.location.hash).toBe("#contact");
  });
});

it("switches layouts at the current section and follows history", () => {
  const { result } = renderHook(() =>
    useMedicalLayout(medicalSectionIds, "science"),
  );
  act(() => result.current.setLayout("section"));
  expect(window.location.hash).toBe("#/science");
  expect(result.current.activeSection).toBe("science");
  act(() => {
    window.history.replaceState(null, "", "#education");
    window.dispatchEvent(new PopStateEvent("popstate"));
  });
  expect(result.current.layout).toBe("full-page");
});
