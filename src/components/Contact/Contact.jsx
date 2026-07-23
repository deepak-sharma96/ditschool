import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import headset from "../../assets/images/Headset.png";
import "./Contact.css";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function Contact({ selectedSubject }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    if (selectedSubject) {
      setForm((current) => ({ ...current, subject: selectedSubject }));
      setErrors((current) => ({ ...current, subject: false }));
      setStatus({ type: "", message: "" });
    }
  }, [selectedSubject]);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: false }));
    setStatus({ type: "", message: "" });
  };

const whatsappNumber = "919671668354";

const handleSubmit = (event) => {
  event.preventDefault();

  const nextErrors = Object.fromEntries(
    Object.entries(form).map(([field, value]) => [
      field,
      value.trim() === "",
    ])
  );

  // Email Validation
  if (
    form.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
  ) {
    nextErrors.email = true;
    setErrors(nextErrors);
    setStatus({
      type: "is-error",
      message: "Please enter a valid email address.",
    });
    return;
  }

  // Phone Validation
  if (
    form.phone.trim() &&
    !/^[0-9+\-\s()]{8,15}$/.test(form.phone.trim())
  ) {
    nextErrors.phone = true;
    setErrors(nextErrors);
    setStatus({
      type: "is-error",
      message: "Please enter a valid phone number.",
    });
    return;
  }

  // Empty Field Validation
  if (Object.values(nextErrors).some(Boolean)) {
    setErrors(nextErrors);
    setStatus({
      type: "is-error",
      message: "Please fill all fields.",
    });
    return;
  }

  // WhatsApp Message
  const message = `New Contact Form Submission

Name: ${form.firstName} ${form.lastName}

Email: ${form.email}

Phone: ${form.phone}

Subject: ${form.subject}

Message:
${form.message}`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

  setForm(initialForm);
  setErrors({});
  setStatus({
    type: "is-success",
    message: "Opening WhatsApp...",
  });
};

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-left reveal-item">
          <h2>Ask us a question, or just say Hello.</h2>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="input-row">
              <input
                className={errors.firstName ? "field-error" : ""}
                type="text"
                placeholder="First Name"
                value={form.firstName}
                onChange={(event) => updateField("firstName", event.target.value)}
              />
              <input
                className={errors.lastName ? "field-error" : ""}
                type="text"
                placeholder="Last Name"
                value={form.lastName}
                onChange={(event) => updateField("lastName", event.target.value)}
              />
            </div>

            <div className="input-row">
              <input
                className={errors.email ? "field-error" : ""}
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
              />
              <input
                className={errors.phone ? "field-error" : ""}
                type="tel"
                placeholder="Phone No."
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
              />
            </div>

            <input
              className={errors.subject ? "full-input field-error" : "full-input"}
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(event) => updateField("subject", event.target.value)}
            />

            <textarea
              className={errors.message ? "field-error" : ""}
              placeholder="Type Message..."
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
            />

            <div className="button-wrapper">
              <button type="submit" className="contact-btn">
                <span>Send</span>
                <FaArrowRight aria-hidden="true" />
              </button>
            </div>

            <p className={status.type ? `form-status ${status.type}` : "form-status"} aria-live="polite">
              {status.message}
            </p>
          </form>
        </div>

        <div className="contact-right reveal-item">
          <img src={headset} alt="Support" className="support-img" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
