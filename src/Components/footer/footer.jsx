import { Link } from "react-router-dom";
import "./footer.css";
import img from "../../Assets/home/logo.png";

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo-container">
          <Link to="/">
            <img src={img} alt="Sobia Soomro" className="footer-img" />
          </Link>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>PORTFOLIO</h4>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/story">My Story</Link>
          </div>

          <div className="footer-column">
            <h4>SOCIALS</h4>
            <a
              href="https://www.linkedin.com/in/sobiasoomro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Sobia-s"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:sobiasoomro97@gmail.com">Email</a>
            <a
              href="https://sobia.gumroad.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gumroad
            </a>
          </div>

          <div className="footer-column">
            <h4>PRODUCT</h4>

            <Link to="/product">Case Study</Link>

            <a
              href="https://www.linkedin.com/pulse/lighting-way-developers-inside-lumina-new-kind-portfolio-wilcox-zwige/?trackingId=ChqsGk8XRICPoiimAweCMg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Article
            </a>

            <a
              href="https://lumina-portfolio-system.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Landing Page
            </a>

            <a
              href="https://react-portfolio-template-indol.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © {new Date().getFullYear()} Sobia Soomro</p>
      </div>
    </footer>
  );
}
