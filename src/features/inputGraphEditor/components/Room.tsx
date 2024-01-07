import React from "react";
import { Chip } from "@mui/material";
import styled from "styled-components";

const handleDelete = () => {}

const handleAdd = () => {}

const ChipDiv = styled.div`
  .MuiChip-root {
    background: #f2f7fc;
    padding: 0px 8px;
    height: auto;
  }

  .MuiChip-label {
    font-size: 12px;
    color: #1c4c82;
  }

  .MuiSvgIcon-root {
    width: 14px;
    color: #ed4337 !important;
  }
`;

const Room = (props: any) => {
  return (
    <ChipDiv>
      {props.isAdded && (
        <Chip label={props.name} variant="outlined" onDelete={handleDelete} />
      )}
      {!props.isAdded && (
        <Chip
          label={props.name}
          variant="outlined"
          onDelete={handleAdd}
          deleteIcon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_691_8381)">
                <rect
                  x="0.927612"
                  y="10.1481"
                  width="13.3706"
                  height="13.3971"
                  rx="6.68532"
                  transform="rotate(-45 0.927612 10.1481)"
                  fill="#219653"
                />
                <path
                  d="M10.3877 6.21384L10.3955 14.1003"
                  stroke="#F2F7FC"
                  stroke-width="1.00379"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.44836 10.1532L14.3349 10.161"
                  stroke="#F2F7FC"
                  stroke-width="1.00379"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_691_8381">
                  <rect
                    x="0.927612"
                    y="10.1481"
                    width="13.3706"
                    height="13.3971"
                    rx="6.68532"
                    transform="rotate(-45 0.927612 10.1481)"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          }
        />
      )}
    </ChipDiv>
  );
};

export default Room;
