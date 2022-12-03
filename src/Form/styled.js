import styled from "styled-components";

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Container = styled.div`
display: flex;
justify-content: center;
margin: 40px;
`;

export const StyledInput = styled.input`
  border: 2px solid ${({ theme }) => theme.color.mercury};
  font-weight: 300;
  border-radius: 2px;
  max-width: 300px;
  padding: 10px 100px 10px 5px;
  text-align: left;

  ::placeholder {
    color: ${({ theme }) => theme.color.mineshaft};
    font-size: 12px;
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
  max-width: 100px;
  background-color: ${({ theme }) => theme.color.white};
  border: 2px solid ${({ theme }) => theme.color.perano};
  color: ${({ theme }) => theme.color.perano};

  &:hover {
    filter: brightness(110%);
  }
`;
