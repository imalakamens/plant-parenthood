import React from 'react';
import { Link } from 'react-router-dom';
import './PlantListCard.css'


function PlantListCard({plant,user, handleDeletePlant}) {
    let controls = plant.owner._id === user._id ?
            <div>
                <Link className={"btn btn-success"}to={{ pathname:'/editplant', state:{plant} }}>
                    EDIT
                </Link>&nbsp;&nbsp;
                <button className={"btn btn-danger"} onClick={() => handleDeletePlant(plant._id)}>
                    DELETE
                </button>
            </div>
            :
            <div>
                <Link className={"btn btn-info"}to={{ pathname:'/adopt', state:{plant} }}>
                    ADOPT
                </Link>&nbsp;&nbsp;
            </div>
    return (
        <div className="PlantListCard card">
            <Link className="card-title" to={{ pathname:'/details', state:{plant} }}>
                {plant.commonName} &nbsp;&nbsp;&nbsp;
            </Link>
            { controls }
        </div>
    );
}

export default PlantListCard;