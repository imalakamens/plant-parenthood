import React, { Component } from 'react';

function PlantDetail({plant}) {
    return (
        <div>
            <h4>{plant.commonName}</h4>
            <h3>{plant.scientificName}</h3>
            

            <div>{plant.description}</div>
            <h3>{plant.owner}</h3>
        </div>
    )
}

export default PlantDetail;