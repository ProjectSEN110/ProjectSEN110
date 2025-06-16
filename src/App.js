import React from 'react';
import { BrowserRouter as router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Welcome from './pages/welcome';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/home" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
