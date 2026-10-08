import type { ReactNode } from "react";
import {
  MedicalNav,
  MedicalContents,
  type MedicalNavProps,
} from "./MedicalNav";
import "./medical-shell.css";
export type MedicalShellProps = MedicalNavProps & { children: ReactNode };
export function MedicalShell({ children, ...props }: MedicalShellProps) {
  const style = props.style ?? "notebook",
    layout = props.layout ?? "full-page";
  return (
    <div
      className="medical-portfolio"
      data-medical-style={style}
      data-medical-layout={layout}
      data-testid="medical-portfolio-shell"
    >
      <a
        className="medical-skip-link"
        href="#main-content"
        data-testid="medical-skip-link"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main-content")?.focus();
        }}
      >
        Skip to main content
      </a>
      <header className="medical-header">
        <MedicalNav {...props} />
      </header>
      <div className="medical-reading-layout">
        {style === "casebook" && (
          <aside className="medical-contents-rail">
            <p className="medical-rail-label">Contents</p>
            <nav aria-label="Document contents">
              <MedicalContents {...props} />
            </nav>
            <p className="medical-rail-note">
              Curiosity.
              <br />
              Discipline.
              <br />
              Compassion.
            </p>
          </aside>
        )}
        <main
          id="main-content"
          tabIndex={-1}
          className="medical-main"
          data-testid="medical-main"
        >
          {layout === "section" && props.activeSection !== "overview" && (
            <h1 className="medical-visually-hidden">
              Bui Tuan Phat — Medical portfolio
            </h1>
          )}
          {children}
        </main>
      </div>
      <footer className="medical-footer">
        <span>Bui Tuan Phat</span>
        <span>A journey in medicine, science & service.</span>
        <span>
          {style === "notebook" ? "Notebook" : "Casebook"} / Portfolio
        </span>
      </footer>
    </div>
  );
}
