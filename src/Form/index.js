import {
  StyledForm,
  LabelText,
  StyledInput,
  FormButton,
  Container,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <StyledForm onSubmit={onFormSubmit}>
        <LabelText>Wordcloud game</LabelText>
        <StyledInput
          required
          autoComplete="off"
          value={name}
          onChange={({ target }) => setName(target.value)}
          ref={inputRef}
          type="text"
          name="nickname"
          minLength="3"
          maxLength="12"
          placeholder="Enter your nickname here..."
        />
        <FormButton onClick={() => navigate("/cloud")}>play</FormButton>
      </StyledForm>
    </Container>
  );
};

export default Form;
