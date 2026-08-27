import "./Services.scss";

const services = [
  {
    name: "Double Glazed Units",
    description:
      "Sealed units supplied and fitted to any size, including Low-E, toughened and obscure glass.",
  },
  {
    name: "Misted window replacement",
    description:
      "Blown and steamed-up units swapped out. The glass only, frames stay where they are.",
  },
  {
    name: "Balustrades",
    description:
      "Frameless, channel and post-fixed glass balustrades for stairs, landings, terraces and balconies.",
  },
  {
    name: "Walk-in bathroom glass",
    description:
      "Wetroom and walk-in shower screens cut to fit, drilled and sealed to keep water where it belongs.",
  },
  {
    name: "Safety & laminated glass",
    description:
      "Toughened and laminated glass where regulations or common sense call for it: doors, low panes and stairs.",
  },
  {
    name: "Mirrors supplied & fitted",
    description:
      "Mirrors cut to size with polished edges, fitted flat and level on any wall.",
  },
  {
    name: "Splashbacks",
    description:
      "Kitchen and bathroom splashbacks in coloured or clear toughened glass, cut round sockets and taps.",
  },
  {
    name: "Hinges & repairs",
    description:
      "Hinges, handles, friction stays and dropped doors put back in order without replacing the whole frame.",
  },
  {
    name: "Locksmith services",
    description:
      "Locks, cylinders and multipoint mechanisms changed or upgraded on uPVC, aluminium and timber doors.",
  },
  {
    name: "Cat flaps installed",
    description:
      "Cat and dog flaps fitted neatly into a new sealed unit. No cutting into your existing glass.",
  },
];

export const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="services-head">
          <div>
            <span className="eyebrow">What we do</span>
            <h2>Our Services</h2>
          </div>
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
