import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './LeftBar.module.css';
import { useState, useEffect, useContext } from 'react';
import { authContext } from '../../hooks/Context';

const LeftBar = () => {
    const location = useLocation(); // Get the current route
    const { userData } = useContext(authContext);
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
                    <Link to='/bubbles' className={`${styles.linkItem} ${location.pathname === '/bubbles' ? styles.selected : ''}`}>
                        <img src="/bubble.png" style={{ filter: 'invert(1)' }} alt="" /> Bubbles
                    </Link>
                </ul>
                <div className={styles.lowerWrapper}>
                    <div className={styles.settings}>
                        <div><img src="/gear.png" alt="" /> Settings</div>
                        <div><img src="/bell.png" alt="" /> Notifications</div>
                    </div>
                    <div className={styles.infoContainer}>
                        <img src="/profilepic.png" alt="Profile" />
                        <div className={styles.info}>
                            <h1>{userData.firstName + ' ' + userData.lastName}</h1>
                            <p>@{userData.username}</p>
                            <h6>Log out</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftBar;
