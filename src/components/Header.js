import './Header.css'
import React, { useState, useEffect } from 'react'
import Avatar from './Avatar'
import db from '../firestore'

function Header() {
	const [users, setUsers] = useState([])
	useEffect(() => {
		db.collection('user').onSnapshot((snapshot) => {
			setUsers(
				snapshot.docs.map((doc) => {
					return {
						name: doc.data().name,
						avatar: doc.data().image,
						id: doc.id,
						email: doc.data().email,
					}
				})
			)
		})
	}, [])

	return (
		<div className='header'>
			<div className='header__left'>
				<i className='far fa-clock'></i>
			</div>
			<div className='header__searchbar'>
				<button>Search Hands-on-React</button>
			</div>
			<div className='header__right'>
				<i className='far fa-question-circle'></i>
				<Avatar
					className='__header'
					userStatus='avatar__userStatus'
					avatarImg={users[0]?.avatar}
				/>
			</div>
		</div>
	)
}

export default Header
