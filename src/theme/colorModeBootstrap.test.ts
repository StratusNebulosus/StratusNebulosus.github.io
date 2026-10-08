import { afterEach, expect, it, vi } from "vitest";
import { bootstrapColorMode } from "./colorModeBootstrap";
afterEach(() => {
  vi.restoreAllMocks();
  localStorage.clear();
});
it("aligns initial classes, data and color scheme with saved light", () => {
  localStorage.setItem("theme", "light");
  bootstrapColorMode();
  expect(document.documentElement.dataset.colorMode).toBe("light");
  expect(document.documentElement.classList.contains("dark")).toBe(false);
  expect(document.documentElement.style.colorScheme).toBe("light");
});
it("renders dark when storage is invalid and correction is denied", () => {
  localStorage.setItem("theme", "invalid");
  vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
    throw Error("denied");
  });
  bootstrapColorMode();
  expect(document.documentElement.dataset.colorMode).toBe("dark");
  expect(document.documentElement.classList.contains("dark")).toBe(true);
});
