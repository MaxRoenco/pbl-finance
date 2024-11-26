import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/700.css";
import { useEffect } from 'react';
import { authContext } from '../../hooks/Context';

const Home = () => {
    const { users, setIsRegistered } = useContext(authContext);
    const {lightMode, setLightMode} = useContext(authContext);

    const logOut = (() => {
        localStorage.setItem("isRegistered", false);
        localStorage.setItem("id", "");
        setIsRegistered(false)
    })
    useEffect(() => {
        const value = JSON.parse(localStorage.getItem('isRegistered')); // Retrieve and parse the value from localStorage
        if (value) {
            setIsRegistered(value); // Update the isRegistered state if value is truthy
        }
    }, [setIsRegistered]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Link to='/' className={styles.logo}><img className={styles.logoImg+(lightMode?(" "+styles.img_light):"")} src="/logo.svg" /></Link>
                    <ul className={styles.links+(lightMode?(" text-black"):"")}>
                        <li>
                            <Link to='/preferences' className={styles.linkItem}>Preferences</Link>
                        </li>
                        <li>
                            <Link to='/features' className={styles.linkItem}>Features</Link>
                        </li>
                        <li>
                            <Link to='/pricing' className={styles.linkItem}>Pricing</Link>
                        </li>
                        <li>
                            <Link to='/faq' className={styles.linkItem}>FAQ</Link>
                        </li>
                        <li>
                            <Link to='/contact-us' className={styles.linkItem}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.main + (lightMode?" text-black":"")}>
                    <Link to={'/dashboard'} className={styles.discoverMore}>Discover More <img src="/external_link.png" /></Link>
                    <h1 className={styles.title + (lightMode?" text-black":"")}>Invest Smarter, Trade Together</h1>
                    <p className={styles.main_p+(lightMode?" text-black":"")}>Real-time Market Insights, Group Investment Tools and Personalized Strategies
                        -Empowering You to Make Smarter Financial Moves.
                    </p>
                    <div className={styles.buttons}>
                        {localStorage.getItem("isRegistered") === 'true'? 
                        <Link to={'/'} onClick={logOut} className={styles.register+(lightMode?(" text-black"):"")}><button>Log out</button></Link>
                        :
                        <>
                            <Link to={'/login'} className={styles.login+(lightMode?(" text-black"):"")}><img className={lightMode?styles.invert:""} src="/login.png" />Log In</Link>
                            <Link to={'/register'} className={styles.register+(lightMode?(" text-black"):"")}><img className={lightMode?styles.invert:""} src="/register.png" />Register</Link>
                        </> 
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
