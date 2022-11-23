import React, { useState } from "react";
import "./Category.css";
import Form from "./Form";
import { Menu } from "../components/Item";
import Filter from "./Filter";

const Category = () => {
  const [data, setData] = useState(Menu);
  const filter = (catItem) => {
    const result = Menu.filter((curData) => {
      return curData.cat === catItem;
    });
    setData(result);
  };
  return (
    <div>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <Form />
            <h1 className="head">Categories</h1>
            <button className="btn" onClick={() => setData(Menu)}>All</button>
            <button className="btn" onClick={() => filter("Dress")}>Dress</button>
            <button className="btn" onClick={() => filter("Sport")}>Sport</button>
            <button className="btn" onClick={() => filter("Luxury")}>Luxury</button>
            <button className="btn" onClick={() => filter("Casual")}>Casual</button>
            <h1>Maximum Price</h1>
            <Filter/>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((data) => {
                return (
                  <>
                    <div className="col-md-4 mb-4" key={data.id}>
                      <div className="card" >
                        <img src={data.img} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                          <p className="card-text">
                            {data.name}
                          </p>
                          <span>${data.price}</span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;