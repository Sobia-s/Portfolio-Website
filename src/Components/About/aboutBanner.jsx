import "./aboutBanner.css";
import SectionHeader from "../../shared/sectionHeading";

const skills = [
  "React",
  "JavaScript",
  "HTML & CSS",
  "Frontend Architecture",
  "Responsive Design",
  "Component-Based Architecture",
  "Accessibility",
  "UI/UX Implementation",
  "Git & GitHub",
  "WordPress",
  "Digital Product Development",
];

function AboutBanner() {
  return (
    <section className="about-banner-section">
      <div className="about-banner-container">
        <div className="about-banner-inner-container">
          <div className="about-banner-text-container">
            <SectionHeader title="Meet Sobia" />

            <p className="about-banner-description">
              I’m a frontend developer who enjoys the space where design meets
              development, turning designs into responsive experiences while
              bringing my own ideas and thoughtful details into the process.
            </p>

            <p className="about-banner-description">
              I built Lumina, a production-ready React portfolio system, which
              taught me to think beyond code through thoughtful product
              decisions, scalable architecture, accessibility, and user
              experience. Those principles continue to shape how I approach
              every project I build.
            </p>

            <p className="about-banner-goal">
              <span aria-hidden="true">🎯 </span>
              My goal: Build web experiences that feel
              purposeful, work smoothly, and create real value for the people
              using them.
            </p>
          </div>

          <div className="about-banner-skills-container">
            <SectionHeader title="My Expertise" />

            <div className="about-banner-skills-grid">
              {skills.map((skill) => (
                <span className="about-banner-skill-box" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBanner;
