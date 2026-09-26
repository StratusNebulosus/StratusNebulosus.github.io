import type { ReactNode } from "react";

import type {
  MedicalNavigationItem,
  MedicalSectionId,
} from "../../data/medical/navigation";
import { MedicalNav } from "./MedicalNav";
import "./medical-shell.css";

export type MedicalShellProps = {
  activeSection: MedicalSectionId;
  children: ReactNode;
  getNavigationHref: (sectionId: MedicalSectionId) => string;
  navigationItems: readonly MedicalNavigationItem[];
  onNavigate: (sectionId: MedicalSectionId) => void;
};

export function MedicalShell({
  activeSection,
  children,
  getNavigationHref,
  navigationItems,
  onNavigate,
}: MedicalShellProps) {
  return (
    <div className="medical-portfolio" data-testid="medical-portfolio-shell">
      <a
        className="medical-skip-link"
        href="#main-content"
        data-testid="medical-skip-link"
      >
        Skip to main content
      </a>
      <header className="medical-header">
        <MedicalNav
          activeSection={activeSection}
          getNavigationHref={getNavigationHref}
          navigationItems={navigationItems}
          onNavigate={onNavigate}
        />
      </header>
      <main
        id="main-content"
        className="medical-main"
        data-testid="medical-main"
      >
        {children}
      </main>
    </div>
  );
}
