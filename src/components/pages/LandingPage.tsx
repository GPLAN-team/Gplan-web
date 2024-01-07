import React from "react";
import Navbar from "../utils/Navbar";
import HeroSection from "../utils/HeroSection";
import Footer from "../utils/Footer";
import "../../styles/home.css"
import MacPhotoSection from "../utils/MacPhotoSection";
import InfoSection from "../utils/InfoSection";
import GetStarted from "../utils/GetStarted";
import Pricing from "../utils/Pricing";
import GuidedVideos from "../utils/GuidedVideos";
import OurStory from "../utils/OurStory";
import DemoVideo from "../utils/DemoVideo";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MacPhotoSection />
      <InfoSection/>
      {/* <GetStarted/> */}
      <Pricing/>
      <DemoVideo/>
      <GuidedVideos/>
      <OurStory/>
      <Footer />
    </>
  );
}

export default LandingPage;
