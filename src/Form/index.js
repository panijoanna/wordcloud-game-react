import { StyledForm } from "./styled";

const Form = () => {
  return (
    <StyledForm>
      <label>
        Wordcloud game
        <input
          required
          type="text"
          name="nickname"
          minLength="3"
          maxLength="12"
          placeholder="Enter your nickname here..."
        />
        <button>play</button>
      </label>
    </StyledForm>
  );
};

export default Form;
