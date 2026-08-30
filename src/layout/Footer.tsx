import { Logo } from "../ui/Logo";
import { Icon } from "../ui/Icon";
import { services } from "../data/services";
import "./Footer.scss";

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
              <li key={service.name}>{service.name}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2>Contact Us</h2>
          <ul className="footer-contact">
            <li>
              <Icon.Call />
              <a href="tel:07359252329">07359 252329</a>
            </li>
            <li>
              <Icon.Mail />
              <a href="mailto:an.glass.glazing@gmail.com">
                an.glass.glazzing@gmail.com
              </a>
            </li>
            <li>
              <Icon.Location />
              <span>Barnsley, South Yorkshire, UK</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
