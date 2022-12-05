import {
  StyledForm,
  LabelText,
  StyledInput,
  FormButton,
  Container,
} from "./styled";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

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
        <FormButton 
          onClick={handleClick}
          onSubmit={onFormSubmit}>
            play
        </FormButton>
      </StyledForm>
    </Container>
  );
};

export default Form;
