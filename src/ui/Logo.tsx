import LogoImg from "../assets/logo.png";
import "./Logo.scss";

export const Logo = () => {
  return (
    <img
      src={LogoImg}
      alt="A&N Glass & Glazing"
      className="logo"
      onClick={() => (window.location.href = "/")}
    />
  );
};
