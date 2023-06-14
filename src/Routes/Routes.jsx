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
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import MyEnrolledClass from "../pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import InstructorHome from "../pages/Dashboard/InstructorHome/InstructorHome";



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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'adminhome',
          element: <AdminHome></AdminHome>

        },
        {
          path:'userhome',
          element:<UserHome></UserHome>
        },
        {
          path:'instructorhome',
          element: <InstructorHome></InstructorHome>

        },
        {
        path: 'mycart',
        element:<MyCart></MyCart>

        },
        {
          path: 'myenrolledclass',
        element:<MyEnrolledClass></MyEnrolledClass>

        },
        {
          path: 'paymenthistory',
        element:<PaymentHistory></PaymentHistory>

        },
        {
          path:'payment',
          element: <Payment></Payment>

        },
        {
          path: 'allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'addclass',
          element: <AddClass></AddClass>
        },
        {
          path:'manageclasses',
          element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        }
        
      ]

    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ]);

  export default router;