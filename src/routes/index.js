import { WelcomePage, DemoPage, NotFoundPage } from '../views/pages';

const routes = [
  {
    path: '/',
    name: 'home',
    component: WelcomePage,
    exact: true,
  },
  {
    path: '/demo',
    name: 'demo',
    component: DemoPage,
    exact: true,
  },
  {
    path: '*',
    name: '404',
    component: NotFoundPage,
  },
];

export default routes;
