import { Link } from "react-router-dom";
import "./footer.css";
import img from "../../Assets/logo.webp";
import { FaLinkedin, FaGithub, FaShoppingBag, FaNewspaper, FaEnvelope } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-inner-container">
        <Link to="/" onClick={scrollToTop}>
          <img
            src={img}
            alt="Sobia Soomro"
            className="footer-image hover-animate"
          />
        </Link>
        <div className="footer-icons">
          <a
            className="hover-animate"
            href="https://github.com/Sobia-s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="hover-animate"
            href="https://www.linkedin.com/in/sobiasoomro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover-animate"
            href="https://sobia.gumroad.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaShoppingBag /> 
          </a>
          <a
            className="hover-animate"
            href="mailto:sobiasoomro97@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            className="hover-animate"
            href="https://www.linkedin.com/pulse/lighting-way-developers-inside-lumina-new-kind-portfolio-wilcox-zwige/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaNewspaper />
          </a>
        </div>
        <div className="footer-logo-container">
          <p className="footer-para">
            © {new Date().getFullYear()} Sobia Soomro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
