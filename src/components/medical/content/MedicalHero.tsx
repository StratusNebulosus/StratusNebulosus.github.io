import { MedicalSectionLink } from "../MedicalSectionLink";
import { isAllowedAsset } from "../../../data/medical/assetAllowlist";
import type { HeroContent } from "../../../types/medicalPortfolio";

export function MedicalHero({ hero }: { hero: HeroContent }) {
  const showPortrait = isAllowedAsset(hero.portrait);
  const showCv = isAllowedAsset(hero.cvDownload.asset);

  return (
    <section
      id="overview"
      className="medical-hero"
      aria-labelledby="overview-heading"
      data-testid="medical-section-overview"
    >
      <div className="medical-hero-copy">
        <p className="medical-hero-eyebrow">{hero.eyebrow}</p>
        <h1 id="overview-heading" tabIndex={-1}>
          {hero.name}
        </h1>
        <p className="medical-hero-role">{hero.role}</p>
        {hero.academicHonor ? (
          <MedicalSectionLink
            className="medical-hero-honor"
            section="academics"
            data-testid="medical-hero-academic-honor"
          >
            {hero.academicHonor}
            <span aria-hidden="true">↗</span>
          </MedicalSectionLink>
        ) : null}
        <p className="medical-hero-statement">{hero.positioningStatement}</p>
        <ul
          className="medical-hero-highlights"
          aria-label="Academic highlights"
        >
          {hero.highlights.map((highlight) => (
            <li key={highlight}>
              <span>{highlight.split(" ").slice(0, -1).join(" ")}</span>{" "}
              <strong>{highlight.split(" ").at(-1)}</strong>
            </li>
          ))}
        </ul>
        <div className="medical-hero-actions">
          <MedicalSectionLink
            className="medical-action medical-action--primary"
            section="calling"
            data-testid="medical-hero-calling-link"
          >
            Explore my path
          </MedicalSectionLink>
          {showCv ? (
            <a
              className="medical-action medical-action--secondary"
              href={hero.cvDownload.asset}
              download={hero.cvDownload.fileName}
              aria-label={hero.cvDownload.ariaLabel}
              data-testid="medical-hero-cv-download"
            >
              {hero.cvDownload.label}
              <span aria-hidden="true">↓</span>
            </a>
          ) : null}
        </div>
      </div>
      {showPortrait ? (
        <figure className="medical-hero-portrait">
          <div className="medical-hero-image-frame">
            <img
              src={hero.portrait}
              alt={hero.portraitAltText}
              width="920"
              height="1120"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <figcaption>
            <span aria-hidden="true">01</span>
            Curiosity · discipline · compassion
          </figcaption>
        </figure>
      ) : null}
      <div className="medical-cover-index" aria-hidden="true">
        01 / OVERVIEW
      </div>
    </section>
  );
}
