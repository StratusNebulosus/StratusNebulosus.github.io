# Stratus Visual Refresh — Application Design Plan

## Authorization and context

Execution-plan Question 1 C explicitly approved: "approve and continue". The approved plan authorizes this focused Application Design stage. Requirements, nine stories/four personas, current architecture/dependencies, and inspected App/shell/nav/theme/evidence/hero contracts inform this design. Technical names below are proposed contracts, not claims of existing implementation.

## Clarification assessment

All five required question categories were assessed:

| Category | Decision |
| --- | --- |
| Component identification | One frontend with shared medical content; the approved two-style requirement determines the presentation boundary |
| Component methods | Existing typed props and navigation/evidence methods provide the baseline; proposed style/layout contracts are routine design choices |
| Service layer | Static app and no backend are explicit requirements; orchestration uses hooks and pure browser adapters |
| Dependencies | Reuse Chakra/next-themes and the existing asset graph; no new runtime library is necessary |
| Design patterns | Shared section registry, stable provider and variant CSS satisfy approved maintainability/context goals |

No unresolved product ambiguity or additional clarification question is needed. Routine component naming and implementation boundaries remain reviewable in the artifacts. The already approved workflow authorizes preparing these artifacts; generated design receives the mandatory separate review before Construction.

## Execution steps

- [x] Load design rules, content-validation rules, approved requirements/stories/personas, execution plan and existing component context.
- [x] Record workflow approval; assess all design-question categories and resolve scope from approved requirements.
- [x] Define Notebook/Casebook presentation boundaries and shared section/content ownership.
- [x] Generate components.md with responsibilities, interfaces and feature ownership.
- [x] Generate component-methods.md with proposed method signatures, inputs/outputs and high-level contract requirements.
- [x] Generate services.md with browser-only orchestration and shared controller lifecycle.
- [x] Generate component-dependency.md with dependency matrix, communication patterns and validated flow diagram/text alternative.
- [x] Generate application-design.md consolidating decisions, requirement coverage and review points.
- [x] Validate completeness/consistency, Markdown, diagram grammar, interface agreement and shared-data/privacy boundaries before creation.
- [x] Update execution/state checkboxes and append approval/audit records in the same interaction.
- [x] Receive explicit generated-design approval — user: "approve and continue"; proceed to NFR Requirements.

Mandatory artifacts are placed in a refresh-specific subdirectory to preserve the original application design history. Application code remains outside aidlc-docs and unchanged during this stage.
## Extension compliance

Security Baseline: N/A, disabled B. Property-Based Testing: N/A, disabled C. Full rules not loaded; enforcement skipped according to Extension Configuration. Existing privacy/allowlist checks and property suites remain required. No enabled-extension blocking findings.
