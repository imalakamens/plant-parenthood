import React, { Component } from 'react';

function PlantDetail({plant}) {
    return (
        <div className="container plant-detail">
            <div className="row">
            <div className="col"><h4>{plant.commonName}</h4></div>
            <div className="col"><h3>{plant.scientificName}</h3></div>
            </div>
            
            <div className="row">
            <div className="col">{plant.description}</div>
            </div>
            <h5>{plant.owner}</h5>
        </div>
    )
}

export default PlantDetail;