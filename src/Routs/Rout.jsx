import { createBrowserRouter } from "react-router";
import App from "../App";
import Navber from "../Components/Navber";
import Homelayout from "../Components/HomeLayout/Homelayout";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import MyProfile from "../Components/Pages/MyProfile";
import PrivetRout from "./PrivetRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/myprofile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },

  {
    path: "/navber",
    element: <Navber></Navber>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
