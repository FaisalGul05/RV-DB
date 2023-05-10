import React from "react";
import Navbar1 from "../../Components/Header/Navbar/Navbar";
import NavbarCollapsed from "../../Components/Header/NavbarCollapsed/NavbarCollapsed";
import RvDetailsCarousel from "../../Components/Sections/RvDetails/RvDetailsCarousel/RvDetailsCarousel";
import RvDetailsDescription from "../../Components/Sections/RvDetails/RvDetailsDescription/RvDetailsDescription";
import RvDetailsHero from "../../Components/Sections/RvDetails/RvDetailsHero/RvDetailsHero";
import RvDetailsLogin from "../../Components/Sections/RvDetails/RvDetailsLogin/RvDetailsLogin";
import RvDetailsQR from "../../Components/Sections/RvDetails/RvDetailsQR/RvDetailsQR";
import RvDetailsReviewForm from "../../Components/Sections/RvDetails/RvDetailsReviewForm/RvDetailsReviewForm";
import { useResponsive } from "../../Hooks/UseResponsive";
import Footer from "../../Components/Footer/Footer";

function RvDetails() {
  const { screenType } = useResponsive();
  // const { id } = useParams();
  return (
    <>
      {screenType === "TABLET" ? <NavbarCollapsed /> : <Navbar1 />}
      <RvDetailsHero />
      <RvDetailsDescription />
      {/* <RvDetailsLogin /> */}
      <RvDetailsCarousel />
      <RvDetailsReviewForm />
      <RvDetailsQR />
      <Footer />
    </>

  );
}

export default RvDetails;
