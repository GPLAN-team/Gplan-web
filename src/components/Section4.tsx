import React from "react";
import { Box, Typography } from "@mui/material";

function Section4() {
  return (
    <>
      <Box
        sx={{
          border:'solid',
          display: "flex",
          margin: "0px 64px",
          paddingBottom: "30px",
        }}
      >
        <Box
          sx={{
            height: `${window.innerHeight - 150}px`,
            backgroundColor: "#DDD",
            flex: "1.5",
            marginRight: "16px",
          }}
        ></Box>
        <Box
          sx={{
            height: `${window.innerHeight - 150}px`,
            display: "flex",
            flexDirection: "column",
            flex: "1",
          }}
        >
          <Box
            sx={{ flex: "1", backgroundColor: "#DDD", marginBottom: "8px" }}
          ></Box>
          <Box sx={{ display: "flex", flex: "1" }}>
            <Box
              sx={{ flex: "1", backgroundColor: "#DDD", marginRight: "8px" }}
            ></Box>
            <Box sx={{ flex: "1", backgroundColor: "#DDD" }}></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Section4;
