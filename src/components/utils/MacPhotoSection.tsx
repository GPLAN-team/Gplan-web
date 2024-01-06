import React from "react";
import macImg from "../../public/mac.png";
import mac_node from "../../public/mac_node.png";
import plan from "../../public/Plan.png";
import lower_macbook from "../../public/lower-macbook.svg";
import upper_macbook from "../../public/upper-macbook.svg";
import lower_bg_wave from "../../public/lower-bg-wave.svg";
import upper_bg_wave from "../../public/upper-bg-wave.svg";
import { useInView } from "react-intersection-observer";
import FullBGWave from "../icons/FullBGWave";
import { Box } from "@mui/material";

function MacPhotoSection() {
  const { ref: imageRef, inView: imageIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });

  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <div className="mac-outer-div">
          <div className="mac-inner-div">
            <img
              id="img"
              ref={imageRef}
              src={macImg}
              alt="macIMg"
              width="90%"
              height="auto"
            />
            <div className="mac-screen-div">
              {imageIsVisible && (
                <img
                  id="macNode"
                  src={mac_node}
                  alt="macNode"
                  width="95%"
                  height="65%"
                />
              )}
            </div>
            <div className="mac-screen-div">
              {imageIsVisible && (
                <img
                  id="plan"
                  src={plan}
                  alt="macNode"
                  width="95%"
                  height="65%"
                />
              )}
            </div>
          </div>
          <div className="svg-div">
            <FullBGWave />
          </div>
        </div>
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <div className="mac-mobile-outer-div">
          <img
            className="mac-mobile-upper-image"
            src={upper_macbook}
            alt="upper-macbook"
          />
          <img
            className="mac-mobile-upper-wave-image"
            src={upper_bg_wave}
            alt="upper-bg-wave"
          />
          <img
            className="mac-mobile-lower-image"
            src={lower_macbook}
            alt="lower-macbook"
          />
          <img
            className="mac-mobile-lower-wave-image"
            src={lower_bg_wave}
            alt="lower-bg-wave"
          />
        </div>
      </Box>
    </>
  );
}

export default MacPhotoSection;
