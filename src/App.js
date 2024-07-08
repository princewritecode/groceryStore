import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contactus";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/Restaurantmenu";
const Applayout = () =>
{
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};
const appRouter = createBrowserRouter([
    {
        path: '/'
        , element: <Applayout></Applayout>,
        children: [
            {
                path: '/',
                element: <Body></Body>,
            }
            ,
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu></RestaurantMenu>,
            }
        ],
        errorElement: <Error></Error>
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter}></RouterProvider>
);


