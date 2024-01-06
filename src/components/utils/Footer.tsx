import {
  Box,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import GplanIconWhite from "../icons/GplanIconWhite";
import RightArrowBlueBG from "../../public/right-arrow-blue-bg.svg";

function Footer() {
  const [Email, setEmail] = useState("");
  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };

  const handleOnClick = () => {
    //BackEnd Call
  };

  return (
    <>
      <div className="footer-outer-div">
        <div className="footer-logo-box">
          <GplanIconWhite />
          <p className="footer-logo-text">GPLAN</p>
        </div>
        <Box sx={{ display: { xs: "none", sm: "block" }, marginTop: "64px" }}>
          <p className="footer-heading">CREATE SOMETHING NEW TODAY!</p>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" }, marginTop: "32px" }}>
          <p className="footer-heading" style={{ fontSize: "36px" }}>
            CREATE SOMETHING NEW TODAY!
          </p>
        </Box>
        <Box
          className="text-field-div"
          sx={{ width: { xs: "340px", sm: "625px" } }}
        >
          <TextField
            sx={{
              backgroundColor: "white",
              padding: "4px",
              textAlign: "center",
              "& fieldset": { border: "none" },
            }}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img
                    onClick={handleOnClick}
                    className="text-field-img"
                    src={RightArrowBlueBG}
                    alt="right-arrow-blue-bg"
                  />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              shrink: false,
              className: "input-label-props",
            }}
            type="text"
            label={Email === "" ? "Email" : ""}
            name="Email"
            value={Email}
            onChange={handleEmailChange}
          />
        </Box>
        <Box
          className="footer-bottom-social-link-div"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Link href="#" style={{ textDecoration: "none" }}>
            <p className="footer-social-links">Instagram</p>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <p className="footer-social-links">Youtube</p>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <p className="footer-social-links">LinkedIn</p>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <p className="footer-social-links">Contact Us</p>
          </Link>
        </Box>
        <Box
          className="footer-bottom-social-link-div"
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <Link href="#" style={{ textDecoration: "none" }}>
            <p className="footer-social-links" style={{ fontSize: "10px" }}>
              Instagram
            </p>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <p className="footer-social-links" style={{ fontSize: "10px" }}>
              Youtube
            </p>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <p className="footer-social-links" style={{ fontSize: "10px" }}>
              LinkedIn
            </p>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <p className="footer-social-links" style={{ fontSize: "10px" }}>
              Contact Us
            </p>
          </Link>
        </Box>
      </div>
    </>
  );
}

export default Footer;
