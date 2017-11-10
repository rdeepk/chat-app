import React, { Component } from 'react';
//import {Route} from 'react-router-dom';
import './App.css';
import ChatContainer from '../ChatContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      submitted: false
    }
  }
  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  }
  usernameSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }
  render() {
    return (
    <div>
      <h1>React Instant Chat</h1>
      {!this.state.submitted &&
      <div className="connected">
        <img src="../img/unnamed.jpg" alt="identity" id="creatorImage" />
        <div className="infoConnected">
          <h2>Who are you?</h2>
          <br/>
          <form className="loginForm" onSubmit={this.usernameSubmitHandler}>
            <input type="text" id="yourUsername" placeholder="Enter a username..." onChange={this.usernameChangeHandler} required/><br/>
            <input type="submit" id="yourEnter" value="ENTER" />
          </form>
        </div>
      </div> }
      {this.state.submitted && <ChatContainer username={this.state.username} /> }
    </div>
    );
  }
}

export default App;


