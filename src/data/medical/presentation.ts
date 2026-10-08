export const medicalStyles = [
  {
    id: "notebook",
    label: "Notebook",
    description: "An open, editorial perspective",
  },
  {
    id: "casebook",
    label: "Casebook",
    description: "A focused document and contents",
  },
] as const;
export type MedicalStyleId = (typeof medicalStyles)[number]["id"];
export type MedicalLayoutMode = "full-page" | "section";
export const isMedicalStyle = (value: unknown): value is MedicalStyleId =>
  value === "notebook" || value === "casebook";
export const isMedicalLayout = (value: unknown): value is MedicalLayoutMode =>
  value === "full-page" || value === "section";
