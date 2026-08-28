import HeroImage from "../assets/hero.jpeg";
import { Button, ButtonTray } from "../ui/Button";
import "./Landing.scss";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "10", label: "Services Covered" },
  { value: "100%", label: "Family Owned" },
];

export const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-inner">
        <div className="landing-content">
          <span className="eyebrow">
            Balustrades · Double Glazing · Repairs
          </span>
          <h1>
            Quality you can see, <br />
            <span>service you can trust</span>
          </h1>
          <p>
            From misted double-glazed units and broken panes to frameless
            balustrades and walk-in shower glass - surveyed, made to size and
            installed by a specialist with over twenty years on the tools.
          </p>
          <ButtonTray>
            <Button href="/#contact">Request a Free Quote</Button>
            <Button variant="secondary" href="/#gallery">
              View Gallery
            </Button>
          </ButtonTray>
          <ul className="landing-stats">
            {stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="landing-media">
          <img src={HeroImage} alt="A&N Glass & Glazing" />
        </div>
      </div>
    </section>
  );
};
