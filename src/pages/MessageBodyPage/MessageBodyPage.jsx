import React from 'react';
import MessageBody from '../../components/MessageBody/MessageBody';


function PlantDetailPage(props) {
    return( 
        <>
            <MessageBody 
            message={props.location.state.message}
            />
        </>
    )
}

export default PlantDetailPage;