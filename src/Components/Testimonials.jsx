import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../assets/Css/MainStyle.css";

const testimonials = [
  {
    quote:
      "Thank you, Mustafa! It was also a wonderful experience working with you. I really appreciate your effort and professionalism.",
    name: "Luna Byte",
    designation: "Production Manager",
    src: "assets/img/Testimonials/1/Luna Byte.png",
  },
  {
    quote:
      "Your thumbnails so far have been great. If any issues come up with the thumbnails I will let you know.",
    name: "Ken B",
    designation: "Production Manager",
    src: "assets/img/Testimonials/2/KenB.jpeg",
  },
  {
    quote:
      "Great experience working with you on the chest box design. You understood the requirements clearly and delivered exactly what I had in mind. The quality, detailing, and communication were all excellent. I’d definitely work with you again for future game assets.",
    name: "Andrej Sakaza",
    designation: "CEO at Proxima Interactive",
    src: "assets/img/Testimonials/3/Andrej Sakaza.jpg",
  },
  {
    quote:
      "Working with you on my creative ad campaigns was amazing. You delivered high-quality designs that not only looked great but also performed exceptionally well. The CTR you achieved was far better than I expected. Your communication, creativity, and attention to detail were excellent. I’d happily work with you again on future campaigns.",
    name: "Roseanne Rae Kitane",
    designation: "Virtual Assistant",
    src: "assets/img/Testimonials/4/Roseanne Rae Kitane.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRef = useRef(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getPrevIndex = () =>
    (activeIndex - 1 + testimonials.length) % testimonials.length;

  const getNextIndex = () =>
    (activeIndex + 1) % testimonials.length;

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current.querySelectorAll(".testimonial-fade-item"),
      { opacity: 0, y: 22 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power2.out",
      }
    );
  }, [activeIndex]);

  return (
    <section className="testimonials-showcase-section" id="testimonial">
      <div className="container">
        <div className="testimonials-showcase-top text-center">
          <span
            className="testimonials-kicker"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Client Feedback
          </span>

          <h2
            className="testimonials-showcase-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            What clients say about the
            <span> experience, process, and final quality</span>
          </h2>

          <p
            className="testimonials-showcase-subtitle"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            A selection of feedback from people I’ve worked with across
            ad creatives, thumbnails, branding support, and visual production.
          </p>
        </div>

        <div
          className="testimonial-showcase-shell"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div
            className="testimonial-side-card left-side"
            data-aos="fade-right"
            data-aos-delay="450"
          >
            <div className="testimonial-side-avatar">
              <img
                src={testimonials[getPrevIndex()].src}
                alt={testimonials[getPrevIndex()].name}
              />
            </div>
            <h4>{testimonials[getPrevIndex()].name}</h4>
            <p>{testimonials[getPrevIndex()].designation}</p>
          </div>

          <div
            className="testimonial-main-showcase-card"
            ref={cardRef}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="testimonial-main-quote-icon testimonial-fade-item">
              <i className="bx bxs-quote-left"></i>
            </div>

            <div className="testimonial-main-avatar testimonial-fade-item">
              <img
                src={testimonials[activeIndex].src}
                alt={testimonials[activeIndex].name}
              />
            </div>

            <p className="testimonial-main-quote testimonial-fade-item">
              {testimonials[activeIndex].quote}
            </p>

            <div className="testimonial-main-client testimonial-fade-item">
              <h3>{testimonials[activeIndex].name}</h3>
              <span>{testimonials[activeIndex].designation}</span>
            </div>

            <div className="testimonial-main-controls testimonial-fade-item">
              <button
                type="button"
                className="testimonial-showcase-btn"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <i className="bx bx-chevron-left"></i>
              </button>

              <div className="testimonial-showcase-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`testimonial-showcase-dot ${
                      index === activeIndex ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="testimonial-showcase-btn"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <i className="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>

          <div
            className="testimonial-side-card right-side"
            data-aos="fade-left"
            data-aos-delay="550"
          >
            <div className="testimonial-side-avatar">
              <img
                src={testimonials[getNextIndex()].src}
                alt={testimonials[getNextIndex()].name}
              />
            </div>
            <h4>{testimonials[getNextIndex()].name}</h4>
            <p>{testimonials[getNextIndex()].designation}</p>
          </div>
        </div>

        <div
          className="testimonial-showcase-strip"
          data-aos="fade-up"
          data-aos-delay="650"
        >
          <div
            className="testimonial-showcase-strip-item"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <strong>4+</strong>
            <span>Client reviews</span>
          </div>
          <div
            className="testimonial-showcase-strip-item"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <strong>Premium</strong>
            <span>Creative execution</span>
          </div>
          <div
            className="testimonial-showcase-strip-item"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <strong>Trusted</strong>
            <span>Professional workflow</span>
          </div>
        </div>
      </div>
    </section>
  );
}