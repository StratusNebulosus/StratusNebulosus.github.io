# Unit 3: Navigation & Layout Shell - Frontend Components

## `MedicalShell`

- **Props**: `activeSection: SectionId`, `getNavigationHref: (id: SectionId) => string`, `onNavigate: (id: SectionId) => void`, `navigationItems: MedicalNavigationItem[]`, `children: ReactNode` (the composed content-area sections).
- **State**: none of its own (stateless composition component).
- **Structure**: skip link → `<header>` containing `MedicalNav` → `<main id="main-content">{children}</main>`.
- **User interactions**: none directly; delegates to `MedicalNav`.

## `MedicalNav`

- **Props**: same as `MedicalShell` minus `children`.
- **State**: `MobileMenuState` (via `useDisclosure`), `isScrolled: boolean` (via a scroll listener, reused pattern from `Navbar.tsx`).
- **Structure**: desktop nav bar (sticky, `position: sticky`) with one link per `navigationItems` entry; a menu-toggle `IconButton` visible only at mobile widths, opening a Chakra `Drawer` containing the same links; a `ColorModeButton` (from Unit 1's retained `colorMode` service).
- **User interactions**: clicking/activating a nav link calls `onNavigate(item.id)` and closes the mobile drawer if open; the active link carries `aria-current` per BR-5.
- **Form validation**: not applicable (no form).
- **API integration points**: not applicable (no backend; reads navigation items via props, sourced from `content`/allowlist modules in later units, not this one).

## Removed From This Unit's Rendering Path

- `PortfolioStyleSelector` — not rendered anywhere in `MedicalNav`/`MedicalShell`.
- The layout-mode toggle button previously rendered by `Navbar.tsx` — not rendered.
