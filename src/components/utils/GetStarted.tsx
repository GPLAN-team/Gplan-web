import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import RightArrowBlueBG from "../../public/right-arrow-blue-bg.svg";

const GetStarted = () => {
  const [Email, setEmail] = useState("");

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };

  const handleOnClick = () => {
    //BackEnd Call
  }

  return (
    <div className="get-started-outer-div">
      <p className="get-started-heading">Get Started with GPLAN</p>
      <div className="text-field-div">
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
      </div>
    </div>
  );
};

export default GetStarted;
