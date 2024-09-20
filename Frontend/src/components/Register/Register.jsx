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
    const [newUser, setNewUser] = useState({ email: '', password: '' });
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
        console.log(newUser);
        if (rememberMe) {
            localStorage.setItem("isRegistered", true);
        }

        setIsGood(true);
        setValidationError('');

        const userToAdd = {
            id: users.length.toString(),
            email: newUser.email,
            password: newUser.password,
        };
        console.log('User to register:', userToAdd);
        register(userToAdd);

        setIsRegistered(true);
        setRedirect(true);
    };

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        // <div className={styles.container}>
        //     <label>Log In</label>
        //     <p>Account</p>
        //     <input
        //         type="email"
        //         placeholder='Username'
        //         value={newUser.email}
        //         onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        //     />
        //     <input
        //         type="password"
        //         placeholder='Password'
        //         value={newUser.password}
        //         onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        //     />
        //     {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
        //     <div>
        //         <input
        //             type="checkbox"
        //             checked={rememberMe}
        //             onChange={(e) => setRememberMe(e.target.checked)}
        //         />
        //         <label>Remember me</label>
        //         <button className={styles.register} onClick={handleRegister}>Register</button>
        //     </div>
        //     {isLoading && <p>Loading...</p>}
        //     {error && <p>{error}</p>}
        //     <div>
        //         {users && users.map((user) => (
        //             <p key={user.id}>{user.email}</p>
        //         ))}
        //     </div>
        // </div>
        <>
            <div className={styles.container}>
                <Link to='/' className={styles.arrowContainer}>
                    <img className={styles.arrow} src="arrow.svg" alt="" />
                </Link>
                <div className={styles.loginContainer}>
                    <h1>Register<img data-tooltip-id="my-tooltip-1" src="/question_icon.png" alt="" /></h1>
                    <div className={styles.account}>
                        <h1>Account</h1>
                        <div>
                            <input
                                type="email"
                                placeholder='Username'
                                value={newUser.email}
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            />
                            <img src="/user.svg" alt="" />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder='Password'
                                value={newUser.password}
                                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                            />
                            <img src="/key.svg" alt="" />
                        </div>
                        {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
                        <Link to='/login'><p>Already have an account?</p></Link>
                    </div>
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
                content="Enter your email and password"
                place="right"
            />
        </>
    );
};

export default Register;
