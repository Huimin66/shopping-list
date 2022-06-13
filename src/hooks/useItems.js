import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";
import { useState } from "react";

export default function useItems() {
  const [language, setLanguage] = useLocalStorage("language", []);
  const [searchItems, setSearchItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [shopItems, setShopItems] = useLocalStorage("shoppingList", []);
  const [allItems] = useFetch();

  function handleLanguage(language) {
    setLanguage(language);
  }

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
  function addItemToShopList(item) {
    if (!shopItems.find((shopItem) => shopItem._id === item._id))
      setShopItems([...shopItems, item]);
  }

  /* When click on a item in shopping list, remove this item */
  function removeShopItem(id) {
    setShopItems(shopItems.filter((item) => item._id !== id));
  }
  return {
    filterItem,
    addItemToShopList,
    removeShopItem,
    allItems,
    shopItems,
    searchItems,
    inputValue,
    language,
    handleLanguage,
  };
}
