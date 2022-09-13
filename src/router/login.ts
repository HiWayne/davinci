import { lazy } from 'react';
import type { RouteType } from './index';

const LazyLogin = lazy(() => import('pages/Login'));

const editorRoutes: RouteType[] = [
  {
    path: '/login',
    element: LazyLogin,
  },
];

export default editorRoutes;
