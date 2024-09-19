import styles from './LeftBar.module.css'
import { Link } from 'react-router-dom';

const LeftBar = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <ul className={styles.links}>
                        <Link to='/dashboard' className={styles.linkItem}>Dashboard</Link>
                        <Link to='/portfolio' className={styles.linkItem}>My Portfolio</Link>
                        <Link to='/profile' className={styles.linkItem}>Profile</Link>
                    </ul>
                    <div className={styles.settings}>
                        <div>Settings</div>
                        <div>Notifications</div>
                    </div>
                    <div className={styles.userContainer}>
                        <div className={styles.infoContainer}>
                            <img src="" alt="Profile" />
                            <div className={styles.info}>
                                <h1>Name Surname</h1>
                                <p>@username</p>
                                <h6>Log out</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftBar;