import { useState } from "react";
import { ScoreContainer, ScoreParagraph } from "./styled";

const Result = () => {
  const [score, setScore] = useState(0);

  return (
    <ScoreContainer>
      <ScoreParagraph>Congratulations, {localStorage.getItem("name")}! Your score:</ScoreParagraph>
    </ScoreContainer>
  );
};

export default Result;