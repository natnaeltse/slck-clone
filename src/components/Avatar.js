import './Avatar.css'
import React from 'react'

function Avatar({ className, avatarImg, userStatus }) {
	return (
		<div className={`avatar ${className}`}>
			<img src={avatarImg} alt='' />
			<div className={userStatus}></div>
		</div>
	)
}

export default Avatar
