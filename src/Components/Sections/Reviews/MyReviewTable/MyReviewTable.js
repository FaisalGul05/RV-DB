import { Rating } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { ReviewTableData } from "../../../../Constants/Data";
import { IS_SIGNEDIN } from "../../../../Redux/Reducers/AuthReducer";
import "./MyReviewTable.css";

function MyReviewTable() {
  const dispatch = useDispatch();
  return (
    <div className="myReviewTable-container">
      <div className="myReview-header">
        <div className="myReview-headerH1">My Reviews</div>
      </div>
      <div className="myReviewTable-content">
        <h1 className="reviews-h1">Showing 1 - 3 of 3 Reviews</h1>
        <div className="reviewTable-container">
          <table className="tableReview">
            <thead>
              <tr className="headerTable">
                <th className="header-cell">Name</th>
                <th className="header-cell">Overall</th>
                <th className="header-cell">Bathroom</th>
                <th className="header-cell">Kitchen</th>
                <th className="header-cell">Interior</th>
                <th className="header-cell">Exterior</th>
                <th className="header-cell">Review</th>
              </tr>
            </thead>
            <tbody>
              {ReviewTableData.map((item) => (
                <tr key={item.ID} className="row">
                  <td className="first-cell">
                    <h1 className="item-name">{item.Name}</h1>
                    <div className="length">
                      <h1 className="length-title">Length</h1>
                      <h1 className="item-value">{item.Length}</h1>
                    </div>
                    <div className="year">
                      <h1 className="year-title">Year</h1>
                      <h1 className="item-value">{item.Year}</h1>
                    </div>
                  </td>
                  <td className="cell">
                    <Rating
                      name="read-only"
                      value={item.Overall}
                      readOnly
                      style={{ color: "#00669E" }}
                    />
                  </td>
                  <td className="cell">
                    <Rating
                      name="read-only"
                      value={item.Bathroom}
                      readOnly
                      style={{ color: "#00669E" }}
                    />
                  </td>
                  <td className="cell">
                    <Rating
                      name="read-only"
                      value={item.Kitchen}
                      readOnly
                      style={{ color: "#00669E" }}
                    />
                  </td>
                  <td className="cell">
                    <Rating
                      name="read-only"
                      value={item.Interior}
                      readOnly
                      style={{ color: "#00669E" }}
                    />
                  </td>
                  <td className="cell">
                    <Rating
                      name="read-only"
                      value={item.Exterior}
                      readOnly
                      style={{ color: "#00669E" }}
                    />
                  </td>
                  <td className="cell">{item.Review}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <button
          onClick={() => {
            dispatch({ type: IS_SIGNEDIN, payload: false });
            localStorage.removeItem("loginState");
          }}
        >
          log out
        </button> */}
      </div>
    </div>
  );
}

export default MyReviewTable;
