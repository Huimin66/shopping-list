import styled from "styled-components";

function LanguageOption({ onClickLanguage }) {
  return (
    <LanguageContainer>
      <German onClick={() => onClickLanguage("de")}>DE</German>
      <English onClick={() => onClickLanguage("en")}>EN</English>
    </LanguageContainer>
  );
}

export default LanguageOption;

const LanguageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
`;

const German = styled.button`
  padding: 0.2rem;
`;

const English = styled.button`
  padding: 0.2rem;
`;
