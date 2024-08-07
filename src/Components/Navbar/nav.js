import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import "./nav.css";

export function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        if (isMobile) {
            setIsOpen(!isOpen);
        }
    };

    const closeMenu = () => {
        if (isMobile) {
            setIsOpen(false);
        }
    };

    return (
        <nav className="nav-container">
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`bar ${isOpen ? "open" : ""}`}></div>
                <div className={`bar ${isOpen ? "open" : ""}`}></div>
                <div className={`bar ${isOpen ? "open" : ""}`}></div>
            </div>
            <img src={logo} alt="Logo" width={60} height={60} className="logo-img"/>
            <ul className={`nav-items ${isOpen ? "open" : ""}`}>
                <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
                <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
                <li><Link to="/projects" onClick={closeMenu}>PROJECTS</Link></li>
                <li><Link to="/certificates" onClick={closeMenu}>CERTIFICATES</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
            </ul>
        </nav>
    );
}
