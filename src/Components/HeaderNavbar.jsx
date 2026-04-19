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
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 80,
      });
    }
  }, []);

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
        data-aos="fade-down"
        data-aos-duration="700"
      >
        <div className="container">
          <nav className="custom-navbar">
            <button
              type="button"
              className="brand-logo-btn"
              onClick={() => scrollToSection("home")}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <span className="brand-mark">
                <img src="/favicon.svg" alt="Logo" />
              </span>
              <div className="brand-text-wrap">
                <h4 className="brand-title">Mustafa Arts</h4>
                <span className="brand-subtitle">Creative Artist</span>
              </div>
            </button>

            <div
              className="desktop-nav d-none d-lg-flex"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className="nav-link-btn"
                  onClick={() => scrollToSection(item.id)}
                  data-aos="fade-down"
                  data-aos-delay={250 + index * 100}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div
              className="nav-actions"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {/* <button
                type="button"
                className="theme-toggle-btn"
               onClick={toggleTheme}
                aria-label="Toggle theme"
                data-aos="zoom-in"
                data-aos-delay="350"
              >
                {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
              </button> */}

              <button
                type="button"
                className="footer-cta-btn"
                onClick={() => scrollToSection("contact")}
                data-aos="zoom-in"
                data-aos-delay="450"
              >
                Let’s Talk
              </button>
              <button
                type="button"
                className="mobile-menu-btn d-lg-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className={`mobile-nav-overlay d-lg-none ${menuOpen ? "show" : ""}`}>
        <div
          className="mobile-nav-box"
          data-aos="zoom-in-up"
          data-aos-duration="500"
        >
          <div className="mobile-nav-top">
            <h5 data-aos="fade-right" data-aos-delay="100">Navigation</h5>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMenuOpen(false)}
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-links">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className="mobile-link-btn"
                onClick={() => scrollToSection(item.id)}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              className="footer-cta-btn"
              onClick={() => scrollToSection("contact")}
              data-aos="zoom-in"
              data-aos-delay="850"
            >
              Let’s Talk
            </button>
          </div>
        </div>
      </div>
    </>
  );
}