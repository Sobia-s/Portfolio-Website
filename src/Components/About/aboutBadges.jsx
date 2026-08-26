import "./aboutBadges.css";
import badges from "../../Data/badgesData";
import SectionHeader from "../../shared/sectionHeading";

function AboutBadges() {
  return (
    <section className="about-badges-section">
      <div className="about-badges-heading-section">
        <SectionHeader
          eyebrow="Credentials & recognition"
          title="Proof that curiosity goes somewhere"
          align="center"
        />
      </div>

      <div className="about-badges-track-wrapper">
        <div className="about-badges-track">
          {/* Original badges */}
          {badges.map((item) => (
            <div className="about-badge-card" key={item.id}>
              <img
                src={item.src}
                alt={item.alt}
                className="about-badge-img"
                loading="lazy"
              />
            </div>
          ))}

          {/* Duplicated badges for seamless animation */}
          {badges.map((item) => (
            <div
              className="about-badge-card"
              key={`${item.id}-duplicate`}
              aria-hidden="true"
            >
              <img
                src={item.src}
                alt=""
                className="about-badge-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutBadges;