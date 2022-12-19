import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './components/App'
import Footer from './components/Footer'
import './index.scss'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <div className="container my-3" id="main">
        <RouterProvider router={router} />
        </div>
        <Footer />
    </>

)
