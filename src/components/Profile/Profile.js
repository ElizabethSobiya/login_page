import React from 'react'
import styles from "./style.module.css";
import { Link , useNavigate} from "react-router-dom";

function Profile() {
  const navigate = useNavigate()
	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate('/');
	};
  return (
    <>
    <div className={styles.main_container}>
			<nav className={styles.navbar}>
            <Link to="/dashboard"><h1>Profile</h1></Link>
				
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
    <div className={styles.profile_container}>
   <div className={styles.profile_form}>
    <h1>Customer Info</h1>
   <form>
      <label>Date of birth : </label>
      <input type="date" />
      <br />
      <br />
      <label htmlFor="">Address :</label>
      <textarea name="" id="" cols="50" rows="5"></textarea>
    </form>
   </div>
    </div>
    </>
  )
}

export default Profile
