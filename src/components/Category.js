import React, { useContext } from "react";
import "./Category.css";
import Form from "./Form";
import Filter from "./Filter";
import Item from "./Item";
import { dataContext } from "../context/Context";

const Category = () => {
  const { filter, catItems } = useContext(dataContext);

  return (
    <div className="body">
      <div className="container-fluid ">
        <div className="row mt-5 mx-1">
          <div className="col-md-3 col-sm-12 list">
            <Form />
            <h1 className="head">Categories</h1>
            {catItems.map((curElem) => {
              return (
                <button
                  className="btn"
                  key={curElem.id}
                  onClick={() => filter(curElem)}
                >
                  {curElem}
                </button>
              );
            })}

            <h1>Maximum Price</h1>
            <Filter />
          </div>
          <Item />
        </div>
      </div>
    </div>
  );
};

export default Category;
