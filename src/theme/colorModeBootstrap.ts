import {
  applyColorModeToRoot,
  resolveColorModePreference,
} from "./resolveColorModePreference";
export function bootstrapColorMode(): void {
  const preference = resolveColorModePreference();
  applyColorModeToRoot(preference.value);
  if (preference.source === "product-default") {
    try {
      window.localStorage.setItem("theme", preference.value);
    } catch {
      /* Rendering does not require storage. */
    }
  }
}
