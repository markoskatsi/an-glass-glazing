import { services } from "../data/services";
import "./Services.scss";

export const Services = () => {
  return (
    <section className="section" id="services">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2>Our Services</h2>
        </div>
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
      </div>
    </section>
  );
};
