import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    Routes, Route
  } from "react-router-dom";
import App from './components/App'
import Footer from './components/Footer'
import './index.scss'



ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <div className="container my-3" id="main">
        <Routes>
          <Route path='/' element={<App />}/>
        </Routes>
        </div>
        <Footer />
    </>

)
