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

  const [activeWords, setActiveWords] = useState(new Set());

  const setActiveItem = (word) => {
    if (activeWords.has(word)) {
      activeWords.delete(word);
    } else {
      activeWords.add(word);
    }

    setActiveWords(new Set(activeWords));
  };

  return (
    <MainContainer>
      <Heading>{words[currentQuestion].question}</Heading>
      <CloudContainer>
        {words[currentQuestion].all_words.map((word, index) => (
          <Item
            key={index}
            onClick={() => setActiveItem(word)}
            active={activeWords.has(word)}
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
