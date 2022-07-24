import React from 'react';
import './widgetLarge.css';

export default function WidgetLarge() {
	const Button = ({ type }) => {
		return (
			<>
				<button className={'widgetLargeButton ' + type}>{type}</button>
			</>
		);
	};

	return (
		<>
			<div className="widgetLarge">
				<h3 className="widgetLargeTitle">Latest Transactions</h3>
				<table className="widgetLargeTable">
					<tr className="widgetLargeRow">
						<th className="widgetLargeHeader">Customer</th>
						<th className="widgetLargeHeader">Date</th>
						<th className="widgetLargeHeader">Amount</th>
						<th className="widgetLargeHeader">Status</th>
					</tr>
					<tr className="widgetLargeRow">
						<td className="widgetLargeUser">
							<img
								src="https://avatars.githubusercontent.com/u/25373561?v=4"
								alt=""
								className="widgetLargeUserImage"
							></img>
							<span className="widgetLargeUserName">Vedansh Dwivedi</span>
						</td>
						<td className="widgetLargeDate">2 June 2021</td>
						<td className="widgetLargeAmount">$122.00</td>
						<td className="widgetLargeStatus">
							<Button type="Approved" />
						</td>
					</tr>
					<tr className="widgetLargeRow">
						<td className="widgetLargeUser">
							<img
								src="https://cxociety.com/wp-content/uploads/2022/04/Cathy-photo-683x1024.jpg"
								alt=""
								className="widgetLargeUserImage"
							></img>
							<span className="widgetLargeUserName">Tracy Scott</span>
						</td>
						<td className="widgetLargeDate">21 June 2021</td>
						<td className="widgetLargeAmount">$124.00</td>
						<td className="widgetLargeStatus">
							<Button type="Declined" />
						</td>
					</tr>
					<tr className="widgetLargeRow">
						<td className="widgetLargeUser">
							<img
								src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
								alt=""
								className="widgetLargeUserImage"
							></img>
							<span className="widgetLargeUserName">Treesa Adams</span>
						</td>
						<td className="widgetLargeDate">16 August 2021</td>
						<td className="widgetLargeAmount">$172.50</td>
						<td className="widgetLargeStatus">
							<Button type="Pending" />
						</td>
					</tr>
					<tr className="widgetLargeRow">
						<td className="widgetLargeUser">
							<img
								src="https://theadultman.com/wp-content/uploads/2020/09/How-to-tell-if-a-girl-likes-you-Attractive-woman-playing-with-her-hair-and-smiling-straight-down-the-camera.jpg"
								alt=""
								className="widgetLargeUserImage"
							></img>
							<span className="widgetLargeUserName">Bella James</span>
						</td>
						<td className="widgetLargeDate">2 March 2021</td>
						<td className="widgetLargeAmount">$370.00</td>
						<td className="widgetLargeStatus">
							<Button type="Pending" />
						</td>
					</tr>
					<tr className="widgetLargeRow">
						<td className="widgetLargeUser">
							<img
								src="https://static.toiimg.com/photo/83890830/83890830.jpg?v=3"
								alt=""
								className="widgetLargeUserImage"
							></img>
							<span className="widgetLargeUserName">Adam Johnson</span>
						</td>
						<td className="widgetLargeDate">12 May 2021</td>
						<td className="widgetLargeAmount">$27.00</td>
						<td className="widgetLargeStatus">
							<Button type="Approved" />
						</td>
					</tr>
					<tr className="widgetLargeRow">
						<td className="widgetLargeUser">
							<img
								src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
								alt=""
								className="widgetLargeUserImage"
							></img>
							<span className="widgetLargeUserName">Treesa Adams</span>
						</td>
						<td className="widgetLargeDate">16 August 2021</td>
						<td className="widgetLargeAmount">$172.50</td>
						<td className="widgetLargeStatus">
							<Button type="Pending" />
						</td>
					</tr>
					<tr className="widgetLargeRow">
						<td className="widgetLargeUser">
							<img
								src="https://theadultman.com/wp-content/uploads/2020/09/How-to-tell-if-a-girl-likes-you-Attractive-woman-playing-with-her-hair-and-smiling-straight-down-the-camera.jpg"
								alt=""
								className="widgetLargeUserImage"
							></img>
							<span className="widgetLargeUserName">Bella James</span>
						</td>
						<td className="widgetLargeDate">2 March 2021</td>
						<td className="widgetLargeAmount">$370.00</td>
						<td className="widgetLargeStatus">
							<Button type="Pending" />
						</td>
					</tr>
					<tr className="widgetLargeRow">
						<td className="widgetLargeUser">
							<img
								src="https://static.toiimg.com/photo/83890830/83890830.jpg?v=3"
								alt=""
								className="widgetLargeUserImage"
							></img>
							<span className="widgetLargeUserName">Adam Johnson</span>
						</td>
						<td className="widgetLargeDate">12 May 2021</td>
						<td className="widgetLargeAmount">$27.00</td>
						<td className="widgetLargeStatus">
							<Button type="Approved" />
						</td>
					</tr>
				</table>
			</div>
		</>
	);
}