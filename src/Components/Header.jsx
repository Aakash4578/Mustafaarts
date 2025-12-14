import React, { useEffect, useState } from "react";
import "../../public/assets/Css/MainStyle.css";

export default function HeaderNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close mobile menu after click
  };

  return (
    <>
      {/* HEADER */}
      <nav
        className={`navbar navbar-custom fixed-top px-3 d-flex align-items-center justify-content-between ${
          scrolled ? "navbar-scrolled" : ""
        }`}
        style={{ height: "70px", zIndex: 9999 }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <a className="brand fw-bold" href="#">MustafaArts</a>

          {/* Toggle Button for mobile */}
          <button
            className="border-0 bg-transparent d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <span  className="toggle-icon" style={{ fontSize: "30px" }}>&#10005;</span> // X icon
            ) : (
              <span  className="toggle-icon" style={{ fontSize: "30px" }}>&#9776;</span> // ☰ icon
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="nav d-none d-lg-flex align-items-center gap-3">
            <li className="nav-item"><button className="nav-link btn-link" onClick={() => scrollToSection("home")}>Home</button></li>
            <li className="nav-item"><button className="nav-link btn-link" onClick={() => scrollToSection("portfolio")}>Portfolio</button></li>
            <li className="nav-item"><button className="nav-link btn-link" onClick={() => scrollToSection("testimonial")}>Testimonial</button></li>
            <li className="nav-item"><button className="nav-link btn-link" onClick={() => scrollToSection("whychoose")}>Why choose me</button></li>
            <li className="nav-item"><button className="btn ctn ms-2" onClick={() => scrollToSection("contact")}>Contact me</button></li>
          </ul>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`position-fixed w-100 bg-white shadow p-4 d-lg-none ${
          menuOpen ? "" : "d-none"
        }`}
        style={{ top: "70px", zIndex: 9998 }}
      >
        <ul className="nav flex-column gap-3 text-center">
          <li><button className="nav-link btn-link" onClick={() => scrollToSection("home")}>Home</button></li>
          <li><button className="nav-link btn-link" onClick={() => scrollToSection("portfolio")}>Portfolio</button></li>
          <li><button className="nav-link btn-link" onClick={() => scrollToSection("testimonial")}>Testimonial</button></li>
          <li><button className="nav-link btn-link" onClick={() => scrollToSection("whychoose")}>Why choose me</button></li>
          <li><button className=" btn cta mt-2" onClick={() => scrollToSection("contact")}>Contact Me</button></li>
        </ul>
      </div>

      {/* HERO SECTION PADDING */}
      <section style={{ paddingTop: "70px" }}></section>
    </>
  );
}
