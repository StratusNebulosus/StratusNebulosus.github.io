export type ColorModeValue = "light" | "dark";
export interface ColorModePreference {
  value: ColorModeValue;
  source: "user-selected" | "product-default";
}
export const isColorModeValue = (value: unknown): value is ColorModeValue =>
  value === "light" || value === "dark";
export function resolveColorModePreference(): ColorModePreference {
  try {
    const stored = window.localStorage.getItem("theme");
    if (isColorModeValue(stored))
      return { value: stored, source: "user-selected" };
  } catch {
    /* Browser storage is optional. */
  }
  return { value: "dark", source: "product-default" };
}
export function applyColorModeToRoot(value: ColorModeValue): void {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.colorMode = value;
  document.documentElement.classList.toggle("light", value === "light");
  document.documentElement.classList.toggle("dark", value === "dark");
  document.documentElement.style.colorScheme = value;
}
