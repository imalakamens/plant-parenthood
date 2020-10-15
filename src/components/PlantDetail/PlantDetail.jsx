import React, { Component } from 'react';

function PlantDetail({plant}) {
    return (
        <>
        {plant.commonName}
        {plant.scientificName}
        {plant.description}
        {plant.owner.name}
        </>
    )
}

export default PlantDetail;