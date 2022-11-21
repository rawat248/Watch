import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h1 className="head">Categories</h1>
      <NavLink to="/all">All</NavLink>
      <NavLink to="/dress">Dress</NavLink>
      <NavLink to="/sport">Sport</NavLink>
      <NavLink to="/luxury">Luxury</NavLink>
    </div>
  );
};

export default Nav;
