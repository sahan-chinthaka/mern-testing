// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

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
      </Routes>
    </BrowserRouter>
    
   
    </div>
  )
}

export default App
