import styled from "styled-components";

export const StyledHeading = styled.h1`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 16px;
`;

export const StyledParagraph = styled.p`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
`;

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  padding: 200px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    text-align: center;
  }
`;
