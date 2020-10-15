import React from 'react';
import { Link } from 'react-router-dom';


function PlantListItem({plant, handleDeletePlant}) {
    return (
        <div className="card-body">
            <Link to={{ pathname:'/details', state:{plant} }}>
                {plant.commonName} &nbsp;&nbsp;&nbsp;
            </Link>
            <Link className={"btn btn-primary"}to={{ pathname:'/editplant', state:{plant} }}>
                Edit!
            </Link>&nbsp;&nbsp;
            <button className={"btn btn-danger"} onClick={() => handleDeletePlant(plant._id)}>
                Delete!
            </button>
        </div>
    );
}

export default PlantListItem;