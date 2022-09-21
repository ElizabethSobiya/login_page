import React from 'react'
import styles from "./style.module.css";
import { Link } from "react-router-dom";

function Projects() {

    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
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
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
            </table>
            </div>
        </div>
  </>
  )
}

export default Projects
