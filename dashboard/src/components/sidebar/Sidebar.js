import React from 'react';
import './sidebar.css';

export default function Sidebar() {
	return (
		<>
			<div className="sidebar">
				<div className="sidebarWrapper">
					<div className="sidebarMenu">
						<h3 className="sidebarTitle">Options</h3>
						<ul className="sidebarList">
							<li className="sidebarListItem active">
								<i className="sidebarIcon fa-solid fa-house-chimney-user"></i> Home
							</li>
							<li className="sidebarListItem">
								<i className="sidebarIcon fa-solid fa-chart-pie"></i> Analytics
							</li>
							<li className="sidebarListItem">
								<i className="sidebarIcon fa-solid fa-sack-dollar"></i> Sales
							</li>
						</ul>

						<h3 className="sidebarTitle">Quick Menu</h3>
						<ul className="sidebarList">
							<li className="sidebarListItem">
								<i class="sidebarIcon fa-solid fa-users"></i> Users
							</li>
							<li className="sidebarListItem">
								<i class="sidebarIcon fa-solid fa-shop"></i> Products
							</li>
							<li className="sidebarListItem">
								<i class="sidebarIcon fa-solid fa-piggy-bank"></i> Transactions
							</li>
							<li className="sidebarListItem">
								<i class="sidebarIcon fa-solid fa-folder"></i> Reports
							</li>
						</ul>
						<h3 className="sidebarTitle">Notifications</h3>
						<ul className="sidebarList">
							<li className="sidebarListItem active">
								<i class="sidebarIcon fa-solid fa-at"></i> Mail
							</li>
							<li className="sidebarListItem">
								<i class="sidebarIcon fa-solid fa-comment"></i> Feedback
							</li>
							<li className="sidebarListItem">
								<i class="sidebarIcon fa-solid fa-envelope"></i> Messages
							</li>
						</ul>

						<h3 className="sidebarTitle">Staff</h3>
						<ul className="sidebarList">
							<li className="sidebarListItem">
								<i class="sidebarIcon fa-solid fa-list-check"></i> Manage
							</li>
							<li className="sidebarListItem">
								<i class="sidebarIcon fa-solid fa-magnifying-glass-chart"></i> Analytics
							</li>
							<li className="sidebarListItem">
								<i class="sidebarIcon fa-solid fa-sitemap"></i> Reports
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}