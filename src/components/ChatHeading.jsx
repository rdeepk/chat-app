import React from 'react';
import FAVideo from 'react-icons/lib/fa/video-camera'
import FAUserPlus from 'react-icons/lib/fa/user-plus'
import MdEllipsisMenu from 'react-icons/lib/md/keyboard-control'

export default function({name, numberOfUsers, online}) {
		const onlineText = online ? 'online':'offline'
		return (
			<div className="chat-header">
				<div className="user-info">
                    <div className="row">
                        <div className="col-sm-6">
                            <span className="user-name">{name}</span>
                        </div>
                        <div className="col-sm-6">
                            <span className="status">
                            {/* <div className={`indicator ${onlineText}`}></div>
                            <span>{numberOfUsers ? numberOfUsers : null} online</span> */}
                            </span>
                            <span className="options">
                                <FAVideo />
                                <FAUserPlus />
                                <MdEllipsisMenu />
                            </span>
                        </div>
                    </div>
				</div>
			</div>
		);
}