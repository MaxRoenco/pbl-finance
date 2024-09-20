import styles from './Login.module.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className={styles.container}>
                <img src="arrow.svg" alt="" />
                <div className={styles.loginContainer}>
                    <h1>Log In <img src="/question_icon.png" alt="" /></h1>
                    <div className={styles.account}>
                        <h1>Account</h1>
                        <div>
                            <input type="name" placeholder='Username' />
                            <img src="/user.svg" alt="" />
                        </div>
                        <div>
                            <input type="password" placeholder='Password' />
                            <img src="/key.svg" alt="" />
                        </div>
                        <p>Forgot your password?</p>
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.remember}>
                            <input type="checkbox" name="remember"/>
                            <label htmlFor="remember">Remember Me</label>
                        </div>
                        <button className={styles.logIn}>Log in</button>
                    </div>
                </div>
                <div className={styles.banner}>
                    <img className={styles.logo} src="/logo.svg" alt="" />
                    <h1>Invest Smarter,<br/>Trade Together</h1>
                    <img className={styles.illustration} src="/login_img.svg" alt="" />
                    <div className={styles.navigation}>
                        <Link to='/faq' className={styles.linkItem}>FAQ</Link>
                        <Link to='/contact-us' className={styles.linkItem}>Contact Us</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;