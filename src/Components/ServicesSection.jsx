import React from "react";
import "../assets/Css/MainStyle.css";

function ServicesSection() {
const services = [
  {
    icon: "bx bx-cart-alt",
    title: "DTC Product Ad Creatives",
    text: "Conversion-focused product ad creatives designed for Shopify and DTC brands running Meta ads. I create scroll-stopping visuals that highlight product benefits, social proof, and clear value propositions to help brands increase click-through rates and scale winning ad campaigns.",
  },
  {
    icon: "bx bx-git-compare",
    title: "Creative Testing & Ad Variations",
    text: "Structured creative variations built for paid advertising testing cycles. I design multiple hooks, layouts, and visual angles so DTC brands and media buyers can quickly identify winning creatives and optimize Facebook & Instagram ad performance.",
  },
  {
    icon: "bx bx-share-alt",
    title: "Social Media Design",
    text: "Scroll-stopping social media creatives designed for brands running paid traffic and organic campaigns. I create high-impact posts, carousels, and promotional visuals optimized for engagement, conversions, and brand consistency across Meta platforms.",
  },
  {
    icon: "bx bx-trending-up",
    title: "Meta Ad Creatives",
    text: "High-converting Facebook & Instagram ad creatives designed specifically for DTC brands, agencies, and performance marketing campaigns. Each creative is built around hooks, testing angles, and clear hierarchy to help media buyers scale winning ads faster.",
  },
  {
    icon: "bx bx-palette",
    title: "Brand Identity",
    text: "Clean and strategic visual identity systems that help brands build recognition across ads, social media, and digital campaigns. Includes logo styling, color systems, typography, and brand design guidelines for consistent marketing.",
  },
  {
    icon: "bx bx-window",
    title: "Web & Banner Design",
    text: "Conversion-focused website visuals, landing page graphics, and promotional banners designed to support paid traffic campaigns and product launches. Optimized for clarity, strong messaging, and higher conversion rates.",
  },
  {
    icon: "bx bx-bulb",
    title: "Creative Direction",
    text: "Strategic creative planning for ad campaigns and brand visuals. I help brands structure ad concepts, visual angles, and layout hierarchy so every creative communicates clearly and performs well in paid advertising.",
  },
  {
    icon: "bx bx-support",
    title: "Design Support",
    text: "Reliable ongoing creative production support for agencies and DTC brands that need consistent ad creatives. Ideal for teams running high-volume Meta campaigns and weekly creative testing cycles.",
  },
  {
    icon: "bx bx-user-voice",
    title: "UGC Style Ad Creatives for DTC Brands",
    text: "High-converting UGC-style static ad creatives designed for DTC brands running Meta ads and paid social campaigns. I design visuals that mimic authentic user-generated content, combining scroll-stopping hooks, product storytelling, and clear call-to-action structures to improve engagement, increase click-through rates, and help brands scale winning creatives faster.",
  },
];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div
          className="services-heading text-center"
          data-aos="fade-up"
        >
          <span className="services-label" data-aos="fade-up" data-aos-delay="100">
            Services
          </span>

          <h2 className="services-title" data-aos="fade-up" data-aos-delay="200">
            High-Converting Ad Creatives for
            <span> DTC Brands & Performance Marketing</span>
          </h2>

          <p className="services-subtitle" data-aos="fade-up" data-aos-delay="300">
            I design scroll-stopping Meta ad creatives built for testing hooks, angles, and scaling paid campaigns. Helping DTC brands and agencies produce high-performance creatives faster.
          </p>
        </div>

        <div className="row g-4 mt-2">
          {services.map((service, index) => (
            <div
              className="col-md-6 col-xl-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={150 + index * 100}
            >
              <div className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>

                <div className="service-card-top">
                  <h3>{service.title}</h3>
                  <span className="service-number">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                <p>{service.text}</p>

                <div className="service-card-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;