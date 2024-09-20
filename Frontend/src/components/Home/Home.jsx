import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/700.css";
import { useEffect } from 'react';
import { authContext } from '../../hooks/Context';

const Home = () => {
    const { users, setIsRegistered } = useContext(authContext);

    const logOut = (() => {
        localStorage.setItem("isRegistered", false);
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
                    <Link to='/' className={styles.logo}><img className={styles.logoImg} src="/logo.svg" /></Link>
                    <ul className={styles.links}>
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
                <div className={styles.main}>
                    <Link to={'/dashboard'} className={styles.discoverMore}>Discover More <img src="/external_link.png" /></Link>
                    <h1 className={styles.title}>Invest Smarter, Trade Together</h1>
                    <p>Real-time Market Insights, Group Investment Tools and Personalized Strategies
                        -Empowering You to Make Smarter Financial Moves.
                    </p>
                    <div className={styles.buttons}>
                        {localStorage.getItem("isRegistered") === 'false'? <>
                            <Link to={'/login'} className={styles.login}><img src="/login.png" />Log In</Link>
                            <Link to={'/register'} className={styles.register}><img src="/register.png" />Register</Link>
                        </> 
                        :
                        <Link to={'/'} className={styles.register}><button onClick={logOut}>Log out</button></Link>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
