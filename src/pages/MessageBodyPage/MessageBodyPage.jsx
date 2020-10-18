import React from 'react';
import MessageBody from '../../components/MessageBody/MessageBody';


function MessageBodyPage(props) {
    return( 
        <>
            <MessageBody 
            message={props.location.state.message}
            />
        </>
    )
}

export default MessageBodyPage;