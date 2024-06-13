import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Homepage from "../Pages/home/Homepage";
import Menu from "../Pages/shop/Menu";
import Signup from "../Components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
