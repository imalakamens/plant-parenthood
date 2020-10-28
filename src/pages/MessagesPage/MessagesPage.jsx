import React from 'react';
import MessageCard from '../../components/MessageCard/MessageCard'

function MessagesPage(props) {
    return (

            <div className="MessagesPage">
                {props.user ? <h3>Hi, {props.user.firstName}!</h3> : <h2>You're Not logged in ☹️</h2> }
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