import React from 'react';
import TopBar from './components/topbar/TopBar';
import SideBar from './components/sidebar/Sidebar';
import './app.css';

function App() {
	return (
		<div className="App">
			<TopBar />
			<div className="PageContainer">
				<SideBar />
				<div className="OtherPages">Other Pages</div>
			</div>
		</div>
	);
}

export default App;