import { useCallback, useEffect, useState } from "react";
import type { MedicalSectionId } from "../data/medical/navigation";
import type { MedicalLayoutMode } from "../data/medical/presentation";
import {
  parseMedicalRoute,
  getMedicalNavigationHref,
} from "../utils/medicalNavigation";
import { scheduleMedicalFocus } from "../utils/medicalFocus";
import { scrollToSection } from "../utils/scroll";
export { getMedicalNavigationHref } from "../utils/medicalNavigation";
export const navigateToMedicalSection = (section: MedicalSectionId): void => {
  window.history.pushState(null, "", getMedicalNavigationHref(section));
  scrollToSection(section);
};
type Options = {
  savedLayout?: MedicalLayoutMode;
  onLayoutChange?: (layout: MedicalLayoutMode) => void;
};
export function useMedicalLayout(
  enabledIds: readonly MedicalSectionId[],
  scrollActiveSection: MedicalSectionId,
  options: Options = {},
) {
  const [fallback] = useState(options.savedLayout ?? "full-page");
  const [view, setView] = useState(() => ({
    ...parseMedicalRoute(window.location.hash, fallback),
    revision: 0,
  }));
  const activeSection =
    view.layout === "section"
      ? view.section
      : enabledIds.includes(scrollActiveSection)
        ? scrollActiveSection
        : "overview";
  useEffect(() => {
    const adopt = () =>
      setView((current) => ({
        ...parseMedicalRoute(window.location.hash, fallback),
        revision: current.revision + 1,
      }));
    window.addEventListener("popstate", adopt);
    window.addEventListener("hashchange", adopt);
    return () => {
      window.removeEventListener("popstate", adopt);
      window.removeEventListener("hashchange", adopt);
    };
  }, [fallback]);
  useEffect(() => {
    if (view.invalid)
      window.history.replaceState(
        null,
        "",
        getMedicalNavigationHref(view.section, view.layout),
      );
    if (view.explicit || view.layout === "section" || view.revision > 0)
      return scheduleMedicalFocus(
        view.section,
        view.layout === "section" || view.revision > 0,
      );
  }, [view.section, view.layout, view.revision, view.invalid, view.explicit]);
  const navigateToSection = useCallback(
    (section: MedicalSectionId) => {
      if (!enabledIds.includes(section)) return;
      const href = getMedicalNavigationHref(section, view.layout);
      if (window.location.hash !== href)
        window.history.pushState(null, "", href);
      setView((current) => ({
        ...current,
        section,
        invalid: false,
        explicit: true,
        revision: current.revision + 1,
      }));
    },
    [enabledIds, view.layout],
  );
  const setLayout = (layout: MedicalLayoutMode) => {
    options.onLayoutChange?.(layout);
    const href = getMedicalNavigationHref(activeSection, layout);
    if (window.location.hash !== href) window.history.pushState(null, "", href);
    setView((current) => ({
      ...current,
      section: activeSection,
      layout,
      invalid: false,
      explicit: true,
      revision: current.revision + 1,
    }));
  };
  return {
    activeSection,
    layout: view.layout,
    viewRevision: view.revision,
    setLayout,
    navigateToSection,
    getNavigationHref: (section: MedicalSectionId) =>
      getMedicalNavigationHref(section, view.layout),
  };
}
