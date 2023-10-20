import {
    createBrowserRouter,
  } from "react-router-dom";

import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Login/Register/Register";
import About from "../Component/About/About";
import AddProducts from "../Component/AddProducts/AddProducts";
import Brands from "../Component/Brands/Brands";
import Contact from "../Component/Contact/Contact";
import MyCart from "../Component/MyCart/MyCart";

import UpdateProduct from "../Component/UpdateProduct/UpdateProduct";
import Products from "../ProductBrands/Products";
import ViewDetails from "../ViewDetails/ViewDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader : () => fetch('/Brands.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/addproducts',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
                
                
            },
            {
                path: '/Brands',
                element: <Brands></Brands>,
                loader : () => fetch('/Brands.json')
            },
            {
                path: '/Contact',
                element: <Contact></Contact>
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
                
            },
            {
                path: '/Products',
                element:<Products></Products>,
                loader: () => fetch('http://localhost:5000/addProducts')
            },
            {
                path:"/updateProduct/:id",
                element:  <PrivateRoute> <UpdateProduct></UpdateProduct></PrivateRoute>  ,
                loader: ({params}) => fetch(`http://localhost:5000/addProducts/${params.id}`)
              },
              {
                path: '/ViewDetails/:id',
                element:  <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute> ,
                loader: ({params}) => fetch(`http://localhost:5000/Products/${params.id}`)
              } ,
        
        ]
    }
]);

export default router;