export type ContactFormInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const encodeMailtoValue = (value: string): string => encodeURIComponent(value);

export const buildMailtoUrl = (
  formInput: ContactFormInput,
  recipientEmail: string,
): string => {
  const subject = formInput.subject.trim() || "Portfolio contact";
  const bodyLines = [
    `Name: ${formInput.name.trim()}`,
    `Reply-to email: ${formInput.email.trim()}`,
    "",
    formInput.message.trim(),
  ];

  return `mailto:${recipientEmail.trim()}?subject=${encodeMailtoValue(subject)}&body=${encodeMailtoValue(
    bodyLines.join("\n"),
  )}`;
};
