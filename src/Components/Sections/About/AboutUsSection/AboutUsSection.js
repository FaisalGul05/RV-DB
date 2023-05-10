import React from "react";
import "./AboutUsSection.css";
import { NavLink } from "react-router-dom";

function AboutUsSection() {
  return (
    <div className="AboutUsSection-container">
      <div className="aboutUs-contentContainer">
        <div className="aboutUs-content">
          <h1 className="aboutUs-h1">About Us</h1>
          <p className="aboutUs-firstPara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing.
          </p>
          <p className="aboutUs-secondPara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="rdMoreBtn-about">
            <NavLink to="/" className="rdMore-link-about">
              Read More
            </NavLink>
          </button>
        </div>
      </div>
      <div className="aboutUs-imgContainer"></div>
    </div>
  );
}

export default AboutUsSection;
