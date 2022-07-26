import React from 'react';
import './user.css';

export default function User(prop) {
	return (
		<>
			<div className="user">
				<div className="userTitleContainer">
					<h1 className="userTitle">Edit User</h1>
					<button className="userAddButton">Create</button>
				</div>
				<div className="userContainer">
					<div className="userDisplay">
						<div className="userShowTop">
							<img
								className="userShowImage"
								src="https://avatars.githubusercontent.com/u/25373561?v=4"
								alt=""
							/>
							<div className="userShowTopTitle">
								<span className="userShowUsername">Vedansh Dwivedi</span>
								<span className="userShowJob">Software Engineer</span>
							</div>
						</div>
						<div className="userShowBottom">
							<span className="userShowTitle">Account Details</span>
							<div className="userShowInfo">
								<i class="userShowIcon fa-solid fa-user"></i>
								<span className="userShowInfoTitle">vedanshdwivedi0</span>
							</div>
							<div className="userShowInfo">
								<i class="userShowIcon fa-solid fa-calendar-days"></i>
								<span className="userShowInfoTitle">14 Jan 1999</span>
							</div>
							<span className="userShowTitle">Contact Details</span>
							<div className="userShowInfo">
								<i class="userShowIcon fa-solid fa-phone"></i>
								<span className="userShowInfoTitle">+91 82100 84655</span>
							</div>
							<div className="userShowInfo">
								<i class="userShowIcon fa-solid fa-at"></i>
								<span className="userShowInfoTitle">vedansh@gmail.com</span>
							</div>
							<div className="userShowInfo">
								<i class="userShowIcon fa-solid fa-location-dot"></i>
								<span className="userShowInfoTitle">Jamshedpur, Jharkhand</span>
							</div>
						</div>
					</div>
					<div className="userUpdate">Update</div>
				</div>
			</div>
		</>
	);
}