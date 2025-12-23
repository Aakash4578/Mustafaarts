import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../public/assets/Css/feedback.css";
import styles from "../../public/assets/Css/Heading.module.css";

const testimonials = [
  {
    quote: "Thank you, Mustafa! It was also a wonderful experience working with you. I really appreciate your effort and professionalism.",
    name: "Luna Byte",
    designation: "Production Manager",
    src: "assets/img/Testimonials/1/Luna Byte.png",
  },
  {
    quote: "Your thumbnails so far have been great. If any issues come up with the thumbnails I will let you know.",
    name: "Ken B",
    designation: "Production Manager",
    src: "assets/img/Testimonials/2/KenB.jpeg",
  },
  {
    quote: "Great experience working with you on the chest box design. You understood the requirements clearly and delivered exactly what I had in mind. The quality, detailing, and communication were all excellent. I’d definitely work with you again for future game assets",
    name: "Andrej Sakaza",
    designation: "CEO at Proxima Interactive",
    src: "assets/img/Testimonials/3/Andrej Sakaza.jpg",
  },
  {
    quote: "Working with you on my creative ad campaigns was amazing. You delivered high-quality designs that not only looked great but also performed exceptionally well. The CTR you achieved was far better than I expected. Your communication, creativity, and attention to detail were excellent. I’d happily work with you again on future campaigns",
    name: "Roseanne Rae Kitane",
    designation: "virtual Assistant",
    src: "assets/img/Testimonials/4/Roseanne Rae Kitane.jpg",
  },
];

export default function FeedBack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = useRef([]);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);

 useEffect(() => {
  // Sab images hide karo
  imageRefs.current.forEach((img, index) => {
    if (img) {
      gsap.set(img, {
        opacity: index === activeIndex ? 1 : 0,
        x: 0,
        scale: 1,
        zIndex: index === activeIndex ? 2 : 1,
      });
    }
  });

  // Sirf active image animate ho
  if (imageRefs.current[activeIndex]) {
    gsap.fromTo(
      imageRefs.current[activeIndex],
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }

  // Text animation same
  gsap.fromTo(
    ".testimonial-text",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    }
  );
}, [activeIndex]);


  return (
   <section id="testimonial">
     <div className="container py-5">

<div className="text-center mb-4"  data-aos="fade-up">
  <div className={styles.modernheading}>
    <h2>Testimonial</h2>
  </div>
</div>


    

      <div className="row testimonial-wrapper align-items-center justify-content-center"  data-aos="fade-up" >
        {/* Image Column */}
        <div className="col-12 col-md-6 image-container mb-4 mb-md-0" style={{ height: "450px" }}>
          {testimonials.map((t, index) => (
            <img
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              src={t.src}
              alt={t.name}
              className="testimonial-image"
            />
          ))}
        </div>

        {/* Text Column */}
        <div className="col-12 col-md-6 testimonial-content text-center text-md-start">
          <h3 className="name testimonial-text">{testimonials[activeIndex].name}</h3>
          <p className="designation testimonial-text">{testimonials[activeIndex].designation}</p>
          <p className="quote testimonial-text">{testimonials[activeIndex].quote}</p>

          <div className="arrow-buttons d-flex justify-content-center justify-content-md-start gap-3 mt-3">
            <button className="arrow-button prev-button" onClick={handlePrev}>‹</button>
            <button className="arrow-button next-button" onClick={handleNext}>›</button>
          </div>
        </div>
      </div>
    </div>
   </section>
  );
}
