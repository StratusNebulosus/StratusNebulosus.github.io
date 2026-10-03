import type {
  ActivityEntryData,
  InterestEntry,
} from "../../../types/medicalPortfolio";
import { ActivityCard } from "./ContentPrimitives";
import { MedicalSection } from "./MedicalSection";

type LeadershipAndServiceProps = {
  activities: ActivityEntryData[];
  interests: InterestEntry[];
};

export function LeadershipAndService({
  activities,
  interests,
}: LeadershipAndServiceProps) {
  return (
    <MedicalSection
      id="leadership"
      index="06"
      eyebrow="Leadership and service"
      title="How I lead and contribute"
      introduction="Through teamwork, conferences, and community projects, I put what I learn into action and contribute to the people around me."
    >
      <div className="medical-activity-grid">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
      {interests.length ? (
        <aside
          className="medical-interests"
          aria-labelledby="interests-heading"
        >
          <p className="medical-card-label">Beyond the classroom</p>
          <h3 id="interests-heading">What I enjoy beyond my studies</h3>
          <ul className="medical-interest-grid">
            {interests.map((interest) => (
              <li key={interest.id} data-content-id={interest.id}>
                <img
                  src={interest.image}
                  alt={interest.imageAltText}
                  width="720"
                  height="480"
                  loading="lazy"
                  decoding="async"
                />
                <span>{interest.label}</span>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </MedicalSection>
  );
}
