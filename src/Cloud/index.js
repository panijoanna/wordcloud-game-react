import {
  CloudContainer,
  CloudButton,
  MainContainer,
  Heading,
  Item,
} from "./styled";
import { words } from "../words/words";
import { useState } from "react";

const Cloud = () => {
  const [currentQuestion, setCurrentQuestion] = useState(
    Math.floor(Math.random() * words.length)
  );

  const [activeWord, setActiveWord] = useState(null);

  return (
    <MainContainer>
      <Heading>{words[currentQuestion].question}</Heading>
      <CloudContainer>
        {words[currentQuestion].all_words.map((word, index) => (
          <Item
            key={index}
            onClick={() => setActiveWord(word)}
            active={word === activeWord}
          >
            {word}
          </Item>
        ))}
        ;
      </CloudContainer>
      <CloudButton>Check answers</CloudButton>
    </MainContainer>
  );
};

export default Cloud;
