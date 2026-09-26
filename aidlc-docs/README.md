# AI-DLC Documentation Index

## Active Change

- **Change**: Medical Student Portfolio Revamp
- **Requirements**: `inception/requirements/requirements.md`
- **User stories and personas**: `inception/user-stories/stories.md`, `inception/user-stories/personas.md`
- **Execution plan**: `inception/plans/execution-plan.md`
- **Application design**: `inception/application-design/application-design.md`
- **Unit of work**: `inception/application-design/unit-of-work.md`, `unit-of-work-dependency.md`, `unit-of-work-story-map.md`
- **Current reverse engineering**: `inception/reverse-engineering/`
- **State**: `aidlc-state.md`
- **Append-only audit history**: `audit.md`

## Current Product Boundary

- One unified medical portfolio template replaces the Engineering/Business template pair; the style selector and layout toggle are removed.
- Shared routes, hash navigation, color mode, and GitHub Pages behavior remain authoritative under the new design tokens.
- Public content and imagery are restricted to an explicit asset allowlist; `src/assets/CV/` is never enumerated or imported wholesale.

## Previous Change (Superseded)

- **Change**: Business Color and Two-Theme Refresh
- **Status when superseded**: Code Generation Part 2 completed; final Code Generation review and Build and Test rerun were still pending.
- **Artifacts**: `inception/requirements/business-youthful-color-refresh-requirements.md`, `construction/plans/business-youthful-color-refresh-code-generation-plan.md`, `construction/business-youthful-color-refresh/code/code-generation-summary.md`, `construction/build-and-test/`.

## Documentation Controls

- Update active artifacts instead of creating duplicate revisions.
- Keep implementation details in application code and tests; documentation records scope, decisions, and verification evidence.
- Keep `aidlc-state.md` focused on the active workflow and concise historical status.
- Keep `audit.md` append-only and complete; it is the required immutable historical record.
- Create additional design artifacts only when an approved stage requires them.
