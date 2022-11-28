import React, { useState, useEffect } from "react";
import "./Category.css";
import Form from "./Form";
import { Menu } from "../context/Data";
import Filter from "./Filter";
import Item from "./Item";

const Category = () => {
  const [data, setData] = useState(Menu);
  const [selectedPrice, setSelectedPrice] = useState([1705, 11995]);
  const [inputSearch, setInputSearch] = useState("");

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };
  const filter = (catItem) => {
    const result = Menu.filter((curData) => {
      return curData.cat === catItem;
    });
    setData(result);
  };

  const applyFilters = () => {
    let updatedList = Menu;

    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

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
  }, [selectedPrice, inputSearch]);

  return (
    <div>
      <div className="container-fluid ">
        <div className="row mt-5 mx-1">
          <div className="col-md-3 col-sm-12">
            <Form
              value={inputSearch}
              changeInput={(e) => setInputSearch(e.target.value)}
            />
            <h1 className="head">Categories</h1>
            <button className="btn" onClick={() => setData(Menu)}>
              All
            </button>
            <button className="btn" onClick={() => filter("Dress")}>
              Dress
            </button>
            <button className="btn" onClick={() => filter("Sport")}>
              Sport
            </button>
            <button className="btn" onClick={() => filter("Luxury")}>
              Luxury
            </button>
            <button className="btn" onClick={() => filter("Casual")}>
              Casual
            </button>

            <h1>Maximum Price</h1>
            <Filter
              changePrice={handleChangePrice}
              selectedPrice={selectedPrice}
            />
          </div>
          <Item list={data} />
        </div>
      </div>
    </div>
  );
};

export default Category;
