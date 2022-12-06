import styled from "styled-components";

export const CloudContainer = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 300px;
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    width: 100%;
  }
`;

export const MainContainer = styled.div`

`;
