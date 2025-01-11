// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Hide Navbar on scroll down, show on hover
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        setIsVisible(false); // Scroll down
      } else {
        setIsVisible(true); // Scroll up
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show Navbar when mouse hovers over the top
  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(true); // Optional: keep visible when mouse leaves

  return (
    <nav
      className={`navbar navbar-expand-lg ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Nehal Rupom
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
