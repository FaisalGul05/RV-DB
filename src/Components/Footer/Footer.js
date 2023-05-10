import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as LOGO1 } from "../Svg/fb_logo.svg";
import { ReactComponent as LOGO2 } from "../Svg/twt_logo.svg";
import { ReactComponent as LOGO3 } from "../Svg/linkedin.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="left1">
          <ul className="ul_footer">
            <li>
              <NavLink to="" className="nav_link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="nav_link">
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="nav_link">
                Products
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="left2">
          <ul>
            <li>
              <NavLink to="" className="nav_link">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="nav_link">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="nav_link">
                Career
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right1">
          <ul>
            <li>
              <NavLink to="" className="nav_link">
                Privacy Policy & Terms of use
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="nav_link">
                Merchand Policy
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right2">
          <h1>Follow Us On</h1>
          <div className="logo_container">
            <div className="fb-container">
              <LOGO1 className="fb" />
            </div>
            <div className="twt-container">
              <LOGO2 className="twt" />
            </div>
            <div className="linkedin-container">
              <LOGO3 className="linkedin" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer2">
        <h1>
          Copyright &copy; 2023 The RV Database | Website Designed & Developed By
          -------
        </h1>
      </div>
    </div>
  );
}

export default Footer;
