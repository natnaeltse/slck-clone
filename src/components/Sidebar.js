import './Sidebar.css'
import React from 'react'
import SidebarHeader from './SidebarHeader'
import SidebarComponent from './SidebarComponent'
import SidebarChannels from './SidebarChannels'
import SidebarDirectMessages from './SidebarDirectMessages'

function Sidebar() {
	return (
		<div className='sidebar'>
			<SidebarHeader />
			<div className='sidebar__top'>
				<SidebarComponent icon='far fa-comments' title='All DMs' className='' />
				<SidebarComponent
					icon='fas fa-at'
					title='Mentions & Reactions'
					className=''
				/>
				<SidebarComponent
					icon='fas fa-ellipsis-v'
					title='More'
					className='more'
				/>
			</div>
			<SidebarChannels />
			<SidebarDirectMessages />
		</div>
	)
}

export default Sidebar
