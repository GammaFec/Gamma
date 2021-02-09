import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Splash from "../pages/Splash";
import LoginUser from "../components/login/LoginUser";
import PrivateRoute from "./PrivateRoute";
import index from "../pages/HomeScreen";

const Login = React.lazy(() => import("../pages/Login"));

const AppRouter = (): JSX.Element => {
    return (
        <>
            <Suspense fallback={Splash}>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} />
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
