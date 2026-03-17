import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import '../styles/landingpage.css';
import powerbathLogo from '../assets/images/powerbathlogo.png';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <a href="#home" className="active">Home</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="header-center">
        <div className="logo-container">
          <img src={powerbathLogo} alt="Powerbath Logo" className="logo" />
        </div>
      </div>
      <div className="header-right">
        <button className="icon-button"><Search size={22} /></button>
        <button className="icon-button"><ShoppingCart size={22} /></button>
        <button className="login-button">LOGIN</button>
      </div>
    </header>
  );
}
