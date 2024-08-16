import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contactus";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/Restaurantmenu";
import UserContext from "../utils/userContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";
const Applayout = () =>
{
    const [userName, setUserName] = useState();

    useEffect(() =>
    {
        const data = {
            name: 'prince'
        };
        setUserName(data.name);
    }, []);

    return (
        <>
            <Provider store={appStore}>
                <UserContext.Provider value={{ loggedInUser: userName }}>
                    <Header></Header>
                    <Outlet></Outlet>
                </UserContext.Provider >
            </Provider>
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
            },
            {
                path: '/cart',
                element: <Cart></Cart>,
            }
        ],
        errorElement: <Error></Error>
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter}></RouterProvider>
);


