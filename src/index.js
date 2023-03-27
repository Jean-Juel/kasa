import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import {Outlet} from "react-router-dom"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Root from './Routes/Root'
import Propos from './Routes/Propos'
import Error from './Routes/Error'
import Header from '../src/layouts/Header'
import Footer from '../src/layouts/Footer'

function Layout() {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error />,
        children:[
            {
                path: '/',
                element: <Root />
            },
            {
                path: '/propos',
                element: <Propos />
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}>


        </RouterProvider>
    </React.StrictMode>
);
