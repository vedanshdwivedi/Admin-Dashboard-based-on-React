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
							src="https://avatars.githubusercontent.com/u/25373561?v=4"
							alt=""
						></img>
						<div className="widgetSmallUser">
							<span className="widgetSmallUsername">Vedansh Dwivedi</span>
							<span className="widgetSmallJob">Software Engineer</span>
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