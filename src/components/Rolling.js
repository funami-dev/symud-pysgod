import * as React from "react";
import { useSpring, animated } from "react-spring";

export const Rolling = () => {
  const props = useSpring({
    number: 64,
    from: { number: 0 },
    config: { mass: 1, tension: 180, friction: 12 }
  });
  return (
    <animated.span
      style={{
        background: "#000",
        borderRadius: 100,
        width: props.number,
        height: props.number
      }}
    ></animated.span>
  );
};
