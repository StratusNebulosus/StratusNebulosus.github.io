import type { NarrativeSection } from "../../../types/medicalPortfolio";
import { MedicalSection } from "./MedicalSection";

export function CallingToMedicine({
  narrative,
}: {
  narrative: NarrativeSection;
}) {
  return (
    <MedicalSection
      id="calling"
      index="02"
      eyebrow="Purpose"
      title="Why I chose medicine"
      introduction="I want to bring scientific curiosity and compassion together. Here is what draws me to medicine and the experiences that have shaped my path."
      tone="surface"
    >
      <div className="medical-narrative-grid">
        <article className="medical-narrative-panel medical-narrative-panel--aspiration">
          <p className="medical-card-label">Aspiration</p>
          <h3>What I hope to contribute</h3>
          {narrative.aspirationParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
        <article className="medical-narrative-panel">
          <p className="medical-card-label">My experiences</p>
          <h3>What has shaped my journey</h3>
          {narrative.experienceParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </div>
    </MedicalSection>
  );
}
