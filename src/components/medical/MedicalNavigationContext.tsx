import { createContext, useContext } from "react";
import type { MedicalSectionId } from "../../data/medical/navigation";
import type { MedicalLayoutMode } from "../../data/medical/presentation";
type Navigation = {
  activeSection?: MedicalSectionId;
  layout: MedicalLayoutMode;
  getNavigationHref: (section: MedicalSectionId) => string;
  navigateToSection: (section: MedicalSectionId) => void;
};
export const MedicalNavigationContext = createContext<Navigation | null>(null);
export function useMedicalNavigation() {
  return useContext(MedicalNavigationContext);
}
