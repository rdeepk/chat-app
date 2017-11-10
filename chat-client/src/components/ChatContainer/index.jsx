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
   }

  // componentDidMount(){ 
  //   this._handleMessageEvent()
  //  } 

  //  _handleMessageEvent = () => {
  //    socket.on('chat message', (inboundMessage) => {
  //      this.props.newMessage({user: 'test_user', message: inboundMessage})
  //       })
  //    } 

   handleOnChange = (ev) => { 
     this.setState({ input: ev.target.value })
   }

   handleOnSubmit = (ev) => {
     ev.preventDefault() 
     this.state.messages.push(this.state.input);
     socket.emit('chat message', this.state.input)
       this.setState({
        messages: this.state.messages,
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

// function mapStateToProps(state, ownProps) {  
//   return { messages: state.messages } 
//  } 

// function mapDispatchToProps(dispatch) {  
//   return bindActionCreators({ newMessage: messagesActions.newMessage}, dispatch) 
// } 

// export default connect(mapStateToProps, mapDispatchToProps(ChatContainer))
export default ChatContainer;
