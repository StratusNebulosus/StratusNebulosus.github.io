import type {
  AcademicYearPerformance,
  TimelineEntryData,
} from "../../../types/medicalPortfolio";
import { TimelineEntry } from "./ContentPrimitives";
import { MedicalSection } from "./MedicalSection";

type EducationJourneyProps = {
  education: TimelineEntryData[];
  academicYears: AcademicYearPerformance[];
};

export function EducationJourney({
  education,
  academicYears,
}: EducationJourneyProps) {
  return (
    <MedicalSection
      id="education"
      index="03"
      eyebrow="Education journey"
      title="My education"
      introduction="My journey began at Wellspring, where I built a strong foundation in science. Today, I am continuing that journey at Thai Nguyen University of Medicine and Pharmacy."
    >
      <ol className="medical-timeline">
        {education.map((entry) => (
          <TimelineEntry key={entry.id} entry={entry} />
        ))}
      </ol>
      {academicYears.length ? (
        <div
          className="medical-gpa-panel"
          aria-labelledby="gpa-progression-heading"
        >
          <div>
            <p className="medical-card-label">Academic consistency</p>
            <h3 id="gpa-progression-heading">Grade 10-12 GPA progression</h3>
          </div>
          <ol className="medical-gpa-list">
            {academicYears.map((year) => (
              <li key={year.id} data-content-id={year.id}>
                <p>{year.grade}</p>
                <strong
                  className="medical-gpa-metric"
                  data-testid={`medical-gpa-metric-${year.id}`}
                >
                  <span>{year.gpa}</span> <span>{year.scale}</span>
                </strong>
                <small>{year.academicYear}</small>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </MedicalSection>
  );
}
