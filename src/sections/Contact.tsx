import { Section } from "../ui/Section";
import { services } from "../data/services";
import { useState } from "react";

export const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "d82e17b9-e0fd-4353-8d6e-026fc325cd2c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Submitted successfully!");
      form.reset();
    } else {
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
        <a href="https://www.instagram.com/a.n.glass.glazing/">Instagram</a>,{" "}
        <a href="https://www.facebook.com/people/ANGlassGlazing/61589756037667/">
          Facebook
        </a>{" "}
        and <a href="https://wa.me/07359252329">WhatsApp</a>.
      </p>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Your email" required />
        <input type="tel" name="phone" placeholder="Best number" required />
        <input type="text" name="postcode" placeholder="e.g. S70" required />
        <select name="service" defaultValue="" required>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.name} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
        <textarea
          name="details"
          placeholder="Sizes, how many panes, anything useful"
          required
        ></textarea>
        <button type="submit">{result ? result : "Send Enquiry"}</button>
      </form>
    </Section>
  );
};
