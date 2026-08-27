import "./Button.scss";

export const Button = ({
  children,
  variant = "primary",
  href,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
}) => {
  return (
    <a
      className={`btn ${variant}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export const ButtonTray = ({ children }: { children: React.ReactNode }) => {
  return <div className="btn-tray">{children}</div>;
};
