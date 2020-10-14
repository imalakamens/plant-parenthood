import React from 'react';
import { Link } from 'react-router-dom';

function PlantListItem({plant, handleDeletePlant}) {
    return (
        <div>
            <Link to={{ pathname:'/details', state:{plant} }}>
                {plant.commonName}
            </Link>
            <button onClick={() => handleDeletePlant(plant._id)}>
                !Delete!
            </button>
        </div>
    );
}

export default PlantListItem;