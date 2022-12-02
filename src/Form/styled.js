import styled from "styled-components";

export const StyledForm = styled.form`


`;

export const StyledInput = styled.input`
border: 2px solid ${({ theme }) => theme.color.mercury};
font-weight: 300;
border-radius: 3px;

::placeholder {
    color: ${({ theme }) => theme.color.mineshaft};
}
`;

export const LabelText = styled.label`
font-family: 'Rubik', sans-serif;
font-weight: 600;
font-size: 20px;
`;

export const FormButton = styled.button`

`;