import React, { ReactNode, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from '../routes/routes';

const Layout = () => {
  const getRoutes = (routes: any): ReactNode => {
    return routes.map((route: any) => {
      return (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact && route.exact}
          key={route.name}
        />
      );
    });
  };

  return (
    <>
      <Suspense fallback="cargando pa">
        Common components
                <Switch>{getRoutes(Routes)}</Switch>
      </Suspense>
    </>
  );
};

export default Layout;
