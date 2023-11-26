import { Box, Fade, Slide } from "@mui/material";
import React from "react";
import macImg from "../../public/mac.png";
import mac_node from "../../public/mac_node.png";
import { useInView } from "react-intersection-observer";

const Test = () => {
  const { ref: imageRef, inView: imageIsVisible } = useInView({
    triggerOnce: true,
    threshold:0.9,
  });
  const containerRef = React.useRef<HTMLElement>(null);

  return (
    <>
      <Box id="parent" sx={{ position: "relative", mt:"-25%", paddingBottom:"10%" }}>
        <Box
          ref={imageRef}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <img src={macImg} alt="macIMg" width="90%" height="auto" />
        </Box>
        <Box sx={{ mt: "-43%", zIndex: 1 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1674 680"
            fill="none"
          >
            <path
              d="M-321 669C-277.488 469.617 -243.43 50.5 97 50.5C530 50.5 1054.11 413 1326 413C1587.5 413 1728.42 256.973 1729.5 211"
              stroke="#1C4C82"
              stroke-width="100"
            />
          </svg>
        </Box>
        <Fade in={imageIsVisible} timeout={500}>
        <Box
          ref={containerRef}
          sx={{
            overflow:"hidden",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            mt: "-42%",
            ml: "10%",
            paddingBottom: "6.5%",
            zIndex: 3,
          }}
        >
          <Slide
            timeout={500}
            in={imageIsVisible}
            container={containerRef.current}
            direction="up"
          >
            <img src={mac_node} alt="mac_node_IMG" width="55%" height="auto" />
          </Slide>
        </Box>
        </Fade>
      </Box>
    </>
  );
};

export default Test;
