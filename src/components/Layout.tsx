import React, { ReactNode, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Switch, Route } from "react-router-dom";
import Splash from "../pages/Splash";
import Routes from "../routes/routes";

const Layout: React.FC = () => {
    const { t } = useTranslation();

    // eslint-disable-next-line
    const getRoutes = (routes: any): ReactNode => {
        // eslint-disable-next-line
        return routes.map((route: any) => {
            return (
                <Route
                    component={route.component}
                    exact={route.exact && route.exact}
                    key={route.name}
                    path={route.path}
                />
            );
        });
    };

    return (
        <>
            {t("hola")}
            <br />
            {t("appName")}

            <br />

            <Suspense fallback={Splash}>
                <Switch>{getRoutes(Routes)}</Switch>
            </Suspense>
        </>
    );
};

export default Layout;
