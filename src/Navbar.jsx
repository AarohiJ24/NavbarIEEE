import { useState, useEffect, useRef } from "react";
import logo from "./assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);
  const navbarRef = useRef(null);
  const tabs = ["Home", "Events", "About Us", "Chapters", "Team"];
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("mobile-menu-overlay")) {
      closeMenu();
    }
  };
  const closeMenu = () => {
    setAnimateMenu(false);
    setTimeout(() => setMenuOpen(false), 300);
  };
  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      setMenuOpen(true);
      setTimeout(() => setAnimateMenu(true), 10);
    }
  };

   // ✅ cursor gradient effect
  useEffect(() => {
    const navbar = navbarRef.current;

    const handleMouseMove = (e) => {
      const rect = navbar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      navbar.style.setProperty("--x", `${x}px`);
      navbar.style.setProperty("--y", `${y}px`);
      navbar.style.setProperty("--opacity", 1); // Show circle
    };

    
    const handleMouseLeave = () => {
        navbar.style.setProperty("--opacity", 0); // Hide circle
    };

    if (navbar) {
        navbar.addEventListener("mousemove", handleMouseMove);
        navbar.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
        if (navbar) {
        navbar.removeEventListener("mousemove", handleMouseMove);
        navbar.removeEventListener("mouseleave", handleMouseLeave);
        }
    };
    }, []);

  return (
    <>
      <nav className="navbar" ref={navbarRef}>
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
          animationDelay: `${1.5 + index * 0.2}s`,
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
          <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={handleOverlayClick}>
          <div className={`mobile-menu ${animateMenu ? "menu-open" : "menu-close"}`}>
            <ul className="mobile-links">
              {tabs.map((tab) => (
                <li key={tab}>
                  <a href="#" onClick={() => setMenuOpen(false)}>{tab}</a>
                </li>
              ))}
              <li>
                <button className="join-now-inside" onClick={() => setMenuOpen(false)}>Join Now</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;