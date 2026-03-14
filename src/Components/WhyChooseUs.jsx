import React from "react";
import "../assets/Css/MainStyle.css";

function WhyChooseMe() {
  const reasons = [
    {
      number: "01",
      icon: "bx bx-bulb",
      title: "Strategic ad creative thinking",
      text: "Every design is built around strong hooks, clear messaging, and creative angles that help Meta ads capture attention and improve campaign performance."
    },
    {
      number: "02",
      icon: "bx bx-target-lock",
      title: "Performance-driven design approach",
      text: "Ad creatives are structured for Facebook and Instagram campaigns, combining strong visual hierarchy with conversion-focused layouts for better click-through rates."
    },
    {
      number: "03",
      icon: "bx bx-time-five",
      title: "Fast turnaround for testing creatives",
      text: "Reliable creative production for agencies and DTC brands that need consistent ad creatives to test new hooks, concepts, and performance marketing strategies."
    },
    {
      number: "04",
      icon: "bx bx-palette",
      title: "Modern creatives for DTC brands",
      text: "Clean, scroll-stopping ad creatives designed to help ecommerce brands stand out in competitive paid advertising environments."
    }
  ];

  return (
    <section className="why-section-alt" id="whychoose">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <div className="why-left-content">
              <span
                className="why-alt-label"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Why Choose Me
              </span>

              <h2
                className="why-alt-title"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                A creative partner focused on
                <span> high-converting ad creatives</span>
              </h2>

              <p
                className="why-alt-text"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                I design Meta ad creatives that help brands test more angles, capture attention,
                and scale paid campaigns. My focus is on creating clear, scroll-stopping visuals
                built specifically for performance marketing and DTC brands.

                My approach combines creative direction with marketing understanding — crafting
                ad creatives that address the pains and needs of the target audience while
                maintaining strong visual hierarchy, balance, typography, and composition.

                I also leverage modern AI tools like ChatGPT-4o and MidJourney to create unique
                product visuals and ad concepts, allowing brands to produce high-quality creative
                assets without the need for expensive photoshoots.

                From DTC product ads to B2B campaign creatives.
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <div
              className="why-timeline-list"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {reasons.map((item, index) => (
                <div
                  className="why-timeline-item"
                  key={item.number}
                  data-aos="fade-up"
                  data-aos-delay={250 + index * 120}
                >
                  <div className="why-timeline-number">{item.number}</div>

                  <div className="why-timeline-icon">
                    <i className={item.icon}></i>
                  </div>

                  <div className="why-timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseMe;