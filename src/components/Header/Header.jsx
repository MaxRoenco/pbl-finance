import styles from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>Icon</div>
                <ul className={styles.links}>
                    <Link to='/' className={styles.linkItem}>Markets</Link>
                    <Link to='/portfolio' className={styles.linkItem}>Portfolio</Link>
                    <Link to='/profile' className={styles.linkItem}>Profile</Link>
                </ul>
                <div className={styles.logout}>Logout</div>
            </div>
        </>
    );
}

export default Header;