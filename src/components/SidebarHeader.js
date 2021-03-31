import './SidebarHeader.css'
import React from 'react'

function SidebarHeader() {
	return (
		<div className='sidebarHeader'>
			<div className='sidebarHeader__title'>
				<h2>Hands-on-React</h2>

				<i className='fas fa-chevron-down'></i>
			</div>
			<div className='sidebarHeader__icon'>
				<i className='far fa-edit'></i>
			</div>
		</div>
	)
}

export default SidebarHeader
