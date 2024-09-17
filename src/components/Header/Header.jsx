import styles from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <Link to='/' className={styles.logo}>Logo</Link>
                <ul className={styles.links}>
                    <Link to='/dashboard' className={styles.linkItem}>Dashboard</Link>
                    <Link to='/portfolio' className={styles.linkItem}>Portfolio</Link>
                    <Link to='/profile' className={styles.linkItem}>Profile</Link>
                </ul>
                <div className={styles.logout}>Logout</div>
            </div>
        </>
    );
}

export default Header;