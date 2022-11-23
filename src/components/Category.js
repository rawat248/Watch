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
      <div className="container-fluid ">
        <div className="row mt-5 mx-1">
          <div className="col-md-3 col-sm-12">
            <Form />
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
            <Filter />
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="row">
              {data.map((data) => {
                return (
                  <>
                    <div
                      className="col-md-6 col-sm-12 col-lg-4 mb-4"
                      key={data.id}
                    >
                      <div className="card">
                        <div className="cards">
                          <img
                            src={data.img}
                            className="card-img-top"
                            alt="..."
                          ></img>
                        </div>
                        <div className="card-body">
                          <p className="card-text">{data.name}</p>
                          <span className="price">Rs.{data.price}</span>
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
