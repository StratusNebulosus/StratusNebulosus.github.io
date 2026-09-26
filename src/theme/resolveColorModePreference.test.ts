import { afterEach, describe, expect, it, vi } from "vitest";

import { resolveColorModePreference } from "./resolveColorModePreference";

describe("resolveColorModePreference (BR-5)", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    window.localStorage.clear();
  });

  it("returns the persisted value when available", () => {
    window.localStorage.setItem("theme", "dark");

    expect(resolveColorModePreference()).toEqual({
      value: "dark",
      source: "user-selected",
    });
  });

  it("falls back to the system preference when the persisted read throws", () => {
    vi.spyOn(window.localStorage.__proto__, "getItem").mockImplementation(() => {
      throw new Error("storage unavailable");
    });
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
    } as MediaQueryList);

    expect(resolveColorModePreference()).toEqual({
      value: "dark",
      source: "system-default",
    });
  });

  it("falls back to light when neither persistence nor system preference is available", () => {
    vi.spyOn(window, "matchMedia").mockImplementation(() => {
      throw new Error("matchMedia unavailable");
    });

    expect(resolveColorModePreference()).toEqual({
      value: "light",
      source: "system-default",
    });
  });
});
