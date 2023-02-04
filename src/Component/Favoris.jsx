import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { BsArrow90DegLeft,BsHeartHalf } from "react-icons/bs";
export default function Favoris() {

    


  return (
    <div className='Favoris'>
       <div className="FavorisHeader">
       <h1 id="Catalogue">Mes favoris</h1>
       <Link to={`/`}>
        <button id="itembtnretourFavoris"> <BsArrow90DegLeft className="icon"/> Retourner au catalogue</button>
 </Link>
       </div>
       <div className="FavorisBody">
        <div className="FavorisCard"></div>
        <div className="FavorisCard"></div>
        <div className="FavorisCard"></div>
  
       </div>
    </div>
  )
}
