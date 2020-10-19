import React from 'react';
import PlantDetail from '../../components/PlantDetail/PlantDetail';


function PlantDetailPage(props) {
    return( 
        <>
            <PlantDetail 
            plant={props.location.state.plant}
            />
        </>
    )
}

export default PlantDetailPage;