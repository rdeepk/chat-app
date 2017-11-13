import React, { Component } from 'react';
import FAChevronDown from 'react-icons/lib/md/keyboard-arrow-down'
import FASearch from 'react-icons/lib/fa/search'
import MdEject from 'react-icons/lib/md/eject'

export default class SideBar extends Component {
	constructor(){
		super()
		this.state = {
			reciever:""
		}
	}
	handleSubmit = (e) => {
		e.preventDefault()
		const { reciever } = this.state
		const { onSendPrivateMessage } = this.props

		onSendPrivateMessage(reciever);
	}

	render() {
		const { chats, activeChat, user, setActiveChat, logout } = this.props
		const {reciever} = this.state;
		return (
			<div id="side-bar">
				<div className="row">
					<div className="col-sm-12 app-name">
						Zanjo Chat <FAChevronDown />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
					<form onSubmit={this.handleSubmit} className="search">
					<i className="search-icon"><FASearch /></i>
					<input 
						placeholder="Search" 
						type="text"
						value={reciever}
						onChange={(e)=>{ this.setState({reciever:e.target.value}) }}/>
					<div className="plus"></div>
				</form>
					</div>
				</div>
				<div
					className="users"
					ref='users'
					onClick={(e) => { (e.target === this.refs.user) && setActiveChat(null) }}>
					{
						chats.map((chat) => {
							if (chat.name) {
								const lastMessage = chat.messages[chat.messages.length - 1];
								const chatSideName = chat.users.find(( name ) => {
									return name !== user.name
								}) || "Community"
								const classNames = (activeChat && activeChat.id === chat.id) ? 'active' : ''
								return (
									<div
										key={chat.id}
										className={`user ${classNames}`}
										onClick={() => { setActiveChat(chat) }}
									>
										<div className="row">
											<div className="col-sm-12 user-info">
												<span className="user-photo">{chatSideName[0].toUpperCase()}</span>
												<span className="name">{chatSideName}</span>
												{lastMessage && <div className="last-message">{lastMessage.message}</div>}
											</div>
										</div>
									</div>
								)
							}

							return null
						})
					}

				</div>
				<div className="row current-user">
					<div className="col-sm-8">
						<span>{user.name}</span>
					</div>
					<div className="col-sm-4">
						<div onClick={() => { logout() }} title="Logout" className="logout">
							<MdEject />
						</div>
					</div>
				</div>
			</div>
		);
	}
}