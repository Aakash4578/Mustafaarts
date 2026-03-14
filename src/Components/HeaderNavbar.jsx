import React, { useEffect, useState } from "react";
import { Moon, SunMedium, Menu, X } from "lucide-react";
import "../assets/Css/MainStyle.css";

export default function HeaderNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "testimonial", label: "testimonial" },
    { id: "contact", label: "Contact us" },
  ];

  return (
    <>
      <header
        className={`custom-navbar-wrapper fixed-top ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="container">
          <nav className="custom-navbar">
            <button
              type="button"
              className="brand-logo-btn"
              onClick={() => scrollToSection("home")}
            >
              <span className="brand-mark"><img src="/favicon.svg" alt="Logo" /></span>
              <div className="brand-text-wrap">
                <h4 className="brand-title">Mustafa Arts</h4>
                <span className="brand-subtitle">Creative Artist</span>
              </div>
            </button>

            <div className="desktop-nav d-none d-lg-flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="nav-link-btn"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="nav-actions">
              <button
                type="button"
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
              </button>

              <button
                type="button"
                className="footer-cta-btn"
                onClick={() => scrollToSection("contact")}
              >
                Let’s Talk
              </button>

              <button
                type="button"
                className="mobile-menu-btn d-lg-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className={`mobile-nav-overlay d-lg-none ${menuOpen ? "show" : ""}`}>
        <div className="mobile-nav-box">
          <div className="mobile-nav-top">
            <h5>Navigation</h5>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMenuOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="mobile-link-btn"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              className="footer-cta-btn"
              onClick={() => scrollToSection("contact")}
            >
              Let’s Talk
            </button>
          </div>
        </div>
      </div>
    </>
  );
}