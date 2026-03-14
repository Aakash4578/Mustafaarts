import React from "react";
import "../assets/Css/MainStyle.css";

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="row g-5">
            <div className="col-lg-4">
              <div
                className="footer-brand-wrap"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="footer-brand-mark">
                  <img src="/favicon.svg" alt="Logo" />
                </div>

                <div className="footer-brand-content">
                  <h3 data-aos="fade-up" data-aos-delay="150">Mustafa Arts</h3>
                  <p data-aos="fade-up" data-aos-delay="250">
                    Premium graphic design for brands, agencies, and creators
                    who want sharper visuals and stronger brand presence.
                  </p>
                </div>

                <div
                  className="footer-socials"
                  data-aos="fade-up"
                  data-aos-delay="350"
                >
                  <a
                    href="https://www.instagram.com/mustafa_arts_0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mustafa-sajid-2ba284199"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/~012db527b2c34c54e4"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Upwork"
                  >
                    <i className="bx bxl-upwork"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1DjFnDBoCg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <div
                className="footer-links-block"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h4 data-aos="fade-up" data-aos-delay="250">Navigation</h4>

                <button
                  type="button"
                  onClick={() => scrollToSection("home")}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Home
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("about")}
                  data-aos="fade-up"
                  data-aos-delay="380"
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("services")}
                  data-aos="fade-up"
                  data-aos-delay="460"
                >
                  Services
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("portfolio")}
                  data-aos="fade-up"
                  data-aos-delay="540"
                >
                  Portfolio
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  data-aos="fade-up"
                  data-aos-delay="620"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div
                className="footer-links-block"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h4 data-aos="fade-up" data-aos-delay="350">Services</h4>
                <span data-aos="fade-up" data-aos-delay="400">Ad Creatives</span>
                <span data-aos="fade-up" data-aos-delay="480">Social Media Design</span>
                <span data-aos="fade-up" data-aos-delay="560">Brand Identity</span>
                <span data-aos="fade-up" data-aos-delay="640">Thumbnail Design</span>
                <span data-aos="fade-up" data-aos-delay="720">Creative Support</span>
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div
                className="footer-contact-card"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span
                  className="footer-contact-label"
                  data-aos="fade-up"
                  data-aos-delay="450"
                >
                  Let’s Connect
                </span>

                {/* <a href="mailto:mustafabhutta258@gmail.com" className="footer-email">
                  mustafabhutta258@gmail.com
                </a> */}

                <p data-aos="fade-up" data-aos-delay="550">
                  Available for freelance projects, ongoing design support, and
                  creative collaborations.
                </p>

                <button
                  type="button"
                  className="footer-cta-btn"
                  onClick={() => scrollToSection("contact")}
                  data-aos="zoom-in"
                  data-aos-delay="650"
                >
                  Start a Project
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="footer-bottom"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p>© 2018 Mustafa Arts . All rights reserved.</p>
          <span>Designed with clarity, creativity, and purpose.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;