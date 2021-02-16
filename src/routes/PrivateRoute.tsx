import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const PrivateRoute: React.FunctionComponent = ({ children, ...rest }: RouteProps) => {
    const someLoginValidation = () => true;

    return (
        <Route
            {...rest}
            render={() => (someLoginValidation() ? children : <Redirect to="/login" />)}
        />
    );
};

export default PrivateRoute;
