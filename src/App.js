//import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SearchForm from "./components/SearchForm";
import SearchList from "./components/SearchList";
import ShoppingList from "./components/ShoppingList";
import LanguageOption from "./components/LanguageOpiton";
import useItems from "./hooks/useItems";

function App() {
  /*to do list:  store in LocalStorage only item id*/
  /*to do list: list with ul li instead of button */

  const {
    filterItem,
    addItemToShopList,
    removeShopItem,
    shopItems,
    searchItems,
    inputValue,
    language,
    handleLanguage,
  } = useItems();

  return (
    <AppContainer>
      <LanguageOption onClickLanguage={handleLanguage} />
      <SearchForm language={language} onInputChange={filterItem} />
      <SearchList
        language={language}
        searchItems={searchItems}
        onClickSearchItem={addItemToShopList}
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
