import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import mainRoute from "./main-route";
import MainLayout from "@/layout/main-layout";

const Routes = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [...mainRoute],
    },
  ];
  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
