import React, { Component } from 'react';
import Messages from '../Messages';
import ChatInput from '../ChatInput';
import openSocket from 'socket.io-client';
import Users from '../Users';
const socket = openSocket();


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

   getTime = () => {
    let today = new Date();
    return today;
   }

  addMessage = (username, message) => {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push({username: username, message: message, time: this.getTime()});
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
           <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-4">
                  <Users username={this.props.username}/>
                </div>
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-sm-12">
                      <Messages messages={this.state.messages}/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <ChatInput handleOnSubmit={this.handleOnSubmit} handleOnChange={this.handleOnChange} input={this.state.input} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
            
            
        </div>
          )
        }
     }

export default ChatContainer;
