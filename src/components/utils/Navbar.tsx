import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  SwipeableDrawer,
} from "@mui/material";
import styles from "../../styles/Styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [toggler, setToggler] = useState(false);

  //handle menu click
  const handleDrawerToggle = () => {
    setToggler(!toggler);
  };

  //menu drawer
  const drawer = (
    <Box
      sx={{
        bgcolor: "#1C4C82",
        textAlign: "center",
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginLeft: { xs: "24px", sm: "36px" },
            marginTop: "22px",
          }}
        >
          <svg
            width="49"
            height="50"
            viewBox="0 0 49 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame 10">
              <g id="Group">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.8226 5.36267L42.0918 15.3333V35.2742L24.8226 45.2451L7.55273 35.2742V15.3333L24.8226 5.36267Z"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <g id="Group_2">
                <path
                  id="Vector_2"
                  d="M14.8086 31.0976L31.6215 41.0489"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <g id="Group_3">
                <path
                  id="Vector_3"
                  d="M34.8906 31.0803L17.7478 41.0664"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <g id="Group_4">
                <path
                  id="Vector_4"
                  d="M24.8202 5.3623V25.3035M24.8202 25.3035L7.75977 35.2079M24.8202 25.3035L42.0901 35.1385"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <g id="Group_5">
                <path
                  id="Vector_5"
                  d="M14.7031 11.6611L14.7326 23.5527L14.7253 30.9879"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <g id="Group_6">
                <path
                  id="Vector_6"
                  d="M24.9277 5.8736L34.9 31.0977"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>
          <Typography
            sx={{ ...styles.Navbar.NavGplanLogo, ...{ color: "white" } }}
          >
            GPLAN
          </Typography>
        </Box>
        <Box sx={{ marginTop: "22px" }}>
          <IconButton
            aria-label="close drawer"
            size="large"
            sx={{ display: { sm: "none" }, marginRight: "24px" }}
            onClick={handleDrawerToggle}
          >
            <CloseIcon sx={{ color: "white" }}></CloseIcon>
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ marginTop: "16px", boxShadow:"none"}}>
        <Typography
          sx={{
            ...styles.Navbar.NavButtons,
            ...{ color: "white", marginBottom: "24px" },
          }}
        >
          Home
        </Typography>
        <Typography
          sx={{
            ...styles.Navbar.NavButtons,
            ...{ color: "white", marginBottom: "24px" },
          }}
        >
          Features
        </Typography>
        <Typography
          sx={{
            ...styles.Navbar.NavButtons,
            ...{ color: "white", marginBottom: "24px" },
          }}
        >
          Quickstart Guides
        </Typography>
        <Typography
          sx={{
            ...styles.Navbar.NavButtons,
            ...{ color: "white", marginBottom: "24px" },
          }}
        >
          About Us
        </Typography>
        <Typography
          sx={{
            ...styles.Navbar.NavButtons,
            ...{ color: "white", marginBottom: "24px" },
          }}
        >
          Contact Us
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <Box>
        <Box
          component="nav"
          sx={{ background: "transparent", boxShadow: "none", position:"absolute", width:"100%", zIndex: 1 }}
        >
          <Toolbar
            sx={{
              display: "flex",
              height: "94px",
              padding: "3px",
              justifyContent: "space-between",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginLeft: { xs: "24px", sm: "36px" },
              }}
            >
              <Box>
                <svg
                  width="49"
                  height="50"
                  viewBox="0 0 49 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Frame 10">
                    <g id="Group">
                      <path
                        id="Vector"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.8226 5.36267L42.0918 15.3333V35.2742L24.8226 45.2451L7.55273 35.2742V15.3333L24.8226 5.36267Z"
                        stroke="#1C4C82"
                        stroke-width="2.5"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <g id="Group_2">
                      <path
                        id="Vector_2"
                        d="M14.8086 31.0976L31.6215 41.0489"
                        stroke="#1C4C82"
                        stroke-width="2.5"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <g id="Group_3">
                      <path
                        id="Vector_3"
                        d="M34.8906 31.0803L17.7478 41.0664"
                        stroke="#1C4C82"
                        stroke-width="2.5"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <g id="Group_4">
                      <path
                        id="Vector_4"
                        d="M24.8202 5.3623V25.3035M24.8202 25.3035L7.75977 35.2079M24.8202 25.3035L42.0901 35.1385"
                        stroke="#1C4C82"
                        stroke-width="2.5"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <g id="Group_5">
                      <path
                        id="Vector_5"
                        d="M14.7031 11.6611L14.7326 23.5527L14.7253 30.9879"
                        stroke="#1C4C82"
                        stroke-width="2.5"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <g id="Group_6">
                      <path
                        id="Vector_6"
                        d="M24.9277 5.8736L34.9 31.0977"
                        stroke="#1C4C82"
                        stroke-width="2.5"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </g>
                </svg>
              </Box>
              <Typography sx={{...styles.Navbar.NavGplanLogo, ...{userSelect:"none"}}}>GPLAN</Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: "34px",
                marginRight: "36px",
              }}
            >
              <Typography sx={styles.Navbar.NavButtons}>Home</Typography>
              <Typography sx={styles.Navbar.NavButtons}>Features</Typography>
              <Typography sx={styles.Navbar.NavButtons}>
                Quickstart Guides
              </Typography>
              <Typography sx={styles.Navbar.NavButtons}>About Us</Typography>
              <Typography sx={styles.Navbar.NavButtons}>Contact Us</Typography>
              <Button variant="contained" sx={{ backgroundColor: "#1C4C82" }}>
                <Typography
                  sx={{
                    color: "white",
                    padding: "8px 0px",
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                  }}
                >
                  Login
                </Typography>
              </Button>
            </Box>
            <IconButton
              aria-label="open drawer"
              size="large"
              sx={{ display: { sm: "none" }, marginRight: "24px" }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon sx={{ color: "#1C4C82" }}></MenuIcon>
            </IconButton>
          </Toolbar>
        </Box>
        <SwipeableDrawer
          anchor="top"
          open={toggler}
          onOpen={handleDrawerToggle}
          onClose={handleDrawerToggle}
        >
          {drawer}
        </SwipeableDrawer>
      </Box>
    </>
  );
}

export default Navbar;
