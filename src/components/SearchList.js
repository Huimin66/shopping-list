import styled from "styled-components";

function SearchList({ searchItems, onClickSearchItem, inputValue, language }) {
  return (
    <SearchListContainer>
      {language === "en" ? <h2>Search Result:</h2> : <h2>Suchergebnis:</h2>}

      <SearchItemContainer>
        {inputValue && searchItems.length === 0 ? (
          <StyledP>
            We could not find what you were looking for.For that we are truly
            sorry.
          </StyledP>
        ) : (
          searchItems.map((item) => {
            return (
              <ItemButton
                key={item._id}
                onClick={() => onClickSearchItem(item._id)}
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
  color: pink;
  font-size: 1.5rem;
`;
