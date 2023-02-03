import React, { useState, useEffect } from "react";
import axios from "axios"
const Item = ({ match }) => {
    let id;
    if (match && match.params) {
        id = match.params.id
    }
    const [itemData, setItemData] = useState({});

  useEffect( async () => {
    axios.get(`https://kitsu.io/api/edge/anime/${id}`)
    .then(res => res.json())
    .then(res => setItemData(res))
  })

    return (
        <div className="container">
            <div className="banner">
                <button id="itembtnretour">Retourner au catalogue</button>
            </div>
            <div className="Img-item"></div>
            <div className="content">
                <div className="itemTitre">
                    <h1>{itemData.title}</h1>
                </div>
                <div className="btnFavorisItem">
                    <button>Ajouter aux favoris</button>
                </div>
                <div className="description">
                    <p>{itemData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;
