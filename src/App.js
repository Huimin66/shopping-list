//import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SearchForm from "./components/SearchForm";
import SearchList from "./components/SearchList";
import ShoppingList from "./components/ShoppingList";
import { useEffect, useState } from "react";
/* import { useImmer } from "use-immer"; */

function App() {
  const [allItems, setAllItems] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [shopItems, setShopItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  /* load the data from API */
  useEffect(() => {
    fetch("https://fetch-me.vercel.app/api/shopping/items")
      .then((response) => response.json())
      .then((fetchdata) => setAllItems(fetchdata.data));
  }, []);

  /* wenn input something in the input field, return data than includes the input value */
  function filterItem(input) {
    let reg = new RegExp(input, "i");
    input
      ? setSearchItems(allItems.filter((item) => item.name.en.match(reg)))
      : setSearchItems([]);
    setInputValue(input);
  }

  /* wenn click on a search result, add this item to the shopping list */
  function addNewItemToShopList(id) {
    const newShopItem = searchItems.find((item) => item._id === id);
    if (!shopItems.includes(newShopItem))
      setShopItems([...shopItems, newShopItem]);
  }

  /* wenn click on a item in shopping list, remove this item */
  function removeShopItem(id) {
    setShopItems(shopItems.filter((item) => item._id !== id));
  }

  return (
    <AppContainer>
      <SearchForm onInputChange={filterItem} />
      <SearchList
        searchItems={searchItems}
        onClickSearchItem={addNewItemToShopList}
        inputValue={inputValue}
      />
      <ShoppingList shopItems={shopItems} onClickShopItem={removeShopItem} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: grid;
  justify-items: left;
  gap: 2rem;
  margin: 2rem auto;
  padding: 1rem;
`;
export default App;
