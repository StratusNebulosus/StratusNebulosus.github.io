# Contact Email Draft Code Generation Plan

This plan is the single source of truth for the focused Contact Email Draft revision. Application code remains in the workspace root; only implementation summaries belong under `aidlc-docs/`.

## Unit Context

- **Existing unit**: Content Section Components, with supporting Testing and Documentation updates.
- **Approved outcome**: Replace non-interactive placeholder cards with an email-only draft form addressed to `buituanphat123456@gmail.com`.
- **User workflow**: A visitor enters Name, Reply-to email, and Message, receives accessible validation, then opens a pre-addressed draft in the local email application for review and sending.
- **Privacy boundary**: The site neither submits nor stores form content and must not claim that opening a draft sent a message.
- **Visual boundary**: Follow the supplied reference's panel hierarchy, top rule, labels, responsive field grid, counter, and strong action while retaining the medical portfolio palette and compact section header.
- **Deployment boundary**: Static React/Vite GitHub Pages delivery; no backend, runtime API, new dependency, secret, analytics, or hosting change.

## Dependencies and Interfaces

- `ClosingContact` continues to receive one typed `ContactSectionData` object.
- `ContactSectionData` changes from placeholder-channel data to recipient and presentation copy.
- `buildMailtoUrl` remains the pure boundary for deterministic draft URL construction.
- Browser navigation to the `mailto:` URL is the only external handoff; entered values remain in React state.
- Existing medical tokens, section layout, dark mode, and responsive breakpoints remain authoritative.
- Existing privacy and production verifiers must continue excluding the former owner's contact details and prohibited CV assets.

## Requirements Traceability

- **FR-11**: Email-only fields, verified recipient, 5,000-character limit, accessible validation, privacy copy, encoded mailto draft, no sent state, and no phone.
- **NFR-01**: Persistent labels, keyboard focus, required semantics, associated errors, and accessible counter behavior.
- **NFR-05 and NFR-08**: Evergreen-browser compatibility, static hosting, no backend or runtime secret.
- **Acceptance Criteria 8, 25, and 26**: Exact Contact structure, validation and encoding, local review-and-send language, and no storage or delivery claim.

## Generation Steps

- [x] **Step 1: Revise the typed Contact data contract and configured content.** Update `src/types/medicalPortfolio.ts` and `src/data/medical/content.ts` so Contact exposes the verified recipient, statement, privacy notice, review note, and stable draft subject without placeholder channels or phone data. Update `src/data/medical/content.test.ts` to enforce the new contract and prohibit retired values.

- [x] **Step 2: Harden and test deterministic email-draft composition.** Update `src/utils/contact.ts` only as needed to trim user input, preserve the stable subject, label the reply-to email clearly in the body, and percent-encode subject and body. Add a focused utility test covering reserved characters, Unicode, line breaks, trimming, and the verified recipient without introducing a network call.

- [x] **Step 3: Implement the accessible controlled Contact form.** Replace the placeholder list in `src/components/medical/content/ClosingContact.tsx` with Name, Reply-to email, and Message controls, stable automation-friendly test IDs, a 5,000-character maximum and live counter, required/email validation, field-associated error text, privacy/review copy, and an `Open email draft` submit action. Preserve values after draft handoff and never show a sent confirmation.

- [x] **Step 4: Apply the reference-informed responsive Contact presentation.** Replace obsolete Contact-card rules in `src/components/medical/content/medical-content.css` with a medical-theme form panel, top accent rule, compact uppercase labels, two-column Name/Reply-to layout where space permits, full-width Message field, visible focus and error states, live counter alignment, and a prominent responsive draft button. Preserve light/dark tokens, the shared compact heading rail, 44-pixel practical targets, and 320-pixel compatibility.

- [x] **Step 5: Add focused component and application regressions.** Update `src/components/medical/content/MedicalContent.test.tsx` and `src/App.test.tsx` to cover form rendering, labels, required behavior, invalid email handling, character count, message limit, valid draft opening, encoded visitor content, verified recipient, privacy/review copy, retained values, and removal of phone and fictional placeholders.

- [x] **Step 6: Update cross-cutting policy and property coverage.** Revise `src/test/medicalPortfolioPolicy.ts`, `src/test/medicalPortfolioRegression.test.tsx`, `src/test/arbitraries/medicalContent.ts`, `src/components/medical/content/MedicalContent.property.test.tsx`, and any directly affected production/privacy assertions so the verified recipient is allowed, the former-owner address and phone contacts remain prohibited, and generated Contact data continues rendering safely.

- [x] **Step 7: Refresh public documentation and documentation contracts.** Update `README.md`, `src/test/documentationContract.test.ts`, and the focused Code Generation summary to describe the email-draft behavior, verified recipient location, no-storage boundary, and safe customization path. Historical AI-DLC artifacts remain unchanged unless they are active contracts superseded by this revision.

- [x] **Step 8: Run focused verification and correct implementation defects.** Run the Contact utility, content, component, application, property, regression, documentation-contract, and production-policy tests plus TypeScript and ESLint. Correct failures within the approved scope and immediately mark this step complete when all focused checks pass.

- [x] **Step 9: Run full production verification and finalize the generation summary.** Run the full test suite with deterministic property seed replay, root and repository-base Vite builds, production bundle verification, privacy scans, `git diff --check`, and duplicate-file checks. Record results in `aidlc-docs/construction/content-section-components/code/contact-email-draft-code-generation-summary.md`, update state, and present the mandatory Code Generation review gate before Build and Test.

## Requested Visual-Consistency Revision

- [x] **Step 10: Align the Contact surface with the established section-card system.** Keep the approved Name, Reply-to email, Message, counter, validation, and email-draft behavior unchanged. Replace the Contact-specific green-wash panel treatment with the same restrained surface mix, 0.55rem radius, subtle green shadow, burgundy accent edge, border weight, typography scale, control radius, and spacing language used by the narrative, score, activity, scholarship, and interest cards.

- [x] **Step 11: Strengthen focused visual-contract regressions.** Update `src/components/medical/content/medicalContentStyles.test.ts` to require shared card-system tokens and to reject the superseded high-tint Contact treatment while retaining responsive field layout, visible focus/error states, reduced motion, and the existing compact section hierarchy.

- [x] **Step 12: Re-run focused and full verification and refresh the summary.** Run formatting, TypeScript, ESLint, focused Contact/style tests, all tests with deterministic replay, both production base-path builds, production verification, privacy scans, and diff validation. Refresh the Code Generation summary and return to the Code Generation review gate before resuming Build and Test.

## Expected File Changes

### Application and Tests

- Modify `src/types/medicalPortfolio.ts`.
- Modify `src/data/medical/content.ts` and `src/data/medical/content.test.ts`.
- Modify `src/utils/contact.ts`; create or update its focused test.
- Modify `src/components/medical/content/ClosingContact.tsx` and `medical-content.css`.
- Modify the directly affected component, application, property, policy, regression, and documentation-contract tests.
- Modify `README.md`.

### AI-DLC Documentation

- Create `aidlc-docs/construction/content-section-components/code/contact-email-draft-code-generation-summary.md` during Step 9.
- Update this plan's checkbox immediately after each completed step.
- Update `aidlc-docs/aidlc-state.md` and append all interactions to `aidlc-docs/audit.md`.

## Completion Conditions

- All nine generation steps are checked.
- The form is accessible, responsive, email-only, and visually consistent with the supplied reference and existing medical design.
- The recipient is exactly `buituanphat123456@gmail.com`.
- No visitor data is submitted, stored, or reported as sent.
- No former-owner contact, fictional Contact placeholder, phone contact, prohibited CV asset, new dependency, backend, or runtime secret enters the public application.
- Focused and full verification gates pass before Code Generation is presented for review.

## Extension Compliance

- **Security Baseline**: Disabled; independent privacy requirements remain enforced.
- **Property-Based Testing**: Disabled as an extension; the existing property suite and deterministic seed replay remain mandatory project quality gates.
- **Blocking findings**: None.
