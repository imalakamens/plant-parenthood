import React from 'react'
import PlantListItem from '../../components/PlantListItem/PlantListItem';
import './PlantListPage.css'

function PlantListPage(props) {
    return (
        <div className="card">
        <h1>Available Plants</h1>
            {props.plants.map( plant =>
            <PlantListItem
                key={plant._id}
                plant={plant}
                user={props.user} 
                handleDeletePlant={props.handleDeletePlant}
            />
            )}
        </div>
    );
}

export default PlantListPage;