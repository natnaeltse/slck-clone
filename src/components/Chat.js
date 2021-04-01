import './Chat.css'
import React, { useState, useEffect } from 'react'
import db from '../firestore'
import { useParams } from 'react-router-dom'

function Chat() {
	const { roomId } = useParams()
	const [chats, setChats] = useState([])
	const [user, setUser] = useState(null)
	const [channelDetail, setChannelDetail] = useState(null)

	useEffect(() => {
		// const profile = (path) => {
		// 	db.doc(path)
		// 		.get()
		// 		.then((snap) => console.log(snap.data()))
		// }
		db.collection(`channels/${roomId}/messages`).onSnapshot((snapshot) => {
			setChats(
				snapshot.docs.map((doc) => {
					const userData = db.doc(doc.data().user.path)
					userData.get().then((snap) => setUser(snap.data()))
					// profile(doc.data().user.path)
					return {
						id: doc.id,
						title: doc.data().title,
						body: doc.data().body,
						time: doc.data().timestamp.seconds,
					}
				})
			)
		})

		db.collection('channels')
			.doc(roomId)
			.onSnapshot((snapshot) => {
				setChannelDetail(snapshot.data())
			})
	}, [roomId])

	const renderChats = () => {
		return chats.map((chat) => {
			return (
				<div className='chats__messages' key={chat.id}>
					<div className='chats__messagesHeader'>
						<img src={user?.image} alt='' />
						<div>
							<h4>
								{user?.name}
								<span className='time'>{chat.time}</span>
							</h4>

							<p className='title'>{chat.title}</p>
						</div>
					</div>
					<div className='chats__messagesBody'>
						<p>{chat.body}</p>
					</div>
				</div>
			)
		})
	}

	if (!chats) {
		return <div>Loading....</div>
	}
	return (
		<div className='chats'>
			<div className='chats__header'>
				<div className='chats__headerLeft'>
					<h3>#{channelDetail?.name}</h3>
					<i className='far fa-star'></i>
					<p>Add a topic</p>
				</div>
				<div className='chats__headerRight'>
					<div className='chat__header__members'>
						<img src={channelDetail?.members[0].image} alt='' />
						<img src={channelDetail?.members[1].image} alt='' />
						<img src={channelDetail?.members[2].image} alt='' />
					</div>
					<p>{channelDetail?.members.length}</p>
					<i className='fas fa-user-plus'></i>
					<i className='fas fa-info-circle'></i>
				</div>
			</div>

			{renderChats()}
		</div>
	)
}

export default Chat
