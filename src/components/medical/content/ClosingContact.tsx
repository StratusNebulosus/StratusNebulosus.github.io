import { useState, type FormEvent } from "react";

import type { ContactSectionData } from "../../../types/medicalPortfolio";
import { buildMailtoUrl } from "../../../utils/contact";
import { MedicalSection } from "./MedicalSection";

const MESSAGE_LIMIT = 5_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactField = "name" | "email" | "message";
type ContactErrors = Partial<Record<ContactField, string>>;

const openEmailDraft = (url: string) => {
  const draftLink = document.createElement("a");
  draftLink.href = url;
  draftLink.setAttribute("aria-hidden", "true");
  draftLink.tabIndex = -1;
  document.body.append(draftLink);
  draftLink.click();
  draftLink.remove();
};

export function ClosingContact({ contact }: { contact: ContactSectionData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ContactErrors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: ContactErrors = {};
    if (!name.trim()) nextErrors.name = "Enter your name.";
    if (!email.trim()) nextErrors.email = "Enter your reply-to email.";
    else if (!EMAIL_PATTERN.test(email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!message.trim()) nextErrors.message = "Enter a message.";

    setErrors(nextErrors);

    const firstInvalidField = (Object.keys(nextErrors) as ContactField[])[0];
    if (firstInvalidField) {
      document.getElementById(`contact-${firstInvalidField}`)?.focus();
      return;
    }

    openEmailDraft(
      buildMailtoUrl(
        { name, email, message, subject: contact.draftSubject },
        contact.recipientEmail,
      ),
    );
  };

  return (
    <MedicalSection
      id="contact"
      index="08"
      eyebrow="Email draft"
      title="Looking ahead"
      tone="surface"
    >
      <div className="medical-contact-panel">
        <div className="medical-contact-introduction">
          <p className="medical-contact-statement">{contact.statement}</p>
          <p className="medical-contact-privacy" id="contact-privacy-note">
            {contact.privacyNotice}
          </p>
        </div>

        <form
          className="medical-contact-form"
          data-testid="medical-contact-form"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="medical-contact-fields">
            <div className="medical-contact-field">
              <label htmlFor="contact-name">Name</label>
              <input
                aria-describedby={
                  errors.name ? "contact-name-error" : undefined
                }
                aria-invalid={Boolean(errors.name)}
                autoComplete="name"
                data-testid="medical-contact-name-input"
                id="contact-name"
                name="name"
                onChange={(event) => {
                  setName(event.target.value);
                  if (errors.name)
                    setErrors((current) => ({ ...current, name: undefined }));
                }}
                required
                type="text"
                value={name}
              />
              {errors.name && (
                <span
                  className="medical-contact-error"
                  id="contact-name-error"
                  role="alert"
                >
                  {errors.name}
                </span>
              )}
            </div>

            <div className="medical-contact-field">
              <label htmlFor="contact-email">Reply-to email</label>
              <input
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                aria-invalid={Boolean(errors.email)}
                autoComplete="email"
                data-testid="medical-contact-email-input"
                id="contact-email"
                inputMode="email"
                name="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (errors.email)
                    setErrors((current) => ({ ...current, email: undefined }));
                }}
                required
                type="email"
                value={email}
              />
              {errors.email && (
                <span
                  className="medical-contact-error"
                  id="contact-email-error"
                  role="alert"
                >
                  {errors.email}
                </span>
              )}
            </div>

            <div className="medical-contact-field medical-contact-message-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                aria-describedby={
                  errors.message
                    ? "contact-message-error"
                    : "contact-message-count"
                }
                aria-invalid={Boolean(errors.message)}
                data-testid="medical-contact-message-input"
                id="contact-message"
                maxLength={MESSAGE_LIMIT}
                name="message"
                onChange={(event) => {
                  setMessage(event.target.value);
                  if (errors.message) {
                    setErrors((current) => ({
                      ...current,
                      message: undefined,
                    }));
                  }
                }}
                required
                rows={8}
                value={message}
              />
              <div className="medical-contact-message-meta">
                {errors.message ? (
                  <span
                    className="medical-contact-error"
                    id="contact-message-error"
                    role="alert"
                  >
                    {errors.message}
                  </span>
                ) : (
                  <span aria-hidden="true" />
                )}
                <output
                  aria-label={`${message.length} of ${MESSAGE_LIMIT} characters used`}
                  htmlFor="contact-message"
                  id="contact-message-count"
                >
                  {message.length} / {MESSAGE_LIMIT}
                </output>
              </div>
            </div>
          </div>

          <div className="medical-contact-actions">
            <p>{contact.reviewNote}</p>
            <button data-testid="medical-contact-submit-button" type="submit">
              <span>Open email draft</span>
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </form>
      </div>
    </MedicalSection>
  );
}
