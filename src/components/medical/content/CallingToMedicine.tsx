import type { NarrativeSection } from "../../../types/medicalPortfolio";
import { MedicalSection } from "./MedicalSection";

export function CallingToMedicine({ narrative }: { narrative: NarrativeSection }) {
  return (
    <MedicalSection
      id="calling"
      index="02"
      eyebrow="Purpose"
      title="A thoughtful calling to medicine"
      introduction="A motivation grounded in learning and service, described with a clear distinction between aspiration and experience."
      tone="surface"
    >
      <div className="medical-narrative-grid">
        <article className="medical-narrative-panel medical-narrative-panel--aspiration">
          <p className="medical-card-label">Aspiration</p>
          <h3>Where the path is leading</h3>
          {narrative.aspirationParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </article>
        <article className="medical-narrative-panel">
          <p className="medical-card-label">Verified foundation</p>
          <h3>What has shaped the journey</h3>
          {narrative.experienceParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </article>
      </div>
    </MedicalSection>
  );
}
