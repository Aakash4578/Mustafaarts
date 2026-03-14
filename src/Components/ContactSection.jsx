import React, { useState } from "react";
import "../assets/Css/MainStyle.css";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    try {
      const response = await fetch("https://formspree.io/f/xpwvolvj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          error: "",
        });

        setFormData({
          name: "",
          email: "",
          projectType: "",
          message: "",
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: "Network error. Please try again.",
      });
    }
  };

  return (
    <section className="contact-ultimate-section" id="contact">
      <div className="container">
        <div className="contact-ultimate-wrap">
          <div className="contact-ultimate-shape shape-a"></div>
          <div className="contact-ultimate-shape shape-b"></div>

          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="contact-ultimate-content">
                <span className="contact-kicker">
                  <i className="bx bx-sparkles"></i>
                  Let’s Build Something Strong
                </span>

                <h2 className="contact-ultimate-title">
                  Ready to turn your ideas into
                  premium visual design?
                </h2>

               

          

                <div className="contact-mini-cards">
                  <div className="contact-mini-card">
                    <small>Email</small>
                    <a href="mailto:mustafabhutta258@gmail.com">
                      mustafabhutta258@gmail.com
                    </a>
                  </div>

                  <div className="contact-mini-card">
                    <small>Focus</small>
                    <p>Ad Creatives, Social Media, Branding</p>
                  </div>

                  <div className="contact-mini-card">
                    <small>Status</small>
                    <p>Available for freelance & Long-Term projects</p>
                  </div>
                </div>

                <div className="contact-social-strip">
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
                  <a
                    href="https://www.facebook.com/share/1DjFnDBoCg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-glass-form-card">
                <div className="contact-form-header">
                  <span className="contact-form-badge">Project Inquiry</span>
                  <h3>Send a message</h3>
                  <p>
                    Share a few details and I’ll get back to you with the next
                    best step.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="contact-ultimate-form">
                  <div className="ultimate-field-grid">
                    <div className="ultimate-field">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="ultimate-field">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* <div className="ultimate-field">
                    <label htmlFor="projectType">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="Social Media Design">Social Media Design</option>
                      <option value="Ad Creatives">Ad Creatives</option>
                      <option value="Brand Identity">Brand Identity</option>
                      <option value="Thumbnail Design">Thumbnail Design</option>
                      <option value="Ongoing Design Support">Ongoing Design Support</option>
                    </select>
                  </div> */}

                  <div className="ultimate-field">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Tell me about your project, brand, or creative requirement..."
                      value={formData.message}
                      onChange={handleChange}
              
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="ultimate-submit-btn"
                    disabled={status.loading}
                  >
                    <i className="bx bx-send"></i>
                    {status.loading ? "Sending..." : "Send Project Inquiry"}
                  </button>

                  {status.success && (
                    <div className="ultimate-form-message success">
                      Your message has been sent successfully.
                    </div>
                  )}

                  {status.error && (
                    <div className="ultimate-form-message error">
                      {status.error}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;