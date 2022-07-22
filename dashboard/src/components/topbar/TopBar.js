import React from 'react';
import './topbar.css';

export default function TopBar() {
	const navbarStyle = {
		'z-index': 999,
	};
	return (
		<>
			<nav className="navbar fixed-top navbar-dark bg-dark text-light" style={navbarStyle}>
				<div className="container-fluid">
					<a className="navbar-brand">Dashboard</a>
					<div className="d-flex iconContainer">
						<div className="navbar-icons">
							<i className="fa-regular fa-bell"></i>
							<span className="notification-badge"> 2</span>
						</div>
						<div className="navbar-icons">
							<i className="fa-solid fa-globe"></i>
							<span className="notification-badge"> 5</span>
						</div>
						<div className="navbar-icons">
							<i className="fa-solid fa-gear"></i>
						</div>
						<div className="navbar-icons"></div>
						<img
							className="topAvatar"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
							alt=""
						/>
					</div>
				</div>
			</nav>
		</>
	);
}