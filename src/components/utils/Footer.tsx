import {
  Box,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import bgL1 from "../../public/bgL1.png";

function Footer() {
  const [Email, setEmail] = useState("");
  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#1C4C82",
          backgroundImage: `url(${bgL1}) , url(${bgL1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center, 970px -300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "15px",
            mt: "82px",
          }}
        >
          <Box
            sx={{
              height: { xs: "38.5px", sm: "62px" },
              width: { xs: "38.5px", sm: "62px" },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 62 62"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.0278 6.62256L52.6143 19.0859V44.0121L31.0278 56.4756L9.44043 44.0121V19.0859L31.0278 6.62256Z"
                stroke="white"
                stroke-width="3.125"
                stroke-miterlimit="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.5098 38.7915L39.526 51.2306"
                stroke="white"
                stroke-width="3.125"
                stroke-miterlimit="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M43.6123 38.7695L22.1838 51.2522"
                stroke="white"
                stroke-width="3.125"
                stroke-miterlimit="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M31.0247 6.62256V31.5491M31.0247 31.5491L9.69922 43.9296M31.0247 31.5491L52.6122 43.8428"
                stroke="white"
                stroke-width="3.125"
                stroke-miterlimit="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.3779 14.4956L18.4147 29.3601L18.4057 38.6542"
                stroke="white"
                stroke-width="3.125"
                stroke-miterlimit="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M31.1602 7.26172L43.6254 38.7919"
                stroke="white"
                stroke-width="3.125"
                stroke-miterlimit="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
          <Typography
            sx={{
              color: "#FFF",
              leadingTrim: "both",
              textEdge: "cap",
              fontFamily: "Barlow Semi Condensed",
              fontSize: { xs: "24px", sm: "37.5px" },
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}
          >
            GPLAN
          </Typography>
        </Box>
        <Box sx={{ mt: "58px" }}>
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
            CREATE SOMETHING NEW TODAY!
          </Typography>
        </Box>
        <Box
          sx={{
            border: "none",
            mt: "32px",
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
        </Box>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "flex-start",
            gap: "53px",
            mt: "128px",
            mb: "48px",
          }}
        >
          <Link
            href="#"
            sx={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: { xs: "10.2px", sm: "16px" },
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Instagram
          </Link>
          <Link
            href="#"
            sx={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: { xs: "10.2px", sm: "16px" },
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Youtube
          </Link>
          <Link
            href="#"
            sx={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: { xs: "10.2px", sm: "16px" },
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            sx={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: { xs: "10.2px", sm: "16px" },
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Contact Us
          </Link>
        </Box>
      </Box>
      
    </>
  );
}

export default Footer;
