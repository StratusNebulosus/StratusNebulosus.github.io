import type { ReactNode } from "react";

import type { MedicalSectionId } from "../../../data/medical/navigation";

type MedicalSectionProps = {
  id: MedicalSectionId;
  index: string;
  eyebrow: string;
  title: string;
  introduction?: string;
  tone?: "page" | "surface" | "accent";
  children: ReactNode;
};

export function MedicalSection({
  id,
  index,
  eyebrow,
  title,
  introduction,
  tone = "page",
  children,
}: MedicalSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={`medical-content-section medical-content-section--${tone}`}
      aria-labelledby={headingId}
      data-testid={`medical-section-${id}`}
    >
      <div className="medical-section-heading">
        <p className="medical-section-kicker">
          <span aria-hidden="true">{index}</span>
          {eyebrow}
        </p>
        <h2 id={headingId} tabIndex={-1}>
          {title}
        </h2>
        {introduction ? (
          <p className="medical-section-introduction">{introduction}</p>
        ) : null}
      </div>
      <div className="medical-section-body">{children}</div>
    </section>
  );
}
