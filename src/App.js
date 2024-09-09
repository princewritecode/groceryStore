import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import SignUpPage from "./components/Login";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contactus";
import { onAuthStateChanged } from "firebase/auth";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/Restaurantmenu";
import UserContext from "../utils/userContext";
import { Provider, useDispatch } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";
import Browse from "./components/Browse";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
const Applayout = () =>
{
    const [userName, setUserName] = useState();

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


