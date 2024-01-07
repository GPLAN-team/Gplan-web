import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import regen from "../../../assets/inputGraphEditor/regenerate.svg";
import cont from "../../../assets/inputGraphEditor/continue.svg";
import CorridorSection from "./CorridorSection";
import ExportSection from "./ExportSection";
import FloorPlanSection from "./FloorPlanSection";

const MainDiv = styled.div`
  .sidebar {
    width: 28vw;
    display: flex;
    justify-content: space-between;
  }

  .btn {
    padding: 16px 8px;
    font-weight: 600;
    align-items: center;
    border-radius: 8px;
    text-transform: capitalize;
    gap: 4px;
  }

  .btn-text {
    font-family: Poppins !important;
    font-size: 14px !important;
    font-style: normal !important;
    font-weight: 500 !important;
    line-height: 26.4px;
  }
`;

const CustomDiv = styled.div`
  .container {
    width: 100%;
    padding: 16px;
    display: flex;
    background: #ffffff;
    font-family: Poppins;
    gap: 16px;
    border-radius: 8px;
  }

  .corridor,
  .plan {
    flex-direction: column;
  }

  .export,
  .btns {
    flex-direction: row;
  }

  .btns {
    padding: 0;
    background: none;
  }

  .plan,
  .export {
    padding: 16px 32px;
  }

  .btns {
    gap: 8px;
  }

  .icon {
    width: 36px;
  }

  .header {
    font-size: 14px;
    color: #1c4c82;
    font-weight: 500;
  }

  p {
    font-size: 12px;
    margin: 0;
    color: #879fba;
  }

  .setting {
    text-decoration: underline;
  }

  .arrow {
    width: 24px;
  }

  .line {
    width: 100%;
    height: 1px;
    background: #f2f7fc;
  }

  .head {
    font-size: 18px;
    line-height: 20px;
    font-weight: 500 !important;
    color: #828282;
  }

  .para {
    font-size: 12px;
    line-height: 12px;
    color: #bdbdbd;
  }
`;

const Sidebar = () => {
  return (
    <MainDiv>
      <Box
        sx={{
          width: "28vw",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: "8px",
          // maxHeight: "95vh"
        }}
      >
        <CorridorSection />
        <ExportSection />
        <FloorPlanSection />

        {/* Buttons */}
        <CustomDiv>
          <div className="container btns">
            <Button
              className="btn"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#ffffff",
                color: "#1C4C82",
                border: "3px solid #1C4C82",
              }}
            >
              <Typography
                className="btn-text"
                sx={{
                  color: "#1C4C82 !important",
                }}
              >
                Regenerate Floorplan
              </Typography>
              <img src={regen} alt="" />
            </Button>
            <Button
              className="btn"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#1C4C82",
              }}
            >
              <Typography
                className="btn-text"
                sx={{
                  color: "#FFF !important",
                }}
              >
                Continue to Editor
              </Typography>
              <img src={cont} alt="" />
            </Button>
          </div>
        </CustomDiv>
      </Box>
    </MainDiv>
  );
};

export {CustomDiv};
export default Sidebar;
