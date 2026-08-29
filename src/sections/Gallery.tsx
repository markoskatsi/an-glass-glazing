import staircase from "../assets/jobs/glass-staircase.jpg";
import balustradeStairs from "../assets/jobs/glass-balustrade-stairs.jpg";
import seaView from "../assets/jobs/sea-view-balustrade.jpg";
import veranda from "../assets/jobs/glass-veranda.jpg";
import splashback from "../assets/jobs/orange-splashback.jpg";
import shower from "../assets/jobs/walk-in-shower.jpg";
import stadiumBalustrade from "../assets/jobs/stadium-glass-balustrade.jpeg";
import gardenBalustrade from "../assets/jobs/garden-glass-balustrade.jpeg";
import { Section } from "../ui/Section";
import { Icon } from "../ui/Icon";
import { ImageGallery } from "react-image-grid-gallery";
import { Button } from "../ui/Button";
import "react-image-grid-gallery/style.css";
import "./Gallery.scss";
import { useState } from "react";

const jobs = [
  {
    id: stadiumBalustrade,
    src: stadiumBalustrade,
    caption: "Stadium glass balustrade",
    alt: "Frameless glass balustrade dividing seating rows in a football stadium stand",
  },
  {
    id: gardenBalustrade,
    src: gardenBalustrade,
    caption: "Garden glass balustrade",
    alt: "Frameless glass balustrade in a garden setting",
  },
  {
    id: shower,
    src: shower,
    caption: "Walk-in shower enclosure",
    alt: "Frameless walk-in shower enclosure with sliding glass doors",
  },
  {
    id: staircase,
    src: staircase,
    caption: "Frameless glass staircase",
    alt: "Frameless glass balustrade on a floating glass staircase",
  },
  {
    id: veranda,
    src: veranda,
    caption: "Glass veranda enclosure",
    alt: "Glass-enclosed veranda with a sea view",
  },
  {
    id: seaView,
    src: seaView,
    caption: "Sea-view balustrade",
    alt: "Frameless glass terrace balustrade overlooking the sea",
  },
  {
    id: splashback,
    src: splashback,
    caption: "Coloured glass splashback",
    alt: "Orange toughened glass splashback wall panel",
  },
  {
    id: balustradeStairs,
    src: balustradeStairs,
    caption: "Glass balustrade on stairs",
    alt: "Frameless glass balustrade on a set of stairs",
  },
];

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
