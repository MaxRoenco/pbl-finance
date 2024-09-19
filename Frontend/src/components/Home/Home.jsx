import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/700.css";

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
                    <Link to='/' className={styles.logo}><img className={styles.logoImg} src="/logo.png"/></Link>
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
                    <Link to={'/dashboard'} className={styles.discoverMore}>Discover More <img src="/external_link.png"/></Link>
                    <h1 className={styles.title}>Invest Smarter, Trade Together</h1>
                    <p>Real-time Market Insights, Group Investment Tools and Personalized Strategies
                        -Empowering You to Make Smarter Financial Moves.
                    </p>
                    <div className={styles.buttons}>
                        <div className={styles.login}><img src="/login.png"/>Log In</div>
                        <div className={styles.register}><img src="/register.png"/>Register</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
