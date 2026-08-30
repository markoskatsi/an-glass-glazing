import { useState } from "react";
import {
  ContactForm,
  type ContactRecord,
} from "../entities/contact/ContactForm.tsx";
import "./Contact.scss";

const WEB3FORMS_ACCESS_KEY = "d82e17b9-e0fd-4353-8d6e-026fc325cd2c";

export const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (data: ContactRecord) => {
    setResult("Sending....");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...data,
        }),
      });
      const json = await response.json();
      setResult(json.success ? "Sent!" : "Error");
    } catch {
      setResult("Error");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="section-inner contact-grid">
        <div className="contact-intro">
          <div className="section-head">
            <span className="eyebrow">Get in touch</span>
            <h2>Request a free quote</h2>
          </div>
          <p className="contact-lead">
            Tell us what needs doing and where you are, and we'll get you a free
            quote.
          </p>
          <p className="contact-alt">
            Prefer to message? You'll also find us on{" "}
            <a
              href="https://www.instagram.com/a.n.glass.glazing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            and{" "}
            <a
              href="https://www.facebook.com/people/ANGlassGlazing/61589756037667/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            .
          </p>
        </div>
        <ContactForm
          onSubmit={onSubmit}
          submitText={result ? result : "Send Enquiry"}
          message={
            result === "Sent!" ? (
              <p className="FormMessage">
                Thanks for your enquiry, we'll be in touch soon. Got a photo of
                the job?{" "}
                <a
                  href="https://wa.me/07359252329"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send it over on WhatsApp
                </a>{" "}
                or to our phone number in the footer to help us quote faster.
              </p>
            ) : result === "Error" ? (
              <p className="FormError">
                Sorry, there was an error sending your enquiry. Please try
                again.
              </p>
            ) : null
          }
        />
      </div>
    </section>
  );
};
