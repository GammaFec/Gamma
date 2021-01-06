import React, { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }: RouteProps) {
    const someLoginValidation = () => true;

    return (
        <Route
            {...rest}
            render={({ location }) => (someLoginValidation() ? children : <Redirect to="/login" />)}
        />
    );
}
