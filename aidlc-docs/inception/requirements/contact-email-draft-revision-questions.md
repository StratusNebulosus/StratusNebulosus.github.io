# Contact Email Draft Revision Questions

The requested design replaces the currently approved non-interactive placeholder cards with a client-only email-draft form inspired by the supplied reference. The form will not submit to, store data on, or add a backend to this site. It will compose a `mailto:` draft in the visitor's email application for review.

The email address visible in the reference belongs to the former portfolio owner and will not be reused.

## Question 1
Which recipient should the email-draft form use?

A) Use a verified email address for Bui Tuan Phat that I provide with my answer
B) Keep `student.email@example.com` and label the form as a non-working demonstration until a verified address is available
X) Other (please describe after the [Answer]: tag below)

[Answer]: A - Use `buituanphat123456@gmail.com` as the verified recipient.

## Question 2
How should the existing placeholder phone card be handled?

A) Remove it and make the email-draft form the only Contact interaction
B) Retain the clearly labeled placeholder phone card below the email-draft form
X) Other (please describe after the [Answer]: tag below)

[Answer]: A - Remove the phone card and make the section email-only.

## Proposed Form Contract

Unless changed through the answers above, the implementation will:

- Render Name, Reply-to email, and Message fields.
- Enforce a 5,000-character message limit with a live counter.
- Explain that nothing is submitted or stored by the site.
- Open a pre-addressed email draft in the visitor's local email application.
- Keep the visitor in control to review, edit, and send the message.
- Use stable labels, visible focus styles, responsive one/two-column layout, and accessible validation.
- Add no backend, database, analytics, runtime API request, or secret.
