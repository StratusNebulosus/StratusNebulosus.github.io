import fc from "fast-check";

import {
  medicalNavigation,
  medicalSectionIds,
  type MedicalNavigationItem,
  type MedicalSectionId,
} from "../../data/medical/navigation";

export const medicalSectionIdArbitrary: fc.Arbitrary<MedicalSectionId> =
  fc.constantFrom(...medicalSectionIds);

export const medicalNavigationSubsetArbitrary: fc.Arbitrary<
  readonly MedicalNavigationItem[]
> = fc
  .subarray([...medicalSectionIds], { minLength: 1 })
  .map((sectionIds) =>
    medicalNavigation.filter((item) => sectionIds.includes(item.id)),
  );
