import React from "react";
import styled from "styled-components";
import { useMachine } from "@xstate/react";
import { useSpring, animated } from "react-spring";

import { diceMachine } from "../states/index";
import { Rolling } from "./index";

const DiceWrapper = styled(animated.div)`
  width: 190px;
  height: 190px;
  display: flex;
  border-color: #000;
  border-style: dashed;
  justify-content: center;
  align-items: center;
  background: rgba(255, 0, 200, ${props => (1 / props.sides) * props.value});
  cursor: pointer;
`;

export const Dice = ({ sides }) => {
  const [value, setValue] = React.useState(sides);
  const [status, setStatus] = React.useState(false);
  const [currentDice, send] = useMachine(diceMachine);

  const styl = useSpring({
    borderRadius: status ? 64 : 12,
    borderWidth: status ? 3 : 22,
    margin: 13,
    from: { borderRadius: 0, borderWidth: 10, margin: 0 },
    config: { friction: 2, velocity: 6 }
  });

  const rollIt = () => Math.floor(Math.random() * (sides - 1 + 1) + 1);
  const _handleClick = () => {
    send("ROLLING");
    setStatus(!status);
    setTimeout(() => {
      send("LAY");
      setValue(rollIt());
    }, 1900);
  };

  return (
    <>
      <DiceWrapper
        style={styl}
        sides={sides}
        rolling={currentDice.value}
        currentstate={currentDice.value}
        value={value}
        onClick={() => _handleClick()}
      >
        {currentDice.value === "rolling" ? <Rolling /> : value}
      </DiceWrapper>
    </>
  );
};
