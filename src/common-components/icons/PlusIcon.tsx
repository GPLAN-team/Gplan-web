import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

function PlusIcon(props: { color: String }) {
  return (
    <SvgIcon sx={{ color: `${props.color}` }}>
      {/* credit: plus icon from https://heroicons.com/ */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        color="black"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12H19" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5V19" />
      </svg>
    </SvgIcon>
  );
}

export default PlusIcon;
