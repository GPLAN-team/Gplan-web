import { Box } from "@mui/material";
import React from "react";
import Room from "./Room";
import { CustomDiv } from "./Sidebar";
import Dropdown from "./Dropdown";

let added = [{'name': 'GuestRoom', 'id': '0'},{'name': 'Kitchen', 'id': '1'},{'name': 'Master Bedroom', 'id': '2'},];
let rem = [{'name': 'Pantry', 'id': '3'},{'name': 'Hall', 'id': '4'},{'name': 'Dining', 'id': '5'},{'name': 'Master Bedroom', 'id': '6'},];

function CorridorSection() {
  return (
    <CustomDiv>
      <Box className="container corridor">
        <Dropdown />

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
            {added.map(item => <Room key={item.id} name={item.name} isAdded />)}
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
            {rem.map(item => <Room key={item.id} name={item.name} />)}
          </Box>
        </Box>
      </Box>
    </CustomDiv>
  );
}

export default CorridorSection;
