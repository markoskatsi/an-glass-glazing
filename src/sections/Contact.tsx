import { Section } from "../ui/Section";
import { useState } from "react";
import {
  ContactForm,
  type ContactRecord,
} from "../entities/contact/ContactForm.tsx";

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
    <Section id="contact" eyebrow="Get in touch" title="Request a free quote">
      <p>
        Tell us what needs doing and where you are. A photo of the window, door
        or opening usually saves a visit.
      </p>
      <p>
        Prefer to message? We answer on{" "}
        <a
          href="https://www.instagram.com/a.n.glass.glazing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        ,{" "}
        <a
          href="https://www.facebook.com/people/ANGlassGlazing/61589756037667/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{" "}
        and{" "}
        <a
          href="https://wa.me/07359252329"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        .
      </p>
      <ContactForm
        onSubmit={onSubmit}
        submitText={result ? result : "Send Enquiry"}
        message={
          result === "Sent!" ? (
            <p className="FormMessage">
              Thanks for your enquiry. We'll be in touch soon.
            </p>
          ) : result === "Error" ? (
            <p className="FormError">
              Sorry, there was an error sending your enquiry. Please try again.
            </p>
          ) : null
        }
      />
    </Section>
  );
};
