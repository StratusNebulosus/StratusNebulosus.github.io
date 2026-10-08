# Stratus Visual Refresh — Requirement Questions

## Question 1 — Functionality scope

What does matching the reference project's main functionality include?

A) Match reference controls: retain all current medical features and add two presentation styles, single-page/section views, and persistent style/layout/theme choices.
B) Visual redesign only: retain the current single-page medical navigation, theme toggle, CV, email-draft form, and evidence previews without adding style/layout selectors.
X) Other (describe after the Answer tag).

[Answer]: A

## Question 2 — Visual direction

Which direction should guide the redesign?

A) Medical editorial notebook: use the reference's typography/spacing/polish with a distinct ink, teal/sage, and ivory palette; default dark with readable light mode.
B) Closely mirror the reference's ivory/ink, teal/chartreuse design while adapting its imagery and copy to this medical student; default dark with readable light mode.
X) Other (describe after the Answer tag).

[Answer]: A

## Question 3 — Security Extensions

Should security extension rules be enforced for this project?

A) Yes — enforce all SECURITY rules as blocking constraints (recommended for production-grade applications).
B) No — skip all SECURITY rules (suitable for PoCs, prototypes, and experimental projects).
X) Other (describe after the Answer tag).

[Answer]: B — retained explicit disabled setting from this project's existing Extension Configuration; change if desired.

## Question 4 — Property-Based Testing Extension

Should property-based testing (PBT) rules be enforced for this project?

A) Yes — enforce all PBT rules as blocking constraints (recommended for projects with business logic, data transformations, serialization, or stateful components).
B) Partial — enforce PBT rules only for pure functions and serialization round-trips (suitable for projects with limited algorithmic complexity).
C) No — skip all PBT rules (suitable for simple CRUD applications, UI-only projects, or thin integration layers with no significant business logic).
X) Other (describe after the Answer tag).

[Answer]: C — retained explicit disabled setting from this project's existing Extension Configuration; existing property tests still run.

Privacy/approved-asset controls remain requirements regardless of extension opt-in. Verified student facts, approved CV/evidence, meaningful contact behavior, and current GitHub Pages compatibility are preserved. No new medical claims or private evidence exposure are planned.
