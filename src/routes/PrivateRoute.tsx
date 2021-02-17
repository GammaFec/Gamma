import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const PrivateRoute: React.FC = ({ children, ...rest }: RouteProps) => {
    // eslint-disable-next-line
    const someLoginValidation = () => true;

    return (
        <Route
            {...rest}
            // eslint-disable-next-line
            render={() => (someLoginValidation() ? children : <Redirect to="/login" />)}
        />
    );
};

export default PrivateRoute;
