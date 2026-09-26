import { useEffect, useRef, useState } from "react";
import {
  Box,
  Drawer,
  Flex,
  IconButton,
  Link,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { HiMenu, HiX } from "react-icons/hi";

import { content } from "../../data/medical/content";
import type {
  MedicalNavigationItem,
  MedicalSectionId,
} from "../../data/medical/navigation";
import { ColorModeButton } from "../ui/color-mode";

export type MedicalNavProps = {
  activeSection: MedicalSectionId;
  getNavigationHref: (sectionId: MedicalSectionId) => string;
  navigationItems: readonly MedicalNavigationItem[];
  onNavigate: (sectionId: MedicalSectionId) => void;
};

export function MedicalNav({
  activeSection,
  getNavigationHref,
  navigationItems,
  onNavigate,
}: MedicalNavProps) {
  const { open, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDrawer = () => {
    onClose();
    window.requestAnimationFrame(() => menuTriggerRef.current?.focus());
  };

  const navigate = (sectionId: MedicalSectionId) => {
    onNavigate(sectionId);
    onClose();
  };

  return (
    <>
      <nav
        className={`medical-navigation-band${isScrolled ? " is-scrolled" : ""}`}
        aria-label="Medical portfolio sections"
        data-testid="medical-navigation"
      >
        <Link
          className="medical-brand-lockup"
          href={getNavigationHref("overview")}
          onClick={(event) => {
            event.preventDefault();
            navigate("overview");
          }}
          aria-label="Navigate to portfolio overview"
          data-testid="medical-nav-brand-link"
        >
          <span className="medical-brand-mark" aria-hidden="true">
            <span />
          </span>
          <span>
            <Text as="strong" className="medical-brand-name">
              {content.hero.name}
            </Text>
            <Text as="span" className="medical-brand-role">
              Medical portfolio
            </Text>
          </span>
        </Link>

        <Box as="ul" className="medical-desktop-links">
          {navigationItems.map((item, index) => {
            const isActive = item.id === activeSection;

            return (
              <li key={item.id}>
                <Link
                  className="medical-nav-link"
                  href={getNavigationHref(item.id)}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(item.id);
                  }}
                  aria-current={isActive ? "location" : undefined}
                  data-testid={`medical-nav-link-${item.id}`}
                >
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </Box>

        <Flex className="medical-nav-controls">
          <ColorModeButton
            className="medical-icon-control"
            data-testid="medical-nav-theme-toggle"
          />
          <IconButton
            ref={menuTriggerRef}
            className="medical-icon-control medical-menu-toggle"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={open ? closeDrawer : onOpen}
            data-testid="medical-nav-menu-toggle"
          >
            {open ? <HiX /> : <HiMenu />}
          </IconButton>
        </Flex>
      </nav>

      <Drawer.Root
        open={open}
        onOpenChange={(details) => !details.open && closeDrawer()}
        finalFocusEl={() => menuTriggerRef.current}
        placement="end"
      >
        <Drawer.Backdrop className="medical-drawer-backdrop" />
        <Drawer.Positioner>
          <Drawer.Content className="medical-drawer-content">
            <Drawer.Header className="medical-drawer-header">
              <Box>
                <Text className="medical-drawer-eyebrow">Patient path</Text>
                <Text className="medical-drawer-title">Portfolio index</Text>
              </Box>
              <IconButton
                className="medical-icon-control"
                aria-label="Close navigation menu"
                onClick={closeDrawer}
                data-testid="medical-nav-menu-close"
              >
                <HiX />
              </IconButton>
            </Drawer.Header>
            <Drawer.Body className="medical-drawer-body">
              <VStack as="ul" align="stretch" gap="2">
                {navigationItems.map((item, index) => {
                  const isActive = item.id === activeSection;

                  return (
                    <li key={item.id}>
                      <Link
                        className="medical-mobile-link"
                        href={getNavigationHref(item.id)}
                        onClick={(event) => {
                          event.preventDefault();
                          navigate(item.id);
                        }}
                        aria-current={isActive ? "location" : undefined}
                        data-testid={`medical-nav-mobile-link-${item.id}`}
                      >
                        <span aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
}
