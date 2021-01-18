import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import PrivateRoute from "./PrivateRoute";

const Login = React.lazy(() => import("../pages/Login"));

const AppRouter = () => {
    return (
        <>
            <Suspense fallback="Cargando pa">
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
