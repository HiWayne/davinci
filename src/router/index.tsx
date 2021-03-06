import { FC, ReactNode } from "react";
import {
  BrowserRouter,
  Routes as BrowserRoutes,
  Route,
} from "react-router-dom";
import homeRoutes from "./home";
import editorRoutes from "./editor";

export interface RouteType {
  path?: string;
  element: FC;
  index?: boolean;
  children?: RouteType[];
}

export const routes: RouteType[] = [...homeRoutes, ...editorRoutes];

const renderNestRoute = (routes: RouteType[]) => {
  return routes.map((route) => {
    const { path, children, index, element: Element } = route;
    return index ? (
      <Route key={"/"} index element={<Element />}>
        {Array.isArray(children) ? renderNestRoute(children) : null}
      </Route>
    ) : (
      <Route path={path} key={path} element={<Element />}>
        {Array.isArray(children) ? renderNestRoute(children) : null}
      </Route>
    );
  });
};

export const AppRoutes: FC<{ routes: RouteType[] }> = ({ routes }) => {
  return <BrowserRoutes>{renderNestRoute(routes)}</BrowserRoutes>;
};

const AppRouter: FC<{ children: ReactNode }> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppRouter;
