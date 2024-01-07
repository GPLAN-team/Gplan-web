import React from "react";
import { Box, Button, Typography } from "@mui/material";
import pdf from "../../../assets/inputGraphEditor/pdf.svg";
import mp4 from "../../../assets/inputGraphEditor/mp4.svg";
import { CustomDiv } from "./Sidebar";

function ExportSection() {
  return (
    <CustomDiv>
      <Box className="container export">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            padding: "0",
          }}
        >
          <div className="head">Export All</div>
          <p className="para">
            Export All Possible Plans As
          </p>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
          }}
        >
          <Button
            fullWidth
            size="small"
            variant="contained"
            sx={{
              backgroundColor: "#1C4C82",
              borderRadius: "8px",
              textTransform: "lowercase",
              gap: "4px",
            }}
          >
            <Typography
              sx={{
                color: "#FFF !important",
                fontFamily: "Poppins",
                fontSize: "17.6px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "26.4px",
              }}
            >
              pdf
            </Typography>

            <img src={pdf} alt="" />
          </Button>
          <Button
            fullWidth
            size="small"
            variant="contained"
            sx={{
              backgroundColor: "#1C4C82",
              borderRadius: "8px",
              textTransform: "lowercase",
              gap: "4px",
            }}
          >
            <Typography
              sx={{
                color: "#FFF !important",
                fontFamily: "Poppins",
                fontSize: "17.6px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "26.4px",
              }}
            >
              mp4
            </Typography>
            <img src={mp4} alt="" />
          </Button>
        </Box>
      </Box>
    </CustomDiv>
  );
}

export default ExportSection;
