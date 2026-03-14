import React from "react";
import "../assets/Css/MainStyle.css";

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* LEFT */}
          <div className="col-lg-5">
            <div
              className="about-media-wrap"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="about-shape about-shape-one"
                data-aos="zoom-in"
                data-aos-delay="150"
              ></div>
              <div
                className="about-shape about-shape-two"
                data-aos="zoom-in"
                data-aos-delay="250"
              ></div>

              <div
                className="about-image-main"
                data-aos="zoom-in-up"
                data-aos-delay="300"
              >
                <img
                  src="https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773455516/New_Dp_Vector_1.jpg_etsxd0.jpg"
                  alt="Mustafa Sajid Graphic Designer"
                  className="img-fluid about-main-img"
                />
              </div>

              <div
                className="about-side-badge"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <span className="about-side-badge-number">7+</span>
                <span className="about-side-badge-text">
                  Years of
                  <br />
                  Creative Experience
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-7">
            <div className="about-content-wrap">
              <span
                className="about-mini-label"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                About Me
              </span>

              <h2
                className="about-main-title"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Where Creativity Leaves
                Competition Behind
              </h2>

              <div
                className="about-intro-card"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p>
                  I help teams launch and test up to 200+ creatives/month, quickly and reliably. No more creative delays, shallow designs, or wasting time onboarding designers who don’t understand how performance marketing works.
                </p>
              </div>

              <p
                className="about-description"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Whether you need a one-time order or ongoing creative packages, I adapt to your workflow and deliver results that fit your goals, allowing you to stay focused on scaling while I run the creative engine behind it.
              </p>

              <div
                className="about-keypoints"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div
                  className="about-keypoint"
                  data-aos="fade-up"
                  data-aos-delay="550"
                >
                  <i className="bx bx-check-shield"></i>
                  <span>1,760+ ad creatives delivered across 30+ niches</span>
                </div>

                <div
                  className="about-keypoint"
                  data-aos="fade-up"
                  data-aos-delay="650"
                >
                  <i className="bx bx-check-shield"></i>
                  <span>+145% increase in qualified leads for a B2B client</span>
                </div>

                <div
                  className="about-keypoint"
                  data-aos="fade-up"
                  data-aos-delay="750"
                >
                  <i className="bx bx-check-shield"></i>
                  <span>72-hour delivery for creative sets. Fast testing, faster wins</span>
                </div>

                <div
                  className="about-keypoint"
                  data-aos="fade-up"
                  data-aos-delay="850"
                >
                  <i className="bx bx-check-shield"></i>
                  <span>Scaled a DTC brand to a profitable 8.4x ROAS</span>
                </div>
              </div>

              <div
                className="about-bottom-content"
                data-aos="fade-up"
                data-aos-delay="950"
              >
                <div className="about-numbers">
                  <div
                    className="about-number-item"
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                  >
                    <h3>500+</h3>
                    <p>Projects Delivered</p>
                  </div>
                  <div
                    className="about-number-item"
                    data-aos="zoom-in"
                    data-aos-delay="1100"
                  >
                    <h3>Brands</h3>
                    <p>& Agencies Served</p>
                  </div>
                </div>

                <a
                  href="#portfolio"
                  className="about-main-btn"
                  data-aos="zoom-in"
                  data-aos-delay="1150"
                >
                  <i className="bx bx-right-arrow-alt"></i>
                  Explore Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;