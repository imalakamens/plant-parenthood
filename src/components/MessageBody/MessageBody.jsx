import React from 'react';

function MessageBody({message}) {
    return (
        <div className="card-subtitle">
            {message.body}
        </div>
    )
}

export default MessageBody;