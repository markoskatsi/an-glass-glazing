import { Section } from "../ui/Section";
import { Icon } from "../ui/Icon";
import { ImageGallery } from "react-image-grid-gallery";
import { Button } from "../ui/Button";
import { useState } from "react";
import { jobs } from "../data/jobs";
import "react-image-grid-gallery/style.css";
import "./Gallery.scss";

export const Gallery = () => {
  const [offset, setOffset] = useState(0);
  const currentJobs = jobs.slice(offset, offset + 6);
  return (
    <Section id="gallery" eyebrow="Recent Jobs" title="Gallery">
      <a
        className="gallery-link"
        href="https://www.instagram.com/a.n.glass.glazing/"
        target="_blank"
        rel="noopener noreferrer"
      >
        More on Instagram
        <Icon.ArrowRight />
      </a>
      <div className="gallery-grid">
        <ImageGallery imagesData={currentJobs} columnCount={3} gapSize={16} />
        {offset > 0 && (
          <Button
            variant="secondary"
            onClick={() => setOffset(Math.max(offset - 6, 0))}
            href="#gallery"
          >
            <Icon.ReturnLeft />
            Show Less
          </Button>
        )}
        {offset + 6 < jobs.length && (
          <Button
            variant="secondary"
            onClick={() => setOffset(offset + 6)}
            href="#gallery"
          >
            Show More
            <Icon.ReturnRight />
          </Button>
        )}
      </div>
    </Section>
  );
};
