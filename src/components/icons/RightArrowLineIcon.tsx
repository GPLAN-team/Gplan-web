import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

function RightArrowLineIcon(props: { color: String }) {
  return (
    <SvgIcon sx={{ color: `${props.color}` }}>
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
    </SvgIcon>
  );
}

export default RightArrowLineIcon;
