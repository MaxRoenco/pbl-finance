import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../hooks/Context';

const ProtectedRoute = ({ children }) => {

    const { isRegistered } = useContext(authContext);

    return isRegistered ? children : <Navigate to="/register" />;
};

export default ProtectedRoute;
