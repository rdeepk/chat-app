import React from 'react';
import FAVideo from 'react-icons/lib/fa/video-camera'
import FAUserPlus from 'react-icons/lib/fa/user-plus'
import MdEllipsisMenu from 'react-icons/lib/md/keyboard-control'

export default function({name, numberOfUsers, online}) {
		const onlineText = online ? 'online':'offline'
		return (
                <div className="row">
                    <div className="col-xs-6 user-name">{name}</div>
                    <div className="col-xs-6 options">
                            <a><FAVideo /></a>
                            <a><FAUserPlus /></a>
                            <a><MdEllipsisMenu /></a>
                    </div>
                </div>
		);
}