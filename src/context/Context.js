import React, { useState, useEffect, createContext } from "react";
import { Menu } from "./Data";
import PropTypes from "prop-types";

export const dataContext = createContext();
const allCatValues = [...new Set(Menu.map((curElem) => curElem.cat)), "All"];
const maxArray = Menu.map((item) => item.price);
const maxValue = Math.max(...maxArray);
console.log(maxValue);
const minValue = 0;

const Context = ({ children }) => {
  const [data, setData] = useState(Menu);
  const [inputSearch, setInputSearch] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(maxValue);

  const catItems = allCatValues;

  const changeInput = (e) => setInputSearch(e.target.value);

  const filter = (catItem) => {
    if (catItem === "All") {
      setData(Menu);
      return;
    }
    const result = Menu.filter((curData) => {
      return curData.cat === catItem;
    });
    setData(result);
  };

  const handleChangePrice = (e) => {
    setSelectedPrice(e.target.value);
  };

  const applyFilters = () => {
    let updatedList = Menu;

    if (selectedPrice) {
      updatedList = updatedList.filter((item) => item.price <= selectedPrice);
    }

    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.name.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    setData(updatedList);
  };
  useEffect(() => {
    applyFilters();
  }, [inputSearch, selectedPrice]);

  return (
    <dataContext.Provider
      value={{
        inputSearch,
        changeInput,
        handleChangePrice,
        selectedPrice,
        data,
        filter,
        catItems,
        minValue,
        maxValue
      }}
    >
      {children}
    </dataContext.Provider>
  );
};
Context.propTypes = {
  children: PropTypes.string.isRequired
};

export default Context;
