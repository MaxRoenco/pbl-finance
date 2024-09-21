import styles from './Login.module.css'
import { Link } from 'react-router-dom';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Navigate, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { authContext } from '../../hooks/Context';

const Login = () => {
    const { isRegistered, setIsRegistered } = useContext(authContext);
    const [info, setInfo] = useState({ username: '', password: '' });
    const [redirect, setRedirect] = useState('');
    let handleLogIn = () => {
        let user = {
            username: info.username,
            password: info.password,
        }
        login(user)
    }

    const login = async (user) => {
        try {
            // Send a POST request to the JSON Server to add the new user
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error('Error while logging in');
            }

            const res = await response.json();
            if(res.exists === 'true') {
                localStorage.setItem("isRegistered", true);
                console.log("login Successful");
                setRedirect("dashboard");
                setIsRegistered(true);
            } else {
                console.log("Account doesn't exist")
                setRedirect("login");
            }

        } catch (err) {
            console.error('Error during login:', err);
        }
    };

    if(redirect) {
        return <Navigate to={"/"+redirect }/>;
    }

    return (
        <>
            <div className={styles.container}>
                <Link to='/' className={styles.arrowContainer}>
                    <img className={styles.arrow} src="arrow.svg" alt="" />
                </Link>
                <div className={styles.loginContainer}>
                    <h1>Log In <img data-tooltip-id="my-tooltip-1" src="/question_icon.png" alt="" /></h1>
                    <div className={styles.account}>
                        <h1>Account</h1>
                        <div>
                            <input type="name" placeholder='Username' onChange={(e) => setInfo({ ...info, username: e.target.value })}/>
                            <img src="/user.svg" alt="" />
                        </div>
                        <div>
                            <input type="password" placeholder='Password' onChange={(e) => setInfo({ ...info, password: e.target.value })} />
                            <img src="/key.svg" alt="" />
                        </div>
                        <Link to='/forgot'><p>Forgot your password?</p></Link>
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.remember}>
                            <input type="checkbox" name="remember"/>
                            <label htmlFor="remember">Remember Me</label>
                        </div>
                        <button className={styles.logIn} onClick={handleLogIn}>Log in</button>
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
            <ReactTooltip
                id="my-tooltip-1"
                content="Enter your email and password"
                place="right"
            />
        </>
    );
}

export default Login;