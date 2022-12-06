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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px;
`;

export const Heading = styled.h1`
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  font-size: 16px;
`;

export const CloudButton = styled.button`
  font-family: "Rubik", sans-serif;
  border-radius: 4px;
  padding: 5px 20px;
  margin-top: 25px;
  background-color: ${({ theme }) => theme.color.white};
  border: 2px solid ${({ theme }) => theme.color.perano};
  color: ${({ theme }) => theme.color.perano};

  &:hover {
    filter: brightness(110%);
  }

  @media (max-wdith: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    width: 100%;
  }
`;
