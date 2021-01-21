import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Splash from "../pages/Splash";
import PrivateRoute from "./PrivateRoute";

const Login = React.lazy(() => import("../pages/Login"));

const AppRouter = () => {
    return (
        <>
            <Suspense fallback={Splash}>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} />

                        <PrivateRoute path="/">
                            <Layout />
                        </PrivateRoute>
                    </Switch>
                </Router>
            </Suspense>
        </>
    );
};

export default AppRouter;
