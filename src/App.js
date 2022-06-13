//import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getFromLocal, setToLocal } from "../src/lib/localStorage";
import SearchForm from "./components/SearchForm";
import SearchList from "./components/SearchList";
import ShoppingList from "./components/ShoppingList";
import LanguageOption from "./components/LanguageOpiton";

/* import { useImmer } from "use-immer"; */

function App() {
  const [allItems, setAllItems] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [language, setLanguage] = useState(getFromLocal("language") ?? []);
  const [shopItems, setShopItems] = useState(
    getFromLocal("shoppingList") ?? []
  );

  /* load the data from API */
  useEffect(() => {
    fetch("https://fetch-me.vercel.app/api/shopping/items")
      .then((response) => response.json())
      .then((fruitsData) => setAllItems(fruitsData.data))
      .catch(error);
  }, []);

  function error() {
    console.log("Fetch fruits data failed!");
  }

  useEffect(() => setToLocal("shoppingList", shopItems), [shopItems]);
  useEffect(() => setToLocal("language", language), [language]);

  /* When input something in the input field, return data that includes the input value */
  function filterItem(input) {
    let reg = new RegExp(input, "i");
    input
      ? setSearchItems(
          allItems.filter((item) => {
            if (language === "en") return item.name.en.match(reg);
            else return item.name.de.match(reg);
          })
        )
      : setSearchItems([]);
    setInputValue(input);
  }

  /* When click on a search result, add this item to the shopping list */
  function addNewItemToShopList(id) {
    const newShopItem = searchItems.find((item) => item._id === id);
    if (!shopItems.find((item) => item._id === newShopItem._id))
      setShopItems([...shopItems, newShopItem]);
  }

  /* When click on a item in shopping list, remove this item */
  function removeShopItem(id) {
    setShopItems(shopItems.filter((item) => item._id !== id));
  }

  function handleLanguage(language) {
    setLanguage(language);
  }

  return (
    <AppContainer>
      <LanguageOption onClickLanguage={handleLanguage} />
      <SearchForm language={language} onInputChange={filterItem} />
      <SearchList
        language={language}
        searchItems={searchItems}
        onClickSearchItem={addNewItemToShopList}
        inputValue={inputValue}
      />
      <ShoppingList
        language={language}
        shopItems={shopItems}
        onClickShopItem={removeShopItem}
      />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: rgb(132 148 161);
  padding: 1rem;
  max-width: 600px;
  margin: 2rem auto;
  display: grid;
  justify-items: left;
  gap: 3rem;
`;

export default App;
