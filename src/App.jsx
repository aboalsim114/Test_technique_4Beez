import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Item from "./Component/Item";
import NotFound from "./Component/NotFound";
import Favoris from "./Component/Favoris";
import "./App.scss";

const url = "https://kitsu.io/api/edge/anime";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setData(res.data.data || []);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const favorisData = data.filter(element => element.isFavoris);

  const updateOneItem = newItem => {
    const dataUpdated = data.map(item => {
      if (item.id === newItem.id) {
        return newItem;
      }
      return item;
    });
    setData(dataUpdated);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home data={data} setData={setData} />}
        />
        <Route
          exact
          path="/item/:id"
          element={<Item data={data} updateOneItem={updateOneItem} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/favoris" element={<Favoris data={favorisData} />} />
      </Routes>
    </Router>
  );
}

export default App;
