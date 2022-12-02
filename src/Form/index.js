import { StyledForm, LabelText } from "./styled";

const Form = () => {
  return (
    <StyledForm>
      <LabelText>
        Wordcloud game
        </LabelText>
        <input
          required
          type="text"
          name="nickname"
          minLength="3"
          maxLength="12"
          placeholder="Enter your nickname here..."
        />
        <button>play</button>
    </StyledForm>
  );
};

export default Form;
