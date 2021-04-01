import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Login from './Login'
import Chat from './Chat'
import Home from './Home'
// var emoji = require('emoji.json')

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/login' exact>
					<Login />
				</Route>
				<Route path='/room' exact>
					<Header />
					<Sidebar />
				</Route>
				<>
					<Header />
					<div className='app__body'>
						<Route path='/room/:roomId'>
							<Sidebar />
							<Chat />
						</Route>
					</div>
				</>
			</Switch>
		</Router>
	)
}

export default App
