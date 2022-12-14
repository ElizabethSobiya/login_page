import styles from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
	const navigate = useNavigate()
	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate('/');
	};
	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>DashBoard</h1>
                <Link to="/profile"><h2>Profile</h2></Link>
                <Link to="/project"> <h2>Projects</h2></Link>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Dashboard;
