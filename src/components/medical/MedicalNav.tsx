import { useRef, useState } from "react";
import { Drawer, IconButton } from "@chakra-ui/react";
import { HiMenu, HiX } from "react-icons/hi";
import { content } from "../../data/medical/content";
import type {
  MedicalNavigationItem,
  MedicalSectionId,
} from "../../data/medical/navigation";
import { ColorModeButton } from "../ui/color-mode";
import {
  MedicalDisplayControls,
  type DisplayProps,
} from "./MedicalDisplayControls";
export type MedicalNavProps = DisplayProps & {
  activeSection: MedicalSectionId;
  getNavigationHref: (section: MedicalSectionId) => string;
  navigationItems: readonly MedicalNavigationItem[];
  onNavigate: (section: MedicalSectionId) => void;
};
export function MedicalContents({
  activeSection,
  getNavigationHref,
  navigationItems,
  onNavigate,
}: MedicalNavProps) {
  return (
    <ul className="medical-desktop-links">
      {navigationItems.map((item, index) => (
        <li key={item.id}>
          <a
            className="medical-nav-link"
            href={getNavigationHref(item.id)}
            data-testid={`medical-nav-link-${item.id}`}
            aria-current={activeSection === item.id ? "location" : undefined}
            onClick={(e) => {
              if (
                !e.metaKey &&
                !e.ctrlKey &&
                !e.shiftKey &&
                !e.altKey &&
                e.button === 0
              ) {
                e.preventDefault();
                onNavigate(item.id);
              }
            }}
          >
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
export function MedicalNav(props: MedicalNavProps) {
  const {
    activeSection,
    getNavigationHref,
    navigationItems,
    onNavigate,
    style = "notebook",
  } = props;
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const pending = useRef<MedicalSectionId | null>(null);
  const close = () => {
    pending.current = null;
    setOpen(false);
    requestAnimationFrame(() => trigger.current?.focus());
  };
  return (
    <>
      <nav
        className="medical-navigation-band"
        aria-label="Medical portfolio sections"
        data-testid="medical-navigation"
      >
        <div className="medical-navigation-top">
          <a
            className="medical-brand-lockup"
            href={getNavigationHref("overview")}
            aria-label="Navigate to portfolio overview"
            data-testid="medical-nav-brand-link"
            onClick={(e) => {
              if (
                !e.metaKey &&
                !e.ctrlKey &&
                !e.shiftKey &&
                !e.altKey &&
                e.button === 0
              ) {
                e.preventDefault();
                onNavigate("overview");
              }
            }}
          >
            <span className="medical-brand-mark" aria-hidden="true">
              B<span>TP</span>
            </span>
            <span>
              <strong className="medical-brand-name">
                {content.hero.name}
              </strong>
              <span className="medical-brand-role">Medical portfolio</span>
            </span>
          </a>
          <div className="medical-nav-controls">
            <a
              className="medical-shell-cv"
              href={content.hero.cvDownload.asset}
              download={content.hero.cvDownload.fileName}
              aria-label="Download Bui Tuan Phat CV (PDF)"
              data-testid="medical-shell-cv"
            >
              CV <span aria-hidden="true">↓</span>
            </a>
            <ColorModeButton
              className="medical-icon-control"
              data-testid="medical-nav-theme-toggle"
            />
            <IconButton
              ref={trigger}
              className="medical-icon-control medical-menu-toggle"
              aria-label="Open navigation menu"
              data-testid="medical-nav-menu-toggle"
              onClick={() => setOpen(true)}
            >
              <HiMenu />
            </IconButton>
          </div>
        </div>
        <div className="medical-navigation-bottom">
          <p className="medical-edition">
            {style === "notebook"
              ? "A notebook of curiosity & care"
              : "A record of learning & purpose"}
          </p>
          <MedicalDisplayControls {...props} />
        </div>
        {style === "notebook" && <MedicalContents {...props} />}
      </nav>
      <Drawer.Root
        open={open}
        onOpenChange={(details) => {
          if (!details.open) {
            setOpen(false);
            if (!pending.current)
              requestAnimationFrame(() => trigger.current?.focus());
          }
        }}
        placement="end"
        finalFocusEl={() => (pending.current ? null : trigger.current)}
        onExitComplete={() => {
          const section = pending.current;
          pending.current = null;
          if (section) onNavigate(section);
          else trigger.current?.focus();
        }}
      >
        <Drawer.Backdrop className="medical-drawer-backdrop" />
        <Drawer.Positioner>
          <Drawer.Content className="medical-drawer-content">
            <Drawer.Header className="medical-drawer-header">
              <div>
                <p className="medical-drawer-eyebrow">Portfolio contents</p>
                <Drawer.Title className="medical-drawer-title">
                  Explore the journey
                </Drawer.Title>
              </div>
              <IconButton
                className="medical-icon-control"
                aria-label="Close navigation menu"
                data-testid="medical-nav-menu-close"
                onClick={close}
              >
                <HiX />
              </IconButton>
            </Drawer.Header>
            <Drawer.Body className="medical-drawer-body">
              <ul>
                {navigationItems.map((item, index) => (
                  <li key={item.id}>
                    <a
                      className="medical-mobile-link"
                      href={getNavigationHref(item.id)}
                      data-testid={`medical-nav-mobile-link-${item.id}`}
                      aria-current={
                        activeSection === item.id ? "location" : undefined
                      }
                      onClick={(e) => {
                        if (
                          !e.metaKey &&
                          !e.ctrlKey &&
                          !e.shiftKey &&
                          !e.altKey
                        ) {
                          e.preventDefault();
                          pending.current = item.id;
                          setOpen(false);
                        }
                      }}
                    >
                      <span aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                className="medical-action medical-action--secondary"
                href={content.hero.cvDownload.asset}
                download={content.hero.cvDownload.fileName}
                data-testid="medical-drawer-cv"
              >
                Download CV (PDF) ↓
              </a>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
}
