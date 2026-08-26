import "./luminaBanner.css";
import Button from "../../shared/button";
import lightmode from "../../Assets/home/featured-project.mp4";
import SectionHeader from "../../shared/sectionHeading"

function LuminaBanner() {
  return (
    <section className="lumina-section">
      <div className="lumina-banner-container">
        <div className="lumina-banner-inner-container">
          <div className="lumina-banner-text-container">
            <SectionHeader
              eyebrow="Featured Product"
              title="Building systems, not just websites"
            />
            <p className="lumina-description">
              I built Lumina, a React portfolio system that helps tech professionals launch a polished digital presence without the usual design and backend complexity.
            </p>
            <p className="lumina-description">
              It brings together accessible, responsive design, reusable components, and scalable architecture into a production-ready system, reflecting how I approach frontend development: thoughtful, practical, and built to last.
            </p>
            <div className="lumina-btn-group">
              <Button to="/product" variant="primary">
                Case Study
              </Button>
              <Button
                to="https://react-portfolio-template-indol.vercel.app/"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            </div>
          </div>
          <div className="lumina-banner-preview">
            <div className="browser-window">
              <div className="browser-topbar">
                <span></span>
                <span></span>
                <span></span>

                <p>Lumina: Complete Portfolio System</p>
              </div>

              <video className="lumina-video" autoPlay muted loop playsInline>
                <source src={lightmode} type="video/mp4" />
              </video>
            </div>
            <div className="lumina-banner-badge">
              <span className="lumina-banner-badge-text">
                ✓ Responsive &nbsp; ✓ Accessible &nbsp; ✓ Scalable
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LuminaBanner;
