import React from "react";
import "./MyReviewLogin.css";
import LoginForm from "../../../LoginForm/LoginForm";

function MyReviewLogin() {
  return (
    <div className="MyReviewLogin-container">
      <div className="MyReviewLogin-rv"></div>
      <div className="MyReview-Login">
        <LoginForm />
      </div>
    </div>
  );
}

export default MyReviewLogin;
