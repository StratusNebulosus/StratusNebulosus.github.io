# Unit 3: Navigation & Layout Shell - Domain Entities

## `SectionId` (extended, Question 2 Option B)

The existing union in `src/types/portfolio.ts` is extended with five new medical-specific values, while three existing values are reused where their meaning already fits and the rest of the legacy values remain until Units 4-5 remove the retired identity:

```
"home" | "about" | "education" | "experience" | "awards" | "projects" |
"gallery" | "journal" | "skills" | "contact" |
"overview" | "calling" | "academics" | "science" | "leadership"
```

The eight medical section IDs, in approved order, are: `overview`, `calling`, `education`, `academics`, `science`, `leadership`, `gallery`, `contact`. (`education`, `gallery`, and `contact` are reused directly since their meaning already matches; `overview`, `calling`, `academics`, `science`, and `leadership` are new.)

## `MedicalNavigationItem`

- `id: SectionId` (restricted at the medical shell boundary to the eight IDs above), `label: string`, `enabled: boolean`.
- Mirrors the existing `NavigationItem` shape so `getEnabledNavigationItems`/`getEnabledSectionIds` can be reused unchanged.

## `MedicalLayoutState`

- `activeSection: SectionId`, `getNavigationHref: (sectionId: SectionId) => string`, `navigateToSection: (sectionId: SectionId) => void`.
- **Invariant** (BR-1): there is no `layoutMode` field and no multi-page variant — this state shape has exactly one navigation mode.

## `MobileMenuState`

- `isOpen: boolean`, `open: () => void`, `close: () => void`.
- Backed by Chakra's `useDisclosure` (Question 4, Option A), same shape as the existing `Navbar.tsx` usage.
