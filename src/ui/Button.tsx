import "./Button.scss";

export const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) => {
  const external = href?.startsWith("http") || href?.startsWith("mailto:");
  return href ? (
    <a
      className={`btn ${variant}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <button className={`btn ${variant}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export const ButtonTray = ({ children }: { children: React.ReactNode }) => {
  return <div className="btn-tray">{children}</div>;
};
