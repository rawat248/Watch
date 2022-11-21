import React from "react";
import Header from "./components/Header";
import All from "./components/All";
import Dress from "./components/Dress";
import Sport from "./components/Sport";
import Luxury from "./components/Luxury";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/all" element={<All />} />
        <Route path="/dress" element={<Dress />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/luxury" element={<Luxury />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
