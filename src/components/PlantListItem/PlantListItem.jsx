import React from 'react';
import { Link } from 'react-router-dom';


function PlantListItem({plant,user, handleDeletePlant}) {
    let content = plant.owner._id === user._id ?
            <div>
            <Link className={"btn btn-primary"}to={{ pathname:'/editplant', state:{plant} }}>
                Edit!
            </Link>&nbsp;&nbsp;
            <button className={"btn btn-danger"} onClick={() => handleDeletePlant(plant._id)}>
                Delete!
            </button>
            </div>
            :
            <div><button>button that does nothing</button></div>
    return (
        <div className="card-body">
            <Link to={{ pathname:'/details', state:{plant} }}>
                {plant.commonName} &nbsp;&nbsp;&nbsp;
            </Link>
            { content }
            

        </div>
    );
}

export default PlantListItem;