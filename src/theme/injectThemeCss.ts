import { generateThemeCss } from "./generateThemeCss";

const STYLE_ELEMENT_ID = "medical-theme-tokens";

const REDUCED_MOTION_CSS = `
@media (prefers-reduced-motion: reduce) {
  [data-color-mode] {
    --motion-section-reveal: 0ms;
    --motion-nav-highlight: 0ms;
    --motion-gallery-modal: 0ms;
  }
}
`;

/**
 * NFR Design Pattern 2: generates the theme CSS once (at module load, not
 * per render) and injects it as a single <style> element, replacing its
 * content in place on repeated calls (e.g. in tests) instead of duplicating
 * <style> tags.
 */
export function injectThemeCss(): void {
  if (typeof document === "undefined") {
    return;
  }

  let styleElement = document.getElementById(
    STYLE_ELEMENT_ID,
  ) as HTMLStyleElement | null;

  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = STYLE_ELEMENT_ID;
    document.head.appendChild(styleElement);
  }

  styleElement.textContent = `${generateThemeCss()}\n${REDUCED_MOTION_CSS}`;
}
