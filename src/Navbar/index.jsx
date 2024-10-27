import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 

  const mainLinks = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact Us" },
    { path: "/About", label: "About Us" },
    { path: "/Faq", label: "FAQs" },
    { path:"/Admin", label: "Admin"}
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            Nexus
          </Link>
        </div>

        <div className="hamburger-icon">
          <button onClick={() => setIsOpen(!isOpen)} className="icon-button">
            <svg
              className={`hamburger-svg ${isOpen ? "open" : ""}`}
              viewBox="0 0 24 24"
            >
              <path
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        
        <div className={`links-container ${isOpen ? "open" : ""}`}>
          {mainLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`link ${
                location.pathname === link.path ? "active" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
