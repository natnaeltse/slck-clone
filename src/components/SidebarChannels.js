import './sidebarChannels.css'
import React, { useState, useEffect } from 'react'
import SidebarComponent from './SidebarComponent'
import db from '../firebase'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'

function SidebarChannels() {
	const [show, setShow] = useState(true)
	const [channels, setChannels] = useState([])
	const history = useHistory()

	useEffect(() => {
		const slackChannels = db.collection('Hands-on React')
		slackChannels.onSnapshot((snapshot) => {
			setChannels(
				snapshot.docs.map((doc) => {
					return {
						id: doc.id,
						name: doc.data().name,
					}
				})
			)
		})
	}, [])

	function displayMSG(id) {
		history.push(`/room/${id}`)
	}

	return (
		<div className='sidebar__channels'>
			<div onClick={() => setShow(!show)}>
				<button>
					<i className={`fas fa-${show ? 'sort-down' : 'caret-right'}`}></i>
				</button>
				<p>Channels</p>
				<button className='add_channel'>
					<i className='fas fa-plus'></i>
				</button>
			</div>
			<div
				className='channels__list'
				style={show ? { display: 'block' } : { display: 'none' }}>
				{channels.map((channel) => {
					return (
						<SidebarComponent
							key={channel.id}
							id={channel.id}
							display={() => displayMSG(channel.id)}
							icon='fas fa-hashtag'
							title={channel.name}
							className='channel__list'
						/>
					)
				})}
			</div>
		</div>
	)
}

export default SidebarChannels
