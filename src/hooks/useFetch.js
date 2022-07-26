import { useEffect, useState } from "react";

export default function useFetch() {
  const [allItems, setAllItems] = useState([]);

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

  return [allItems];
}
