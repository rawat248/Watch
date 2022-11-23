import React from "react";
import { Slider } from "@mui/material";
import "./Filter.css";
// import { Menu } from "./Item";

const Filter = () => {
  // const [price, setPrice] = useState(1195);

  // const handleInput = (e) => {
  //   setPrice(e.target.value);
  // };

  // const Data = { Menu };
  // console.log(Data, "menu");
  return (
    <div className="App">
      <Slider/>
      {/* <input type="range" onInput={ handleInput } />
      <h1>Price: { price }</h1>
      <div>
      { Data.filter(Item => { return Item.price > parseInt(price, 10); }).map(hotel => {
        return <p key={hotel.name}>{ hotel.name } | { hotel.price } &euro; </p>;
      })}
      </div> */}
    </div>
  );
};

export default Filter;
