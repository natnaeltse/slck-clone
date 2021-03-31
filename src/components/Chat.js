import './Chat.css'
import React, { useState, useEffect } from 'react'
import db from '../firebase'
import { useParams } from 'react-router-dom'

function Chat() {
	const { roomId } = useParams()
	const [messages, setMessages] = useState(null)
	useEffect(() => {
		const channelMsg = db
			.collection('Hands-on React')
			.doc(roomId)
			.collection('messages')
		channelMsg.onSnapshot((snapshot) => {
			setMessages(
				snapshot.docs.map((doc) => {
					return {
						id: doc.id,
						title: doc.data().title,
						message: doc.data().message,
						user: doc.data().user,
						time: doc.data().timestamp,
					}
				})
			)
		})
		console.log(messages)
	}, [roomId])

	// return (
	if (!messages) {
		return <div>Loading....</div>
	}
	return <div></div>
	// messages.map((message) => {
	// 	return (
	// 		<div className='chat'>
	// 			{' is it working???'}

	// 			<div className='chat__heder'>
	// 				<div className='chat__headeLeft'>
	// 					<h4 className='chat__channelName'>
	// 						{message?.title}
	// 						{message?.user?.name}
	// 						{message?.user?.avatar}
	// 					</h4>
	// 				</div>
	// 				<div className='chat__headeRight'>
	// 					<p>{message?.message}</p>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	)
	// })

	// )
}

export default Chat
