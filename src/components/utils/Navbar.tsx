import React from "react";
import { useState } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  SwipeableDrawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GplanIconWhite from "../icons/GplanIconWhite";
import GplanIconBlue from "../icons/GplanIconBlue";

function Navbar() {
  const [toggler, setToggler] = useState(false);

  //handle menu click
  const handleDrawerToggle = () => {
    setToggler(!toggler);
  };

  //menu drawer
  const drawer = (
    <div className="DrawerOuterDiv">
      <div className="DrawerNav">
        <div className="LogoBox">
          <GplanIconWhite />
          <p className="DrawerLogoText">GPLAN</p>
        </div>
        <IconButton
          aria-label="close drawer"
          size="large"
          sx={{ display: { sm: "none" }}}
          onClick={handleDrawerToggle}
        >
          <CloseIcon sx={{ color: "white" }}></CloseIcon>
        </IconButton>
      </div>
      <div>
        <p className="DrawerButtons">Home</p>
        <p className="DrawerButtons">Features</p>
        <p className="DrawerButtons">Quickstart Guides</p>
        <p className="DrawerButtons">About Us</p>
        <p className="DrawerButtons">Contact Us</p>
      </div>
    </div>
  );

  return (
    <>
      <div>
        <nav className="NavMain">
          <Toolbar className="Toolbar" sx={{margin: {sm: "0px 24px"}}}>
            <div className="LogoBox">
              <GplanIconBlue />
              <p className="NavLogoText">GPLAN</p>
            </div>
            <Box
            className="NavButtonBox"
              sx={{
                display: { xs: "none", sm: "flex" }
              }}
            >
              <p className="NavButtons">Home</p>
              <p className="NavButtons">Features</p>
              <p className="NavButtons">Quickstart Guides</p>
              <p className="NavButtons">About Us</p>
              <p className="NavButtons">Contact Us</p>
              <button className="NavLoginButton">Login</button>
            </Box>
            <IconButton
              aria-label="open drawer"
              size="large"
              sx={{ display: { sm: "none" }}}
              onClick={handleDrawerToggle}
            >
              <MenuIcon sx={{ color: "#1C4C82" }}></MenuIcon>
            </IconButton>
          </Toolbar>
        </nav>
        <SwipeableDrawer
          anchor="top"
          open={toggler}
          onOpen={handleDrawerToggle}
          onClose={handleDrawerToggle}
        >
          {drawer}
        </SwipeableDrawer>
      </div>
    </>
  );
}

export default Navbar;
