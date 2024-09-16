import styles from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>Icon</div>
                <ul className={styles.links}>
                    <Link to='/'>Markets</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/profile'>Profile</Link>
                </ul>
            </div>
        </>
    );
}

export default Header;