import { act, renderHook, cleanup } from "@testing-library/react";
import { beforeEach, afterEach, expect, it, vi } from "vitest";
import { useMedicalDisplayPreferences } from "./useMedicalDisplayPreferences";
beforeEach(() => localStorage.clear());
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
it("changes live preferences even when writes fail", () => {
  vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
    throw Error("denied");
  });
  const { result } = renderHook(useMedicalDisplayPreferences);
  act(() => {
    result.current.setStyle("casebook");
    result.current.setLayout("section");
  });
  expect(result.current.style).toBe("casebook");
  expect(result.current.layout).toBe("section");
});
it("persists choices for a later mount", () => {
  const first = renderHook(useMedicalDisplayPreferences);
  act(() => first.result.current.setStyle("casebook"));
  first.unmount();
  expect(renderHook(useMedicalDisplayPreferences).result.current.style).toBe(
    "casebook",
  );
});
