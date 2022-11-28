import React from "react";
import { Slider } from "@mui/material";
import "./Filter.css";
import PropTypes from "prop-types";

const Filter = ({ changePrice, selectedPrice }) => {
  return (
    <div className="App">
      <Slider
        value={selectedPrice}
        onChange={changePrice}
        valueLabelDisplay="on"
        min={1705}
        max={11995}
        step={10}
      />
    </div>
  );
};
Filter.propTypes = {
  changePrice: PropTypes.string.isRequired
};
Filter.propTypes = {
  selectedPrice: PropTypes.string.isRequired
};

export default Filter;
