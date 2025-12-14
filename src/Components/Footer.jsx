import React, { useState, useEffect } from "react";
import "../../public/assets/Css/MainStyle.css";
import { SiUpwork } from "react-icons/si";

function Footer() {
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener for optional styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={`bg-footer text-light pt-5 pb-3 mt-5 w-100 ${scrolled ? "footer-scrolled" : ""}`}>
      <div className="container"> {/* Use standard Bootstrap container */}
        <div className="row">

          {/* Logo + About */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h4 className="fw-bold brand">MustafaArts</h4>
            <p className="text-secondary text-white mt-3">
              Where Creativity Leaves Competition Behind
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><button className="footer-link-btn" onClick={() => scrollToSection("home")}>Home</button></li>
              <li><button className="footer-link-btn" onClick={() => scrollToSection("portfolio")}>Portfolio</button></li>
              <li><button className="footer-link-btn" onClick={() => scrollToSection("testimonial")}>Testimonial</button></li>
              <li><button className="footer-link-btn" onClick={() => scrollToSection("whychoose")}>Why choose me</button></li>
              <li><button className="footer-link-btn" onClick={() => scrollToSection("contact")}>Contact me</button></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="https://www.facebook.com/share/1DjFnDBoCg/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/mustafa_arts_0?igsh=dXZtYTFqZzcxcWNu" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/mustafa-sajid-2ba284199" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.upwork.com/freelancers/~012db527b2c34c54e4" target="_blank" rel="noopener noreferrer" className="social-icon">
                <SiUpwork size={24} />
              </a>
            </div>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center text-secondary small">
          © {new Date().getFullYear()} MustafaArts — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
