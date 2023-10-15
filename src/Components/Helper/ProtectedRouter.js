import React, { useContext } from 'react';
import { userContext } from '../../userContext';
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({ children }) => {
    const { login } = useContext(userContext);

    return login ? children : <Navigate to="/login" />;
};

export default ProtectedRouter;
