import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

function RightArrowIcon() {
  return (
    <SvgIcon sx={{ "&:hover": { color: "red" } }}>
      {/* credit: plus icon from https://heroicons.com/ */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        color="black"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 18L15 12L9 6"
        />
      </svg>
    </SvgIcon>
  );
}

export default RightArrowIcon;
