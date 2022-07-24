import React from 'react';
import './charts.css';

import { LineChart, Line, XAxis, Legend, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart(props) {
	return (
		<>
			<div className="chart">
				<h3 className="chartTitle">{props.title}</h3>
				<ResponsiveContainer width="100%" aspect={4 / 1}>
					<LineChart data={props.data}>
						<XAxis dataKey={props.x_name} stroke="#5550bd"></XAxis>
						<Line type="monotone" dataKey={props.line_key}></Line>
						<Tooltip />
						<CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
					<Legend />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</>
	);
}