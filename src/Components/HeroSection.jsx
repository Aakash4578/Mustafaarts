import React from "react";
import "../assets/Css/MainStyle.css";

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className="hero-content">
              <span className="hero-tag">
                <i className="bx bx-palette hero-tag-icon"></i>
                Available for Freelance Projects
              </span>

              <h1 className="hero-title">
                Meta Ad Creatives Graphic Designer <span>Performance-Focused</span> Static Ads
              </h1>

              <p className="hero-desc">
                I’m a creative partner for Media Buyers, DTC brands and Agencies who run Meta Ads and need a consistent flow of scroll-stopping static creatives that convert.
              </p>

             

              <div className="hero-buttons">
                <a href="#portfolio" className="btn hero-btn-primary">
                  <i className="bx bx-grid-alt"></i>
                  View Portfolio
                </a>

                <a href="#contact" className="btn hero-btn-secondary">
                  <i className="bx bx-send"></i>
                  Hire Me
                </a>
              </div>

              <div className="hero-stats">
                <div className="hero-stat-box">
                  <div className="stat-icon">
                    <i className="bx bx-briefcase-alt-2"></i>
                  </div>
                  <div>
                    <h3>7+</h3>
                    <p>Years Experience</p>
                  </div>
                </div>

                <div className="hero-stat-box">
                  <div className="stat-icon">
                    <i className="bx bx-layer"></i>
                  </div>
                  <div>
                    <h3>500+</h3>
                    <p>Projects Delivered</p>
                  </div>
                </div>

               
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-visual">
              <div className="hero-circle hero-circle-one"></div>
              <div className="hero-circle hero-circle-two"></div>

              <div className="hero-image-box">
                <div className="hero-image-topbar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <img
                  src="https://res.cloudinary.com/dhgn7t4no/image/upload/v1765625024/bannerimg_iellny.png"
                  alt="Mustafa Arts Graphic Designer"
                  className="img-fluid hero-main-image"
                />
              </div>

              <div className="floating-badge badge-one">
                <i className="bx bx-pen"></i>
                Ad Creatives
              </div>

              <div className="floating-badge badge-two">
                <i className="bx bx-shape-square"></i>
                Meta Ads
              </div>

              <div className="floating-badge badge-three">
                <i className="bx bx-image-alt"></i>
                8.4x ROAS
              </div>
            </div>
          </div>
        </div>

        <div className="hero-socials">
          <a
            href="https://www.facebook.com/share/1DjFnDBoCg/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="bx bxl-facebook"></i>
          </a>

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
        </div>
      </div>
    </section>
  );
}

export default HeroSection;