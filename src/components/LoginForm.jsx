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
      this.setError("Username is already taken. Please choose another..");
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
    <div className="login">
      <div className="connected">
        <div className="row">
        <div className="col-sm-5">
          <img src="../img/unnamed.jpg" alt="identity" id="creatorImage" />
        </div>
        <div className="col-sm-7">
          <div className="infoConnected">
          <form className="loginForm" onSubmit={this.usernameSubmitHandler}>
            <div class="form-group">
							<label for="username">Login</label>
							<input type="text" id="username" placeholder="Enter a username..." onChange={this.usernameChangeHandler} className="form-control" required="required"/>
						</div>
            <input type="submit" id="yourEnter" value="Submit" className="btn btn-primary" />
          </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="error">{error? error: null}</div>
        </div>
      </div>
      
      </div>
    </div>
    );
  }
}

export default LoginForm;
