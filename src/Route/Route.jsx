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
                element: <AddProducts></AddProducts>
            },
            {
                path: '/Brands',
                element: <Brands></Brands>
            },
            {
                path: '/Contact',
                element: <Contact></Contact>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
        ]
    }
]);

export default router;