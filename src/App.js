import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/dashboard" exact element={<Dashboard />} />}
			<Route path="/register" exact element={<Register />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
