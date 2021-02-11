import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Splash from "../pages/Splash";
import LoginUser from "../components/login/LoginUser";
import PrivateRoute from "./PrivateRoute";

const Login = React.lazy(() => import("../pages/Login"));
const index = React.lazy(() => import("../pages/HomeScreen"));

const AppRouter = (): JSX.Element => {
    return (
        <>
            <Suspense fallback={Splash}>
                <Router>
                    <Switch>
                        <Route component={Login} path="/login" />
                        <Route component={index} path="/homescreen" />
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
