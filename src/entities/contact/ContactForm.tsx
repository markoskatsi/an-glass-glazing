import { Form } from "../../ui/Form";
import { services } from "../../data/services";

export interface ContactRecord extends Record<string, unknown> {
  name: string;
  email?: string;
  phone?: string;
  postcode?: string;
  service?: string;
  details: string;
}

const emptyContact: ContactRecord = {
  name: "",
  email: "",
  phone: "",
  postcode: "",
  service: "",
  details: "",
};

export const ContactForm = ({
  onSubmit,
  initialContact = emptyContact,
  submitText,
  message,
}: {
  onSubmit: (data: ContactRecord) => void;
  initialContact?: ContactRecord;
  submitText?: string;
  message?: React.ReactNode;
}) => {
  const validation = {
    isValid: {
      name: (v: unknown) => typeof v === "string" && v.length > 2,
      email: (v: unknown) =>
        typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      phone: (v: unknown) => {
        if (typeof v !== "string") return false;
        const digits = v.replace(/\D/g, "").replace(/^(?:0044|44)/, "0");
        return /^0\d{9,10}$/.test(digits);
      },
      postcode: (v: unknown) => typeof v === "string" && v.length > 2,
      details: (v: unknown) => typeof v === "string" && v.length > 2,
      service: (v: unknown) => typeof v === "string" && v.length > 0,
    },
    errorMessage: {
      name: "Please provide a valid name",
      email: "Please provide a valid email address",
      phone: "Please provide a valid phone number",
      postcode: "Please provide a valid postcode",
      details: "Please provide some details about your enquiry",
      service: "Please select a service",
    },
  };

  const [contact, errors, handleChange, handleSubmit] = Form.useForm(
    initialContact,
    validation,
    onSubmit,
  );

  return (
    <Form onSubmit={handleSubmit} submitText={submitText} message={message}>
      <Form.Item label="Name" htmlFor="name" error={errors.name}>
        <input
          className="FormInput"
          type="text"
          name="name"
          id="name"
          value={contact.name}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Email" htmlFor="email" error={errors.email}>
        <input
          className="FormInput"
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          value={contact.email}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Phone" htmlFor="phone" error={errors.phone}>
        <input
          className="FormInput"
          type="text"
          name="phone"
          id="phone"
          value={contact.phone}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Postcode" htmlFor="postcode" error={errors.postcode}>
        <input
          className="FormInput"
          type="text"
          name="postcode"
          id="postcode"
          value={contact.postcode}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Service" htmlFor="service" error={errors.service} wide>
        <select
          className="FormInput"
          name="service"
          id="service"
          value={contact.service}
          onChange={handleChange}
        >
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
      </Form.Item>

      <Form.Item label="Details" htmlFor="details" error={errors.details} wide>
        <textarea
          className="FormInput"
          name="details"
          id="details"
          value={contact.details}
          onChange={handleChange}
          rows={4}
        />
      </Form.Item>
    </Form>
  );
};
