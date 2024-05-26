import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Homepage from "../Pages/home/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
