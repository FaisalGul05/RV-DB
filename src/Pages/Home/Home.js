import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar/Navbar";
import NavbarCollapsed from "../../Components/Header/NavbarCollapsed/NavbarCollapsed";
import HeroSection from "../../Components/Sections/Home/HeroSection/HeroSection";
import CardSection from "../../Components/Sections/Home/CardSection/CardSection";
import AboutusSection from "../../Components/Sections/Home/AboutusSection/AboutusSection";
import { useResponsive } from "../../Hooks/UseResponsive";

import { getData } from "../../Redux/Actions/ApiFetch";

function Home() {
  const { screenType } = useResponsive();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getData());
  // }, []);
  // const data = useSelector((state) => state.auth.apiData);
  // console.log("aahbabhjabsaabsjsaa", data);
  return (
    <>
      {screenType === "TABLET" ? <NavbarCollapsed /> : <Navbar />}
      <HeroSection />
      <CardSection />
      <AboutusSection />
      <Footer />
    </>

  );
}

export default Home;
