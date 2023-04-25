import React, {useEffect, useState} from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import {Outlet, useLocation, useParams, useRouteError} from "react-router-dom"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Root from './Routes/Root'
import Propos from './Routes/Propos'
import Error from './Routes/Error'
import Header from '../src/layouts/Header'
import Footer from '../src/layouts/Footer'
import {cardData} from "./utils/api";
import Fiche from "./Routes/Fiche";

function Layout() {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    );
}
function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return <Error />;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorBoundary />,
        children:[
            {
                path: '/',
                element: <Root />,
                errorElement: <ErrorBoundary />,
            },
            {
                path: '/propos',
                element: <Propos />,
                errorElement: <ErrorBoundary />,
            },
            {
                path: `/fiche/:${cardData.id}`,
                element: <Fiche />,
                errorElement: <ErrorBoundary />
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
