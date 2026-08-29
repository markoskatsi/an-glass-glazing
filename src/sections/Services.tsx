import { Section } from "../ui/Section";
import { services } from "../data/services";
import "./Services.scss";

export const Services = () => {
  return (
    <Section id="services" eyebrow="What we do" title="Our Services">
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={service.name} className="service-card">
            <span className="service-num">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
