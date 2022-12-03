import {
  StyledForm,
  LabelText,
  StyledInput,
  FormButton,
  Container,
} from "./styled";

const Form = () => {
  return (
    <Container>
      <StyledForm>
        <LabelText>Wordcloud game</LabelText>
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
    </Container>
  );
};

export default Form;
