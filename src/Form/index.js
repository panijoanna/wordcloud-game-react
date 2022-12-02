import { StyledForm, LabelText, StyledInput, FormButton } from "./styled";

const Form = () => {
  return (
    <StyledForm>
      <LabelText>
        Wordcloud game
        </LabelText>
        <StyledInput
          required
          type="text"
          name="nickname"
          minLength="3"
          maxLength="12"
          placeholder="Enter your nickname here..."
        />
        <FormButton>play</FormButton>
    </StyledForm>
  );
};

export default Form;
