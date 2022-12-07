import { CloudContainer, CloudButton, MainContainer, Heading } from "./styled";
import { words } from "../words/words";
import { useState } from "react";

const Cloud = () => {

const [currentQuestion, setCurrentQuestion] = useState(
  Math.floor(Math.random() * words.length)
);

  return (
    <MainContainer>
      <Heading>{words[currentQuestion].question}</Heading>
      <CloudContainer>
        {words[currentQuestion].all_words.map((word, index) => (
          
        ))}
      </CloudContainer>
      <CloudButton>Check answers</CloudButton>
    </MainContainer>
  );
};

export default Cloud;
