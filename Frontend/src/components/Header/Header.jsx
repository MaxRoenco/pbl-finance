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
            <div className={`${styles.logoContainer} ${lightMode ? "bg-light-primary" : "bg-black"}`} >
                    <Link to='/' className={styles.logo}><img className={`${styles.img} ${lightMode?"invert":""}`} src="logo.png" alt="logo" /></Link>
                    <div className={`${styles.path} ${lightMode ? "text-light-tertiary" : ""}`}><img src="/home.png" className={`${lightMode ? "invert" : ""}`} alt="homeIcon" />{`${location}`}</div>
                    <div className={styles.loopContainer}>
                        <div className={`${styles.loop} ${lightMode ? "bg-light-secondary" : ""}`} type='text'>
                            <img src={`${lightMode ? "loopDark.svg" : "/search.png"}`} alt="icon" />
                            <p className={`${lightMode ? "text-light-tertiary" : ""}`} >Search</p>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Header;