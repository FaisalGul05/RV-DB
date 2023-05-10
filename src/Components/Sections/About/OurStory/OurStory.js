import React from "react";
import "./OurStory.css";
import { NavLink } from "react-router-dom";
function OurStory() {
  return (
    <div className="OurStory-container">
      <div className="OurStory-header">
        <div className="OurStory-headerH1">Our Story</div>
      </div>
      <div className="OurStory-hero">
        <div className="OurStory-rv"></div>
        <div className="OurStory-contentContainer">
          <div className="OurStory-content">
            <h1 className="OurStory-contentH1">Read Our Story</h1>
            <p className="OurStory-contentFirstPara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing.
            </p>
            <p className="OurStory-contentSecondPara">
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
      </div>
    </div>
  );
}

export default OurStory;
