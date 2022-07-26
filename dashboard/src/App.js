import React from 'react';
import TopBar from './components/topbar/TopBar';
import SideBar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userlist/userList';
import User from './pages/users/User';
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
						<Route path="/users" element={<UserList />} />
						<Route path="/user/:userId" element={<User />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;