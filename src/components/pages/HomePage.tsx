import React from "react";
import Navbar from "../utils/homepage/Navbar";
import "../../styles/home.css"
import QuickStartSection from "../utils/homepage/QuickStartSection";
import YourDocuments from "../utils/homepage/YourDocuments";

export default function HomePage() {
  return (
    <>
      <Navbar/>
      <QuickStartSection/>
      <YourDocuments/>
    </>
  );
}