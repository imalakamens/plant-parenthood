import React from 'react'
import PlantListItem from '../../components/PlantListItem/PlantListItem';

function PlantListPage(props) {
    return (
        <>
        <h1>Available Plants</h1>
        <div>
            {props.plants.map( plant =>
            <PlantListItem key={plant._id} plant={plant} />
            )}
        </div>
        </>
    );
}

export default PlantListPage;