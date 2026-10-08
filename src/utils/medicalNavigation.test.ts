import { expect, it } from "vitest";
import {
  parseMedicalRoute,
  getMedicalNavigationHref,
} from "./medicalNavigation";
it("uses explicit route layouts over saved preferences", () => {
  expect(parseMedicalRoute("#education", "section")).toMatchObject({
    layout: "full-page",
    section: "education",
  });
  expect(parseMedicalRoute("#/science", "full-page")).toMatchObject({
    layout: "section",
    section: "science",
  });
  expect(parseMedicalRoute("", "section")).toMatchObject({
    layout: "section",
    section: "overview",
  });
});
it("recovers unknown IDs in either route family", () => {
  expect(parseMedicalRoute("#/unknown")).toMatchObject({
    section: "overview",
    layout: "section",
    invalid: true,
  });
  expect(getMedicalNavigationHref("contact", "section")).toBe("#/contact");
});
