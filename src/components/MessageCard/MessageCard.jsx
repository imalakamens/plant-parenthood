import React from 'react';
import { Link } from 'react-router-dom';

function MessageCard({message, user}) {
    let content = message.recipient._id === user._id ?
    
        <div>
            <div>
                {message.body}
            </div>
            <button className={"btn btn-danger"}>
                REMOVE MESSAGE
            </button>
        </div>
        :
        <div>

        </div>
    return (
        <div className="">
            { content }
        </div>
    )
}

export default MessageCard;