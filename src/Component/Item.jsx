
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai"; 
import { BsArrow90DegLeft,BsHeartHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReactLoading from 'react-loading';



const Item = () => {
  const { id } = useParams();
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    axios
      .get(`https://kitsu.io/api/edge/anime/${id}`)
      .then(res => res.data)
      .then(res => setItemData(res.data));
  }, [id]);

  return (
    <div className="container">
       

      <div className="banner">
      <Link to={`/`}>
        <button id="itembtnretour"> <BsArrow90DegLeft className="icon"/> Retourner au catalogue</button>
 </Link>
        <img src={itemData.attributes && itemData.attributes.coverImage
          ? itemData.attributes.coverImage.original :  <ReactLoading type="spin" color="blue" height={50} width={50} />
          } alt="" srcset="" />
      </div>
      <div className="Img-item">
      <img src={itemData.attributes && itemData.attributes.posterImage
          ? itemData.attributes.posterImage.original :  <ReactLoading type="spin" color="blue" height={50} width={50} />
          } alt="" srcset="" />
      </div>
      <div className="content">
        <div className="itemTitre">
        <h1>
            {itemData.attributes && itemData.attributes.titles
              ? itemData.attributes.titles.en
              :  <ReactLoading type="spin" color="blue" height={50} width={50} />}
             
          </h1>
             
          
        </div>
        <div className="btnFavorisItem">
          <button  id="addToFavorisItem">Ajouter aux favoris <AiOutlineHeart className="icon"/></button>
        </div>
        <div className="description">
          <p>{itemData.attributes && itemData.attributes.description
          ? itemData.attributes.description :  <ReactLoading type="spin" color="blue" height={50} width={50} />
          }</p>
        </div>
      <button id="add_favo">Voir les favoris <BsHeartHalf className="icon" /></button>
      </div>
    </div>
  );
};

export default Item;
