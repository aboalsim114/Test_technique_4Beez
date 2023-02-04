import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsArrow90DegLeft, BsHeartHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

const Item = ({ data, updateOneItem }) => {
  const { id } = useParams();
  const itemData = data.find(element => element.id === id);
  if (!data || !itemData) {
    return;
  }
  const isFavoris = itemData.isFavoris;

  const handleAddToFav = () => {
    updateOneItem({
      ...itemData,
      isFavoris: !itemData.isFavoris
    });
  };

  return (
    <div className="container">
      <div className="banner">
        <Link to={`/`}>
          <button id="itembtnretour">
            {" "}
            <BsArrow90DegLeft className="icon" /> Retourner au catalogue
          </button>
        </Link>
        <img
          src={
            itemData.attributes && itemData.attributes.coverImage ? (
              itemData.attributes.coverImage.original
            ) : (
              <ReactLoading type="spin" color="blue" height={50} width={50} />
            )
          }
          alt=""
          srcset=""
        />
      </div>
      <div className="Img-item">
        <img
          src={
            itemData.attributes && itemData.attributes.posterImage ? (
              itemData.attributes.posterImage.original
            ) : (
              <ReactLoading type="spin" color="blue" height={50} width={50} />
            )
          }
          alt=""
          srcset=""
        />
      </div>
      <div className="content">
        <div className="itemTitre">
          <h1>
            {itemData.attributes && itemData.attributes.titles ? (
              itemData.attributes.titles.en
            ) : (
              <ReactLoading type="spin" color="blue" height={50} width={50} />
            )}
          </h1>
        </div>
        <div className="btnFavorisItem">
          <button
            onClick={handleAddToFav}
            style={{
              backgroundColor: isFavoris ? "#4334C8" : "",
              color: isFavoris ? "#ffffff" : "",
              transition: isFavoris
                ? "all .8s ease-in-out"
                : "all .8s ease-in-out"
            }}
            className={isFavoris ? "favorited" : "addToFavorisItem"}
            id="addToFavorisItem"
          >
            {isFavoris ? "Retirer des favoris" : "Ajouter aux favoris"}{" "}
            <AiOutlineHeart className="icon" />
          </button>
        </div>
        <div className="description">
          <p>
            {itemData.attributes && itemData.attributes.description ? (
              itemData.attributes.description
            ) : (
              <ReactLoading type="spin" color="blue" height={50} width={50} />
            )}
          </p>
        </div>
        <Link to={`/favoris`}>
          <button id="add_favo">
            Voir les favoris <BsHeartHalf className="icon" />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Item;
