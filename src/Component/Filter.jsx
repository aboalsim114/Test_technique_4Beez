import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs"; 

import axios from "axios"
const Filter = ({ onFilterChange }) => {
  const [Année, setAnnée] = useState("");
  const [age, setAge] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://kitsu.io/api/edge/trending/anime?filter[start_date]=${Année}&filter[age_rating]=${age}&filter[text]=${searchValue}`)
      .then(res => setData(res.data.data));
  }, [Année, age, searchValue]);

  const handleAnnéeChange = (event) => {
    setAnnée(event.target.value);
    onFilterChange(age, event.target.value, searchValue);
  };
  
  const handleAgeChange = (event) => {
    setAge(event.target.value);
    onFilterChange(event.target.value, Année, searchValue);
  };
  
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    onFilterChange(age, Année, event.target.value);
  };
  

  return (
    <div className="filter">
      
      <input
        type="text"
        placeholder="Rechercher"
        name="search"
        id="search"
        value={searchValue}
        onChange={handleSearchChange}
        />
       

      <div className="select">
        <select
          name="Année"
          value={Année}
          id="format"
          onChange={handleAnnéeChange}
        >
          <option defaultValue disabled>
            Année
          </option>
          {
            data.map((date) => (
              <option key={date.id} value={date.attributes.startDate}>{date.attributes.startDate} </option>
            ))
          }
        </select>
      </div>

      <div className="select">
        <select name="age" value={age} id="format" onChange={handleAgeChange}>
          <option defaultValue disabled>
            Âge recommandé
          </option>
          {
  data.filter(date => date.attributes.ageRatingGuide)
    .map(date => (
      <option key={date.id} value={date.attributes.ageRatingGuide}>
        {date.attributes.ageRatingGuide}
      </option>
    ))
}

        </select>
      </div>
    </div>
  );
};


export default Filter;
