import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const DashboardLayout = lazy(() => import("../layouts/dashboard/DashboardLayout.js"));
const AuthLayout = lazy(() => import("../layouts/auth/AuthLayout.js"));

/***** Pages ****/
const Login = lazy(() => import("../views/Login.js"));
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
      { path: "home", element: <DashboardHome /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />
  }
];

export default routes;
