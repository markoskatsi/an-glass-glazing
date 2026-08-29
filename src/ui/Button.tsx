import "./Button.scss";

export const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
}) => {
  return (
    <a
      className={`btn ${variant}`}
      href={href}
      target={!href ? "_blank" : undefined}
      rel={!href ? "noopener noreferrer" : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export const ButtonTray = ({ children }: { children: React.ReactNode }) => {
  return <div className="btn-tray">{children}</div>;
};
