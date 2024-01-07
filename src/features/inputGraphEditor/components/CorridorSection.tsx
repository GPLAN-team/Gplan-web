import { Box, Typography } from "@mui/material";
import React from "react";
import Room from "./Room";
import { CustomDiv } from "./Sidebar";

let added = [{'name': 'GuestRoom', 'id': '0'},{'name': 'Kitchen', 'id': '1'},{'name': 'Master Bedroom', 'id': '2'},];
let rem = [{'name': 'Pantry', 'id': '3'},{'name': 'Hall', 'id': '4'},{'name': 'Dining', 'id': '5'},{'name': 'Master Bedroom', 'id': '6'},];


function CorridorSection() {
  return (
    <CustomDiv>
      <Box className="container corridor">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              padding: "8px",
              background: "#f2f2f2",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <svg
              className="icon"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="3.85714" fill="#1C4C82" />
              <path
                d="M7.71436 27.9643V8.03568C7.71436 7.68064 8.00217 7.39282 8.35721 7.39282H12.8572C13.2123 7.39282 13.5001 7.68064 13.5001 8.03568V17.6785C13.5001 18.0336 13.7879 18.3214 14.1429 18.3214H15.4286C15.7837 18.3214 16.0715 18.0336 16.0715 17.6785V12.8571C16.0715 12.5021 16.3593 12.2143 16.7144 12.2143H21.2144C21.5694 12.2143 21.8572 12.5021 21.8572 12.8571V20.8928C21.8572 21.2479 22.145 21.5357 22.5001 21.5357H28.2858C28.6408 21.5357 28.9286 21.8235 28.9286 22.1785V27.9643C28.9286 28.3193 28.6408 28.6071 28.2858 28.6071H8.35721C8.00217 28.6071 7.71436 28.3193 7.71436 27.9643Z"
                fill="white"
                stroke="white"
                strokeWidth="0.642857"
              />
            </svg>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography className="header">Irregular Shape</Typography>
              <p>Construct a floor plan of any rectilinear shape</p>
            </Box>

            <svg
              className="arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="#1C4C82"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>

          <div className="setting header">Selection Setting</div>
        </Box>

        <div className="line"></div>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "0 16px",
          }}
        >
          {/* Corridor Header */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "0px",
            }}
          >
            <div className="head">Corridor</div>
            <p className="para">
              Add a central corridor connecting these different rooms
            </p>
          </Box>

          {/* Corridor InputBox */}
          <Box
            sx={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1.5px solid #E0E0E0",
              gap: "8px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              maxHeight: "70px",
              overflowY: "scroll",
            }}
          >
            {added.map((item) => <Room name={item.name} isAdded />)}
          </Box>

          {/* Corridor Options */}
          <Box
            sx={{
              width: "100%",
              padding: "0 12px",
              borderRadius: "8px",
              gap: "8px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              maxHeight: "60px",
              overflowY: 'scroll'
            }}
          >
            {rem.map(item => <Room name={item.name} />)}
          </Box>
        </Box>
      </Box>
    </CustomDiv>
  );
}

export default CorridorSection;
