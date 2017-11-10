import React, { Component } from 'react';

class Messages extends Component {
    render() {
        console.log(this.props.messages);
        let messagesJSX = this.props.messages.map((message, i) => {
            return <li key = {i} className="me"><div className="image"><img src="http://www.gravatar.com/avatar/14a0e497ba1414d24b40083916bf420d?s=140&amp;r=x&amp;d=mm" /></div><p>{message}</p></li>
        })
        return(
            <div class="chatscreen" style={{display: "block"}}>
            
                        <ul className="chats">{messagesJSX}</ul>
            
                    </div>
        )
    }
}

export default Messages;
