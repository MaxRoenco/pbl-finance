import styles from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div className={styles.logoContainer}>
                <div className={styles.rightContainer}>
                    <Link to='/' className={styles.logo}>Logo</Link>
                    <div className={styles.path}>icon {'>'} Dashboard</div>
                    <div className={styles.loopContainer}>
                        <div className={styles.loop} type='text'>
                            <img src="" alt="icon" />
                            <p>Search</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;