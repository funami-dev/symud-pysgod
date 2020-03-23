import React from "react";
import styled from "styled-components";

import { Dice } from "./components/";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const App = () => {
  return (
    <Wrapper>
      <Dice sides={6} />
      <Dice sides={6} />
    </Wrapper>
  );
};
