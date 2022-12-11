import { useState } from "react";
import { ScoreContainer, StyledHeading } from "./styled";

const Result = () => {
  const [score, setScore] = useState(0);

  return (
    <ScoreContainer>
      <StyledHeading>Congratulations, {localStorage.getItem("name")}!</StyledHeading> 
      Your score:</ScoreParagraph>
    </ScoreContainer>
  );
};

export default Result;