import React, { Component } from 'react';
import MessageCard from '../../components/MessageCard/MessageCard'

// function MessagesPage(props) {
//     return (

//             <div className="MessagesPage">
//                     {props.messages.map( message =>
//                     <MessageCard
//                         key={message._id}
//                         message={message}
//                         user={props.user} 
//                         handleDeleteMessage={props.handleDeleteMessage}
//                     />
//                     )}
//             </div>
//     )
// }

class MessagesPage extends Component {
    render() {
        return (
            <div className="MessagesPage">
            {this.props.messages.map( message =>
            <MessageCard
                key={message._id}
                message={message}
                user={this.props.user} 
                handleDeleteMessage={this.props.handleDeleteMessage}
            />
            )}
    </div>
        )
    }
}

export default MessagesPage;