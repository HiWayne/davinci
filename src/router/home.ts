import { lazy } from 'react';
import type { RouteType } from './index';

const lazyHome = lazy(() => import('pages/Home'));

const homeRoutes: RouteType[] = [
  {
    path: '/',
    element: lazyHome,
  },
];

export default homeRoutes;
