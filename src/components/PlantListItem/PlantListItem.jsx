import React from 'react';
import { Link } from 'react-router-dom';
import './PlantListItem.css'


function PlantListItem({plant,user, handleDeletePlant}) {
    let content = plant.owner._id === user._id ?
            <div>
            <Link className={"btn btn-success"}to={{ pathname:'/editplant', state:{plant} }}>
                EDIT
            </Link>&nbsp;&nbsp;
            <button className={"btn btn-danger"} onClick={() => handleDeletePlant(plant._id)}>
                DELETE
            </button>
            </div>
            :
            <div><button className="btn btn-info">Not yours!</button></div>
    return (
        <div className="PlantListItem card">
            <Link className="card-title" to={{ pathname:'/details', state:{plant} }}>
                {plant.commonName} &nbsp;&nbsp;&nbsp;
            </Link>
            { content }
        </div>
    );
}

export default PlantListItem;