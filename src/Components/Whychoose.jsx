import React from "react";
import "../../public/assets/Css/Whychoose.css";

export default function WhyChooseUs() {
  return (
<section id="whychoose">
  <div className="why-section py-5">
    <div className="container text-center">

      <p className="small-heading"  data-aos="fade-up">WHY CHOOSE ME</p>

      <h2 className="main-heading"  data-aos="fade-up">
        Designs That Capture Attention & Deliver Results
      </h2>

      <p className="sub-heading mx-auto"  data-aos="fade-up">
        Fast, scroll-stopping designs crafted for impact. Optimized for both visuals and performance to make your brand shine online.
      </p>

      <div className="row mt-5 g-4 justify-content-center">

        {/* Card 1 */}
        <div className="col-md-4" data-aos="fade-up">
          <div className="feature-card">
            <div className="icon-box">
              <i className="bi bi-lightning-charge-fill"></i>
            </div>
            <h4 className="card-title">Fast Delivery</h4>
            <p className="sub-heading">
              High-quality designs delivered on time without compromising creativity.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4" data-aos="fade-up">
          <div className="feature-card">
            <div className="icon-box">
              <i className="bi bi-eye-fill"></i>
            </div>
            <h4 className="card-title">Eye-Catching Design</h4>
            <p className="sub-heading">
              Scroll-stopping visuals that grab attention and leave a lasting impression.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4" data-aos="fade-up">
          <div className="feature-card">
            <div className="icon-box">
              <i className="bi bi-bar-chart-line-fill"></i>
            </div>
            <h4 className="card-title">SEO Optimized</h4>
            <p className="sub-heading">
              Designs structured for performance and SEO, ensuring your website ranks and converts.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


  );
}
