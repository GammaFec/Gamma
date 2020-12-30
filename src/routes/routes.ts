import React from 'react'

const Home = React.lazy(() => import('../pages/Home'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const ROUTES = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    exact: true,
  },
  {
    component: NotFound,
    name: 'NotFound',
  },
];

export default ROUTES;
