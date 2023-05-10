import React from "react";
import Navbar from "../../Components/Header/Navbar/Navbar";
import AboutHeroSection from "../../Components/Sections/About/AboutHeroSection/AboutHeroSection";
import AboutUsSection from "../../Components/Sections/About/AboutUsSection/AboutUsSection";
import OurStory from "../../Components/Sections/About/OurStory/OurStory";
import Footer from "../../Components/Footer/Footer";
import { useResponsive } from "../../Hooks/UseResponsive";
import NavbarCollapsed from "../../Components/Header/NavbarCollapsed/NavbarCollapsed";
import "./About.css";

function About() {
  const { screenType } = useResponsive();
  return (
    <div className="about-container">
      {screenType === "TABLET" ? <NavbarCollapsed /> : <Navbar />}
      <AboutHeroSection />
      <AboutUsSection />
      <OurStory />
      <Footer />
    </div>
  );
}

export default About;
