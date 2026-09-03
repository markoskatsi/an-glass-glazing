import { useState } from "react";
import { ImageGallery } from "react-image-grid-gallery";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { allImages, sections } from "../data/gallery";
import "react-image-grid-gallery/style.css";
import "./Gallery.scss";

const PAGE = 6;

export const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [offset, setOffset] = useState(0);

  const section = sections.find((s) => s.id === filter);
  const images = section?.images ?? allImages;
  const shown = images.slice(offset, offset + PAGE);

  const hasLess = offset > 0;
  const hasMore = offset + PAGE < images.length;

  const pick = (id: string) => {
    setFilter(id);
    setOffset(0);
  };

  const setPage = (next: number) => {
    setOffset(next);
    if (window.matchMedia("(max-width: 1000px)").matches) {
      document
        .getElementById("gallery")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section" id="gallery">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">Recent Jobs</span>
          <h2>Gallery</h2>
        </div>

        <a
          className="gallery-link"
          href="https://www.instagram.com/a.n.glass.glazing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          More on Instagram
          <Icon.ArrowRight />
        </a>

        <div className="gallery-filters">
          <button
            type="button"
            className={filter === "all" ? "is-active" : ""}
            onClick={() => pick("all")}
          >
            All work
          </button>
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              className={filter === s.id ? "is-active" : ""}
              onClick={() => pick(s.id)}
            >
              {s.short}
            </button>
          ))}
        </div>

        {section?.blurb && <p className="gallery-blurb">{section.blurb}</p>}

        <div className="gallery-grid">
          <ImageGallery
            key={filter}
            imagesData={shown}
            columnCount={3}
            gapSize={16}
            lazy
          />
        </div>

        {(hasLess || hasMore) && (
          <div className="gallery-actions">
            {hasLess && (
              <Button
                variant="secondary"
                onClick={() => setPage(Math.max(offset - PAGE, 0))}
              >
                <Icon.ReturnLeft />
                Show Less
              </Button>
            )}
            {hasMore && (
              <Button
                variant="secondary"
                onClick={() => setPage(offset + PAGE)}
              >
                Show More
                <Icon.ReturnRight />
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
