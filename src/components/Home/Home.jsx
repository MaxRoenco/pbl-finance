import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <div className={styles.layer1}>
                <img src="/background.png" alt="background" className={styles.backgroundHome} />
                <div className={`${styles.greenLight} ${styles.topRight}`}></div>
                <div className={`${styles.greenLight} ${styles.bottomLeft}`}></div>
            </div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Link to='/' className={styles.logo}>Investora Logo</Link>
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
                    <Link to={'/dashboard'} className={styles.discoverMore}>Discover More</Link>
                    <h1>Invest Smarter, Trade Together</h1>
                    <p>Real-time Market Insights, Group Investment Tools and Personalized Strategies
                        -Empowering You to Make Smarter Financial Moves.
                    </p>
                    <div className={styles.buttons}>
                        <div className={styles.login}>Log In</div>
                        <div className={styles.register}>Register</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
