import { expect, it, vi, afterEach } from "vitest";
import {
  focusMedicalSection,
  cancelMedicalFocus,
  scheduleMedicalFocus,
} from "./medicalFocus";
afterEach(() => {
  cancelMedicalFocus();
  document.body.innerHTML = "";
  vi.restoreAllMocks();
});
it("uses mounted main when a target heading is absent", () => {
  document.body.innerHTML = '<main id="main-content"></main>';
  focusMedicalSection("science");
  expect(document.activeElement?.id).toBe("main-content");
});
it("cancels superseded pending focus", () => {
  vi.spyOn(window, "requestAnimationFrame").mockReturnValue(15);
  const cancel = vi.spyOn(window, "cancelAnimationFrame");
  scheduleMedicalFocus("science");
  scheduleMedicalFocus("education");
  expect(cancel).toHaveBeenCalledWith(15);
});
