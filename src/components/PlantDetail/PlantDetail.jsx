import React, { Component } from 'react';
import './PlantDetail.css';

function PlantDetail({plant}) {
    return (
        <div className=" PlantDetail card">

            <div className="card-title"><h4>{plant.commonName}</h4></div>
            <div className="card-text"><h3>{plant.scientificName}</h3></div>

            <div className="card-subtitle">{plant.description}</div>
            <h5>{plant.owner.name}</h5>
        </div>
    )
}

export default PlantDetail;