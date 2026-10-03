import {
  AcademicExcellence,
  CallingToMedicine,
  ClosingContact,
  EducationJourney,
  LeadershipAndService,
  MedicalHero,
  ScienceAndAwards,
} from "./components/medical/content";
import {
  EvidenceGallery,
  EvidencePreviewProvider,
} from "./components/medical/gallery";
import { MedicalShell } from "./components/medical/MedicalShell";
import { content } from "./data/medical/content";
import { galleryItems } from "./data/medical/gallery";
import {
  medicalNavigation,
  medicalSectionIds,
  type MedicalSectionId,
} from "./data/medical/navigation";
import { useMedicalLayout } from "./hooks/useMedicalLayout";
import { useActiveSection } from "./utils/scroll";

export function PortfolioApp() {
  const scrollActiveSection = useActiveSection(
    medicalSectionIds,
  ) as MedicalSectionId;
  const { activeSection, getNavigationHref, navigateToSection } =
    useMedicalLayout(medicalSectionIds, scrollActiveSection);

  return (
    <MedicalShell
      activeSection={activeSection}
      getNavigationHref={getNavigationHref}
      navigationItems={medicalNavigation}
      onNavigate={navigateToSection}
    >
      <EvidencePreviewProvider items={galleryItems}>
        <MedicalHero hero={content.hero} />
        <CallingToMedicine narrative={content.narrative} />
        <EducationJourney
          education={content.education}
          academicYears={content.academicYears}
        />
        <AcademicExcellence
          scores={content.scores}
          scholarship={content.scholarship}
          recognition={
            content.awardGroups.find(
              (group) => group.id === "awards-school-honors",
            )?.awards[0]
          }
        />
        <ScienceAndAwards
          researchProjects={content.researchProjects}
          awardGroups={content.awardGroups.filter(
            (group) => group.id !== "awards-school-honors",
          )}
        />
        <LeadershipAndService
          activities={content.activities}
          interests={content.interests}
        />
        <EvidenceGallery />
        <ClosingContact contact={content.contact} />
      </EvidencePreviewProvider>
    </MedicalShell>
  );
}

function App() {
  return <PortfolioApp />;
}

export default App;
