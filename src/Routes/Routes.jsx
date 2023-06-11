import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";

import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import NotFound from "../pages/NotFound/NotFound";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import Dashboard from "../Layout/Dashboard";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'instructors',
          element: <Instructors></Instructors>
        },
        {
          path:'classes',
          element: <Classes></Classes>
        },
        
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
      ]
    },
    {
      path:'dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
        path: 'mycart',
        element:<MyCart></MyCart>

        }
        
      ]

    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ]);

  export default router;