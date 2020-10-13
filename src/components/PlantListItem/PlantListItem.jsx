import React from 'react';

function PlantListItem({plant}) {
    return (
        <div>
            {plant.commonName}
        </div>
    );
}

export default PlantListItem;