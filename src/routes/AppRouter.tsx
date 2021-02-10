import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Splash from "../pages/Splash";
import PrivateRoute from "./PrivateRoute";

const Login = React.lazy(() => import("../pages/Login"));
const index = React.lazy(() => import("../pages/HomeScreen"));

const AppRouter = () => {
    return (
        <>
            <Suspense fallback={Splash}>
                <Router>
                    <Switch>
                        <Route component={Login} path="/login" />
                        <Route path="/homescreen" component={index} />
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
