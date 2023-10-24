import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import loginBG from "../public/loginBG.png";
import axios from 'axios';
// import googleLogo from "../public/googleLogo.png";
// import fbLogo from "../public/fbLogo.png";

function LoginPage() {
  
  const navigate = useNavigate();

  interface FormValues {
    username?: string;
    password?: string;
  }

  const [isVisible, setVisibility] = useState<Boolean>(false)

  const [formValues, setFormValues] = useState<FormValues>({username:"", password:""});

  const handleChangeVisibility = () => {
    setVisibility(!isVisible)
  }

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleOnSubmit = () => {
    // api call with form data stored in an array name FormValue with username and password as data
    axios.post('http://139.59.1.248/auth/token/', {
            "username": formValues.username,
            "password": formValues.password
        }).then((resp) => {
            localStorage.setItem('access_token', resp.data.access);
            localStorage.setItem('refresh_token', resp.data.refresh);
            console.log("login successful");
            navigate("/dashboard");
            // return redirectDocument("/dashboard");
            // <Navigate to='/dashboard' replace = {true} />
        })
        .catch((error) => {
          navigate("/login");
          setFormValues({username:"", password:""})
        })
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          background: `url(${loginBG}) , lightgray 50% / cover no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            padding: "44px 44px 49.5px 44px",
            flexDirection: "column",
            alignItems: "center",
            gap: "33px",
            borderRadius: "8px",
            background: "#FFF",
            boxShadow: "0px 4.4px 11px 0px rgba(138, 142, 148, 0.05)",
          }}
        >
          <Box sx={{ height: "91.204px", width: "105.313px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="110"
              viewBox="0 0 96 110"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.0009 2L93.6018 28.3283V80.9839L48.0009 107.313L2.39819 80.9839V28.3283L48.0009 2Z"
                stroke="#1C4C82"
                strokeWidth="3.59941"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.5623 69.9565L65.9584 96.2337"
                stroke="#1C4C82"
                strokeWidth="3.78886"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M74.6055 69.9565L29.2772 96.2336"
                stroke="#1C4C82"
                strokeWidth="3.81813"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M47.9983 2V54.6563M47.9983 54.6563L2.94873 80.8096M47.9983 54.6563L93.6012 80.6264"
                stroke="#1C4C82"
                strokeWidth="3.59941"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.2759 18.6323L21.3536 50.033L21.3345 69.6664"
                stroke="#1C4C82"
                strokeWidth="3.78886"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M48.2749 3.3501L74.6075 69.9564"
                stroke="#1C4C82"
                strokeWidth="3.78886"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5.5px",
            }}
          >
            <Typography
              sx={{
                display: "inline",
                color: "#282828",
                fontFeatureSettings: `'clig' off, 'liga' off`,
                fontFamily: "Poppins",
                fontSize: "26.4px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "39.6px" /* 150% */,
              }}
            >
              Jump Right Back into
              <Typography
                component="span"
                sx={{
                  color: "#1C4C82",
                  fontFeatureSettings: `'clig' off, 'liga' off`,
                  fontFamily: "Poppins",
                  fontSize: "26.4px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "39.6px",
                }}
              >
                {" "}
                GPlan
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "#949CA9",
                /* SubText */
                fontFamily: "Poppins",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px" /* 150% */,
              }}
            >
              Login To Your Account
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "22px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "506px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "5.5px",
              }}
            >
              <Typography
                sx={{
                  alignSelf: "stretch",
                  color: "#282828",

                  /* SubText */
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Username
              </Typography>
              <TextField
                fullWidth
                size="small"
                required
                InputLabelProps={{
                  shrink: false,
                  style: {
                    color: "#949CA9",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "24px",
                  },
                }}
                label={formValues.username===""?"Enter your username":""}
                name="username"
                value={formValues.username}
                onChange={handleTextFieldChange}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "5.5px",
              }}
            >
              <Typography
                sx={{
                  color: "#282828",

                  /* SubText */
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Password
              </Typography>
              <TextField

                fullWidth
                required
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {isVisible?<VisibilityOffOutlinedIcon onClick={handleChangeVisibility}
                  sx={{
                    "&:hover": {
                      cursor: "pointer"
                    }}
                  }/>:<RemoveRedEyeOutlinedIcon onClick={handleChangeVisibility}
                  sx={{
                    "&:hover": {
                      cursor: "pointer"
                    }}
                  }/>}
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: false,
                  style: {
                    color: "#949CA9",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "24px",
                  },
                }}
                type={isVisible?"text":'password'}
                label={formValues.password===""?`${"Enter your password"}`:""}
                name="password"
                value={formValues.password}
                onChange={handleTextFieldChange}
              />
            </Box>
            <Button
              fullWidth
              size="large"
              onClick={handleOnSubmit}
              variant="contained"
              sx={{
                backgroundColor: "#1C4C82",
              }} /* sx={{textTransform: "lowercase !important"}} */
            >
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "Poppins",
                  fontSize: "17.6px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "26.4px",
                }}
              >
                Login
              </Typography>
            </Button>
            {/*
            <Box
              sx={{
                width: "506px",
                display: "flex",
                alignItems: "flex-start",
                gap: "22px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "242px",
                  padding: "16.5px",
                  alignItems: "center",
                  gap: "11px",
                  borderRadius: "8px",
                  border: "1.1px solid #E8E9EA",
                  background: "#FFF",
                }}
              >
                <img src={`${googleLogo}`} alt="" height="22px" width="22px" />
                <Typography
                  sx={{
                    flex: "1 0 0",
                    color: "#282828",
                    fontFeatureSettings: `'clig' off, 'liga' off`,
                   
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "22px",
                  }}
                >
                  Login with Google
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "242px",
                  padding: "16.5px",
                  alignItems: "center",
                  gap: "11px",
                  borderRadius: "8px",
                  border: "1.1px solid #E8E9EA",
                  background: "#FFF",
                }}
              >
                <img src={`${fbLogo}`} alt="" height="22px" width="22px" />
                <Typography
                  sx={{
                    flex: "1 0 0",
                    color: "#282828",
                    fontFeatureSettings: `'clig' off, 'liga' off`,
                  
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "22px",
                  }}
                >
                  Login with Facebook
                </Typography>
              </Box>
                </Box> */}
          </Box>
          <Typography
            sx={{
              color: "#282828",
              /* SubText */
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            {" "}
            New to GPlan?{" "}
            <Link to="/signup">
            <Typography
              component="span"
              sx={{
                color: "#009EF7",

                /* SubText */
                fontFamily: "Poppins",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px",
              }}
            >
              Get Started</Typography></Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default LoginPage;
