import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import SignUpPage from "./components/Login";
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
import Browse from "./components/Browse";
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
        path: '/', element: <SignUpPage></SignUpPage>
    },
    {
        path: '/browse'
        , element: <Applayout></Applayout>,
        children: [
            {
                path: '/browse',
                element: <Body></Body>,
            }
            ,
            {
                path: '/browse/about',
                element: <About></About>,
            },
            {
                path: '/browse/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/browse/restaurants/:resId',
                element: <RestaurantMenu></RestaurantMenu>,
            },
            {
                path: '/browse/cart',
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


