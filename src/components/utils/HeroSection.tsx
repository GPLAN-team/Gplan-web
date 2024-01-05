import { Box, Fade, Grid, InputAdornment, Link, Slide, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import landingBG from "../../public/landingBG.png";
import { useInView } from "react-intersection-observer";
import Test from "./Test2";
import component1 from "../../public/component1.png";
import component2 from "../../public/component2.png";
import component3 from "../../public/component3.png";
import bgL1 from "../../public/bgL1.png";

function HeroSection() {
  const { ref: imageRef, inView: imageIsVisible } = useInView({
    triggerOnce: true,
  });
  const containerRef = React.useRef<HTMLElement>(null);

  const handleGetStarted = () => {
    //Redirect to desired page
  };

  const [Email, setEmail] = useState("");
  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <Box sx={{ position: "relative", height: "1210.191px;" }}>
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            opacity: 0.5,
            height: "1210.191px;",
            background: `url(${landingBG})`,
            backgroundSize: "cover",
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            zIndex: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: { sm: "56px" },
              mt: { xs: "100px", sm: "215px" },
            }}
          >
            <Box ref={containerRef}>
              <Box
                ref={imageRef}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "24px",
                }}
              >
                <Box>
                  <Fade
                    in={imageIsVisible}
                    timeout={1000}
                    easing="ease-out"
                    style={{
                      transitionDelay: imageIsVisible ? "150ms" : "0ms",
                    }}
                  >
                    <div>
                      <Slide
                        in={imageIsVisible}
                        direction="up"
                        easing="ease-out"
                        timeout={500}
                        container={containerRef.current}
                        style={{
                          transitionDelay: imageIsVisible ? "150ms" : "0ms",
                        }}
                      >
                        <Box>
                          <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <Typography
                              sx={{
                                color: "#828282",
                                fontFamily: "Montserrat",
                                fontSize: "36px",
                                fontStyle: "normal",
                                fontWeight: 500,
                                lineHeight: "normal",
                              }}
                            >
                              A Generative Floor Plan Designer
                            </Typography>
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                color: "#222",
                                fontFamily: "Bebas Neue",
                                fontSize: { xs: "64px", sm: "128px" },
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "100%",
                                margin: { xs: "0px 0px 10px -50px", sm: "0px" },
                              }}
                            >
                              THE FUTURE OF
                            </Typography>
                            <Box sx={{ display: { xs: "none", sm: "inline" } }}>
                              <Typography
                                display="inline"
                                sx={{
                                  color: "#1C4C82",
                                  fontFamily: "Bebas Neue",
                                  fontSize: { xs: "64px", sm: "128px" },
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  lineHeight: "100%",
                                }}
                              >
                                EARLY STAGE FLOOR-PLAN{" "}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: { xs: "block", sm: "none" },
                                margin: { xs: "0px 0px 10px -50px", sm: "0px" },
                              }}
                            >
                              <Typography
                                display="inline"
                                sx={{
                                  color: "#1C4C82",
                                  fontFamily: "Bebas Neue",
                                  fontSize: { xs: "64px", sm: "128px" },
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  lineHeight: "100%",
                                }}
                              >
                                EARLY STAGE
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: { xs: "block", sm: "none" },
                                margin: { xs: "0px 0px 10px -50px", sm: "0px" },
                              }}
                            >
                              <Typography
                                display="inline"
                                sx={{
                                  color: "#1C4C82",
                                  fontFamily: "Bebas Neue",
                                  fontSize: { xs: "64px", sm: "128px" },
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  lineHeight: "100%",
                                }}
                              >
                                FLOOR-PLAN
                              </Typography>
                            </Box>
                            <Typography
                              display="inline"
                              sx={{
                                color: "#222",
                                fontFamily: "Bebas Neue",
                                fontSize: { xs: "64px", sm: "128px" },
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "100%",
                                margin: { xs: "0px 0px 0px -50px", sm: "0px" },
                              }}
                            >
                              DESIGN
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: { xs: "none", sm: "flex" },
                              width: "400px",
                              height: "141px",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "36px",
                              mt: "36px",
                              borderRadius: "16px",
                              background: "#222",
                              "&:hover": {
                                cursor: "pointer",
                              },
                            }}
                            onClick={handleGetStarted}
                          >
                            <Typography
                              sx={{
                                color: "#FFF",
                                fontFamily: "Montserrat",
                                fontSize: "30px",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "normal",
                              }}
                            >
                              Get Started
                            </Typography>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="31"
                              height="31"
                              viewBox="0 0 31 31"
                              fill="none"
                            >
                              <path
                                d="M6.45801 15.5H24.5413"
                                stroke="white"
                                stroke-width="2.58333"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M15.5 6.45835L24.5417 15.5L15.5 24.5417"
                                stroke="white"
                                stroke-width="2.58333"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </Box>
                        </Box>
                      </Slide>
                    </div>
                  </Fade>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            width: "100vw",
            mt: "-25px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 390 199"
            fill="none"
          >
            <path
              d="M551.75 195C539.087 136.974 529.175 15 430.101 15C304.086 15 151.558 120.497 72.4292 120.497C-6.69936 120.497 -44.6861 75.0891 -45 61.7098"
              stroke="#1C4C82"
              stroke-width="29.1027"
            />
          </svg>
        </Box>
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            overflow: "visible",
            mt: "-50px",
          }}
        >
          <Typography
            sx={{
              color: "#828282",
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              ml: "25px",
            }}
          >
            A Generative Floor Plan Designer
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
            mt: "7.5px",
          }}
        >
          <Box
            onClick={handleGetStarted}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "90vw",
              backgroundColor: "black",
              height: "70px",
              borderRadius: "16px",
              userSelect: "none",
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Space Grotesk",
                fontSize: "30px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              Get Started
            </Typography>
            <Box sx={{ ml: "25px", mt: "7px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M6.95703 16H25.0404"
                  stroke="white"
                  stroke-width="2.58333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 6.95836L25.0417 16L16 25.0417"
                  stroke="white"
                  stroke-width="2.58333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Box>
          </Box>
        </Box>
      </Box>
      <div style={{ marginTop: "-20%" }}>
        <Test></Test></div>
      <Box
        sx={{
          textAlign: "center",
          mt: "190px ",
          display: { xs: "none", sm: "block" },
          whiteSpace: "nowrap"
        }}
      >
        <Typography
          sx={{
            display: "inline",
            color: "#111",
            textAlign: "center",
            fontFamily: "Bebas Neue",
            fontSize: "56px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          Quickly{" "}
        </Typography>
        <Typography
          sx={{
            display: "inline",
            color: "#1C4C82",
            textAlign: "center",
            fontFamily: "Bebas Neue",
            fontSize: "56px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          graph, prototype, generate and edit
        </Typography>
        <Typography
          sx={{
            color: "#111",
            textAlign: "center",
            fontFamily: "Bebas Neue",
            fontSize: "56px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          floorplans. Getting your ideas from your brain to
        </Typography>
        <Typography
          sx={{
            display: "inline",
            color: "#111",
            textAlign: "center",
            fontFamily: "Bebas Neue",
            fontSize: "56px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          your tool was never this fast
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "left",
          mt: "190px",
          display: { xs: "block", sm: "none" },
        }}
      >
        <Typography
          sx={{
            display: "inline",
            color: "#111",
            fontFamily: "Bebas Neue",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            ml: "6.25%",
          }}
        >
          Quickly{" "}
        </Typography>
        <Typography
          sx={{
            display: "inline",
            color: "#1C4C82",
            fontFamily: "Bebas Neue",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          graph, prototype,
        </Typography>
        <Typography
          sx={{
            color: "#1C4C82",
            fontFamily: "Bebas Neue",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            ml: "6.25%",
          }}
        >
          generate and Edit
        </Typography>
        <Typography
          sx={{
            color: "#111",
            fontFamily: "Bebas Neue",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            ml: "6.25%",
          }}
        >
          Floorplans. Getting your
        </Typography>
        <Typography
          sx={{
            color: "#111",
            fontFamily: "Bebas Neue",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            ml: "6.25%",
          }}
        >
          ideas from your brain to
        </Typography>
        <Typography
          sx={{
            color: "#111",
            fontFamily: "Bebas Neue",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            ml: "6.25%",
          }}
        >
          your tool was never this
        </Typography>
        <Typography
          sx={{
            color: "#111",
            fontFamily: "Bebas Neue",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            ml: "6.25%",
          }}
        >
          fast
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          backgroundColor: "#1C4C82",
          pl: "7%",
          pr: "7%",
          pb: "32px",
          mb: "36px",
          mt: "36px",
        }}
      >
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              borderRadius: "16px",
              background: "#F2F7FC",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "45px",
              paddingBottom: "45px",
            }}
          >
            <Box sx={{ height: { xs: "76px", sm: "96px" } }}>
              <img src={component1} height="100%" width="auto" alt="" />
            </Box>
            <Typography
              sx={{
                mt: "16px",
                color: "#1C4C82",
                textAlign: "center",
                fontFamily: "Lato",
                fontSize: { sx: "19.2px", sm: "22px" },
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "120%" /* 28.8px */,
                letterSpacing: "-0.24px",
                textTransform: "capitalize",
              }}
            >
              Powerful Graph Editor
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              borderRadius: "16px",
              background: "#F2F7FC",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "45px",
              paddingBottom: "45px",
            }}
          >
            <Box sx={{ height: { xs: "76px", sm: "96px" } }}>
              <img src={component2} height="100%" width="auto" alt="" />
            </Box>
            <Typography
              sx={{
                mt: "16px",
                color: "#1C4C82",
                textAlign: "center",
                fontFamily: "Lato",
                fontSize: { sx: "19.2px", sm: "22px" },
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "120%" /* 28.8px */,
                letterSpacing: "-0.24px",
                textTransform: "capitalize",
              }}
            >
              Quick Generative FloorPlans
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              borderRadius: "16px",
              background: "#F2F7FC",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "45px",
              paddingBottom: "45px",
            }}
          >
            <Box sx={{ height: { xs: "76px", sm: "96px" } }}>
              <img src={component3} height="100%" width="auto" alt="" />
            </Box>
            <Typography
              sx={{
                mt: "16px",
                color: "#1C4C82",
                textAlign: "center",
                fontFamily: "Lato",
                fontSize: { sx: "19.2px", sm: "22px" },
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "120%" /* 28.8px */,
                letterSpacing: "-0.24px",
                textTransform: "capitalize",
              }}
            >
              Export To Your Preferred Tools
            </Typography>
          </Box>
        </Grid>
      </Grid>
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
            fontSize: { xs: "27px", sm: "56px" },
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
                <rect width="100%" height="100%" fill="#DDDDDD" rx="8" ry="8"/>
              </svg>
            </Box>
          </Grid>
          <Grid item xs={12} md={5.1}>
            <Grid
              container
              spacing={2}
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
      {/* <Box
        sx={{
          mb:"58px",
          backgroundColor: "#1C4C82",
          backgroundImage: `url(${bgL1}) , url(${bgL1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left top, 970px -350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      > */}
      {/* <Box sx={{ mt: "58px", }}>
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              fontFamily: "Bebas Neue",
              fontSize: { xs: "27px", sm: "64px" },
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Get Started with GPLAN
          </Typography>
        </Box> */}
      {/* <Box
          sx={{
            border: "none",
            mt: "32px",
            mb:"58px",
            width: { sx: "340px", sm: "625px" },
          }}
        >
          <TextField
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Box
                    sx={{
                      height: "50px",
                      width: "50px",
                      backgroundColor: "#1C4C82",
                      mr: "-11px",
                      borderRadius: "2px",
                    }}
                  >
                    <Box sx={{ mt: "13px", ml: "13px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M5 12.3389H19"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 5.33887L19 12.3389L12 19.3389"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Box>
                  </Box>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              shrink: false,
              style: {
                color: "#949CA9",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px",
              },
            }}
            type="text"
            label={Email === "" ? "Email" : ""}
            name="Email"
            value={Email}
            onChange={handleEmailChange}
            sx={{ backgroundColor: "white" }}
          />
        </Box> */}
      {/* </Box> */}
    </>
  );
}

export default HeroSection;
