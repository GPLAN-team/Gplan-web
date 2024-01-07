import React from "react";
import { Box, Typography } from "@mui/material";
import plan from "../../../assets/inputGraphEditor/plan.png";
import plan1 from "../../../assets/inputGraphEditor/plan1.svg";
import plan2 from "../../../assets/inputGraphEditor/plan2.svg";
import { CustomDiv } from "./Sidebar";

function FloorPlanSection() {
  return (
    <CustomDiv>
      <Box className="container plan">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "0px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div className="head">Floor Plan</div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "8px",
              }}
            >
              <img src={plan1} alt="" />
              <img src={plan2} alt="" />
            </Box>
          </Box>
        </Box>

        {/* Plan */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={plan} alt="" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12.6323H5"
              stroke="#1C4C82"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5.63232L5 12.6323L12 19.6323"
              stroke="#1C4C82"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            3 / 20
          </Typography>

          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12.6323H19"
              stroke="#1C4C82"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5.63232L19 12.6323L12 19.6323"
              stroke="#1C4C82"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Box>
    </CustomDiv>
  );
}

export default FloorPlanSection;
