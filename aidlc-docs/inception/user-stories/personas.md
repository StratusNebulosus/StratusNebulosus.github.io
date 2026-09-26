# Medical Student Portfolio Revamp - Personas

Approved persona set (Question 2, Option A): four personas representing the primary audiences named in `aidlc-docs/inception/requirements/requirements.md`.

## Persona 1: Academic Reviewer (Anh, Admissions/Scholarship Committee Member)

- **Role**: Evaluates the student's academic record, science achievements, and evidence for a scholarship, program, or admissions decision.
- **Goals**: Quickly verify identity, program, standardized-test scores, and awards; trust that displayed evidence is authentic and traceable to source materials.
- **Behaviors**: Scans the first viewport for identity and program; jumps via navigation to Academic Excellence and Science and Awards; inspects certificate imagery closely.
- **Needs**: Accurate, unembellished score presentation; no misleading comparisons; legible certificate evidence with meaningful alternative text; no private identifiers exposed.
- **Accessibility considerations**: May use zoom or high-contrast display settings; needs sufficient color contrast and clear heading structure for fast scanning.

## Persona 2: Medical Educator or Mentor (Dr. Linh, Faculty Mentor)

- **Role**: Assesses character, motivation, leadership, and service orientation as an indicator of fitness for medical study.
- **Goals**: Understand the narrative connecting scientific curiosity, discipline, empathy, and service; distinguish aspiration from verified experience.
- **Behaviors**: Reads the Calling to Medicine narrative and Leadership and Service section in sequence; reviews the Evidence Gallery for corroborating context.
- **Needs**: Reflective, precise language that never overstates clinical involvement; clear separation of values/aspiration from documented fact.
- **Accessibility considerations**: May review on a tablet between meetings; needs responsive layout and touch-friendly navigation.

## Persona 3: Peer or General Visitor (Minh, Prospective Peer/Collaborator)

- **Role**: A fellow student, collaborator, or interested visitor exploring the portfolio out of general interest or shared background.
- **Goals**: Get an engaging, credible impression of the student's journey without needing domain expertise to interpret it.
- **Behaviors**: Browses casually on a phone; toggles light/dark mode; explores the Evidence Gallery for visual highlights.
- **Needs**: An inviting, non-clinical-cliché visual identity; comfortable mobile navigation; smooth theme switching without flicker.
- **Accessibility considerations**: Mobile-first, touch-target size, reduced-motion preference respected, no horizontal scrolling at narrow widths.

## Persona 4: Portfolio Owner or Maintainer (Phat, the Student, or a Trusted Maintainer)

- **Role**: Owns the accuracy, privacy safety, and long-term upkeep of the published content.
- **Goals**: Ensure only verified, privacy-safe content and assets are published; keep content and code maintainable as facts change (e.g., new contact info or résumé becomes available later).
- **Behaviors**: Edits typed data modules to update facts; reviews the asset allowlist before adding new evidence; relies on tests to catch accidental exposure of sensitive content or regressions to the old identity.
- **Needs**: Clear separation of content data from presentation; an explicit, enforced public-asset allowlist; example-based and property-based tests that fail loudly on regressions or privacy violations; documentation that matches the current structure.
- **Accessibility considerations**: Needs the codebase itself to be navigable and well-documented, since accessibility here means maintainability rather than end-user accessibility.
