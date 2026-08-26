import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaShoppingBag,
  FaEnvelope,
} from "react-icons/fa";
import "./contact.css";
import SectionHeader from "../../shared/sectionHeading";
import Button from "../../shared/button";

function Contact() {
  const location = useLocation();
  const selectedService = location.state?.service || "";

  useEffect(() => {
    document.title = "Contact | Work With Sobia";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: selectedService,
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setStatus("");
  };

  const validateForm = () => {
    const newErrors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const service = formData.service.trim();
    const message = formData.message.trim();

    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 4) {
      newErrors.name = "Please enter a valid name.";
    }

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!service) {
      newErrors.service = "Please select a service.";
    }

    if (!message) {
      newErrors.message = "Please tell me a little about your project.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("SENDING");

    try {
      const response = await fetch("https://formspree.io/f/moqgglyv", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          service: "",
          message: "",
        });

        setErrors({});
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
        console.error("Formspree error:", data);
      }
    } catch (error) {
      setStatus("ERROR");
      console.error("Network error:", error);
    }
  };

  return (
    <main className="contact-container">
      <div className="contact-banner-container">
        <div className="contact-inner-container">
          {/* Left: Info */}
          <div className="contact-info-container">
            <SectionHeader title="Have a project in mind?" />

            <p className="contact-para">
              I'd love to hear from you, whether it's a project, a
              collaboration, or just a question.
            </p>

            <div className="contact-social-icons">
              <a
                href="https://www.linkedin.com/in/sobiasoomro/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
              >
                <span
                  className="social-icon linkedin-icon"
                  aria-hidden="true"
                >
                  <FaLinkedin />
                </span>
                <span className="social-label">LinkedIn</span>
              </a>

              <a
                href="https://github.com/Sobia-s"
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
              >
                <span
                  className="social-icon github-icon"
                  aria-hidden="true"
                >
                  <FaGithub />
                </span>
                <span className="social-label">GitHub</span>
              </a>

              <a
                href="mailto:sobiasoomro97@gmail.com"
                className="social-item"
              >
                <span
                  className="social-icon email-icon"
                  aria-hidden="true"
                >
                  <FaEnvelope />
                </span>
                <span className="social-label">Email</span>
              </a>

              <a
                href="https://sobia.gumroad.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
              >
                <span
                  className="social-icon product-icon"
                  aria-hidden="true"
                >
                  <FaShoppingBag />
                </span>
                <span className="social-label">Gumroad</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-container">
            <SectionHeader title="Send me a message" />

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="name" className="contact-labels">
                Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                className="form-field"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                required
              />

              {errors.name && (
                <p id="name-error" className="field-error" role="alert">
                  {errors.name}
                </p>
              )}

              <label htmlFor="email" className="contact-labels">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                className="form-field"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                required
              />

              {errors.email && (
                <p id="email-error" className="field-error" role="alert">
                  {errors.email}
                </p>
              )}

              <label htmlFor="service" className="contact-labels">
                Service Interested In
              </label>

              <select
                id="service"
                name="service"
                className="form-field"
                value={formData.service}
                onChange={handleChange}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={
                  errors.service ? "service-error" : undefined
                }
                required
              >
                <option value="">— Select a service —</option>
                <option value="Frontend Development">
                  Frontend Development
                </option>
                <option value="React Development">
                  React Development
                </option>
                <option value="WordPress Websites">
                  WordPress Websites
                </option>
                <option value="Landing Pages">
                  Landing Pages
                </option>
              </select>

              {errors.service && (
                <p id="service-error" className="field-error" role="alert">
                  {errors.service}
                </p>
              )}

              <label htmlFor="message" className="contact-labels">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                className="form-field-text"
                value={formData.message}
                onChange={handleChange}
                minLength="10"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "message-error" : undefined
                }
                required
              />

              {errors.message && (
                <p id="message-error" className="field-error" role="alert">
                  {errors.message}
                </p>
              )}

              {status === "SUCCESS" && (
                <p className="success-message" role="status">
                  Thank you for reaching out! I truly appreciate your message,
                  and I'll get back to you as soon as possible.
                </p>
              )}

              {status === "ERROR" && (
                <p className="error-message" role="alert">
                  Oops! Something went wrong. Please try again, or email me
                  directly at{" "}
                  <a href="mailto:sobiasoomro97@gmail.com">
                    sobiasoomro97@gmail.com
                  </a>
                  .
                </p>
              )}

              <Button
                type="submit"
                variant="primary"
                disabled={status === "SENDING"}
              >
                {status === "SENDING" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;