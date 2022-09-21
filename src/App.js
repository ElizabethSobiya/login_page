import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from './components/Profile/Profile'
import Project from './components/Projects/Projects'
import './App.css'

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/dashboard" exact element={<Dashboard />} />}
			<Route path="/register" exact element={<Register />} />
			<Route path="/login" exact element={<Login />} />
      <Route path="/profile" exact element={<Profile />} />
      <Route path="/project" exact element={<Project />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
