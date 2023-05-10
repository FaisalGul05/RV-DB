import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar/Navbar";
import NavbarCollapsed from "../../Components/Header/NavbarCollapsed/NavbarCollapsed";
import MyReviewLogin from "../../Components/Sections/Reviews/MyReviewLogin/MyReviewLogin";
import MyReviewTable from "../../Components/Sections/Reviews/MyReviewTable/MyReviewTable";
import { useResponsive } from "../../Hooks/UseResponsive";

function Reviews() {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  console.log("myyy", isSignedIn);
  const { screenType } = useResponsive();
  
  return (
    <div>
      {screenType === "TABLET" ? <NavbarCollapsed /> : <Navbar />}
      {isSignedIn ? <MyReviewTable /> : <MyReviewLogin />}

      <Footer />
    </div>
  );
}

export default Reviews;
