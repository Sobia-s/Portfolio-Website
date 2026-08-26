import "./aboutStory.css";
import Button from "../../shared/button";
import girlWithLaptop from "../../Assets/about/girl with laptop.webp";
import SectionHeader from "../../shared/sectionHeading";

function AboutStory() {
  return (
    <section className="about-story-section">
      <div className="about-story-container">
        <div className="about-story-inner-container">
          <div className="about-story-image-container">
            <img
              src={girlWithLaptop}
              alt="Sobia's story illustration"
              className="about-story-image"
            />
          </div>

          <div className="about-story-text-container">
            <SectionHeader
              eyebrow="My journey"
              title="From colors to code"
            />

            <p className="about-story-description">
              I didn’t start with code. I started with drawing, sketching
              birds, landscapes, and filling pages with color simply because I
              loved creating. Then websites caught my eye, and I wondered:{" "}
              <em>how are these built?</em>
            </p>

            <p className="about-story-description">
              That curiosity led me into frontend development, where I found a
              way to bring creativity into something people can interact with.
              Along the way, I built <strong>Lumina</strong>, a reflection of
              how I approach design, development, and thoughtful digital
              experiences.
            </p>

            <Button to="/story" variant="primary">
              Read my story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;