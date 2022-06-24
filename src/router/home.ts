import { RouteType } from "./index";
import Layout from "pages/Layout";
import Home from "pages/Home";

const homeRoutes: RouteType[] = [
  {
    path: "/",
    element: Layout,
    children: [{ index: true, element: Home }],
  },
];

export default homeRoutes;
