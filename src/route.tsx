import { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "./components/atoms/MainLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "catalogue",
        lazy: {
          Component: async () =>
            (await import("./pages/Catalogue")).BookListPage,
        },
      },
      {
        path: "books/rented",
        lazy: {
          Component: async () => (await import("./pages/Rent")).RentPage,
        },
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        lazy: {
          Component: async () => (await import("./pages/Login")).LoginPage,
        },
      },
      {
        path: "register",
        lazy: {
          Component: async () =>
            (await import("./pages/Register")).RegisterPage,
        },
      },
    ],
  },
];

export const getRoutes = () => {
  return createBrowserRouter(routes);
};
