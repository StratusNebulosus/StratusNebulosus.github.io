import type {
  AwardGroup,
  ResearchProjectData,
} from "../../../types/medicalPortfolio";
import { AwardItem, ResearchFeature } from "./ContentPrimitives";
import { MedicalSection } from "./MedicalSection";

type ScienceAndAwardsProps = {
  researchProjects: ResearchProjectData[];
  awardGroups: AwardGroup[];
};

export function ScienceAndAwards({
  researchProjects,
  awardGroups,
}: ScienceAndAwardsProps) {
  return (
    <MedicalSection
      id="science"
      index="05"
      eyebrow="Science and recognition"
      title="My research and science awards"
      introduction="I explore scientific questions through student research and competitions. These projects and awards have helped me turn curiosity into practice."
      tone="accent"
    >
      {researchProjects.length ? (
        <div className="medical-research-list">
          {researchProjects.map((project) => (
            <ResearchFeature key={project.id} project={project} />
          ))}
        </div>
      ) : null}
      <div className="medical-award-groups">
        {awardGroups.map((group) => (
          <section
            key={group.id}
            className="medical-award-group"
            aria-labelledby={`${group.id}-heading`}
            data-content-id={group.id}
          >
            <h3 id={`${group.id}-heading`}>{group.theme}</h3>
            <ul>
              {group.awards.map((award) => (
                <AwardItem key={award.id} award={award} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </MedicalSection>
  );
}
