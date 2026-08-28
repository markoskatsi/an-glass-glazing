import { Section } from "../ui/Section";
import "./Gallery.scss";

export const Gallery = () => {
  return (
    <Section id="gallery" eyebrow="Recent Jobs" title="Gallery">
      <div className="gallery-grid"></div>
    </Section>
  );
};
