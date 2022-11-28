import React from "react";
import "./Category.css";
import PropTypes from "prop-types";

const Form = ({ value, changeInput }) => {
  return (
    <form className="form">
      <input
        type="text"
        name="text"
        placeholder="Search..."
        onChange={changeInput}
        value={value}
      ></input>
    </form>
  );
};
Form.propTypes = {
  value: PropTypes.string.isRequired
};
Form.propTypes = {
  changeInput: PropTypes.string.isRequired
};
export default Form;
