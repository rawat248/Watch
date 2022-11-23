import React, { useState } from "react";
import { Menu } from "./Item";

const Slider = () => {
  const [price, setPrice] = useState(40);
  const handleInput = (e) => {
    setPrice(e.target.value);
  };
  const Item = { Menu };
  return (
    <div>
      <input type="range" onInput={handleInput} />
      <h1>Price: {price}</h1>
      <div>
        {Item.filter((data) => {
          return data.price > parseInt(price, 10);
        }).map((data) => {
          return (
            <div className="col-md-4 mb-4" key={data.id}>
              <div className="card">
                <img src={data.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <p className="card-text">{data.name}</p>
                  <span>${data.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
