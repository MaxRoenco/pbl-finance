import styles from './Login.module.css'

const Login = () => {
    return (
        <>
            <div className={styles.container}>
                <label>Log In</label>
                <p>Account</p>
                <input type="name" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <label>Forgot your password?</label>
                <button className={styles.logIn}>Log in</button>
            </div>
        </>
    );
}

export default Login;