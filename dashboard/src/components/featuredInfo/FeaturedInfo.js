import React from 'react';
import './featuredInfo.css';

export default function FeaturedInfo() {
	return (
		<>
			<div className="featured">
				<div className="featuredItem">
					<span className="featuredTitle">Revenue</span>
					<div className="featuredMoneyContainer">
						<span className="featuredMoney">$2,415</span>
						<span className="featuredMoneyRate">
							-11.4 <i className="featuredIcon negative fa-solid fa-arrow-down"></i>
						</span>
					</div>
					<span className="featuredSubtitle">Compared to last month</span>
				</div>
				<div className="featuredItem">
					<span className="featuredTitle">Sales</span>
					<div className="featuredMoneyContainer">
						<span className="featuredMoney">$6,415</span>
						<span className="featuredMoneyRate">
							-1.4 <i className="featuredIcon negative fa-solid fa-arrow-down"></i>
						</span>
					</div>
					<span className="featuredSubtitle">Compared to last month</span>
				</div>
				<div className="featuredItem">
					<span className="featuredTitle">Cost</span>
					<div className="featuredMoneyContainer">
						<span className="featuredMoney">$12,425</span>
						<span className="featuredMoneyRate">
							+7.4 <i className="featuredIcon fa-solid fa-arrow-up"></i>
						</span>
					</div>
					<span className="featuredSubtitle">Compared to last month</span>
				</div>
			</div>
		</>
	);
}