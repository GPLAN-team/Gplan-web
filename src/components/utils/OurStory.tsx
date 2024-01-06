import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function OurStory() {
  return (
    <>
    <Grid
        spacing={5}
        sx={{
          backgroundColor: "#fff",
          pl: "7%",
          pr: "7%",
          pb: "32px",
          mb: "36px",
          mt: "36px",
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Bebas Neue",
            fontSize: { xs: "36px", sm: "56px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            marginBottom: "20px",
          }}
        >
          <Grid container>
            <Box sx={{ color: "black", marginRight: "4px" }}>Our</Box>
            <Box sx={{ color: { xs: "#1C4C82", sm: "black" } }}>Story</Box>
          </Grid>
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6.9} sx={{ height: '100%' }}>
            <Box
              sx={{
                borderRadius: '8px',
              }}
            >
              <svg width="100%" height="auto" viewBox="0 0 910 792">
                <rect width="100%" height="100%" fill="#DDDDDD" rx="8" ry="8" />
              </svg>
            </Box>
          </Grid>
          <Grid item xs={12} md={5.1}>
            <Grid
              container
              alignContent="space-between"
              style={{ height: '100%' }}
            >
              <Grid item xs={12}>
                <Box
                  sx={{
                    background: '#F2F7FC',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    borderRadius: '8px',
                  }}
                >
                  <Typography
                    sx={{
                      color: "#4F4F4F",
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "16px", sm: "20px" },
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                    }}
                  >
                    Born in the desert sands of BITS Pilani, India, GPLAN is the brainchild of Prof. Krishnendra Shekhawat, an esteemed mathematics professor, and his students.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Grid sx={{ height: '100%' }} container spacing={2} >
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        background: '#DDDDDD',
                        paddingTop: '5px',
                        paddingBottom: '5px',
                        height: '200px',
                        mt : { xs: '20px', sm: '0px'},
                        mb : { xs: '0px', sm: '5px'},
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '8px',
                      }}
                    >
                      <Typography
                        sx={{
                          color: "black",
                          textAlign: "center",
                          fontFamily: "Inter",
                          fontSize: { xs: "16px", sm: "20px" },
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "normal",
                        }}
                      >
                        Our Team
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        background: '#DDDDDD',
                        paddingTop: '5px',
                        paddingBottom: '5px',
                        height: '200px',
                        mt : { xs: '20px', sm: '0px'},
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '8px',
                      }}
                    >
                      <Typography
                        sx={{
                          color: "black",
                          textAlign: "center",
                          fontFamily: "Inter",
                          fontSize: { xs: "16px", sm: "20px" },
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "normal",
                        }}
                      >
                        What we are Up to
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}