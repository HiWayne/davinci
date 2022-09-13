import { FC, ReactNode, Suspense } from 'react';
import {
  BrowserRouter,
  Routes as BrowserRoutes,
  Route,
} from 'react-router-dom';
import RouterGuard from './RouterGuard';
import { Loading } from '@/components';
// 路由
import homeRoutes from './home';
import editorRoutes from './editor';
import loginRoutes from './login';

export interface RouteType {
  path: string;
  element: FC;
  index?: boolean;
  children?: RouteType[];
  permissions?: string[];
}

export const routes: RouteType[] = [
  ...homeRoutes,
  ...editorRoutes,
  ...loginRoutes,
];

const renderNestRoute = (_routes: RouteType[]) => {
  return _routes.map((route) => {
    const { path, children, index, element, permissions } = route;
    return index ? (
      <Route
        key="/"
        index
        element={
          <RouterGuard
            from={path}
            permissions={permissions}
            element={element}
          />
        }
      >
        {Array.isArray(children) ? renderNestRoute(children) : null}
      </Route>
    ) : (
      <Route
        path={path}
        key={path}
        element={
          <RouterGuard
            from={path}
            permissions={permissions}
            element={element}
          />
        }
      >
        {Array.isArray(children) ? renderNestRoute(children) : null}
      </Route>
    );
  });
};

export const AppRoutes: FC<{ routes: RouteType[] }> = ({ routes: _routes }) => {
  return <BrowserRoutes>{renderNestRoute(_routes)}</BrowserRoutes>;
};

const AppRouter: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
