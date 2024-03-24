import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import Donation from "../pages/Donation";
import Statistics from "../pages/Statistics";

 
 export  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:"/donation",
          element:<Donation />
        },
        {
          path:"/statistics",
          element:<Statistics />
        }
      ]
    },

  ]);