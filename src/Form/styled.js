import styled from "styled-components";

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
margin: 40px;
`;

export const StyledInput = styled.input`
  border: 2px solid ${({ theme }) => theme.color.mercury};
  font-weight: 300;
  border-radius: 2px;


  ::placeholder {
    color: ${({ theme }) => theme.color.mineshaft};
  }
`;

export const LabelText = styled.label`
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  font-size: 20px;
`;

export const FormButton = styled.button`
  font-family: "Rubik", sans-serif;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  border: 2px solid ${({ theme }) => theme.color.perano};
  color: ${({ theme }) => theme.color.perano};
`;
