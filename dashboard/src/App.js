import React from 'react';
import TopBar from './components/topbar/TopBar';
import SideBar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import './app.css';

function App() {
	return (
		<div className="App">
			<TopBar />
			<div className="PageContainer">
				<SideBar />
				<Home />
			</div>
		</div>
	);
}

export default App;