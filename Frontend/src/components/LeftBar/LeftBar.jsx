import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './LeftBar.module.css';

const LeftBar = () => {
    const location = useLocation(); // Get the current route

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <ul className={styles.links}>
                    <Link to='/dashboard' className={`${styles.linkItem} ${location.pathname === '/dashboard' ? styles.selected : ''}`}>
                        <img src="/dashboard.png" alt="" /> Dashboard
                    </Link>
                    <Link to='/portfolio' className={`${styles.linkItem} ${location.pathname === '/portfolio' ? styles.selected : ''}`}>
                        <img src="/portfolio.png" alt="" /> My Portfolio
                    </Link>
                    <Link to='/profile' className={`${styles.linkItem} ${location.pathname === '/profile' ? styles.selected : ''}`}>
                        <img src="/profile.png" alt="" /> Profile
                    </Link>
                    <Link to='/assets' className={`${styles.linkItem} ${location.pathname === '/assets' ? styles.selected : ''}`}>
                        <img src="/assets.png" alt="" /> Assets
                    </Link>
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
    );
}

export default LeftBar;
