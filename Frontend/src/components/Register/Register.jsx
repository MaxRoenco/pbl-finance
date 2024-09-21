import styles from './Register.module.css';
import { useEffect, useContext, useState } from 'react';
import { authContext } from '../../hooks/Context';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Tooltip as ReactTooltip } from "react-tooltip";

const Register = () => {

    const { users,
        register,
        error,
        isLoading,
        isRegistered,
        setIsRegistered } = useContext(authContext);
    const [newUser, setNewUser] = useState({ username: '', firstName: '', lastName: '', email: '', phoneNumber: '', password: '', passwordRepeat: '' });
    const [isGood, setIsGood] = useState(false);
    const [validationError, setValidationError] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const value = JSON.parse(localStorage.getItem('isRegistered'));
        if (value) {
            setIsRegistered(value);
        }
        if (isRegistered) {
            navigate('/');
        }
    }, [isRegistered, navigate]);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        return passwordRegex.test(password);
    };

    const handleRegister = () => {
        if (!validateEmail(newUser.email)) {
            setValidationError('Invalid email format');
            setIsGood(false);
            return;
        }
        if (!validatePassword(newUser.password)) {
            setValidationError('Password must be at least 6 characters long, contain a number and an uppercase letter');
            setIsGood(false);
            return;
        }

        if (newUser.password !== newUser.passwordRepeat) {
            setValidationError('Confirm Password does not match the first Password.');
            setIsGood(false);
            return;
        }

        console.log(newUser)
        for (const [key, value] of Object.entries(newUser)) {
            if(value === '') {
                setValidationError(`Please fill in your ${key}.`)
                setIsGood(false);
                return;
            }
        }

        console.log(newUser);
        if (rememberMe) {
            localStorage.setItem("isRegistered", true);
        }

        setIsGood(true);
        setValidationError('');

        const userToAdd = {
            username: newUser.username,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            phoneNumber: newUser.phoneNumber,
            password: newUser.password,
        };
        console.log('User to register:', userToAdd);

        (async () => {
            let res = await register(userToAdd);
            console.log(res);
            if(res.exists === 'username') {
                setValidationError(`This username already exists, try another one.`);
                setIsGood(false);
                return;
            }
            if(res.exists === 'email') {
                setValidationError(`This email already exists, try to login into your account.`);
                setIsGood(false);
                return;
            }
            setIsRegistered(true);
            setRedirect(true);
        })();
        
    };

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <div className={styles.container}>
                <Link to='/' className={styles.arrowContainer}>
                    <img className={styles.arrow} src="arrow.svg" alt="" />
                </Link>
                <div className={styles.loginContainer}>
                    <h1>Register<img data-tooltip-id="my-tooltip-1" src="/question_icon.png" alt="" /></h1>
                    <div className={styles.account}>
                        <div className={styles.first}>
                            <label>Username</label>
                            <input
                                type="text"
                                placeholder='ex. janedoe'
                                value={newUser.username}
                                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>First Name</label>
                            <input
                                type="text"
                                placeholder='ex. Jane'
                                value={newUser.firstName}
                                onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input
                                type="text"
                                placeholder='ex. Doe'
                                value={newUser.lastName}
                                onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder='ex. janedoe@gmail.com'
                                value={newUser.email}
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>Phone number</label>
                            <input
                                type="tel"
                                placeholder='+(373) 12345678'
                                value={newUser.phoneNumber}
                                onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder='●●●●●●●●●'
                                value={newUser.password}
                                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                placeholder='●●●●●●●●●'
                                value={newUser.passwordRepeat}
                                onChange={(e) => setNewUser({ ...newUser, passwordRepeat: e.target.value })}
                            />
                        </div>
                    </div>
                    {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
                    <Link to='/login'><p>Already have an account?</p></Link>
                    <div className={styles.actions}>
                        <div className={styles.remember}>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="remember">Remember Me</label>
                        </div>
                        <button className={styles.logIn} onClick={handleRegister}>Register</button>
                        {isLoading && <p>Loading...</p>}
                        {error && <p>{error}</p>}
                    </div>
                </div>
                <div className={styles.banner}>
                    <img className={styles.logo} src="/logo.svg" alt="" />
                    <h1>Invest Smarter,<br />Trade Together</h1>
                    <img className={styles.illustration} src="/login_img.svg" alt="" />
                    <div className={styles.navigation}>
                        <Link to='/faq' className={styles.linkItem}>FAQ</Link>
                        <Link to='/contact-us' className={styles.linkItem}>Contact Us</Link>
                    </div>
                </div>
            </div>
            <ReactTooltip
                id="my-tooltip-1"
                content="Fill in your data to create a new account"
                place="right"
            />
        </>
    );
};

export default Register;
