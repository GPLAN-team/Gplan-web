import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import video_placeholder from "../../public/video_placeholder.svg";

export default function DemoVideo() {
  return(
    <>
    <Grid
        spacing={5}
        sx={{
          backgroundColor: "#FFFFFF",
          pl: "7%",
          pr: "7%",
          pb: "32px",
          mb: "36px",
          mt: "36px",
        }}
      >
        <Box
          sx={{
            borderRadius: { xs: "24px", sm: "36px" },
            background: "#111111",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
            mt: "90px",
            paddingTop: { xs: "20px", sm: "45px" },
            paddingBottom: { xs: "20px", sm: "45px" },
            paddingLeft: { xs: "0", sm: "45px" },
            paddingRight: { xs: "0", sm: "45px" },
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              textAlign: "left",
              fontFamily: "Bebas Neue",
              fontSize: { xs: "32px", sm: "80px" },
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              mb: { xs: "55px", sm: "40px" },
            }}
          >
            Algorithm in Action
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: { xs: "400px", sm: "500px" },
              }}
            >
              <img src={video_placeholder} height="100%" width="auto" alt="" />
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
}