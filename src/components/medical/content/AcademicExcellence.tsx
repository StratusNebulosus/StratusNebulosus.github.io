import type {
  AwardEntryData,
  ScholarshipData,
  ScoreEntryData,
} from "../../../types/medicalPortfolio";
import { AwardItem, ScoreCard } from "./ContentPrimitives";
import { MedicalSection } from "./MedicalSection";

type AcademicExcellenceProps = {
  scores: ScoreEntryData[];
  scholarship: ScholarshipData;
  recognition?: AwardEntryData;
};

export function AcademicExcellence({
  scores,
  scholarship,
  recognition,
}: AcademicExcellenceProps) {
  return (
    <MedicalSection
      id="academics"
      index="04"
      eyebrow="Academic excellence"
      title="Academic distinction, sustained through discipline"
      introduction="Valedictorian honors in Wellspring's American Dual Diploma Program crown a record of strong standardized results, advanced-subject outcomes, and merit recognition."
      tone="surface"
    >
      {recognition ? (
        <div className="medical-academic-honor">
          <p className="medical-card-label">
            Academic distinction · Class of 2026
          </p>
          <ul aria-label="Featured academic achievement">
            <AwardItem award={recognition} />
          </ul>
        </div>
      ) : null}
      <div className="medical-score-grid">
        {scores.map((score) => (
          <ScoreCard key={score.id} score={score} />
        ))}
      </div>
      <article className="medical-scholarship" data-content-id={scholarship.id}>
        <div>
          <p className="medical-card-label">
            Merit recognition · {scholarship.academicYear}
          </p>
          <h3>{scholarship.title}</h3>
          <p>{scholarship.basis}</p>
        </div>
        <strong>{scholarship.amount}</strong>
      </article>
    </MedicalSection>
  );
}
