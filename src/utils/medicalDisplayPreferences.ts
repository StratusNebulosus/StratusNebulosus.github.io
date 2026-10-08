import {
  isMedicalLayout,
  isMedicalStyle,
  type MedicalLayoutMode,
  type MedicalStyleId,
} from "../data/medical/presentation";
export type MedicalDisplayPreferences = {
  style: MedicalStyleId;
  layout: MedicalLayoutMode;
};
export function readMedicalDisplayPreferences(): MedicalDisplayPreferences {
  const read = (key: string): unknown => {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  };
  const style = read("medical-style"),
    layout = read("medical-layout");
  return {
    style: isMedicalStyle(style) ? style : "notebook",
    layout: isMedicalLayout(layout) ? layout : "full-page",
  };
}
export function persistMedicalDisplayPreference(
  key: "medical-style" | "medical-layout",
  value: MedicalStyleId | MedicalLayoutMode,
): void {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* Selection remains usable without persistence. */
  }
}
