import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../Assets/home/logo.png";
import "./nav.css";
import Button from "../../shared/button";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Work", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Product", path: "/product" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    closeMenu();
  }, [location.pathname]);

  return (
    <nav className="navbar-section" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-inner-container">

          <Link to="/" className="logo-container" onClick={closeMenu}>
            <img src={logo} alt="Sobia logo" className="logo" />
          </Link>

          <ul
            id="primary-navigation"
            className={`navbar-links-container ${isMenuOpen ? "open" : ""
              }`}
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={
                    location.pathname === link.path ? "active" : ""
                  }
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            to="/contact"
            variant="primary"
            onClick={closeMenu}
          >
            Hire Me
          </Button>

          <button
            type="button"
            className="hamburger"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
          >
            {isMenuOpen ? (
              <FaTimes className="menu-icon" />
            ) : (
              <FaBars className="menu-icon" />
            )}
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Nav;