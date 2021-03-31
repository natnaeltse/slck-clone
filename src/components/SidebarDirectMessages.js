import './sidebarChannels.css'
import React, { useState, useEffect } from 'react'
import SidebarComponent from './SidebarComponent'
import Avatar from './Avatar'
import db from '../firebase'

function SidebarDirectMessages() {
	const [show, setShow] = useState(true)
	const [users, setUsers] = useState([])

	useEffect(() => {
		db.collection('users').onSnapshot((snapshot) => {
			setUsers(
				snapshot.docs.map((doc) => {
					return {
						id: doc.id,
						name: doc.data().name,
						avatar: doc.data().avatar,
					}
				})
			)
		})
	}, [])

	return (
		<div className='sidebar__channels'>
			<div onClick={() => setShow(!show)}>
				<button>
					<i className={`fas fa-${show ? 'sort-down' : 'caret-right'}`}></i>
				</button>
				<p>Direct Messages</p>
				<button className='add_channel'>
					<i className='fas fa-plus'></i>
				</button>
			</div>
			<div
				className='channels__list'
				style={show ? { display: 'block' } : { display: 'none' }}>
				{users.map((user) => {
					return (
						<SidebarComponent
							key={user.id}
							title={user.name}
							className='channel__list'>
							<Avatar
								className='__directMessages'
								userStatus='avatar__userStatus'
								avatarImg={user.avatar}
							/>
						</SidebarComponent>
					)
				})}
			</div>
		</div>
	)
}

export default SidebarDirectMessages
