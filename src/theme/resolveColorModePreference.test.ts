import { afterEach, expect, it, vi } from "vitest";
import { resolveColorModePreference } from "./resolveColorModePreference";
afterEach(() => {
  vi.restoreAllMocks();
  localStorage.clear();
});
it("honors saved light", () => {
  localStorage.setItem("theme", "light");
  expect(resolveColorModePreference()).toEqual({
    value: "light",
    source: "user-selected",
  });
});
it.each([null, "system", "unknown"])(
  "uses product dark for %s regardless of OS",
  (value) => {
    localStorage.clear();
    if (value) localStorage.setItem("theme", value);
    expect(resolveColorModePreference()).toEqual({
      value: "dark",
      source: "product-default",
    });
  },
);
it("recovers from blocked storage", () => {
  vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
    throw Error("denied");
  });
  expect(resolveColorModePreference().value).toBe("dark");
});
