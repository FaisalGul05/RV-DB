import React, { useState, useRef } from "react";
import "./HeroDropdown.css";

import dropDown_icon from "../../Svg/dropDown_icon.svg";

function HeroDropdown({ name, text, options, index, lastIndex }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef();
  const iconRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== iconRef.current) {
      setDropdownOpen(false);
    }
  });

  // console.log("aaaa", lastIndex);
  return (
    <div className={index === lastIndex || index === 8 ? "lastItem" : "item"}>
      {name} <br />
      <button
        ref={menuRef}
        onClick={() => setDropdownOpen((prev) => !prev)}
        className={
          index === lastIndex || index === 8
            ? "last-btn1"
            : `dropdown_button ${dropdownOpen ? "open" : ""}`
        }
      >
        {text}

        <img
          src={dropDown_icon}
          alt="icon"
          className="dropDown-icon"
          ref={iconRef}
          onClick={() => setDropdownOpen((prev) => !prev)}
        />
      </button>
      {dropdownOpen && (
        <ul
          className={
            index === lastIndex || index === 8 ? "lastMenu-card1" : "menu-card1"
          }
        >
          {options.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default HeroDropdown;
