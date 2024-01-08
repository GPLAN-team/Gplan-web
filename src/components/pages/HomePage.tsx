import React from "react";
import Navbar from "../utils/homepage/Navbar";
import "../../styles/home.css"
import QuickStartSection from "../utils/homepage/QuickStartSection";

export default function HomePage() {
  return (
    <>
      <Navbar/>
      <QuickStartSection/>
    </>
  );
}