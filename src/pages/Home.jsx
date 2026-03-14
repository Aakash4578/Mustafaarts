import React from "react";
import HeaderNavbar from "../Components/HeaderNavbar";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import ServicesSection from "../Components/ServicesSection";
import Portfolio from "../Components/Portfolio";
import WhyChooseUs from "../Components/WhyChooseUs";
import Testimonials from "../Components/Testimonials";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <HeaderNavbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}