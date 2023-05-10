import React from "react";
import "./RvDetailsDescription.css";
import { DescriptionTableColumn1 } from "../../../../Constants/Data";
import { DescriptionTableColumn2 } from "../../../../Constants/Data";

function RvDetailsDescription() {
  return (
    <div className="RvDetailsDescription-container">
      <div className="RvDetailsDescription-h1">Description</div>
      <div className="RvDetailsTable-container">
        <div className="description-table">
          <tbody className="tableBody-container">
            <tr className="table-body">
              {DescriptionTableColumn1.map((item, index) => (
                <td className="descriptionTable-cell" key={index}>
                  <img className="icon" src={item.icon} alt={item.icon} />
                  <div className="cell-div">
                    <h1 className="heading">{item.heading}</h1>
                    <p className="para">{item.text}</p>
                  </div>
                </td>
              ))}
            </tr>
            <tr className="table-body2">
              {DescriptionTableColumn2.map((item, index) => (
                <td className="descriptionTable-cell" key={index}>
                  <img className="icon" src={item.icon} alt={item.icon} />
                  <div className="cell-div">
                    <h1 className="heading">{item.heading}</h1>
                    <p className="para">{item.text}</p>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </div>
      </div>
    </div>
  );
}

export default RvDetailsDescription;