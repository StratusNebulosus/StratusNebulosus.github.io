import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { content } from "../../../data/medical/content";
import { galleryItems } from "../../../data/medical/gallery";
import type { HeroContent } from "../../../types/medicalPortfolio";
import { EvidencePreviewProvider } from "../gallery";
import { Provider } from "../../ui/provider";
import { AwardItem } from "./ContentPrimitives";
import { ClosingContact } from "./ClosingContact";
import { MedicalHero } from "./MedicalHero";
import { LeadershipAndService } from "./LeadershipAndService";
import { ScienceAndAwards } from "./ScienceAndAwards";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("medical content components", () => {
  it("renders an accessible hero portrait and native CV download", () => {
    render(<MedicalHero hero={content.hero} />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Bui Tuan Phat" }),
    ).toBeInTheDocument();
    expect(screen.getByAltText(content.hero.portraitAltText)).toHaveAttribute(
      "loading",
      "eager",
    );
    expect(screen.getByAltText(content.hero.portraitAltText)).toHaveAttribute(
      "width",
      "920",
    );

    const download = screen.getByTestId("medical-hero-cv-download");
    expect(download).toHaveAttribute("href", content.hero.cvDownload.asset);
    expect(download).toHaveAttribute("download", "bui-tuan-phat-cv.pdf");
    expect(download).toHaveAccessibleName(
      "Download Bui Tuan Phat's CV as a PDF",
    );
  });

  it("omits invalid media and download controls without suppressing verified copy", () => {
    const invalidHero: HeroContent = {
      ...content.hero,
      portrait: "invalid-portrait",
      cvDownload: { ...content.hero.cvDownload, asset: "invalid-document" },
    };

    render(<MedicalHero hero={invalidHero} />);
    expect(
      screen.getByRole("heading", { name: "Bui Tuan Phat" }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("medical-hero-cv-download"),
    ).not.toBeInTheDocument();
  });

  it("labels research methods and observations separately", () => {
    render(
      <Provider>
        <EvidencePreviewProvider items={galleryItems}>
          <ScienceAndAwards
            researchProjects={content.researchProjects}
            awardGroups={content.awardGroups}
          />
        </EvidencePreviewProvider>
      </Provider>,
    );

    expect(
      screen.getByRole("heading", { name: "Methods explored" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Project-reported observations" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/student-project findings, not clinical conclusions/i),
    ).toBeInTheDocument();
  });

  it("renders allowlisted award evidence as an explicit control and labels invalid evidence", () => {
    const validAward = content.awardGroups[0].awards.find(
      (award) => award.evidence,
    );
    expect(validAward).toBeDefined();

    const { rerender } = render(
      <Provider>
        <EvidencePreviewProvider items={galleryItems}>
          <AwardItem award={validAward!} />
        </EvidencePreviewProvider>
      </Provider>,
    );
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("loading", "lazy");
    expect(image).toHaveAttribute("width", "720");
    expect(
      screen.getByRole("button", { name: /view evidence/i }),
    ).toBeInTheDocument();

    rerender(
      <Provider>
        <EvidencePreviewProvider items={galleryItems}>
          <AwardItem
            award={{
              ...validAward!,
              id: "invalid-evidence",
              evidence: "invalid-evidence",
            }}
          />
        </EvidencePreviewProvider>
      </Provider>,
    );
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByText(validAward!.title)).toBeInTheDocument();
    expect(
      screen.getByText("Evidence image not available"),
    ).toBeInTheDocument();
  });

  it("keeps CV-only placeholder contacts absent from rendered website copy", () => {
    render(<MedicalHero hero={content.hero} />);
    const section = screen.getByTestId("medical-section-overview");
    const placeholderPhone = ["123", "456", "789"].join("");
    const placeholderEmail = ["testemail", "gmail.com"].join("@");
    expect(
      within(section).queryByText(placeholderPhone),
    ).not.toBeInTheDocument();
    expect(section).not.toHaveTextContent(placeholderEmail);
  });

  it("renders the accessible email-only Contact form", () => {
    render(<ClosingContact contact={content.contact} />);
    const section = screen.getByTestId("medical-section-contact");

    expect(
      within(section).getByRole("heading", { level: 2, name: "Looking ahead" }),
    ).toBeInTheDocument();
    expect(
      within(section).queryByRole("heading", {
        level: 2,
        name: "The next chapter is still being written",
      }),
    ).not.toBeInTheDocument();
    expect(within(section).getByLabelText("Name")).toBeRequired();
    expect(within(section).getByLabelText("Reply-to email")).toHaveAttribute(
      "type",
      "email",
    );
    expect(within(section).getByLabelText("Message")).toHaveAttribute(
      "maxlength",
      "5000",
    );
    expect(
      within(section).getByLabelText("0 of 5000 characters used"),
    ).toBeInTheDocument();
    expect(
      within(section).getByText(/nothing is submitted to or stored/i),
    ).toBeInTheDocument();
    expect(
      within(section).getByText(/review, edit, and send/i),
    ).toBeInTheDocument();
    expect(
      within(section).getByRole("button", { name: /open email draft/i }),
    ).toBeInTheDocument();
    expect(section).not.toHaveTextContent("Phone");
    expect(section).not.toHaveTextContent("student.email@example.com");
    expect(section).not.toHaveTextContent("+84 XXX XXX XXX");
  });

  it("validates Contact fields and opens an encoded draft while retaining input", () => {
    let openedHref = "";
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(function (
      this: HTMLAnchorElement,
    ) {
      openedHref = this.href;
    });
    render(<ClosingContact contact={content.contact} />);

    const name = screen.getByLabelText("Name");
    const email = screen.getByLabelText("Reply-to email");
    const message = screen.getByLabelText("Message");
    const submit = screen.getByRole("button", { name: /open email draft/i });

    fireEvent.click(submit);
    expect(name).toHaveFocus();
    expect(screen.getByText("Enter your name.")).toBeInTheDocument();
    expect(screen.getByText("Enter your reply-to email.")).toBeInTheDocument();
    expect(screen.getByText("Enter a message.")).toBeInTheDocument();

    fireEvent.change(name, { target: { value: "Visitor" } });
    fireEvent.change(email, { target: { value: "not-an-email" } });
    fireEvent.change(message, { target: { value: "Hello" } });
    expect(
      screen.getByLabelText("5 of 5000 characters used"),
    ).toBeInTheDocument();
    fireEvent.click(submit);
    expect(email).toHaveFocus();
    expect(
      screen.getByText("Enter a valid email address."),
    ).toBeInTheDocument();

    fireEvent.change(email, { target: { value: "visitor+web@example.com" } });
    fireEvent.click(submit);

    expect(openedHref).toContain("mailto:buituanphat123456@gmail.com");
    expect(openedHref).toContain(
      "subject=Portfolio%20contact%20for%20Bui%20Tuan%20Phat",
    );
    expect(openedHref).toContain(
      "Reply-to%20email%3A%20visitor%2Bweb%40example.com",
    );
    expect(name).toHaveValue("Visitor");
    expect(email).toHaveValue("visitor+web@example.com");
    expect(message).toHaveValue("Hello");
    expect(screen.queryByText(/sent successfully/i)).not.toBeInTheDocument();
  });

  it("presents illustrated interests and category-aware leadership cards", () => {
    render(
      <LeadershipAndService
        activities={content.activities}
        interests={content.interests}
      />,
    );

    expect(screen.getByAltText(/teal origami crane/i)).toHaveAttribute(
      "loading",
      "lazy",
    );
    expect(screen.getByAltText(/piano keys/i)).toBeInTheDocument();
    content.activities.forEach((activity) => {
      expect(
        document.querySelector(`[data-content-id="${activity.id}"]`),
      ).toHaveAttribute("data-category", activity.category);
    });
  });

  it("uses final-presentation project language without derivation wording", () => {
    expect(
      content.researchProjects[0].reportedObservations.join(" "),
    ).not.toMatch(/the cv reports|extracted|derived from/i);
  });
});
