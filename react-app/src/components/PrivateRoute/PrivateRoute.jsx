import React from "react";
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: ProtectedComponent, ...rest}) => {
    const getComponent = (props) => {
        return localStorage.getItem('authenticated') === 'true' ? <ProtectedComponent {...props}/> : <Redirect to="/login"/>
    };

    return (
        <Route {...rest} render={getComponent}/>
    )
};

export default PrivateRoute;
