import React from "react";
import "./AboutHeroSection.css";
import { NavLink } from "react-router-dom";

function AboutHeroSection() {
  return (
    <div className="aboutHero-container aboutHero">
      <div className="basic-about">
        <h1 className="aboutHero-h1">About Us</h1>
        <p className="aboutHero-p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing.
        </p>
        {/* <button type="button" className="about-contactBtn">
          <NavLink to="/" className="contactbtn-link">
            Contact Now
          </NavLink>
        </button> */}
      </div>
    </div>
  );
}

export default AboutHeroSection;
