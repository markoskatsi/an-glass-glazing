import staircase from "../assets/jobs/glass-staircase.jpg";
import balustradeStairs from "../assets/jobs/glass-balustrade-stairs.jpg";
import seaView from "../assets/jobs/sea-view-balustrade.jpg";
import veranda from "../assets/jobs/glass-veranda.jpg";
import splashback from "../assets/jobs/orange-splashback.jpg";
import shower from "../assets/jobs/walk-in-shower.jpg";
import { Section } from "../ui/Section";
import { Icon } from "../ui/Icon";
import { ImageGallery } from "react-image-grid-gallery";
import "react-image-grid-gallery/style.css";
import "./Gallery.scss";

const jobs = [
  {
    id: staircase,
    src: staircase,
    caption: "Frameless glass staircase",
    alt: "Frameless glass balustrade on a floating glass staircase",
  },
  {
    id: balustradeStairs,
    src: balustradeStairs,
    caption: "Curved glass balustrade",
    alt: "Curved glass balustrade running down a stone staircase",
  },
  {
    id: seaView,
    src: seaView,
    caption: "Sea-view balustrade",
    alt: "Frameless glass terrace balustrade overlooking the sea",
  },
  {
    id: veranda,
    src: veranda,
    caption: "Glass veranda enclosure",
    alt: "Glass-enclosed veranda with a sea view",
  },
  {
    id: splashback,
    src: splashback,
    caption: "Coloured glass splashback",
    alt: "Orange toughened glass splashback wall panel",
  },
  {
    id: shower,
    src: shower,
    caption: "Walk-in shower enclosure",
    alt: "Frameless walk-in shower enclosure with sliding glass doors",
  },
];

export const Gallery = () => {
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
        <ImageGallery
          imagesData={jobs}
          columnCount={3}
          gapSize={16}
        />
      </div>
    </Section>
  );
};
