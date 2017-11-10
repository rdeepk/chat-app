import React, { Component } from 'react';
import openSocket from 'socket.io-client';
const socket = openSocket();


class Users extends Component {
    constructor() {
        super();
        // this.state = {
        //     messages: []
        // }
    }
    render() {
        return(
            <div>{this.props.username}
            </div>
        )
    }
}

export default Users;