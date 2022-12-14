import {
  CloudContainer,
  CloudButton,
  MainContainer,
  Heading,
  Item,
  RedParagraph,
  GreenParagraph,
} from "./styled";
import { words } from "../words/words";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cloud = () => {
  const [currentQuestion, setCurrentQuestion] = useState(
    Math.floor(Math.random() * words.length)
  );

  const [activeWords, setActiveWords] = useState(new Set());
  const [answer, setAnswer] = useState("");
  const navigates = useNavigate();

  const showAnswer = () => {
    for (let word of activeWords.values()) {
      if (words[currentQuestion].goodWords.includes(word)) {
        setAnswer(<GreenParagraph>Good</GreenParagraph>);
      } else {
        setAnswer(<RedParagraph>Bad</RedParagraph>);
      }
    }
  };

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
        {words[currentQuestion].allWords.map((word, index) => (
          <Item
            key={index}
            onClick={() => setActiveItem(word)}
            active={activeWords.has(word)}
          >
            {word}
            {answer}
          </Item>
        ))}
      </CloudContainer>
      <CloudButton
        onClick={() => {
          showAnswer();
          navigates("/result");
        }}
      >
        Check answers
      </CloudButton>
    </MainContainer>
  );
};

export default Cloud;
