import { createBrowserRouter } from "react-router";
import App from "../App";
import Navber from "../Components/Navber";
import Homelayout from "../Components/HomeLayout/Homelayout";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import MyProfile from "../Components/Pages/MyProfile";
import ErrorPage from "../Components/Pages/ErrorPage";
import PrivetRout from "./PrivetRout";
import SliderBanner from "../Components/Pages/SliderBanner";
import Banner from "../Components/Banner";
import ToysDetails from "../Components/Pages/ToysDetails";
import TopRatedToys from "../Components/TopRatedPage";
import TopRatedPage from "../Components/TopRatedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,

    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/ToysData.json"),
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
        element: (
          <PrivetRout>
            <MyProfile></MyProfile>
          </PrivetRout>
        ),
      },
      {
        path: "/topratedpage",
        element: (
          <PrivetRout>
            <TopRatedPage></TopRatedPage>
          </PrivetRout>
        ),
        loader: () => fetch("/ToysData.json"),
      },
    ],
  },

  {
    path: "/navber",
    element: <Navber></Navber>,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/slider",
    Component: SliderBanner,
  },
  {
    path: "/banner",
    Component: Banner,
  },

  {
    path: "/toysdetails/:toyId",
    element: (
      <PrivetRout>
        <ToysDetails></ToysDetails>
      </PrivetRout>
    ),
    loader: () => fetch("/ToysData.json"),
  },
  {
    path: "/topratedpage",
    element: (
      <PrivetRout>
        <TopRatedPage></TopRatedPage>
      </PrivetRout>
    ),
    loader: () => fetch("/ToysData.json"),
  },
]);

export default router;
