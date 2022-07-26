import styled from "styled-components";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

function ShoppingList({ shopItems, onClickShopItem, language }) {
  library.add(faCaretDown, faCaretUp);

  const [categories, setCategories] = useImmer([]);
  const [categoryCollapseObjs, setCategoryCollapseObjs] = useImmer([]);

  /* load categoriy information from API */
  useEffect(() => {
    fetch("https://fetch-me.vercel.app/api/shopping/categories")
      .then((response) => response.json())
      .then((categoriesDate) => setCategories(categoriesDate.data))
      .catch(error);
  }, []);

  useEffect(() => {
    setCategoryCollapseObjs(
      categories.map((category) => ({ id: category._id, collaps: false }))
    );
  }, [categories, setCategoryCollapseObjs]);

  function error() {
    console.log("Fetch categories data failed!");
  }

  /*If there are items in a category, show catagory label, otherwise not*/
  function showCategoryButton(category) {
    let count = 0;

    shopItems.forEach((item) => {
      if (category._id === item.category._ref) count++;
    });

    if (count > 0)
      return (
        <CategoryCollapsButton
          type="button"
          onClick={() => toggleCollaps(category._id)}
        >
          {language === "en" ? category.name.en : category.name.de}
          {isCategoryCollaps(category._id) ? (
            <FontAwesomeIcon icon="fa-solid fa-caret-down" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-caret-up" />
          )}
        </CategoryCollapsButton>
      );
    else return <></>;
  }

  /*If the category label is clicked, toggle hide or show items flag*/
  function toggleCollaps(categoryId) {
    setCategoryCollapseObjs((draft) => {
      const categoryNeedToToggle = draft.find(
        (categoryCollapseObj) => categoryCollapseObj.id === categoryId
      );
      categoryNeedToToggle.collaps = !categoryNeedToToggle.collaps;
    });
  }

  /*Check if items in a category with giving id should be showed*/
  function isCategoryCollaps(categoryId) {
    const categoryCollapseObj = categoryCollapseObjs.find(
      (categoryCollapseObj) => categoryCollapseObj.id === categoryId
    );
    if (categoryCollapseObj) return categoryCollapseObj.collaps;
  }

  /* If the current category is collapsed, do not show any items, otherwise show items*/
  function showItemsInCategory(categoryId) {
    return isCategoryCollaps(categoryId) ? (
      <></>
    ) : (
      shopItems
        .filter((item) => item.category._ref === categoryId)
        .map((filteredItem) => {
          return (
            <div key={filteredItem._id}>
              <ItemButton
                type="button"
                onClick={() => onClickShopItem(filteredItem._id)}
              >
                {language === "en"
                  ? filteredItem.name.en
                  : filteredItem.name.de}
              </ItemButton>
            </div>
          );
        })
    );
  }

  return (
    <ShoppingListContainer>
      <h2>Shopping List</h2>
      {categories.map((category) => {
        return (
          <CategoryContainer key={category._id}>
            {showCategoryButton(category)}
            {showItemsInCategory(category._id)}
          </CategoryContainer>
        );
      })}
    </ShoppingListContainer>
  );
}

export default ShoppingList;

const ShoppingListContainer = styled.div`
  width: 100%;
`;

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
`;

const ItemButton = styled.button`
  padding: 0.5rem;
  background-color: lightblue;
`;

const CategoryCollapsButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 2rem;
  padding: 0 2rem;
`;
