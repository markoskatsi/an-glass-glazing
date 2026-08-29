import { Section } from "../ui/Section";
import { suppliers } from "../data/suppliers";
import "./WhyUs.scss";

const reasons = [
  {
    title: "20+ Years Experience",
    description: "Two decades of glass and glazing, domestic and commercial.",
  },
  {
    title: "Made to measure",
    description: "Nothing ordered until the opening is surveyed and templated.",
  },
  {
    title: "Clean, tidy work",
    description:
      "Old glass and offcuts leave with us, sealant lines left neat.",
  },
  {
    title: "Free, honest quotes",
    description: "Priced from photos and sizes where possible, no obligation.",
  },
];

export const WhyUs = () => {
  return (
    <Section
      id="why-us"
      eyebrow="Why A&N Glass & Glazing"
      title="Family run, trusted, and experienced"
    >
      <div className="why-us-grid">
        <div className="why-us-intro">
          <p className="why-us-lead">
            A&N is family run. The person who quotes your job is the person who
            measures it and fits it. Nothing is subcontracted out, so nothing
            gets lost between one van and the next. With over twenty years'
            experience, we know our trade inside out, and we only buy from
            suppliers we trust so the glass and hardware that goes into your
            home is the same quality we'd put into our own.
          </p>

          <div className="why-us-suppliers">
            <span className="why-us-suppliers-label">
              Glass & hardware supplied by
            </span>
            <ul className="supplier-list">
              {suppliers.map((supplier) => (
                <li key={supplier.name} className="supplier">
                  {supplier.url ? (
                    <a
                      href={supplier.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {supplier.name}
                    </a>
                  ) : (
                    supplier.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="why-us-reasons">
          {reasons.map((reason, index) => (
            <li key={reason.title} className="why-us-reason">
              <span className="why-us-reason-number">0{index + 1}</span>
              <div className="why-us-reason-body">
                <h3 className="why-us-reason-title">{reason.title}</h3>
                <p className="why-us-reason-desc">{reason.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
