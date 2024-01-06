import React from "react";
import Navbar from "../utils/Navbar";
import HeroSection from "../utils/HeroSection";
import Footer from "../utils/Footer";
import "../../styles/home.css"
import MacPhotoSection from "../utils/MacPhotoSection";
import InfoSection from "../utils/InfoSection";
import GetStarted from "../utils/GetStarted";
import Pricing from "../utils/Pricing";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MacPhotoSection />
      <InfoSection/>
      {/* <GetStarted/> */}
      <Pricing/>
      <Footer />
    </>
  );
}

export default LandingPage;
