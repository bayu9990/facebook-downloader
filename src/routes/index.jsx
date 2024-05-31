import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      }
    ],
  },
]);
