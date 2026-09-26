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
        <h1 id="overview-heading">{hero.name}</h1>
        <p className="medical-hero-role">{hero.role}</p>
        <p className="medical-hero-statement">{hero.positioningStatement}</p>
        <ul className="medical-hero-highlights" aria-label="Academic highlights">
          {hero.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        <div className="medical-hero-actions">
          <a
            className="medical-action medical-action--primary"
            href="#calling"
            data-testid="medical-hero-calling-link"
          >
            Explore my path
          </a>
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
      <div className="medical-pulse-line" aria-hidden="true" />
    </section>
  );
}
