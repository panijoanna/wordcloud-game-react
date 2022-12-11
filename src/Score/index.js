import { useState } from "react";
import { ScoreContainer, ScoreParagraph } from "./styled";

const Result = () => {
  const [score, setScore] = useState(0);

  return (
    <ScoreContainer>
      <ScoreParagraph>Congratulations,! Your score:</ScoreParagraph>
    </ScoreContainer>
  );
};

export default Result;