import styles from './Register.module.css';
import { useEffect, useContext, useState } from 'react';
import { authContext } from '../../hooks/Context';
import { Navigate, useNavigate } from 'react-router-dom';

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
        <div className={styles.container}>
            <label>Log In</label>
            <p>Account</p>
            <input
                type="email"
                placeholder='Username'
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <input
                type="password"
                placeholder='Password'
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />
            {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
            <label>Forgot your password?</label>
            <div>
                <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label>Remember me</label>
                <button className={styles.register} onClick={handleRegister}>Register</button>
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div>
                {users && users.map((user) => (
                    <p key={user.id}>{user.email}</p>
                ))}
            </div>
        </div>
    );
};

export default Register;
