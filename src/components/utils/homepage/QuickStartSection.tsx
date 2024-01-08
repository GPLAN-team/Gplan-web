import React from "react";
import { Grid, Typography } from "@mui/material";
import createQuickStart from "../../../public/createQuickStart.svg";
import existingQuickStart from "../../../public/existingQuickStart.svg";

interface CardProps {
  imageProp: string;
  imageText: string;
  textSize: string;
}

export default function QuickStartSection() {
  return (
    <>
      <Grid
        spacing={5}
        sx={{
          backgroundColor: "#1C4C82",
          pl: "7%",
          pr: "7%",
          pt: "0px",
        }}
      >
        <Typography
          sx={{
            mr: "10px",
            color: "#F2F2F2",
            textAlign: "left",
            fontFamily: "Poppins",
            fontSize: { xs: "13px", sm: "25px" },
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
          Quick Start
        </Typography>
      </Grid>
      {/* work here */}
      <div className="quickStartSection">
        <div className="scrollQuickStart">
          <div className="quickStartSectionOuter">
            <Card imageProp={createQuickStart} imageText="Blank Document" textSize="15px" />
            {/* for placeholder */}
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} imageProp={existingQuickStart} imageText="T Shaped" textSize="13px" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ imageProp, imageText, textSize }: CardProps) {
  return (
    <>
      <div className="eachQuickStart">
        <img src={imageProp} height="100%" width="100%" alt="" />
        <Typography
          sx={{
            color: "#F2F2F2",
            textAlign: "left",
            fontFamily: "Poppins",
            fontSize: textSize,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            marginTop: "10px",
          }}
        >
          {imageText}
        </Typography>
      </div>
    </>
  );
}