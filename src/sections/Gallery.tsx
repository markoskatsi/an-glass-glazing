import "./Gallery.scss";

export const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-inner">
        <div className="gallery-head">
          <div>
            <span className="eyebrow">Recent Jobs</span>
            <h2>Gallery</h2>
          </div>
        </div>
        <div className="gallery-grid"></div>
      </div>
    </section>
  );
};
