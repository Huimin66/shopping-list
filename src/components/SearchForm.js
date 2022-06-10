import styled from "styled-components";

function SearchForm({ onInputChange }) {
  return (
    <Form aria-labelledby="formHeader" autoComplete="off">
      <StyledLabel id="formHeader">What do you want to buy?</StyledLabel>
      <Input onChange={(event) => onInputChange(event.target.value)}></Input>
    </Form>
  );
}

export default SearchForm;

const Form = styled.form`
  width: 90%;
  display: grid;
  gap: 10px;
`;

const Input = styled.input`
  height: 3rem;
  font-size: 2rem;
  border-radius: 8px;
`;
const StyledLabel = styled.h1`
  height: 60px;
  color: #dfdfe7;
  font-size: 3rem;
`;
