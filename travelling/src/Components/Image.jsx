import React from "react";
import { useSpring, animated } from "react-spring";

import travel from "../travel.svg";
const Image = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
    delay: 1000
  });

  return (
    <animated.div style={props}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          style={{
            width: "400px",
            height: "522px"
          }}
          src={travel}
          alt=""
        />
      </div>
    </animated.div>
  );
};

export default Image;
