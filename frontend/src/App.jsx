import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import ProductsPage from './pages/products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
}

export default App;
