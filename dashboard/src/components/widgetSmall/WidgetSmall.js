import React from 'react';
import './widgetSmall.css';

export default function WidgetSmall() {
	return (
		<>
			<div className="widgetSmall">
				<span className="widgetSmallTitle">Newly Joined Members</span>
				<ul className="widgetSmallList">
					<li className="widgetSmallListItem">
						<img
							className="widgetSmallImage"
							src="https://avatars.githubusercontent.com/u/25373561?v=4"
							alt=""
						></img>
						<div className="widgetSmallUser">
							<span className="widgetSmallUsername">Vedansh Dwivedi</span>
							<span className="widgetSmallJob">Software Engineer</span>
						</div>
						<button className="widgetSmallButton">
							<i class="fa-solid fa-eye"></i> Display
						</button>
					</li>
					<li className="widgetSmallListItem">
						<img
							className="widgetSmallImage"
							src="https://cxociety.com/wp-content/uploads/2022/04/Cathy-photo-683x1024.jpg"
							alt=""
						></img>
						<div className="widgetSmallUser">
							<span className="widgetSmallUsername">Tracy Scott</span>
							<span className="widgetSmallJob">Graphics Designer</span>
						</div>
						<button className="widgetSmallButton">
							<i class="fa-solid fa-eye"></i> Display
						</button>
					</li>
					<li className="widgetSmallListItem">
						<img
							className="widgetSmallImage"
							src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
							alt=""
						></img>
						<div className="widgetSmallUser">
							<span className="widgetSmallUsername">Treesa Adams</span>
							<span className="widgetSmallJob">Devops Engineer</span>
						</div>
						<button className="widgetSmallButton">
							<i class="fa-solid fa-eye"></i> Display
						</button>
					</li>
					<li className="widgetSmallListItem">
						<img
							className="widgetSmallImage"
							src="https://static.toiimg.com/photo/83890830/83890830.jpg?v=3"
							alt=""
						></img>
						<div className="widgetSmallUser">
							<span className="widgetSmallUsername">Adam Johnson</span>
							<span className="widgetSmallJob">Data Scientist</span>
						</div>
						<button className="widgetSmallButton">
							<i class="fa-solid fa-eye"></i> Display
						</button>
					</li>
					<li className="widgetSmallListItem">
						<img
							className="widgetSmallImage"
							src="https://theadultman.com/wp-content/uploads/2020/09/How-to-tell-if-a-girl-likes-you-Attractive-woman-playing-with-her-hair-and-smiling-straight-down-the-camera.jpg"
							alt=""
						></img>
						<div className="widgetSmallUser">
							<span className="widgetSmallUsername">Bella James</span>
							<span className="widgetSmallJob">Full Stack Engineer</span>
						</div>
						<button className="widgetSmallButton">
							<i className="widgetSmallButtonIcon fa-solid fa-eye"></i> Display
						</button>
					</li>
				</ul>
			</div>
		</>
	);
}