import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './LeftBar.module.css';
import { useState, useEffect, useContext } from 'react';
import { authContext } from '../../hooks/Context';

const LeftBar = () => {
    const location = useLocation(); // Get the current route
    const { userData, lightMode, seLightMode } = useContext(authContext);
    return (
        <div className={`${styles.mainContainer} sm:w-[315px] sm:text-[16px] text-[12px]`}>
            <div className={`${styles.container} ${lightMode ? "bg-light-secondary text-black" : ""}`}>
                <ul className={styles.links}>
                    <Link to='/dashboard' className={`${styles.linkItem} ${location.pathname === '/dashboard' ? styles.selected : ''}`}>
                        <img src="/dashboard.png" className={`${lightMode ? "invert" : ""}`} alt="" /> Dashboard
                    </Link>
                    <Link to='/portfolio' className={`${styles.linkItem} ${location.pathname === '/portfolio' ? styles.selected : ''}`}>
                        <img src="/portfolio.png" className={`${lightMode ? "invert" : ""}`} alt="" /> My Portfolio
                    </Link>
                    <Link to='/profile' className={`${styles.linkItem} ${location.pathname === '/profile' ? styles.selected : ''}`}>
                        <img src="/profile.png" className={`${lightMode ? "invert" : ""}`} alt="" /> Profile
                    </Link>
                    <Link to='/assets' className={`${styles.linkItem} ${location.pathname === '/assets' ? styles.selected : ''}`}>
                        <img src="/assets.png" className={`${lightMode ? "invert" : ""}`} alt="" /> Assets
                    </Link>
                    <Link to='/bubbles' className={`${styles.linkItem} ${location.pathname === '/bubbles' ? styles.selected : ''}`}>
                        <img src="/bubble.png"  className={`${lightMode ? "" : "invert"}`} alt="" /> Bubbles
                    </Link>
                </ul>
                <div className={styles.lowerWrapper}>
                    <div className={styles.settings}>
                        <Link to='/settings' className={`${styles.linkItem1} ${location.pathname === '/settings' ? styles.selected : ''}`}>
                            <img src={`${lightMode ? "gearLight.svg" : "gear.png"}`} alt="gear" /> 
                            Settings
                        </Link>
                        <Link to='/notifications' className={`${styles.linkItem1} ${location.pathname === '/notifications' ? styles.selected : ''}`}>
                            <img src={`${lightMode ? "bellLight.svg" : "bell.png"} `} alt="bell" className='' /> 
                            Notifications
                        </Link>
                    </div>
                    <div className={styles.infoContainer}>
                        <img src={`${lightMode ? "profileLight.svg" : "/profilepic.png"}`} alt="Profile" />
                        <div className={`${styles.info}`}>
                            <h1>{userData.firstName + ' ' + userData.lastName}</h1>
                            <p className={`${lightMode ? "text-black": ""}`}>@{userData.username}</p>
                            <h6 className={`${lightMode ? "text-black": "text-rgba(255, 255, 255, 0.3)"}`}>Log out</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftBar;
