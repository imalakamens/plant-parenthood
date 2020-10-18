import React from 'react';
import { Link } from 'react-router-dom';

function MessageCard({message, user, handleDeleteMessage}) {
    let content = message.recipient._id === user._id ?
    
        <div className="message">
            <Link to={{ pathname:'/messagebody', state:{message} }}>
            {message.sender.name} 
            </Link> sent you a message &nbsp;&nbsp;
            <button className="btn btn-danger" onClick={() => handleDeleteMessage(message._id)}>
                REMOVE MESSAGE
            </button>
        </div>
        :
        <div></div>
    return (
        <div className="">
            { content }
        </div>
    )
}

export default MessageCard;