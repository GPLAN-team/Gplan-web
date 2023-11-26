import React from "react";
import Navbar from "../utils/Navbar";
import { Box } from "@mui/material";
import HeroSection from "../utils/HeroSection";
import Footer from "../utils/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}

export default LandingPage;
