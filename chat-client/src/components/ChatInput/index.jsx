import React, { Component } from 'react';

class ChatInput extends Component {
    render() {
        return (
            <div>
                <form id = "chatform">
                    <textarea id="message" onChange={this.props.handleOnChange} value={this.props.input}></textarea>
                    <button type="submit" id="submit" onClick={this.props.handleOnSubmit}>SEND</button>
                </form>
            </div>
        )
    }
}

export default ChatInput;