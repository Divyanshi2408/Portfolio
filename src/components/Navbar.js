import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">divyanshi-pal</div>
      <button className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <div className="navbar-left">
          <li className="navbar-item">
            <NavLink
              to="/hello"
              className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
            >
              _hello
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/about-me"
              className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
            >
              _about-me
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
            >
              _projects
            </NavLink>
          </li>
        </div>
        <div className="navbar-right">
          <li className="navbar-item">
            <NavLink
              to="/contact-me"
              className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
            >
              _contact-me
            </NavLink>
          </li>
          
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
