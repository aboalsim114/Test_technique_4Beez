import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Item from "./Component/Item";
import NotFound  from "./Component/NotFound";
import Favoris from "./Component/Favoris";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/item/:id" element={<Item />} />
        <Route  path="*" element={<NotFound />} />
        <Route  path="/favoris" element={<Favoris />} />
      </Routes>
    </Router>
  );
}

export default App;
