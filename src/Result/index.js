import { useState } from "react";
import { StyledParagraph, StyledHeading, ScoreContainer } from "./styled";

const Result = () => {
  const [score, setScore] = useState(0);

  return (
    <ScoreContainer>
      <StyledHeading>
        Congratulations, {localStorage.getItem("name")}!
      </StyledHeading>
      <StyledParagraph>Your score:</StyledParagraph>
    </ScoreContainer>
  );
};

export default Result;
