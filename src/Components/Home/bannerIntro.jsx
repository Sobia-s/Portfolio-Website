import { useEffect } from "react";
import Button from "../../shared/button";
import "./bannerIntro.css";

export default function BannerIntro() {
  useEffect(() => {
    document.title = "Hi, I'm Sobia, Frontend React Developer";
  }, []);

  return (
    <section className="home-banner-section">
      <div className="home-banner-container">
        <div className="home-banner-inner-container">
          <div className="home-banner-text-container">
            <h1 className="home-banner-greeting">Hi, I'm Sobia</h1>

            <p className="home-banner-description">
              Frontend React Developer & Founder of Lumina 👩‍💻
            </p>

            <p className="home-banner-second-description">
              I turn ideas and designs into polished, responsive web
              experiences through modern frontend development.
            </p>

            <div className="home-banner-button-container">
              <Button to="/projects" variant="primary">
                My Work
              </Button>

              <Button to="/contact" variant="secondary">
                Let's Talk
              </Button>
            </div>
          </div>

          <div className="home-banner-image-container">
            <div className="terminal">
              <div className="terminal-bar">
                <span className="t-dot t-red" />
                <span className="t-dot t-yellow" />
                <span className="t-dot t-green" />
                <span className="terminal-title">sobia@portfolio ~</span>
              </div>

              <div className="terminal-body">
                <div className="terminal-line tl-1">
                  <span className="t-prompt">›</span>
                  <span className="t-text">Building digital experiences</span>
                  <span className="t-check">✓</span>
                </div>

                <div className="terminal-line tl-2">
                  <span className="t-prompt">›</span>
                  <span className="t-key">Focus:</span>
                  <span className="t-highlight">
                    React · Frontend · UX
                  </span>
                  <span className="t-check">✓</span>
                </div>

                <div className="terminal-line tl-3">
                  <span className="t-prompt">›</span>
                  <span className="t-key">Founder:</span>
                  <span className="t-value">Lumina</span>
                  <span className="t-check">✓</span>
                </div>

                <div className="terminal-line tl-4">
                  <span className="t-prompt">›</span>
                  <span className="t-key">Product:</span>
                  <span className="t-value">Portfolio System</span>
                  <span className="t-check">✓</span>
                </div>

                <div className="terminal-line tl-5">
                  <span className="t-prompt">›</span>
                  <span className="t-key">Rated:</span>
                  <span className="t-value">5.0★ on Gumroad</span>
                  <span className="t-check">✓</span>
                </div>

                <div className="terminal-line tl-6">
                  <span className="t-prompt">›</span>
                  <span className="t-key">Featured:</span>
                  <span className="t-value">1 publication</span>
                  <span className="t-check">✓</span>
                </div>

                <div className="terminal-line tl-7 t-check">
                  <span className="t-prompt">›</span>
                  <span>From idea → product ↓</span>
                </div>
              </div>
            </div>

            <div className="home-banner-stat-row">
              <div className="home-banner-stat">
                <span className="stat-number">5.0★ Customer rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}