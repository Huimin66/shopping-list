import styled from "styled-components";

function SearchList({ searchItems, onClickSearchItem, inputValue, language }) {
  return !inputValue ? (
    <></>
  ) : (
    <SearchListContainer>
      {inputValue ? (
        language === "en" ? (
          <h2>Search Result:</h2>
        ) : (
          <h2>Suchergebnis:</h2>
        )
      ) : (
        <></>
      )}

      <SearchItemContainer>
        {inputValue && searchItems.length === 0 ? (
          language === "en" ? (
            <StyledP>
              We could not find what you were looking for.For that we are truly
              sorry.
            </StyledP>
          ) : (
            <StyledP>
              Wir konnten nicht finden, wonach Sie gesucht haben. Tut mir leid.
            </StyledP>
          )
        ) : (
          searchItems.map((item) => {
            return (
              <ItemButton
                key={item._id}
                onClick={() => onClickSearchItem(item)}
              >
                {language === "en" ? item.name.en : item.name.de}
              </ItemButton>
            );
          })
        )}
      </SearchItemContainer>
    </SearchListContainer>
  );
}

export default SearchList;

const SearchListContainer = styled.div`
  width: 100%;
`;

const SearchItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ItemButton = styled.button`
  padding: 0.5rem;
  background-color: lightblue;
`;
const StyledP = styled.p`
  color: black;
  font-size: 1.5rem;
`;
