import { Box, Grid } from "@mui/material";
import React from "react";
import component1 from "../../public/component1.svg";
import component2 from "../../public/component2.svg";
import component3 from "../../public/component3.svg";

const InfoSection = () => {
  return (
    <div>
      <Grid container spacing={4} className="info-grid-container" sx={{marginTop:{xs:"676px", sm:"64px"}}}>
        <Grid item xs={12} md={4}>
          <Box className="info-grid-box">
            <Box sx={{ height: { xs: "76px", sm: "96px" } }}>
              <img src={component1} height="100%" width="auto" alt="" />
            </Box>
            <p className="info-text">Powerful Graph Editor</p>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="info-grid-box">
            <Box sx={{ height: { xs: "76px", sm: "96px" } }}>
              <img src={component2} height="100%" width="auto" alt="" />
            </Box>
            <p className="info-text">Quick Generative FloorPlans</p>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="info-grid-box">
            <Box sx={{ height: { xs: "76px", sm: "96px" } }}>
              <img src={component3} height="100%" width="auto" alt="" />
            </Box>
            <p className="info-text">Export To Your Preferred Tools</p>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoSection;
