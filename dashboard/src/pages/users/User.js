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
					<div className="userUpdate">
						<span className="userUpdateTitle">Edit</span>
						<form className="userUpdateForm">
							<div className="userUpdateLeft">
								<div className="userUpdateItem">
									<label>Username</label>
									<input
										type="text"
										placeholder="vedanshdwivedi0"
										className="userUpdateInput"
									/>
								</div>
								<div className="userUpdateItem">
									<label>Full Name</label>
									<input
										type="text"
										placeholder="Vedansh Dwivedi"
										className="userUpdateInput"
									/>
								</div>
								<div className="userUpdateItem">
									<label>Email</label>
									<input
										type="text"
										placeholder="vedansh@gmail.com"
										className="userUpdateInput"
									/>
								</div>
								<div className="userUpdateItem">
									<label>Phone</label>
									<input
										type="text"
										placeholder="+91 82100 84655"
										className="userUpdateInput"
									/>
								</div>
								<div className="userUpdateItem">
									<label>Address</label>
									<input
										type="text"
										placeholder="Jamshedpur, Jharkhand"
										className="userUpdateInput"
									/>
								</div>
							</div>
							<div className="userUpdateRight">
								<div className="userUpdateUpload">
									<img
										className="userUpdateImage"
										src="https://avatars.githubusercontent.com/u/25373561?v=4"
										alt=""
									/>
									<label htmlFor="file">
										<i class="fa-solid fa-upload userUpdateIcon"></i>
									</label>
									<input
										type="file"
										id="file"
										className="userUpdate"
										style={{ display: 'none' }}
									/>
								</div>
								<button className="userUpdateButton">Update</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}