import React from 'react';
import './PlantDetail.css';

function PlantDetail({plant}) {
    return (
        <div className=" PlantDetail card">

            <div className="card-title"><h4>{plant.commonName}</h4></div>
            <div className="card-subtitle"><h5>{plant.scientificName}</h5></div>

            <div className="card-text">{plant.description}</div>
            <h5>-{plant.owner.name}-</h5>
        </div>
    )
}

export default PlantDetail;