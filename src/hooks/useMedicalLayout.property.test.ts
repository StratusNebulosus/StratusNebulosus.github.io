import fc from "fast-check";
import { describe, expect, it } from "vitest";

import { medicalNavigation, medicalSectionIds } from "../data/medical/navigation";
import {
  medicalNavigationSubsetArbitrary,
  medicalSectionIdArbitrary,
} from "../test/arbitraries/medicalNavigation";
import { getMedicalNavigationHref } from "./useMedicalLayout";

describe("medical navigation properties", () => {
  it("keeps the production registry unique and in approved order", () => {
    expect(medicalNavigation.map((item) => item.id)).toEqual(
      medicalSectionIds,
    );
    expect(new Set(medicalSectionIds).size).toBe(medicalSectionIds.length);
  });

  it("matches the plain-anchor reference model for every medical section", () => {
    fc.assert(
      fc.property(medicalSectionIdArbitrary, (sectionId) => {
        const hash = getMedicalNavigationHref(sectionId);

        expect(hash).toBe(`#${sectionId}`);
        expect(hash).not.toContain("#/");
        expect(hash.slice(1)).toBe(sectionId);
      }),
    );
  });

  it("keeps navigation items and section targets in exact agreement", () => {
    fc.assert(
      fc.property(medicalNavigationSubsetArbitrary, (items) => {
        const navigationIds = items.map((item) => item.id);
        const targetIds = items.map((item) => item.id);

        expect(targetIds).toEqual(navigationIds);
        expect(new Set(navigationIds).size).toBe(navigationIds.length);
        expect(
          navigationIds.every((id) => medicalSectionIds.includes(id)),
        ).toBe(true);
      }),
    );
  });
});
