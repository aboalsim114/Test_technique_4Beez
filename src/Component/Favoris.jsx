import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrow90DegLeft, BsHeartHalf } from "react-icons/bs";

export default function Favoris({ data }) {
  return (
    <div className="Favoris">
      <div className="FavorisHeader">
        <h1 id="Catalogue">Mes favoris</h1>
        <Link to={`/`}>
          <button id="itembtnretourFavoris">
            <BsArrow90DegLeft className="icon" /> Retourner au catalogue
          </button>
        </Link>
      </div>
      <div className="FavorisBody">
        {data.map((fav) => (
          <Link to={`/item/${fav.id}`}>
          <div className="FavorisCard">
             
            <img className="FavorisCardImg"
              src={fav.attributes.posterImage.original}
              alt={fav.attributes.titles.en || fav.attributes.titles.en_jp}
              />
             
            
           
          </div>
              </Link>
        ))}
      </div>
    </div>
  );
}
