import React, { useState } from "react";
import "../../public/assets/Css/contactus.css";
import styles from "../../public/assets/Css/Heading.module.css";
import { useForm, ValidationError } from "@formspree/react";

function Contactus() {
  const [state, handleFormSubmit] = useForm("xpwvolvj"); // Your Formspree form ID
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    // Send form via Formspree
    handleFormSubmit(event);
    setValidated(true);
  };

  if (state.succeeded) {
    return <p className="text-success text-center">Thanks for your message! I will get back to you soon.</p>;
  }

  return (
    <section id="contact">
      <div className="container py-5">
        <div className="text-center mb-4"  data-aos="fade-up">
          <div className={styles.modernheading}>
            <h2>Contact Me</h2>
          </div>
        </div>

        <div className="contact__wrapper shadow-lg mt-n9" data-aos="fade-up">
          <div className="row no-gutters">
            {/* Right Side – Contact Info */}
            <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
              <h3 className="color--white mb-5">Get in Touch</h3>
              <ul className="contact-info__list list-style--none position-relative z-index-101">
  <li className="mb-4 pl-4">
    <span className="position-absolute">
      <i className="fas fa-envelope"></i>
    </span>
    mustafabhutta258@gmail.com
  </li>
  <li className="mb-4 pl-4">
    <span className="position-absolute">
      <i className="fas fa-phone"></i>
    </span>
    +92 348 2271 491
  </li>
  <li className="mb-4 pl-4">
    <span className="position-absolute">
      <i className="fas fa-map-marker-alt"></i>
    </span>
    Karachi, Pakistan
  </li><li className="mb-4 pl-4 position-relative">
  

  {/* Animated Smiley SVG */}
  <div className="smiley-svg-wrapper py-5">
    <svg
      className="smiley-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="45" fill="white" stroke="#fff" strokeWidth="2"/>
      <circle cx="35" cy="40" r="5" fill="black"/>
      <circle cx="65" cy="40" r="5" fill="black"/>
      <path d="M 35 60 Q 50 75 65 60" stroke="black" strokeWidth="3" fill="transparent" strokeLinecap="round"/>
    </svg>
  </div>
</li>

</ul>

            </div>

            {/* Left Side – Form */}
            <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
              <form
                className={`contact-form ${validated ? "was-validated" : ""}`}
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <label className="required-field customLabel" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      placeholder="Wendy"
                      required
                    />
                    <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                  </div>

                  <div className="col-sm-6 mb-3">
                    <label className="required-field customLabel" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      placeholder="Appleseed"
                      required
                    />
                    <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                  </div>

                  <div className="col-sm-6 mb-3">
                    <label className="required-field customLabel" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="wendy.apple@seed.com"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div className="col-sm-6 mb-3">
                    <label className="customLabel" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="(021)-454-545"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  </div>

                  <div className="col-sm-12 mb-3">
                    <label className="required-field customLabel" htmlFor="message">
                      How can we help?
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Hi there, I would like to..."
                      required
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <div className="col-sm-12">
                    <button type="submit" className=" contactbtn" disabled={state.submitting}>
                      {state.submitting ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
