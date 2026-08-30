import { useLocation } from "react-router";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Logo } from "../ui/Logo";
import "./Header.scss";

export const Header = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/#gallery" },
    {
      name: "Why Us",
      href: `${pathname === "/about" ? "/about" : "/"}#why-us`,
    },
    {
      name: "Contact",
      href: `${pathname === "/about" ? "/about" : "/"}#contact`,
    },
    { name: "About", href: "/about" },
  ];

  const items = navItems.filter((item) => item.href !== pathname);

  return (
    <header>
      <div className="header-inner">
        <Logo />
        <nav>
          {items.map((item) => (
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
