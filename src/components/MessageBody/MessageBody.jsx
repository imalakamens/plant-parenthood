import React from 'react';
import './MessageBody.css'

function MessageBody({message}) {
    return (
        <div className="card card-body message">
            <div className='card-title'>
            <h4>{message.sender.name} says: </h4>
            </div>
            <div className="card-text  message-body">
            {message.body}
            </div>
        </div>
    )
}

export default MessageBody;