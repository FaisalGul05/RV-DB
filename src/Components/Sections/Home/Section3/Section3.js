import React from "react";
import "./Section3.css";
import { NavLink } from "react-router-dom";

function Section3() {
  return (
    <div className="sec3Container">
      <div className="readAbout">
        <h1>Read About Us</h1>
        <p className="para1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
        <p className="para2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </p>
        <button className="rdMoreBtn">
          <NavLink to="/" className="rdMore-link">
            Read More
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Section3;
