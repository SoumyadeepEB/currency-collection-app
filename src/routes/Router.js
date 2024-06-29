import { lazy } from "react";
import { Navigate } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";

/*****Loaded Pages****/
import Login from "../views/Login";

/****Layouts*****/
const DashboardLayout = lazy(() => import("../layouts/dashboard/DashboardLayout.js"));
const AuthLayout = lazy(() => import("../layouts/auth/AuthLayout.js"));

/*****Lazy Loaded Pages****/
const DashboardHome = lazy(() => import("../views/DashboardHome.js"));
const PageNotFound = lazy(() => import("../views/PageNotFound.js"));

/*****Routes******/
const routes = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "/login", exact: true, element: <Login /> }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <Navigate to="/dashboard/home" /> },
      { path: "home", element: <PrivateRoute children={<DashboardHome />} /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />
  }
];

export default routes;
