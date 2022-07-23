import React from 'react';
import './home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';
import Chart from '../../components/charts/Chart';
import { UserData } from '../../DummyData';

export default function Home() {
	return (
		<>
			<div className="home">
				<FeaturedInfo />
				<Chart data={UserData} title="User Analytics" line_key="User Count" x_name="name" />
				<div className="homeWidgets">
					<WidgetSmall />
					<WidgetLarge />
				</div>
			</div>
		</>
	);
}