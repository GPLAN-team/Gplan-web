import { Box, Fade, Slide } from "@mui/material";
import React from "react";
import landingBG from "../../public/landingBG.png";
import { useInView } from "react-intersection-observer";
import RightArrowLineIcon from "../icons/RightArrowLineIcon";
import PhoneBGWave from "../icons/PhoneBGWave";
import GuidedVideos from "./GuidedVideos";
import OurStory from "./OurStory";
import DemoVideo from "./DemoVideo";

function HeroSection() {
  const { ref: imageRef, inView: imageIsVisible } = useInView({
    triggerOnce: true,
  });

  const containerRef = React.useRef<HTMLDivElement>(null);
  const containerRefMobile = React.useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    //Redirect to desired page
  };

  return (
    <>
      <div ref={imageRef} className="landing-background">
        <img src={landingBG} alt="landing-background" />
      </div>
      <Box
        ref={containerRef}
        className="outer-hero-typography"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Fade
          in={imageIsVisible}
          timeout={1000}
          easing="ease-out"
          style={{
            transitionDelay: imageIsVisible ? "150ms" : "0ms",
          }}
        >
          <div>
            <Slide
              in={imageIsVisible}
              direction="up"
              easing="ease-out"
              timeout={500}
              container={containerRef.current}
              style={{
                transitionDelay: imageIsVisible ? "150ms" : "0ms",
              }}
            >
              <div>
                <p className="hero-subtext">A Generative Floor Plan Design</p>
                <p className="hero-maintext-black">The Future of</p>
                <p className="hero-maintext-black">
                  <span className="hero-maintext-blue">
                    Early Stage Floor Plan
                  </span>{" "}
                  Design
                </p>
                <button onClick={handleGetStarted} className="hero-button">
                  Get Started <RightArrowLineIcon color="white" />
                </button>
              </div>
            </Slide>
          </div>
        </Fade>
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <div ref={containerRefMobile} className="outer-hero-mobile-typography">
          <Fade
            in={imageIsVisible}
            timeout={1000}
            easing="ease-out"
            style={{
              transitionDelay: imageIsVisible ? "150ms" : "0ms",
            }}
          >
            <div>
              <Slide
                in={imageIsVisible}
                direction="up"
                easing="ease-out"
                timeout={500}
                container={containerRefMobile.current}
                style={{
                  transitionDelay: imageIsVisible ? "150ms" : "0ms",
                }}
              >
                <div>
                  <p className="hero-mobile-maintext-black">The Future of</p>
                  <p className="hero-mobile-maintext-blue">Early Stage</p>
                  <p className="hero-mobile-maintext-blue">Floor Plan</p>
                  <p className="hero-mobile-maintext-black">Design</p>
                </div>
              </Slide>
            </div>
          </Fade>
        </div>
        <PhoneBGWave />
        <div className="mobile-hero-lower-div">
          <p className="mobile-hero-subtext">
            A Generative Floor Plan Designer
          </p>
          <button className="mobile-hero-button">
            Get Started <RightArrowLineIcon color="white" />
          </button>
        </div>
      </Box>
      <DemoVideo/>
      <GuidedVideos/>
      <OurStory/>
    </>
  );
}

export default HeroSection;
