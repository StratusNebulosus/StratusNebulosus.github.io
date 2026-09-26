# Unit 5: Evidence Gallery - NFR Design Patterns

## Pattern 1: Validate once, render only admitted gallery records

- **Applies to**: privacy, content integrity, and production reliability.
- **Pattern**: one pure validation boundary checks the explicit 13-record gallery collection against the fixed Unit 2 allowlist before components consume it. Validation requires unique stable IDs, asset/source-name agreement, complete accessible copy, image-only membership, and exact approved inventory coverage.
- **Fail-closed behavior**: invalid, mismatched, duplicate, PDF, or unknown records are excluded from renderable output and surfaced as verification errors. Components never receive or repair raw asset paths.
- **Import boundary**: only the medical data/allowlist layer owns asset imports. Gallery components receive resolved typed values and cannot enumerate directories or use a dynamic glob.

## Pattern 2: Caption-preserving media degradation

- **Applies to**: runtime image failure resilience.
- **Pattern**: each `GalleryItem` tracks only whether its own image failed. Failure replaces the media frame with a restrained “Preview unavailable” status while preserving title, period, category, and description.
- **Interaction change**: a failed item is no longer an active preview trigger. If the same item fails while selected, `EvidenceGallery` clears selection and the modal closes.
- **Retry policy**: no automatic retry, backoff, alternate URL, or remote fallback. A reload provides the browser's normal retry boundary.

## Pattern 3: Pure selected-ID state with derived modal content

- **Applies to**: deterministic selection, close idempotence, stale-item recovery, and testability.
- **Pattern**: `GallerySelectionState` stores only `selectedItemId`. A pure transition function accepts `open(validId)` or `close`, and a pure lookup derives `selectedItem` from the current validated collection.
- **Validity rule**: Chakra Dialog's controlled `open` value is `selectedItem !== null`; an unknown, failed, or removed ID resolves to closed rather than rendering stale copied content.
- **Idempotence**: repeated close commands remain closed. Reopening the same valid ID produces one selected item and one modal.

## Pattern 4: Stable ID-keyed trigger restoration

- **Applies to**: dialog accessibility and dynamic failure recovery.
- **Pattern**: `EvidenceGallery` owns a stable map from item ID to card-button reference. Opening records the selected ID; closing delegates focus containment/Escape mechanics to Chakra and restores focus to the still-connected trigger for that ID.
- **Fallback**: if the original trigger is absent or disabled after an image failure, focus moves to the Gallery heading or section container rather than an unrelated control.
- **Boundary**: references are UI integration state only; they are not stored in content or the pure domain-state object.

## Pattern 5: Chakra-controlled accessible dialog

- **Applies to**: contained focus, Escape dismissal, background suppression, dialog naming, and close behavior.
- **Pattern**: compose Chakra Dialog primitives as a controlled dialog driven by derived selection. Provide an explicit title association, description/caption text, visible close button, backdrop, and close-state callback.
- **No custom trap**: do not add manual Tab cycling, global key listeners, portal management, or background `aria-hidden` mutation.
- **Verification**: interaction tests verify the integrated behavior rather than assuming library behavior.

## Pattern 6: Reserved native-lazy media

- **Applies to**: loading performance and layout stability.
- **Pattern**: every thumbnail declares dimensions/aspect ratio, `loading="lazy"`, and `decoding="async"`. CSS uses a reviewed `cover` crop and optional focal position. The modal reuses the exact same asset with `contain` and viewport-relative size limits.
- **No speculative work**: no preloader, IntersectionObserver loader, responsive variant generator, client cache, image processor, or duplicate preview import.
- **Failure isolation**: one image failure affects only its own item and selected preview.

## Pattern 7: Bounded semantic CSS grid

- **Applies to**: responsive scalability and reading order.
- **Pattern**: render all 13 validated records once in authored DOM order. Token CSS progresses from one to two to three columns as width permits; cards use semantic buttons and captions without masonry reordering.
- **Growth boundary**: pagination, virtualization, filtering, carousel state, and incremental batches remain absent. A materially larger future inventory triggers a new design decision.
- **Modal boundary**: modal width/height stay within the viewport; its content may scroll vertically without causing horizontal page scrolling.

## Pattern 8: Complementary model and interaction verification

- **Applies to**: enabled Property-Based Testing and critical accessibility paths.
- **Pattern**: pure validation/selection functions receive domain-specific generated gallery records and open/close command sequences; Testing Library examples cover the exact production inventory and Chakra interaction behavior.
- **State model**: after every generated command, selection is either closed or a valid, non-failed member of the current collection. Repeated close is compared against the simple always-closed reference.
- **Reproducibility**: `fast-check` shrinking and failure seeds remain enabled; meaningful shrunk failures become example regressions.

## Explicitly Not Applicable

- Server retry, circuit breaker, queue, database, failover, disaster recovery, autoscaling, throughput, worker, CDN, and service-cache patterns are N/A because Unit 5 has no remote runtime dependency.
- Authentication, authorization, session state, and private media delivery are N/A because only reviewed public assets enter the static bundle.

## Extension Compliance

| Rule | Result | Rationale |
|---|---|---|
| Security Baseline | Skipped | Explicitly disabled in the active Extension Configuration. |
| PBT-01 | Compliant | Functional Design identifies collection/render/media invariants, open validation, close idempotence, and the selection command model. |
| PBT-02 | N/A | No inverse transformation exists. |
| PBT-03 | Design ready | Patterns 1, 3, 6, and 8 carry all documented invariants into Code Generation. |
| PBT-04 | Design ready | Pattern 3 specifies and Pattern 8 assigns close-idempotence testing. |
| PBT-05 | N/A | No optimized/reference algorithm pair exists. |
| PBT-06 | Design ready | Pattern 8 defines command-sequence model testing after every transition. |
| PBT-07 | Design ready | Gallery record, invalid record, and command generators are assigned to test support. |
| PBT-08 | Design ready | Existing shrinking and seed replay remain required. |
| PBT-09 | Compliant | `fast-check` 4.10.1 with Vitest is installed and approved. |
| PBT-10 | Design ready | Model properties are paired with exact inventory and interaction examples. |

No blocking enabled-extension finding remains at this stage.
