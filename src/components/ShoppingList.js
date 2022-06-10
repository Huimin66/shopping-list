import styled from "styled-components";

function ShoppingList({ shopItems, onClickShopItem }) {
  return (
    <>
      <h2>Shopping List</h2>
      <ShoppingListContainer>
        {shopItems.map((item) => {
          return (
            <ItemButton
              key={item._id}
              onClick={() => onClickShopItem(item._id)}
            >
              {item.name.en}
            </ItemButton>
          );
        })}
      </ShoppingListContainer>
    </>
  );
}

export default ShoppingList;

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
