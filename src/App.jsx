import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import Aboutus from './pages/Aboutus'
import Product from './components/Product';

function App() {
 
  return (
    
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/pricing" element={<Pricing/>} />
        </Routes>
       </Router>
    
  )
}

export default App
