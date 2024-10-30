import { Dashboard, Inputs, Portfolio, Profile } from "@/pages";
import { RouteObject } from "react-router-dom";

const mainRoute: RouteObject[] = [
  {
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "inputs",
        element: <Inputs />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
];

export default mainRoute;
