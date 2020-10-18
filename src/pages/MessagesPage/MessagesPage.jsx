import React from 'react';
import MessageCard from '../../components/MessageCard/MessageCard'
import MessageBody from '../../components/MessageBody/MessageBody'

function MessagesPage(props) {
    return (

            <div className="MessagesPage">
                    {props.messages.map( message =>
                    <MessageCard
                        key={message._id}
                        message={message}
                        user={props.user} 
                        handleDeleteMessage={props.handleDeleteMessage}
                    />
                    )}
            </div>
    )
}

export default MessagesPage;