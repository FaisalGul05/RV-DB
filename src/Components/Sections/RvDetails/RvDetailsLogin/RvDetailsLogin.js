import React from 'react'
import LoginForm from "../../../LoginForm/LoginForm";
import "./RvDetailsLogin.css";

function RvDetailsLogin () {
    return (
        <div className="MyReviewLogin-container">
          <div className="MyReview-Login">
            <LoginForm />
          </div>
          <div className="MyReviewLogin-rv"></div>
        </div>
      );
}

export default RvDetailsLogin