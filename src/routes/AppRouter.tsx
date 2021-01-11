import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";

const Login = React.lazy(() => import("../pages/Login"));

const AppRouter = () => {
    return (
        <>
            <Suspense fallback={Home}>
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
