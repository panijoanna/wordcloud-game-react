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
          minlength="3"
          maxlength="12"
          placeholder="Enter your nickname here..."
        />
        <button>play</button>
      </label>
    </StyledForm>
  );
};

export default Form;
