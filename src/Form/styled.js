import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledInput = styled.input`
  border: 2px solid ${({ theme }) => theme.color.mercury};
  font-weight: 300;
  border-radius: 2px;
  max-width: 300px;
  padding: 8px 80px 8px 5px;
  text-align: left;
  margin: 10px;

  ::placeholder {
    color: ${({ theme }) => theme.color.mineshaft};
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    width: 100%;
    padding: 5px;
  }
`;

export const LabelText = styled.label`
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  font-size: 30px;
`;

export const FormButton = styled.button`
  font-family: "Rubik", sans-serif;
  border-radius: 4px;
  padding: 5px 20px;
  background-color: ${({ theme }) => theme.color.white};
  border: 2px solid ${({ theme }) => theme.color.perano};
  color: ${({ theme }) => theme.color.perano};

  &:hover {
    filter: brightness(110%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    width: 100%;
  }
`;
