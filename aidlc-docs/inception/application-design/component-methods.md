# Application Design - Component Methods

Method signatures and high-level purpose only. Detailed business rules (validation logic, exact matching algorithms, edge-case handling) are deferred to Functional Design per unit.

## `App`

- `getActiveSection(hash: string, sectionIds: string[]): string` - Derive the active section id from the current hash, falling back to the first section.
- `setColorMode(mode: "light" | "dark"): void` - Update and persist the visitor's color-mode preference.
- `getColorMode(): "light" | "dark"` - Read the persisted preference, falling back safely if unavailable (NFR-05).

## `MedicalShell`

- `render(activeSection: string, colorMode: "light" | "dark"): ReactElement` - Compose `MedicalNav` and all content-area components in approved order.

## `MedicalNav`

- `getNavItems(): NavItem[]` - Return the ordered list of enabled section links.
- `isActive(sectionId: string, activeSection: string): boolean` - Determine whether a nav item should carry the active/`aria-current` state.
- `toggleMobileMenu(open: boolean): void` - Open/close the compact mobile navigation.

## `MedicalHero`

- `getHeroContent(): HeroContent` - Read hero copy and highlight tags from the content module.

## `CallingToMedicine`

- `getNarrative(): NarrativeSection` - Read the reflective narrative content, pre-split into aspiration vs. verified-experience blocks.

## `EducationJourney`

- `getTimelineEntries(): TimelineEntryData[]` - Read ordered education milestones from the content module.

## `AcademicExcellence`

- `getScoreEntries(): ScoreEntryData[]` - Read SAT/IELTS/AP entries from the content module.

## `ScienceAndAwards`

- `getAwardGroups(): AwardGroup[]` - Read awards grouped by theme/chronology from the content module.

## `LeadershipAndService`

- `getServiceEntries(): ServiceEntryData[]` - Read leadership/service entries from the content module.

## `EvidenceGallery`

- `getGalleryItems(): GalleryItemData[]` - Read gallery entries whose asset paths have passed `isAllowedAsset`.
- `openItem(itemId: string): void` - Open `GalleryModal` for the given item.
- `closeModal(): void` - Close the modal and restore focus to the triggering `GalleryItem`.

## `GalleryModal`

- `onKeyDown(event: KeyboardEvent): void` - Handle Escape-to-close and focus-trap tab cycling.
- `restoreFocus(triggerElementRef: RefObject<HTMLElement>): void` - Return focus to the element that opened the modal.

## `ClosingContact`

- `getClosingStatement(): string` - Read the non-interactive closing statement from the content module.

## Shared Primitives

- `ScoreCard.render(entry: ScoreEntryData): ReactElement`
- `AwardItem.render(entry: AwardEntryData): ReactElement`
- `TimelineEntry.render(entry: TimelineEntryData): ReactElement`
- `GalleryItem.render(entry: GalleryItemData, onActivate: (id: string) => void): ReactElement`

## `assetAllowlist` service (see `services.md`)

- `isAllowedAsset(path: string): boolean` - Return true only if `path` is present in the explicit allowlist.
- `getAllowlistedAssets(): AssetAllowlistEntry[]` - Return the full approved asset list for consumption by `EvidenceGallery` and any component that renders imagery.

## `content` service (see `services.md`)

- `getPortfolioContent(): PortfolioContent` - Return the full typed content object consumed by all content-area components.
