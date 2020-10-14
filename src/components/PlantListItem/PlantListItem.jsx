import React from 'react';
import { Link } from 'react-router-dom';

function PlantListItem({plant}) {
    return (
        <div>
            <Link to={{ pathname:'/details', state:{plant} }}>
                {plant.commonName}
            </Link>

        </div>
    );
}

export default PlantListItem;