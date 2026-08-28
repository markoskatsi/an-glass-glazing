import type { ReactNode } from "react";
import "./Section.scss";

export const Section = ({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) => {
  return (
    <section className="section" id={id}>
      <div className="section-inner">
        <div className="section-head">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
          </div>
        </div>
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
};
