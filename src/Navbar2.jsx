import { useState } from "react";
import logo from "./assets/logo.png";
import "./Navbar2.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const tabs = ["Home", "Events", "About Us", "Chapters", "Team"];

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("mobile-menu-overlay")) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="nav-left">
          <img src={logo} alt="IEEE Logo" className="logo-image" />
        </div>

        {/* Center links (desktop) */}
        <div className="nav-center">
          <ul className="nav-links">
            {tabs.map((tab, index) => (
              <li key={tab}>
                <a href="#" style={{
          animationDelay: `${1 + index * 0.2}s`,
          animationName: 'fade-in',
          animationDuration: '0.6s',
          animationFillMode: 'forwards',
        }}>{tab}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side */}
        <div className="nav-right">
          <button className="custom-blue-button">Join Now</button>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={handleOverlayClick}>
          <div className="mobile-menu">
            <ul className="mobile-links">
              {tabs.map((tab) => (
                <li key={tab}>
                  <a href="#">{tab}</a>
                </li>
              ))}
            </ul>
            <button className="custom-blue-button2">Join Now</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;