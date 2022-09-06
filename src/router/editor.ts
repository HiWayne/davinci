import { lazy } from 'react';
import type { RouteType } from './index';

const LazyEditor = lazy(() => import('pages/Editor'));

const editorRoutes: RouteType[] = [
  {
    path: '/editor',
    element: LazyEditor,
  },
];

export default editorRoutes;
