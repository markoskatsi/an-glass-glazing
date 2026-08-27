import { Logo } from "../ui/Logo";
import "./Footer.scss";

const services = [
  "Double glazed units",
  "Balustrades",
  "Safety & laminated glass",
  "Splashbacks",
  "Locksmith services",
  "Misted window replacement",
  "Walk-in bathroom glass",
  "Mirrors supplied & fitted",
  "Hinges & repairs",
  "Cat flaps installed",
];

export const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-about">
          <Logo />
          <p className="footer-text">
            A family run business. Glass and glazing specialists with over
            twenty years' experience. Supplied and fitted, domestic and
            commercial, across the UK.
          </p>
        </div>

        <div className="footer-col">
          <h2>Our Services</h2>
          <ul className="footer-services">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2>Contact Us</h2>
          <ul className="footer-contact">
            <li>
              <a href="tel:07359252329">07359 252329</a>
            </li>
            <li>
              <a href="mailto:an.glass.glazing@gmail.com">
                an.glass.glazing@gmail.com
              </a>
            </li>
            <li>
              <span>Barnsley, South Yorkshire, UK</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
