import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CategoryProducts from "../../Pages/CategoryProducts/CategoryProducts/CategoryProducts";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/DashBoard/AllSellers/AllSellers";
import MyBuyers from "../../Pages/DashBoard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import ReportedProducts from "../../Pages/DashBoard/ReportedProducts/ReportedProducts";
import UserProfile from "../../Pages/DashBoard/UserProfile/UserProfile";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/category/:id',
        loader: ({ params }) => fetch(`https://used-products-resale-server.vercel.app/category/${params.id}`),
        element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <UserProfile></UserProfile>
      },
      {
        path: '/dashboard/myOrders',
        element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
      },
      {
        path: '/dashboard/myProducts',
        element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
      },
      {
        path: '/dashboard/addProducts',
        element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
      },
      {
        path: '/dashboard/myBuyer',
        element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
      },
      {
        path: '/dashboard/allSeller',
        element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
      },
      {
        path: '/dashboard/allBuyer',
        element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
      },
      {
        path: '/dashboard/reportedProducts',
        element: <AdminRoute><ReportedProducts></ReportedProducts></AdminRoute>
      },
      {
        path: '/dashboard/payment/:id',
        loader: ({ params }) => fetch(`https://used-products-resale-server.vercel.app/order/${params.id}`),
        element: <Payment></Payment>
      },
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);