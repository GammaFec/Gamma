import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }: RouteProps): JSX.Element {
    const someLoginValidation = () => true;

    return (
        <Route
            {...rest}
            render={({ location }) => (someLoginValidation() ? children : <Redirect to="/login" />)}
        />
    );
}
