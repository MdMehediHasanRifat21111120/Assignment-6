import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/rootlayout/RootLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

export const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path : "/register",
        element : <Register/>
      },
      {
        path:"/dashboard",
        element:<PrivateRoute>
          <Dashboard/>
        </PrivateRoute>
      }
    ],
  },
]);
