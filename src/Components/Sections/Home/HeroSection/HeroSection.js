import React, { useEffect } from "react";

import { heroSectionDropDownData } from "../../../../Constants/Data";
import SearchIcon from "@mui/icons-material/Search";
import homeHeroImage from '../../../../Assets/Images/bgImage-min.png'
import HeroDropdown from "../../../Container/Dropdowns/HeroDropdown";

import "./HeroSection.css";

function Section1() {
  return (
    <div>
      <div className="bgImageContainer">
        <img className="bgImage" src={homeHeroImage}  alt='HomeImage'/>
      </div>
      <div className="container">
        <div className="hero-container">

          <div className="item1">
            <div className="text-container">
              <h1>The RV Database</h1>
            </div>
          </div>

          <div className="card-container">
            <div className="card1">
              <div className="card1-content">
                {heroSectionDropDownData.map((item, index) => {
                  return (
                    <HeroDropdown
                      lastIndex={heroSectionDropDownData.length - 1}
                      index={index}
                      key={index}
                      name={item.name}
                      options={item.options}
                      text={item.text}
                    />
                  );
                })}
              </div>
              <button className="search-button">
                <SearchIcon />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
