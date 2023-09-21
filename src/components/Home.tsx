import React from "react";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import HorizontalScroller from "./HorizontalScroller";
import { Typography } from "@mui/material";

function Home() {
  return (<>
  <Navbar/>
  <Section1/>
  
  <Typography>Feature grid</Typography>
  <Section2/>
  <Typography>Horizontal Scroll</Typography>
  <HorizontalScroller/>
  <Typography>Our story section</Typography>
  <Section4/>
  </>
  );
}

export default Home;
