import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import Footer from './components/Footer'
import './index.scss'



ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <div className="container my-3" id="main">
        <App />
        </div>
        <Footer />
    </>

)
