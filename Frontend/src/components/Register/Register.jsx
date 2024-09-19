import styles from './Register.module.css';
import { useEffect, useContext, useState } from 'react';
import { authContext } from '../../hooks/Context';

const Register = () => {
    const { users, register, error, isLoading, isRegistered, setIsRegistered } = useContext(authContext);
    const [newUser, setNewUser] = useState({ email: '', password: '' });
    const [validationError, setValidationError] = useState('');

    useEffect(() => {
        if (users) {
            console.log(users);
            console.log(isRegistered);
        }
    }, [users]);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        return passwordRegex.test(password);
    };

    const handleRegister = async () => {
        if (!validateEmail(newUser.email)) {
            setValidationError('Invalid email format');
            return;
        }
        if (!validatePassword(newUser.password)) {
            setValidationError('Password must be at least 6 characters long, contain a number and an uppercase letter');
            return;
        }

        const userToAdd = {
            id: users.length.toString(),
            email: newUser.email,
            password: newUser.password,
        };
        register(userToAdd);

        setIsRegistered(true);

    };

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
            <button className={styles.register} onClick={handleRegister}>Register</button>
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
