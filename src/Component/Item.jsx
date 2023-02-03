import React from "react";


const Item  = ({match}) => {
    const id = match.params.id;  
    return(

        <div className="container">
        <div className="banner">
            <button id="itembtnretour">Retourner au catalogue</button>
        </div>
        <div className="Img-item"></div>
        <div className="content">
            <div className="itemTitre">
                <h1>titre</h1>
            </div>

            <div className="btnFavorisItem">
                <button>Ajouter aux favoris</button>
            </div>


            <div className="description">
                <p></p>
            </div>
        </div>
    </div>
        )
}




export default Item;