import React from "react";
import "../assets/Css/MainStyle.css";

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className="hero-content">
              <span
                className="hero-tag"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <i className="bx bx-palette hero-tag-icon"></i>
                Available for Freelance Projects
              </span>

              <h1
                className="hero-title"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Meta Ad Creatives Graphic Designer <span>Performance-Focused</span> Static Ads
              </h1>

              <p
                className="hero-desc"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                I’m a creative partner for Media Buyers, DTC brands and Agencies who run Meta Ads and need a consistent flow of scroll-stopping static creatives that convert.
              </p>

              <div
                className="hero-buttons"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <a href="#portfolio" className="btn hero-btn-primary">
                  <i className="bx bx-grid-alt"></i>
                  View Portfolio
                </a>

                <a href="#contact" className="btn hero-btn-secondary">
                  <i className="bx bx-send"></i>
                  Hire Me
                </a>
              </div>

              <div
                className="hero-stats"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div
                  className="hero-stat-box"
                  data-aos="zoom-in"
                  data-aos-delay="550"
                >
                  <div className="stat-icon">
                    <i className="bx bx-briefcase-alt-2"></i>
                  </div>
                  <div>
                    <h3>7+</h3>
                    <p>Years Experience</p>
                  </div>
                </div>

                <div
                  className="hero-stat-box"
                  data-aos="zoom-in"
                  data-aos-delay="650"
                >
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
            <div
              className="hero-visual"
              data-aos="fade-left"
              data-aos-delay="250"
            >
              <div
                className="hero-circle hero-circle-one"
                data-aos="zoom-in"
                data-aos-delay="300"
              ></div>
              <div
                className="hero-circle hero-circle-two"
                data-aos="zoom-in"
                data-aos-delay="400"
              ></div>

              <div
                className="hero-image-box"
                data-aos="zoom-in-up"
                data-aos-delay="450"
              >
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

              <div
                className="floating-badge badge-one"
                data-aos="fade-down"
                data-aos-delay="600"
              >
                <i className="bx bx-pen"></i>
                Ad Creatives
              </div>

              <div
                className="floating-badge badge-two"
                data-aos="fade-left"
                data-aos-delay="700"
              >
                <i className="bx bx-shape-square"></i>
                Meta Ads
              </div>

              <div
                className="floating-badge badge-three"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <i className="bx bx-image-alt"></i>
                8.4x ROAS
              </div>
            </div>
          </div>
        </div>

        <div
          className="hero-socials"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <a
            href="https://www.facebook.com/share/1DjFnDBoCg/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            data-aos="zoom-in"
            data-aos-delay="950"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/mustafa_arts_0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            data-aos="zoom-in"
            data-aos-delay="1050"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/mustafa-sajid-2ba284199"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            data-aos="zoom-in"
            data-aos-delay="1150"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://www.upwork.com/freelancers/~012db527b2c34c54e4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork"
            data-aos="zoom-in"
            data-aos-delay="1250"
          >
            <i className="bx bxl-upwork"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;