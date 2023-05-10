import React from "react";
import { cardData } from "../../../../Constants/Data";
import CardList from "../../../Card/CardList";
import "./CardSection.css";
import { NavLink, Link } from "react-router-dom";

function Section2() {
  return (
    <div className="section2-container">
      <div className="cardContainer">
        <div className="card">
          {cardData.map((item, index) => {
            return (
              <CardList
                index={index}
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
                text={item.text}
                carConfig={item.carConfig}
              />
            );
          })}
        </div>
      </div>
      <button className="viewMoreBtn">
        <NavLink to="" className="viewMoreBtn-link">
          View More
        </NavLink>
      </button>
    </div>
  );
}

export default Section2;
