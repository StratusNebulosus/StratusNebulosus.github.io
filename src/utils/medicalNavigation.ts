import {
  medicalSectionIds,
  type MedicalSectionId,
} from "../data/medical/navigation";
import type { MedicalLayoutMode } from "../data/medical/presentation";
export type MedicalRoute = {
  section: MedicalSectionId;
  layout: MedicalLayoutMode;
  invalid: boolean;
  explicit: boolean;
};
export function getMedicalNavigationHref(
  section: MedicalSectionId,
  layout: MedicalLayoutMode = "full-page",
): string {
  return layout === "section" ? `#/${section}` : `#${section}`;
}
export function parseMedicalRoute(
  hash: string,
  fallback: MedicalLayoutMode = "full-page",
): MedicalRoute {
  if (!hash || hash === "#")
    return {
      section: "overview",
      layout: fallback,
      invalid: false,
      explicit: false,
    };
  const layout = hash.startsWith("#/") ? "section" : "full-page";
  const id = hash.slice(layout === "section" ? 2 : 1);
  const valid = medicalSectionIds.includes(id as MedicalSectionId);
  return {
    section: valid ? (id as MedicalSectionId) : "overview",
    layout,
    invalid: !valid,
    explicit: true,
  };
}
