import type {
  ScholarshipData,
  ScoreEntryData,
} from "../../../types/medicalPortfolio";
import { ScoreCard } from "./ContentPrimitives";
import { MedicalSection } from "./MedicalSection";

type AcademicExcellenceProps = {
  scores: ScoreEntryData[];
  scholarship: ScholarshipData;
};

export function AcademicExcellence({ scores, scholarship }: AcademicExcellenceProps) {
  return (
    <MedicalSection
      id="academics"
      index="04"
      eyebrow="Academic excellence"
      title="Measured results, clearly contextualized"
      introduction="Current standardized results and advanced-subject outcomes are presented separately from an earlier merit-scholarship basis."
      tone="surface"
    >
      <div className="medical-score-grid">
        {scores.map((score) => <ScoreCard key={score.id} score={score} />)}
      </div>
      <article className="medical-scholarship" data-content-id={scholarship.id}>
        <div>
          <p className="medical-card-label">Merit recognition · {scholarship.academicYear}</p>
          <h3>{scholarship.title}</h3>
          <p>{scholarship.basis}</p>
        </div>
        <strong>{scholarship.amount}</strong>
      </article>
    </MedicalSection>
  );
}
