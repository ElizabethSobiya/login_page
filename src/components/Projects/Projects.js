import React from 'react'
import styles from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";

function Projects() {

  const navigate = useNavigate()
	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate('/');
	};
  return (
  <>
 <div className={styles.main_container}>
			<nav className={styles.navbar}>
            <Link to="/dashboard"><h1>Projects</h1></Link>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
        <div className={styles.projects_container}>
            <div className={styles.table_container}>
            <table>
            <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Contact</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>alfreds@gail.com</td>
    <td>254523648</td>
  </tr>
  <tr>
    <td>Maria Anders</td>
    <td>maria@gamil.com</td>
    <td>554892148</td>
  </tr>
            </table>
            </div>
        </div>
  </>
  )
}

export default Projects
