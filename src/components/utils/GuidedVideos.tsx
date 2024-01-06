import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import video_placeholder_box from "../../public/video_placeholder_box.svg";


export default function GuidedVideos() {
  return (
    <>
      <Grid
        spacing={5}
        sx={{
          backgroundColor: "#fff",
          pl: "7%",
          pr: "7%",
          mt: "70px",
        }}
      >
        <Box
        sx={{
          display: { xs: "block", sm: "flex" },
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
              marginBottom: "-5px",
              mr: "10px",
            }}
          >
            Get Started With Our
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              color: { xs: "#1C4C82", sm: "#111" },
              fontFamily: "Bebas Neue",
              fontSize: { xs: "36px", sm: "56px" },
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              marginBottom: "5px",
            }}
          >
            Guided Videos
          </Typography>
          </Box>
      </Grid>
      <Grid
        sx={{
          backgroundColor: "#fff",
          pl: "7%",
          // pr: "7%",
          pb: "32px",
          mb: "36px",
          // mt: "70px",
        }}
      >
        <Box
          sx={{
            overflowX: "scroll",
            scrollbarWidth: "none",
            '&::-webkit-scrollbar': {
              display: "none",
            },
            // scrollbar-width: "none",
            // -ms-overflow-style: "none",
          }}
        >
          <Grid container wrap="nowrap" spacing={2}
          sx={{
            width: { xs: "700%", sm: "290%" },
          }}
          >
            <Grid item xs={5.3}>
              <Box
                sx={{
                  mt: "12px",
                }}
              >
                <img src={video_placeholder_box} height="100%" width="100%" alt="" />
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "17px", sm: "22px" },
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      marginBottom: "5px",
                      pl: "15px",
                    }}
                  >
                    Setting Up A Project
                  </Typography>
                  <Typography
                    sx={{
                      color: "#828282",
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "13px", sm: "14px" },
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                      marginBottom: "5px",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    12m 30sec
                  </Typography>
                </Grid>
                <Typography
                  sx={{
                    color: "#828282",
                    textAlign: "left",
                    fontFamily: "Montserrat",
                    fontSize: { xs: "13px", sm: "14px" },
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    marginBottom: "20px",
                    pl: "15px",
                  }}
                >
                  Part 1 of 14
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5.3}>
              <Box
                sx={{
                  mt: "12px",
                }}
              >
                <img src={video_placeholder_box} height="100%" width="100%" alt="" />
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "17px", sm: "22px" },
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      marginBottom: "5px",
                      pl: "15px",
                    }}
                  >
                    Setting Up A Project
                  </Typography>
                  <Typography
                    sx={{
                      color: "#828282",
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "13px", sm: "14px" },
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                      marginBottom: "5px",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    12m 30sec
                  </Typography>
                </Grid>
                <Typography
                  sx={{
                    color: "#828282",
                    textAlign: "left",
                    fontFamily: "Montserrat",
                    fontSize: { xs: "13px", sm: "14px" },
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    marginBottom: "20px",
                    pl: "15px",
                  }}
                >
                  Part 1 of 14
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5.3}>
              <Box
                sx={{
                  mt: "12px",
                }}
              >
                <img src={video_placeholder_box} height="100%" width="100%" alt="" />
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "17px", sm: "22px" },
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      marginBottom: "5px",
                      pl: "15px",
                    }}
                  >
                    Setting Up A Project
                  </Typography>
                  <Typography
                    sx={{
                      color: "#828282",
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "13px", sm: "14px" },
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                      marginBottom: "5px",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    12m 30sec
                  </Typography>
                </Grid>
                <Typography
                  sx={{
                    color: "#828282",
                    textAlign: "left",
                    fontFamily: "Montserrat",
                    fontSize: { xs: "13px", sm: "14px" },
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    marginBottom: "20px",
                    pl: "15px",
                  }}
                >
                  Part 1 of 14
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5.3}>
              <Box
                sx={{
                  mt: "12px",
                }}
              >
                <img src={video_placeholder_box} height="100%" width="100%" alt="" />
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "17px", sm: "22px" },
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      marginBottom: "5px",
                      pl: "15px",
                    }}
                  >
                    Setting Up A Project
                  </Typography>
                  <Typography
                    sx={{
                      color: "#828282",
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "13px", sm: "14px" },
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                      marginBottom: "5px",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    12m 30sec
                  </Typography>
                </Grid>
                <Typography
                  sx={{
                    color: "#828282",
                    textAlign: "left",
                    fontFamily: "Montserrat",
                    fontSize: { xs: "13px", sm: "14px" },
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    marginBottom: "20px",
                    pl: "15px",
                  }}
                >
                  Part 1 of 14
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5.3}>
              <Box
                sx={{
                  mt: "12px",
                }}
              >
                <img src={video_placeholder_box} height="100%" width="100%" alt="" />
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "17px", sm: "22px" },
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      marginBottom: "5px",
                      pl: "15px",
                    }}
                  >
                    Setting Up A Project
                  </Typography>
                  <Typography
                    sx={{
                      color: "#828282",
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "13px", sm: "14px" },
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                      marginBottom: "5px",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    12m 30sec
                  </Typography>
                </Grid>
                <Typography
                  sx={{
                    color: "#828282",
                    textAlign: "left",
                    fontFamily: "Montserrat",
                    fontSize: { xs: "13px", sm: "14px" },
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    marginBottom: "20px",
                    pl: "15px",
                  }}
                >
                  Part 1 of 14
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5.3}>
              <Box
                sx={{
                  mt: "12px",
                }}
              >
                <img src={video_placeholder_box} height="100%" width="100%" alt="" />
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "17px", sm: "22px" },
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      marginBottom: "5px",
                      pl: "15px",
                    }}
                  >
                    Setting Up A Project
                  </Typography>
                  <Typography
                    sx={{
                      color: "#828282",
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "13px", sm: "14px" },
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                      marginBottom: "5px",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    12m 30sec
                  </Typography>
                </Grid>
                <Typography
                  sx={{
                    color: "#828282",
                    textAlign: "left",
                    fontFamily: "Montserrat",
                    fontSize: { xs: "13px", sm: "14px" },
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    marginBottom: "20px",
                    pl: "15px",
                  }}
                >
                  Part 1 of 14
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5.3}>
              <Box
                sx={{
                  mt: "12px",
                }}
              >
                <img src={video_placeholder_box} height="100%" width="100%" alt="" />
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "17px", sm: "22px" },
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      marginBottom: "5px",
                      pl: "15px",
                    }}
                  >
                    Setting Up A Project
                  </Typography>
                  <Typography
                    sx={{
                      color: "#828282",
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "13px", sm: "14px" },
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                      marginBottom: "5px",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    12m 30sec
                  </Typography>
                </Grid>
                <Typography
                  sx={{
                    color: "#828282",
                    textAlign: "left",
                    fontFamily: "Montserrat",
                    fontSize: { xs: "13px", sm: "14px" },
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    marginBottom: "20px",
                    pl: "15px",
                  }}
                >
                  Part 1 of 14
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

// import { Box, Grid, Typography } from "@mui/material";
// import React from "react";
// import video_placeholder_box from "../../public/video_placeholder_box.svg";


// export default function GuidedVideos() {
//   return (
//     <>
//       <Grid
//         spacing={5}
//         sx={{
//           backgroundColor: "#fff",
//           pl: "7%",
//           pr: "7%",
//           pb: "32px",
//           mb: "36px",
//           mt: "70px",
//         }}
//       >
//         <Typography
//           sx={{
//             textAlign: "left",
//             fontFamily: "Bebas Neue",
//             fontSize: { xs: "27px", sm: "56px" },
//             fontStyle: "normal",
//             fontWeight: 400,
//             lineHeight: "normal",
//             marginBottom: "20px",
//           }}
//         >
//           Get Started With Our Guided Videos
//         </Typography>
//         <Box
//           sx={{
//             overflowX: "scroll",
//             scrollbarWidth: "none",
//             '&::-webkit-scrollbar': {
//               display: "none",
//             },
//             // scrollbar-width: "none",
//             // -ms-overflow-style: "none",
//           }}
//         >
//           <Grid spacing={2}>
//             <Box
//               sx={{
//                 display: "flex",
//               }}
//             >
//               <Grid item xs={5.3}>
//                 <Box
//                   sx={{
//                     mt: "12px",
//                     // height: { xs: "200px", sm: "300px" },
//                   }}
//                 >
//                   <img src={video_placeholder_box} height="100%" width="100%" alt="" />
//                   <Grid
//                     container
//                     justifyContent="space-between"
//                     alignItems="center"
//                   >
//                     <Typography
//                       sx={{
//                         textAlign: "left",
//                         fontFamily: "Montserrat",
//                         fontSize: { xs: "13px", sm: "22px" },
//                         fontStyle: "normal",
//                         fontWeight: 600,
//                         lineHeight: "normal",
//                         marginBottom: "5px",
//                         pl: "15px",
//                       }}
//                     >
//                       Setting Up A Project
//                     </Typography>
//                     <Typography
//                       sx={{
//                         color: "#828282",
//                         textAlign: "left",
//                         fontFamily: "Montserrat",
//                         fontSize: { xs: "13px", sm: "14px" },
//                         fontStyle: "normal",
//                         fontWeight: 500,
//                         lineHeight: "normal",
//                         marginBottom: "5px",
//                       }}
//                     >
//                       12m 30sec
//                     </Typography>
//                   </Grid>
//                   <Typography
//                     sx={{
//                       color: "#828282",
//                       textAlign: "left",
//                       fontFamily: "Montserrat",
//                       fontSize: { xs: "13px", sm: "14px" },
//                       fontStyle: "normal",
//                       fontWeight: 500,
//                       lineHeight: "normal",
//                       marginBottom: "20px",
//                       pl: "15px",
//                     }}
//                   >
//                     Part 1 of 14
//                   </Typography>
//                 </Box>
//               </Grid>
//               <Grid item xs={5.3}>
//                 <Box
//                   sx={{
//                     mt: "12px",
//                     // height: { xs: "200px", sm: "300px" },
//                   }}
//                 >
//                   <img src={video_placeholder_box} height="100%" width="100%" alt="" />
//                   <Grid
//                     container
//                     justifyContent="space-between"
//                     alignItems="center"
//                   >
//                     <Typography
//                       sx={{
//                         textAlign: "left",
//                         fontFamily: "Montserrat",
//                         fontSize: { xs: "13px", sm: "22px" },
//                         fontStyle: "normal",
//                         fontWeight: 600,
//                         lineHeight: "normal",
//                         marginBottom: "5px",
//                         pl: "15px",
//                       }}
//                     >
//                       Setting Up A Project
//                     </Typography>
//                     <Typography
//                       sx={{
//                         color: "#828282",
//                         textAlign: "left",
//                         fontFamily: "Montserrat",
//                         fontSize: { xs: "13px", sm: "14px" },
//                         fontStyle: "normal",
//                         fontWeight: 500,
//                         lineHeight: "normal",
//                         marginBottom: "5px",
//                       }}
//                     >
//                       12m 30sec
//                     </Typography>
//                   </Grid>
//                   <Typography
//                     sx={{
//                       color: "#828282",
//                       textAlign: "left",
//                       fontFamily: "Montserrat",
//                       fontSize: { xs: "13px", sm: "14px" },
//                       fontStyle: "normal",
//                       fontWeight: 500,
//                       lineHeight: "normal",
//                       marginBottom: "20px",
//                       pl: "15px",
//                     }}
//                   >
//                     Part 1 of 14
//                   </Typography>
//                 </Box>
//               </Grid>
//               <Grid item xs={5.3}>
//                 <Box
//                   sx={{
//                     mt: "12px",
//                     // height: { xs: "200px", sm: "300px" },
//                   }}
//                 >
//                   <img src={video_placeholder_box} height="100%" width="100%" alt="" />
//                   <Grid
//                     container
//                     justifyContent="space-between"
//                     alignItems="center"
//                   >
//                     <Typography
//                       sx={{
//                         textAlign: "left",
//                         fontFamily: "Montserrat",
//                         fontSize: { xs: "13px", sm: "22px" },
//                         fontStyle: "normal",
//                         fontWeight: 600,
//                         lineHeight: "normal",
//                         marginBottom: "5px",
//                         pl: "15px",
//                       }}
//                     >
//                       Setting Up A Project
//                     </Typography>
//                     <Typography
//                       sx={{
//                         color: "#828282",
//                         textAlign: "left",
//                         fontFamily: "Montserrat",
//                         fontSize: { xs: "13px", sm: "14px" },
//                         fontStyle: "normal",
//                         fontWeight: 500,
//                         lineHeight: "normal",
//                         marginBottom: "5px",
//                       }}
//                     >
//                       12m 30sec
//                     </Typography>
//                   </Grid>
//                   <Typography
//                     sx={{
//                       color: "#828282",
//                       textAlign: "left",
//                       fontFamily: "Montserrat",
//                       fontSize: { xs: "13px", sm: "14px" },
//                       fontStyle: "normal",
//                       fontWeight: 500,
//                       lineHeight: "normal",
//                       marginBottom: "20px",
//                       pl: "15px",
//                     }}
//                   >
//                     Part 1 of 14
//                   </Typography>
//                 </Box>
//               </Grid>
              
//             </Box>
//           </Grid>
//         </Box>
//       </Grid>
//     </>
//   );
// }
