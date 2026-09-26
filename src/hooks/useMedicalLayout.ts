import { useCallback } from "react";

import type { MedicalSectionId } from "../data/medical/navigation";
import { scrollToSection } from "../utils/scroll";

export type MedicalLayoutState = {
  activeSection: MedicalSectionId;
  getNavigationHref: (sectionId: MedicalSectionId) => string;
  navigateToSection: (sectionId: MedicalSectionId) => void;
};

export const getMedicalNavigationHref = (
  sectionId: MedicalSectionId,
): `#${MedicalSectionId}` => `#${sectionId}`;

export const navigateToMedicalSection = (
  sectionId: MedicalSectionId,
): void => {
  if (typeof window !== "undefined") {
    window.history.pushState(null, "", getMedicalNavigationHref(sectionId));
  }

  scrollToSection(sectionId);
};

export const useMedicalLayout = (
  enabledSectionIds: readonly MedicalSectionId[],
  scrollActiveSection: MedicalSectionId,
): MedicalLayoutState => {
  const fallbackSection = enabledSectionIds[0] ?? "overview";
  const activeSection = enabledSectionIds.includes(scrollActiveSection)
    ? scrollActiveSection
    : fallbackSection;
  const navigateToSection = useCallback((sectionId: MedicalSectionId) => {
    navigateToMedicalSection(sectionId);
  }, []);

  return {
    activeSection,
    getNavigationHref: getMedicalNavigationHref,
    navigateToSection,
  };
};
