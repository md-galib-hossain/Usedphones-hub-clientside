import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AdminDashboard from "../../Pages/AdminDashboard/AdminDashboard";
import Blog from "../../Pages/Blog/Blog";
import BuyerDashboard from "../../Pages/BuyerDashboard/BuyerDashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SellerDashboard from "../../Pages/SellerDashboard/SellerDashboard";
import Signup from "../../Pages/Signup/Signup";
import SingleCategory from "../../Pages/SingleCategory/SingleCategory";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(" http://localhost:5000/category"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/buyerdashboard",
        element: <BuyerDashboard></BuyerDashboard>,
      },
      {
        path: "/sellerdashboard",
        element: <SellerDashboard></SellerDashboard>,
      },
      {
        path: "/admindashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <SingleCategory></SingleCategory>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(` http://localhost:5000/category/${params.id}`),
      },
    ],
  },
]);
