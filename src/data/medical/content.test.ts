import { describe, expect, it } from "vitest";

import {
  content,
  getAcademicCredentials,
  getContactContent,
  getEducationJourney,
  getHeroContent,
  getLeadershipAndActivities,
  getPortfolioContent,
  getResearchProjects,
  getScienceRecognitions,
} from "./content";

const CLINICAL_TREATMENT_LANGUAGE =
  /\b(treated|diagnos(?:e|ed|is)|practiced medicine|prescrib(?:e|ed)|clinical care)\b/i;

function collectStrings(value: unknown, out: string[] = []): string[] {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value))
    value.forEach((item) => collectStrings(item, out));
  else if (value && typeof value === "object") {
    Object.values(value).forEach((item) => collectStrings(item, out));
  }
  return out;
}

describe("medical content data", () => {
  it("exposes stable selectors for each owned content domain", () => {
    expect(getPortfolioContent()).toBe(content);
    expect(getHeroContent()).toBe(content.hero);
    expect(getEducationJourney()).toBe(content.education);
    expect(getAcademicCredentials()).toBe(content.scores);
    expect(getResearchProjects()).toBe(content.researchProjects);
    expect(getScienceRecognitions()).toBe(content.awardGroups);
    expect(getLeadershipAndActivities()).toBe(content.activities);
    expect(getContactContent()).toBe(content.contact);
  });

  it("pins current results and keeps historical scholarship context separate", () => {
    expect(content.scores.map(({ label, value }) => [label, value])).toEqual(
      expect.arrayContaining([
        ["SAT", "1500"],
        ["IELTS Academic", "8.0"],
        ["AP Biology", "5"],
        ["AP Chemistry", "5"],
        ["AP Microeconomics", "4"],
      ]),
    );
    expect(content.scholarship.amount).toBe("VND 14,000,000");
    expect(content.scholarship.basis).toContain("IELTS 7.5");
    expect(content.scholarship.basis).toContain("PSAT 1310");
  });

  it("records all three GPA years with an explicit ten-point scale", () => {
    expect(content.academicYears.map((year) => year.gpa)).toEqual([
      "9.38",
      "9.4",
      "9.4",
    ]);
    content.academicYears.forEach((year) => expect(year.scale).toBe("/10"));
  });

  it("uses the verified WHO source precedence and rejects the conflicting label", () => {
    const conference = content.activities.find(
      (entry) => entry.id === "wis-conference-who",
    );
    expect(conference?.description).toContain("World Health Organization");
    expect(collectStrings(content).join(" ")).not.toMatch(/UNWTO/i);
  });

  it("qualifies research as student work and separates methods from observations", () => {
    const project = content.researchProjects[0];
    expect(project.context).toContain("student project");
    expect(project.methods.length).toBeGreaterThan(0);
    expect(project.reportedObservations.length).toBeGreaterThan(0);
    expect(project.reportedObservations.join(" ")).toContain(
      "not clinical conclusions",
    );
  });

  it("does not describe community support as treatment or clinical care", () => {
    const community = content.activities.filter(
      (entry) => entry.category === "community",
    );
    expect(community.length).toBeGreaterThan(0);
    community.forEach((entry) =>
      expect(entry.description).not.toMatch(CLINICAL_TREATMENT_LANGUAGE),
    );
  });

  it("publishes the verified email-only draft configuration", () => {
    expect(content.contact.recipientEmail).toBe("buituanphat123456@gmail.com");
    expect(content.contact.draftSubject).toBe(
      "Portfolio contact for Bui Tuan Phat",
    );
    expect(content.contact.statement).toBeTruthy();
    expect(content.contact.privacyNotice).toMatch(
      /nothing.*submitted.*stored/i,
    );
    expect(content.contact.reviewNote).toMatch(/review.*send.*email app/i);
    expect(Object.keys(content.contact)).not.toEqual(
      expect.arrayContaining(["channels", "phone", "telephone"]),
    );

    const websiteCopy = collectStrings(content).join(" ");
    const placeholderPhone = ["123", "456", "789"].join("");
    const placeholderEmail = ["testemail", "gmail.com"].join("@");
    expect(websiteCopy).not.toContain(placeholderPhone);
    expect(websiteCopy).not.toContain(placeholderEmail);
    expect(websiteCopy).not.toContain("student.email@example.com");
    expect(websiteCopy).not.toContain("+84 XXX XXX XXX");
  });
});
