import { Fragment } from "react";
import {
  AcademicExcellence,
  CallingToMedicine,
  ClosingContact,
  EducationJourney,
  LeadershipAndService,
  MedicalHero,
  ScienceAndAwards,
} from "./content";
import { EvidenceGallery } from "./gallery";
import { content } from "../../data/medical/content";
import {
  medicalSectionIds,
  medicalNavigation,
  type MedicalSectionId,
} from "../../data/medical/navigation";
import type { MedicalLayoutMode } from "../../data/medical/presentation";
import { MedicalSectionLink } from "./MedicalSectionLink";
export function MedicalSectionRenderer({
  layout,
  section,
}: {
  layout: MedicalLayoutMode;
  section: MedicalSectionId;
}) {
  const registry = {
    overview: <MedicalHero hero={content.hero} />,
    calling: <CallingToMedicine narrative={content.narrative} />,
    education: (
      <EducationJourney
        education={content.education}
        academicYears={content.academicYears}
      />
    ),
    academics: (
      <AcademicExcellence
        scores={content.scores}
        scholarship={content.scholarship}
        recognition={
          content.awardGroups.find((g) => g.id === "awards-school-honors")
            ?.awards[0]
        }
      />
    ),
    science: (
      <ScienceAndAwards
        researchProjects={content.researchProjects}
        awardGroups={content.awardGroups.filter(
          (g) => g.id !== "awards-school-honors",
        )}
      />
    ),
    leadership: (
      <LeadershipAndService
        activities={content.activities}
        interests={content.interests}
      />
    ),
    gallery: <EvidenceGallery />,
    contact: <ClosingContact contact={content.contact} />,
  };
  const ids = layout === "full-page" ? medicalSectionIds : [section];
  const index = medicalSectionIds.indexOf(section);
  const next = medicalNavigation[(index + 1) % medicalNavigation.length];
  return (
    <>
      {ids.map((id) => (
        <Fragment key={id}>{registry[id]}</Fragment>
      ))}
      {layout === "section" && (
        <nav
          className="medical-section-pagination"
          aria-label="Section sequence"
        >
          <p>
            {String(index + 1).padStart(2, "0")} / 08 ·{" "}
            {medicalNavigation[index].label}
          </p>
          <MedicalSectionLink
            section={next.id}
            data-testid="medical-next-section"
          >
            {next.label} <span aria-hidden="true">↗</span>
          </MedicalSectionLink>
        </nav>
      )}
    </>
  );
}
