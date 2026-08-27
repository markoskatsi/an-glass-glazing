import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Logo } from "../ui/Logo";
import "./Header.scss";

const navItems = [
  { name: "Services", href: "/#services" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Why Us", href: "/#why-us" },
  { name: "Contact", href: "/#contact" },
];

export const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <Logo />
        <nav>
          {navItems.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
          <Button href="tel:07359252329">
            <Icon.Call />
            Call 07359252329
          </Button>
        </nav>
      </div>
    </header>
  );
};
