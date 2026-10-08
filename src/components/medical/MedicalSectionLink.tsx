import type { AnchorHTMLAttributes } from "react";
import type { MedicalSectionId } from "../../data/medical/navigation";
import { useMedicalNavigation } from "./MedicalNavigationContext";
export function MedicalSectionLink({
  section,
  children,
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { section: MedicalSectionId }) {
  const nav = useMedicalNavigation();
  return (
    <a
      {...props}
      href={nav?.getNavigationHref(section) ?? `#${section}`}
      onClick={(event) => {
        onClick?.(event);
        if (
          !event.defaultPrevented &&
          nav &&
          event.button === 0 &&
          !event.metaKey &&
          !event.ctrlKey &&
          !event.shiftKey &&
          !event.altKey &&
          (!props.target || props.target === "_self")
        ) {
          event.preventDefault();
          nav.navigateToSection(section);
        }
      }}
    >
      {children}
    </a>
  );
}
