import './Sidebar_Components.css'
import React from 'react'

function Sidebar_Component({ icon, title, className, children, id, display }) {
	return !children ? (
		<div
			className={`sidebar__components ${className}`}
			onClick={() => display(id)}>
			<i className={icon}></i>
			<p>{title}</p>
		</div>
	) : (
		<div
			className={`sidebar__components ${className}`}
			onClick={() => display(id)}>
			{children}
			<p>{title}</p>
		</div>
	)
}

export default Sidebar_Component
