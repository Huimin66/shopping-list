import styled from "styled-components";

function SearchForm({ onInputChange, language }) {
  return (
    <Form aria-labelledby="formHeader" autoComplete="off">
      {language === "en" ? (
        <h1 id="formHeader">What do you want to buy?</h1>
      ) : (
        <h1 id="formHeader">Was kaufst du heute ein?</h1>
      )}

      <Input onChange={(event) => onInputChange(event.target.value)}></Input>
    </Form>
  );
}

export default SearchForm;

const Form = styled.form`
  width: 100%;
  display: grid;
`;

const Input = styled.input`
  height: 2rem;
  padding: 0.5rem;
`;
