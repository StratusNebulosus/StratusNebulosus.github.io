import { beforeEach, afterEach, expect, it, vi } from "vitest";
import {
  readMedicalDisplayPreferences,
  persistMedicalDisplayPreference,
} from "./medicalDisplayPreferences";
beforeEach(() => localStorage.clear());
afterEach(() => vi.restoreAllMocks());
it("defaults and validates each saved value independently", () => {
  expect(readMedicalDisplayPreferences()).toEqual({
    style: "notebook",
    layout: "full-page",
  });
  localStorage.setItem("medical-style", "unknown");
  localStorage.setItem("medical-layout", "section");
  expect(readMedicalDisplayPreferences()).toEqual({
    style: "notebook",
    layout: "section",
  });
  localStorage.setItem("medical-style", "casebook");
  expect(readMedicalDisplayPreferences().style).toBe("casebook");
});
it("recovers from storage denial on reads and writes", () => {
  vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
    throw Error("denied");
  });
  vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
    throw Error("denied");
  });
  expect(readMedicalDisplayPreferences()).toEqual({
    style: "notebook",
    layout: "full-page",
  });
  expect(() =>
    persistMedicalDisplayPreference("medical-style", "casebook"),
  ).not.toThrow();
});
