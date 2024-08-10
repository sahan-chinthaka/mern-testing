// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Cart from './components/Pages/Cart';
import Orders from './components/Pages/Orders';
import ProductDetails from './components/Pages/ProductDetails';
import Home from './components/Pages/Home'
import LoginSignup from "./components/LoginSignup/Loginsignup"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
   return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
    
   
    </div>
  )
}

export default App
