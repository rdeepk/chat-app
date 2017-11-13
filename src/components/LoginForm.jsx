import React, { Component } from 'react';
import io from 'socket.io-client';
import { VERIFY_USER } from '../events'

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      nickname: '',
      error: ''
    }
  }
	
	setUser = ({user, isUser}) => {
    console.log(user, isUser);
    if(isUser) {
      this.setError("User Name taken");
    } else {
      this.setError("");
      this.props.setUser(user);
    }
  }

  setError = (error) => {
    this.setState({error});
  }

  usernameChangeHandler = (event) => {
    this.setState({ nickname:event.target.value })
  }

  usernameSubmitHandler = (event) => {
    event.preventDefault()
		const { socket } = this.props
		const { nickname } = this.state
		socket.emit(VERIFY_USER, nickname, this.setUser)
  }
  
  render() {
    const {nickname, error} = this.state;
    return (
      <div className=""><div className="row">
      <div className="col-sm-offset-2 col-sm-8">
      <div className="connected">
      <img src="../img/unnamed.jpg" alt="identity" id="creatorImage" />
      <div className="infoConnected">
        <h2>Who are you?</h2>
        <br/>
        <form className="loginForm" onSubmit={this.usernameSubmitHandler}>
          <input type="text" id="yourUsername" placeholder="Enter a username..." onChange={this.usernameChangeHandler} required/><br/>
          <input type="submit" id="yourEnter" value="ENTER" />
        </form>
        <div className="error">{error? error: null}</div>
      </div>
    </div>
      </div>
    </div>
      </div>
    );
  }
}

export default LoginForm;
