import React, { Component } from 'react';

export default class Messages extends Component {
	
	/*
	*	Scrolls down the view of the messages.
	*/
	scrollDown = () => {
		const { container } = this.refs
		container.scrollTop = container.scrollHeight
	}
	
	componentDidUpdate(newProps){
		this.scrollDown();

	}

	componentDidMount(){
		this.scrollDown();
	}

	render() {
        const { messages, user, typingUsers } = this.props;
		return (
			<div ref={'container'} 
					className="thread-container">
					<div className="thread">
					{
						messages.map((mes, i)=>{
							return( 
							<div className="row">
								<div className="col-xs-12">
									<div key={mes.id} className={`message-container ${mes.sender === user.name && 'right'}`}>
										<span className="data">
										<div className="time">{mes.time}</div>
										<div className="name">{mes.sender !== user.name ? mes.sender: ''}</div>
										</span>
										<span className="message">{mes.message}</span>
									</div>
								</div>
							</div>)
						})
						
					}
					{
						typingUsers.map((name)=>{
							return(
								<div key={name} className="typing-user">
								{`${name} is typing . . .`}
								</div>
								)
						})
					}

					</div>
			</div>
		);
	}
}