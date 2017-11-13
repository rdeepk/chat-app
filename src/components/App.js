import React, { Component } from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT } from '../events';
import LoginForm from './LoginForm';
import ChatContainer from './ChatContainer';


//const socketUrl = 'http://localhost:8080/'
class App extends Component {
  constructor() {
    super();
    this.state = {
      socket: null,
      user: null
    }
  }

  componentWillMount() {
		var socket = io()
		this.setState({ socket })
		this.initSocket(socket)
	}
	
	initSocket = (socket) => {
		socket.on('connect', (value)=>{
			console.log("Connected");
    })
    this.setState({socket});
		//socket.on('disconnect', this.reconnectUserInfo)
  }

  setUser = (user) => {
		const { socket } = this.state
    this.setState({user});
    console.log(user.name);
		socket.emit(USER_CONNECTED, user);
  }
  
  logout = () => {
		const { socket } = this.state
		socket.emit(LOGOUT)
		this.setState({user:null})
	}
  
  render() {
    const {socket, user} = this.state;
    return (
      <div>
      {	
					!user ? 
					<LoginForm socket={socket} setUser={this.setUser} verified={ this.setUser }/>
					:
					 <ChatContainer socket={socket} logout={this.logout} user={user}/>
				}
      </div>
    );
  }
}

export default App;
