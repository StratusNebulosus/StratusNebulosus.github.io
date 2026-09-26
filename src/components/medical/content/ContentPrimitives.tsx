import { isAllowedAsset } from "../../../data/medical/assetAllowlist";
import type {
  ActivityEntryData,
  AwardEntryData,
  ResearchProjectData,
  ScoreEntryData,
  TimelineEntryData,
} from "../../../types/medicalPortfolio";
import { useEvidencePreview } from "../gallery/EvidencePreviewProvider";

export function ScoreCard({ score }: { score: ScoreEntryData }) {
  return (
    <article className="medical-score-card" data-content-id={score.id}>
      <p className="medical-card-label">{score.label}</p>
      <p className="medical-score-value">{score.value}</p>
      {score.context ? <p className="medical-card-context">{score.context}</p> : null}
    </article>
  );
}

export function TimelineEntry({ entry }: { entry: TimelineEntryData }) {
  return (
    <li className="medical-timeline-entry" data-content-id={entry.id}>
      <p className="medical-card-label">{entry.period}</p>
      <h3>{entry.milestone}</h3>
      <p className="medical-timeline-institution">{entry.institution}</p>
      <p>{entry.description}</p>
    </li>
  );
}

export function ResearchFeature({ project }: { project: ResearchProjectData }) {
  return (
    <article className="medical-research-feature" data-content-id={project.id}>
      <div className="medical-research-heading">
        <p className="medical-card-label">Student research · {project.period}</p>
        <h3>{project.title}</h3>
        <p>{project.context}</p>
      </div>
      <div className="medical-research-columns">
        <div>
          <h4>Methods explored</h4>
          <ul>
            {project.methods.map((method) => <li key={method}>{method}</li>)}
          </ul>
        </div>
        <div>
          <h4>Project-reported observations</h4>
          <ul>
            {project.reportedObservations.map((observation) => (
              <li key={observation}>{observation}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function AwardItem({ award }: { award: AwardEntryData }) {
  const { failedItemIds, findItemByAsset, markImageFailed, openItem } =
    useEvidencePreview();
  const galleryItem = findItemByAsset(award.evidence);
  const showEvidence = Boolean(
    award.evidence && award.evidenceAltText && isAllowedAsset(award.evidence),
  ) && galleryItem !== null && !failedItemIds.has(galleryItem.id);
  const showIllustration = Boolean(
    award.illustration &&
      award.illustrationAltText &&
      award.illustrationDisclosure &&
      isAllowedAsset(award.illustration),
  );

  return (
    <li className="medical-award-item" data-content-id={award.id}>
      {showEvidence && galleryItem ? (
        <div className="medical-award-evidence">
          <img
            src={galleryItem.asset}
            alt={award.evidenceAltText}
            width="720"
            height="480"
            loading="lazy"
            decoding="async"
            style={{ objectPosition: galleryItem.thumbnailPosition }}
            onError={() => markImageFailed(galleryItem.id)}
          />
          <button
            type="button"
            className="medical-award-evidence-action"
            aria-label={`View evidence for ${award.title}`}
            data-testid={`medical-award-evidence-${award.id}`}
            onClick={(event) => openItem(galleryItem.id, event.currentTarget)}
          >
            View evidence
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      ) : showIllustration ? (
        <figure
          className="medical-award-illustration"
          data-testid={`medical-award-illustration-${award.id}`}
        >
          <img
            src={award.illustration}
            alt={award.illustrationAltText}
            width="720"
            height="480"
            loading="lazy"
            decoding="async"
          />
          <figcaption>{award.illustrationDisclosure}</figcaption>
        </figure>
      ) : (
        <div
          className="medical-award-evidence-unavailable"
          role="status"
          data-testid={`medical-award-evidence-unavailable-${award.id}`}
        >
          Evidence image not available
        </div>
      )}
      <div className="medical-award-copy">
        <p className="medical-card-label">{award.year}</p>
        <h4>{award.title}</h4>
        {award.organization ? <p className="medical-card-context">{award.organization}</p> : null}
        <p>{award.description}</p>
      </div>
    </li>
  );
}

export function ActivityCard({ activity }: { activity: ActivityEntryData }) {
  return (
    <article
      className="medical-activity-card"
      data-category={activity.category}
      data-content-id={activity.id}
    >
      <p className="medical-card-label">{activity.category} · {activity.period}</p>
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
    </article>
  );
}
