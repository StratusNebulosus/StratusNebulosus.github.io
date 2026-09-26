import type { NavigationItem, SectionId } from "../../types/portfolio";

export const medicalSectionIds = [
  "overview",
  "calling",
  "education",
  "academics",
  "science",
  "leadership",
  "gallery",
  "contact",
] as const satisfies readonly SectionId[];

export type MedicalSectionId = (typeof medicalSectionIds)[number];

export type MedicalNavigationItem = NavigationItem & {
  id: MedicalSectionId;
  enabled: true;
};

export const medicalNavigation = [
  { id: "overview", label: "Overview", enabled: true },
  { id: "calling", label: "Calling", enabled: true },
  { id: "education", label: "Education", enabled: true },
  { id: "academics", label: "Academics", enabled: true },
  { id: "science", label: "Science & Awards", enabled: true },
  { id: "leadership", label: "Leadership & Service", enabled: true },
  { id: "gallery", label: "Evidence", enabled: true },
  { id: "contact", label: "Contact", enabled: true },
] as const satisfies readonly MedicalNavigationItem[];

export const isMedicalSectionId = (
  value: SectionId,
): value is MedicalSectionId =>
  medicalSectionIds.includes(value as MedicalSectionId);
