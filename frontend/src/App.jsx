import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import ProductsPage from './pages/products';
import ContactUs from './pages/contact';
import AboutUs from './pages/about';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
