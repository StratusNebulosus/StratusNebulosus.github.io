import { cleanup, render } from "@testing-library/react";
import fc from "fast-check";
import { afterEach, describe, expect, it } from "vitest";

import { content } from "../../../data/medical/content";
import {
  medicalSectionIds,
  type MedicalSectionId,
} from "../../../data/medical/navigation";
import {
  activityEntryArbitrary,
  contactSectionArbitrary,
  downloadAssetArbitrary,
  researchProjectArbitrary,
  safeSectionCopyArbitrary,
  stableIdCollectionArbitrary,
} from "../../../test/arbitraries/medicalContent";
import { ActivityCard, ResearchFeature } from "./ContentPrimitives";
import { ClosingContact } from "./ClosingContact";
import { MedicalHero } from "./MedicalHero";
import { MedicalSection } from "./MedicalSection";

afterEach(cleanup);

describe("medical content properties", () => {
  it("renders every supplied stable content ID exactly once", () => {
    fc.assert(
      fc.property(stableIdCollectionArbitrary, (ids) => {
        const view = render(
          <div>
            {ids.map((id) => (
              <article key={id} data-content-id={id}>
                {id}
              </article>
            ))}
          </div>,
        );
        ids.forEach((id) => {
          expect(
            view.container.querySelectorAll(`[data-content-id="${id}"]`),
          ).toHaveLength(1);
        });
        view.unmount();
      }),
    );
  });

  it("preserves every valid section ID under arbitrary registry order", () => {
    const registryOrderArbitrary = fc.shuffledSubarray([...medicalSectionIds], {
      minLength: medicalSectionIds.length,
      maxLength: medicalSectionIds.length,
    });

    fc.assert(
      fc.property(registryOrderArbitrary, (ids) => {
        const view = render(
          <div>
            {ids.map((id, index) => (
              <MedicalSection
                key={id}
                id={id as MedicalSectionId}
                index={String(index + 1)}
                eyebrow="Section"
                title={id}
              >
                <p>Verified content</p>
              </MedicalSection>
            ))}
          </div>,
        );
        expect(new Set(ids)).toEqual(new Set(medicalSectionIds));
        ids.forEach((id) =>
          expect(view.container.querySelectorAll(`#${id}`)).toHaveLength(1),
        );
        view.unmount();
      }),
    );
  });

  it("preserves one associated heading and body for generated safe section copy", () => {
    fc.assert(
      fc.property(safeSectionCopyArbitrary, ({ title, body }) => {
        const view = render(
          <MedicalSection
            id="calling"
            index="02"
            eyebrow="Section"
            title={title}
          >
            <p>{body}</p>
          </MedicalSection>,
        );

        expect(
          view.getByRole("heading", { level: 2, name: title }),
        ).toBeInTheDocument();
        expect(view.getByText(body)).toBeInTheDocument();
        expect(view.container.querySelectorAll("h2")).toHaveLength(1);
        expect(
          view.container.querySelectorAll(".medical-section-body"),
        ).toHaveLength(1);
        view.unmount();
      }),
    );
  });

  it("renders every generated email-only Contact configuration safely", () => {
    fc.assert(
      fc.property(contactSectionArbitrary, (contact) => {
        const view = render(<ClosingContact contact={contact} />);

        expect(view.getByText(contact.statement)).toBeInTheDocument();
        expect(view.getByText(contact.privacyNotice)).toBeInTheDocument();
        expect(view.getByText(contact.reviewNote)).toBeInTheDocument();
        expect(view.getByLabelText("Name")).toBeRequired();
        expect(view.getByLabelText("Reply-to email")).toHaveAttribute(
          "type",
          "email",
        );
        expect(view.getByLabelText("Message")).toHaveAttribute(
          "maxlength",
          "5000",
        );
        expect(
          view.getByRole("button", { name: /open email draft/i }),
        ).toBeInTheDocument();
        expect(view.container.innerHTML).not.toMatch(/tel:/i);
        view.unmount();
      }),
    );
  }, 15_000);

  it("keeps generated activity and research copy free of clinical claims", () => {
    fc.assert(
      fc.property(
        activityEntryArbitrary,
        researchProjectArbitrary,
        (activity, project) => {
          const view = render(
            <div>
              <ActivityCard activity={activity} />
              <ResearchFeature project={project} />
            </div>,
          );
          expect(view.container.textContent).not.toMatch(
            /\b(treatment|diagnosis|clinical care|prescribed)\b/i,
          );
          view.unmount();
        },
      ),
    );
  });

  it("always renders the allowlisted CV action with its stable shape", () => {
    fc.assert(
      fc.property(
        downloadAssetArbitrary(content.hero.cvDownload.asset),
        (cvDownload) => {
          const view = render(
            <MedicalHero hero={{ ...content.hero, cvDownload }} />,
          );
          const link = view.getByTestId("medical-hero-cv-download");
          expect(link).toHaveAttribute("href", content.hero.cvDownload.asset);
          expect(link).toHaveAttribute("download", "bui-tuan-phat-cv.pdf");
          view.unmount();
        },
      ),
    );
  });
});
