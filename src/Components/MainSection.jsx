import React from "react";
import "../../public/assets/Css/MainStyle.css";

function MainSection() {
  return (
    <main className="main">
      <section className="banner-section py-5" id="home">
        <div className="container position-relative">

          <div className="row align-items-center text-center text-md-start">
            
            {/* TEXT */}
            <div className="col-12 col-md-6 mb-4 mb-md-0 banner-inner"  data-aos="fade-up">
              <h1 className="title-large mb-3">
                Where Creativity Leaves Competition Behind
              </h1>
              <p className="text-base mb-4">
                I help brands, agencies, and creators craft visuals that speak
                louder than words — from scroll-stopping social media posts to
                identity-driven branding that turns heads and opens wallets.
              </p>
            </div>

            {/* IMAGE */}
            <div className="col-12 col-md-6 text-center"  data-aos="fade-up"> 
              <img
              src="https://res.cloudinary.com/dhgn7t4no/image/upload/v1765625024/bannerimg_iellny.png"
              width="480"
              height="360"
              className="img-fluid banner-image"
              alt="Creative designer banner"
               fetchpriority="high"/>

            </div>

          </div>

          {/* SOCIAL LINKS */}
          <div className="banner-link"  data-aos="fade-up">
            <a href="https://www.facebook.com/share/1DjFnDBoCg/" aria-label="Facebook profile"><i class="bx bxl-facebook"></i></a>

            <a href="https://www.instagram.com/mustafa_arts_0" target="_blank" rel="noopener noreferrer" aria-label="instagram profile"><i className="bx bxl-instagram"></i></a>
            <a href="https://www.linkedin.com/in/mustafa-sajid-2ba284199" target="_blank" rel="noopener noreferrer" aria-label="linkedin profile"><i className="bx bxl-linkedin"></i></a>
            <a href="https://www.upwork.com/freelancers/~012db527b2c34c54e4" target="_blank" rel="noopener noreferrer" aria-label="upwork profile" ><i className="bx bxl-upwork"></i></a>
          </div>

        </div>
      </section>
    </main>
  );
}

export default MainSection;
