import React from "react";
import { Redirect, Route } from "react-router-dom";
import { PATHS } from "../paths";
import IRoute from "../types";

function RouteItem({ component: Component, ...rest }: IRoute): JSX.Element {
    const someLoginValidation = () => true;

    return (
        <Route
            {...rest}
            render={() =>
                Component && someLoginValidation() ? (
                    <Component {...rest} />
                ) : (
                    <Redirect to={PATHS.Login} />
                )
            }
        />
    );
}

export default RouteItem;
