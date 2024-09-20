import { Navigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { authContext } from '../hooks/Context';

const ProtectedRoute = ({ children }) => {
    const { isRegistered, setIsRegistered } = useContext(authContext);

    useEffect(() => {
        const value = JSON.parse(localStorage.getItem('isRegistered'));
        setIsRegistered(value);
        console.log(isRegistered)
    }, [isRegistered, setIsRegistered]);

    return isRegistered ? children : <Navigate to="/register" />;
};

export default ProtectedRoute;
