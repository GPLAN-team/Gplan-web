import React from "react";
import macImg from "../../public/mac.png";
import mac_node from "../../public/mac_node.png";
import plan from "../../public/Plan.png";
import { useInView } from "react-intersection-observer";
import '../../styles/home.css'

function Test2() {
  const { ref: imageRef, inView: imageIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });

  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            id="img"
            ref={imageRef}
            src={macImg}
            alt="macIMg"
            width="90%"
            height="auto"
          />
          <div
            style={{
              position: "absolute",
              top: "5%",
              overflow: "hidden",
              height: "77%",
              width:"auto"
            }}
          >{imageIsVisible && <img
            id="macNode"
            src={mac_node}
            alt="macNode"
            width="95%"
            height="65%"
            style={{
              marginLeft:"5%"
            }}
          />
          }
          </div>
          <div
            style={{
              position: "absolute",
              top: "5%",
              overflow: "hidden",
              height: "77%",
              width:"auto"
            }}
          >{imageIsVisible && <img
            id="plan"
            src={plan}
            alt="macNode"
            width="95%"
            height="65%"
            style={{
              marginLeft:"5%",
              marginTop:"190%"
            }}
          />
          }
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            top: "25%",
            zIndex: "-1",
          }}
        >
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
        </div>
      </div>
    </>
  );
}

export default Test2;
