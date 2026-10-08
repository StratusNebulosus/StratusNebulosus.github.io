import type { MedicalSectionId } from "../data/medical/navigation";
import { scrollToSection } from "./scroll";
let pendingFrame = 0;
export function cancelMedicalFocus(): void {
  if (pendingFrame) cancelAnimationFrame(pendingFrame);
  pendingFrame = 0;
}
export function focusMedicalSection(section: MedicalSectionId): void {
  const target =
    document.getElementById(`${section}-heading`) ??
    document.getElementById("main-content");
  if (target) {
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
  }
}
export function scheduleMedicalFocus(
  section: MedicalSectionId,
  focus = true,
): () => void {
  cancelMedicalFocus();
  let attempts = 0;
  const complete = () => {
    if (document.querySelector('[role="dialog"]')) {
      if (attempts++ < 120) pendingFrame = requestAnimationFrame(complete);
      else pendingFrame = 0;
      return;
    }
    pendingFrame = 0;
    scrollToSection(section);
    if (focus) focusMedicalSection(section);
  };
  pendingFrame = requestAnimationFrame(complete);
  return cancelMedicalFocus;
}
