import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import yourDocumentPlaceholder from "../../../public/yourDocumentPlaceholder.svg";

function DocCard() {
  return (
    <>
      <Grid item xs={2.4}>
        <img src={yourDocumentPlaceholder} height="100%" width="100%" alt="" ></img>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: '-10px',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              mr: "10px",
              color: "#1C4C82",
              textAlign: "left",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              mb: '3px',
            }}
          >
            Kodaikanal Project
          </Typography>
          <MoreHorizIcon htmlColor="#1C4C82" fontSize="small" />
        </Box>
        <Typography
          sx={{
            mr: "10px",
            color: "#7794B4",
            textAlign: "left",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "15px",
          }}
        >
          12 March 2023
        </Typography>
      </Grid>
    </>
  );
}

export default function YourDocuments() {
  return (
    <>
      <Grid
        // spacing={5}
        sx={{
          backgroundColor: "#fff",
          pl: "7%",
          pr: "7%",
          pb: "32px",
          mb: "36px",
          mt: "36px",
        }}
      >
        <Box>
          <Box
          sx={{
            display: 'flex',
          }}
          >
            <Typography
              sx={{
                // mr: "10px",
                color: "#333333",
                textAlign: "left",
                fontFamily: "Poppins",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "15px",
                pt: '2px',
                pb: '2px',
              }}
            >
              Your
            </Typography>
            {/* Dropdown */}
            <Typography
              sx={{
                // mr: "10px",
                color: "#333333",
                textAlign: "left",
                fontFamily: "Poppins",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "15px",
                pt: '2px',
                pb: '2px',
              }}
            >
              Documents
            </Typography>
          </Box>
          {/* search  */}
        </Box>
        <Grid container spacing={6}>
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
        </Grid>
      </Grid>
    </>
  );
}