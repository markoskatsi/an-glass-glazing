import AboutVideo from "../assets/about.mp4";
import "./About.scss";

export const About = () => (
  <section className="about-section" id="about">
    <div className="about-inner">
      <div className="about-content">
        <div className="about-head">
          <span className="eyebrow">About us</span>
          <h2>
            My Journey in
            <span> Glass & Glazing</span>
          </h2>
        </div>
        <p className="about-text">
           It all started in Greece, where I began my
          career in the glass and glazing industry. Over the years, I developed
          practical experience in glass installation, fittings, shower enclosures,
          staircases and architectural glass. In 2017, I moved to the UK and
          continued working in the same industry, bringing with me the experience
          and skills I had built in Greece. Since then, I have continued to
          develop my knowledge of modern glass systems, fittings and installation
          techniques. Today, after many years working with glass, I specialise in
          glass & glazing, glass balustrades, frameless systems, shower
          enclosures, glass doors, mirrors and specialist glass installations. My
          goal has always been the same: quality workmanship, attention to detail
          and making sure every installation is completed safely and
          professionally. A&N Glass & Glazing is built on experience and developed
          through years of hard work.
        </p>
      </div>
      <div className="about-media">
        <video
          src={AboutVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      </div>
    </div>
  </section>
);
