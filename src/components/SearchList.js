import styled from "styled-components";

function SearchList({ searchItems, onClickSearchItem, inputValue }) {
  return (
    <>
      <h2>Find the following fruits:</h2>
      <ShoppingListContainer>
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
                {item.name.en}
              </ItemButton>
            );
          })
        )}
      </ShoppingListContainer>
    </>
  );
}

export default SearchList;

const ShoppingListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ItemButton = styled.button`
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: lightblue;
`;
const StyledP = styled.p`
  color: pink;
`;
