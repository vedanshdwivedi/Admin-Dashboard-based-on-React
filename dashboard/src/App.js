import React from 'react';
import TopBar from './components/topbar/TopBar';
import SideBar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Users from './pages/users/users';
import './app.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<TopBar />
			<div className="PageContainer">
				<SideBar />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/users" element={<Users />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;