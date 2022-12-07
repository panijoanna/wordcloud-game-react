import { CloudContainer, CloudButton, MainContainer, Heading } from "./styled";
import { words } from "../words/words";
import { useState } from "react";

const Cloud = () => {
  return (
    <MainContainer>
      <Heading>Select animals</Heading>
      <CloudContainer></CloudContainer>
      <CloudButton>Check answers</CloudButton>
    </MainContainer>
  );
};

export default Cloud;