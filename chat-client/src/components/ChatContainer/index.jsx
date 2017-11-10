import React, { Component } from 'react';
import Messages from '../Messages';
import ChatInput from '../ChatInput';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');

class ChatContainer extends Component {  
  constructor() { 
    super() 
      this.state = { 
        input: '',
        messages: []
      }
      socket.on('server:message', message => {
        this.addMessage(message.username, message.message);
      }); 
   }

  addMessage = (username, message) => {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push({username: username, message: message});
    this.setState({ messages });
  }

   handleOnChange = (ev) => { 
     this.setState({ input: ev.target.value })
   }

   handleOnSubmit = (ev) => {
     ev.preventDefault();
     this.addMessage(this.props.username,this.state.input);
     socket.emit('chat message', {username: this.props.username,message: this.state.input})
       this.setState({
        input: ''
      })
   } 

   render() {
     return ( 
         <div>
            <Messages messages={this.state.messages}/>
            <ChatInput handleOnSubmit={this.handleOnSubmit} handleOnChange={this.handleOnChange} input={this.state.input} />
        </div>
          )
        }
     }

export default ChatContainer;
