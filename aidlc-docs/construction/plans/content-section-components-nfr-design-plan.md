# Unit 4: Content Section Components - NFR Design Plan

## Design Progress

- [x] Load approved Unit 4 Functional Design, NFR Requirements, technology decisions, and extension configuration.
- [x] Evaluate resilience, scalability, performance, privacy/security, and logical-component pattern applicability.
- [x] Resolve the four pattern decisions below.
- [x] Analyze answers for ambiguity or contradiction.
- [x] Generate `nfr-design-patterns.md` and `logical-components.md`.
- [x] Verify extension compliance before review.

## Category Assessment

- **Resilience**: applicable only to local asset/content failures; there are no network retries or server recovery paths.
- **Scalability**: runtime infrastructure scaling is N/A for static GitHub Pages, but content-list growth and responsive density need a bounded rendering pattern.
- **Performance**: static CSS, reserved portrait space, native PDF download, and lazy optional evidence are applicable.
- **Security/privacy**: Security Baseline is disabled, but the approved allowlist, placeholder-contact isolation, and prohibited-asset sweep remain applicable product controls.
- **Logical infrastructure**: queues, caches, databases, circuit breakers, and service meshes are N/A; first-party React/data/test modules are the only logical components.

## Question 1
What resilience pattern should components use when optional or disallowed media is encountered?

A) Render the verified text content, omit only the invalid/absent media or download action, and make tests fail loudly against the data configuration; never show a broken placeholder control (recommended)
B) Render a visible “media unavailable” placeholder card in every affected location
C) Throw a runtime error that prevents the section or page from rendering
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 2
How should growing lists of awards, activities, and credentials scale within this static portfolio?

A) Render bounded semantic CSS grids/lists from typed data, allow natural wrapping/collapse at breakpoints, and avoid pagination, virtualization, carousels, or client-side filtering at the current content volume (recommended)
B) Add collapsible accordions for every content group
C) Add client-side filters and pagination now for future growth
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 3
How should the placeholder-contact isolation control be implemented?

A) Add source/content regression tests for the exact placeholder phone/email plus general private-field patterns, while allowing the bytes to exist only inside the explicitly approved PDF asset (recommended)
B) Rely only on developer review because the PDF is approved
C) Block the placeholder strings everywhere, including inside the approved PDF, which would require replacing or editing the file
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 4
Which logical-component boundary should organize Unit 4?

A) One typed medical content/allowlist layer, one shared presentational-primitives layer, one section-components layer, and colocated example/property/source-style tests; no cache, state store, queue, or infrastructure component (recommended)
B) Give every section its own independent data file and styling system
C) Add a client-side global state store for content and section presentation
X) Other (please describe after [Answer]: tag below)

[Answer]: A
