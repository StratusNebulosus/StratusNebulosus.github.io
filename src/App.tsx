import { MedicalShell } from "./components/medical/MedicalShell";
import { MedicalNavigationContext } from "./components/medical/MedicalNavigationContext";
import { MedicalSectionRenderer } from "./components/medical/MedicalSectionRenderer";
import { EvidencePreviewProvider } from "./components/medical/gallery";
import { galleryItems } from "./data/medical/gallery";
import {
  medicalNavigation,
  medicalSectionIds,
  type MedicalSectionId,
} from "./data/medical/navigation";
import { useMedicalDisplayPreferences } from "./hooks/useMedicalDisplayPreferences";
import { useMedicalLayout } from "./hooks/useMedicalLayout";
import { parseMedicalRoute } from "./utils/medicalNavigation";
import { useActiveSection } from "./utils/scroll";
export function PortfolioApp() {
  const preferences = useMedicalDisplayPreferences();
  const tracking =
    parseMedicalRoute(window.location.hash, preferences.layout).layout ===
    "full-page";
  const scrollActive = useActiveSection(
    medicalSectionIds,
    170,
    tracking,
  ) as MedicalSectionId;
  const nav = useMedicalLayout(medicalSectionIds, scrollActive, {
    savedLayout: preferences.layout,
    onLayoutChange: preferences.setLayout,
  });
  return (
    <MedicalNavigationContext.Provider value={nav}>
      <EvidencePreviewProvider
        items={galleryItems}
        presentationKey={`${preferences.style}:${nav.layout}:${nav.viewRevision}`}
      >
        <MedicalShell
          activeSection={nav.activeSection}
          getNavigationHref={nav.getNavigationHref}
          navigationItems={medicalNavigation}
          onNavigate={nav.navigateToSection}
          style={preferences.style}
          layout={nav.layout}
          onStyleChange={preferences.setStyle}
          onLayoutChange={nav.setLayout}
        >
          <MedicalSectionRenderer
            layout={nav.layout}
            section={nav.activeSection}
          />
        </MedicalShell>
      </EvidencePreviewProvider>
    </MedicalNavigationContext.Provider>
  );
}
export default function App() {
  return <PortfolioApp />;
}
