import React, { Suspense } from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import Splash from "../../pages/Splash";
import RouteItem from "../RouteItem";
import ROUTES from "../routes";

const AppRouter = (): JSX.Element => {
    return (
        <>
            <Suspense fallback={Splash}>
                <Router>
                    <Switch>
                        {ROUTES.map((route) => (
                            <RouteItem
                                component={route.component}
                                exact={route.exact && route.exact}
                                key={route.name}
                                path={route.path}
                            />
                        ))}
                    </Switch>
                </Router>
            </Suspense>
        </>
    );
};

export default AppRouter;
