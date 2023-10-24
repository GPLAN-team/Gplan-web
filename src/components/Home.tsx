import React from "react";
import Dropmenu from "./Dropmenu";
import MagnetIcon from "./icons/MagnetIcon";
import MenuIcon from "./icons/MenuIcon";
import TestButton from "./TestButton";
import UpLeftCursorIcon from "./icons/UpLeftCursorIcon";
import ColorPotIcon from "./icons/ColorPotIcon";
import LeftArrowIcon from "./icons/LeftArrowIcon";
import LeftCurvedArrowIcon from "./icons/LeftCurvedArrowIcon";
import PenIcon from "./icons/PenIcon";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";
import RightArrowIcon from "./icons/RightArrowIcon";
import RightCurvedArrowIcon from "./icons/RightCurvedArrowIcon";
import ScaleIcon from "./icons/ScaleIcon";
import ScalePencilIcon from "./icons/ScalePencilIcon";
import SelectBoxIcon from "./icons/SelectBoxIcon";
import TagIcon from "./icons/TagIcon";
import TextBoxIcon from "./icons/TextBoxIcon";
import { Box, SvgIcon, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import HorizontalScroller from "./HorizontalScroller";
import Footer from "./Footer";
import SignUpPage from "./SignUpPage";

function Home() {
  return (
    <>
   <SignUpPage/>
    {/* <Navbar/>
    <Section1/>
    <Box sx={{display:'flex', justifyContent:"center", my:'20px'}}><Typography variant="h3">Features</Typography></Box>
    
    <Section2/>
    <Section3/>    
    <Section3/>
    <Box sx={{display:'flex', justifyContent:"left" , marginLeft:'32px', marginTop:'32px'}}><Typography variant="h3">Workflow</Typography></Box>
    <Section4/>
    <Box sx={{display:'flex', justifyContent:"left", margin:'32px'}}><Typography variant="h3">Quick Start Guides</Typography></Box>
    <HorizontalScroller/>
    <Footer/> */}{/* 
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <ColorPotIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <LeftArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <LeftCurvedArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <MagnetIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <MenuIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <PenIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <MinusIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <PlusIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <RightArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <RightCurvedArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <ScaleIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <ScalePencilIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <SelectBoxIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <TagIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <TextBoxIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <UpLeftCursorIcon color={""} />
      </TestButton>
      <Dropmenu />
       */}
    </>
  );
}

export default Home;
