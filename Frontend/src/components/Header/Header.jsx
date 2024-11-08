import { useContext } from 'react';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { authContext } from '../../hooks/Context';


const Header = () => {
    let {lightMode, setLightMode} = useContext(authContext);
    let location = useLocation();
    location = location.pathname.slice(1);
    location = location.charAt(0).toUpperCase() + location.slice(1);
    return (
        <>
            <div className={styles.logoContainer}>
                    <Link to='/' className={styles.logo}><img className={styles.img} src="/logo.png" alt="" /></Link>
                    <div className={styles.path}><img src="/home.png" alt="" />{`${location}`}</div>
                    <div className={styles.loopContainer}>
                        <div className={styles.loop} type='text'>
                            <img src="/search.png" alt="icon" />
                            <p>Search</p>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Header;